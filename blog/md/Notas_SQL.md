---
title: Notas_SQL
tags: [SQL, sistemas]
date: 2026-03-02
image: "../assets/Ciberattack.png"
---

## DDL (Lenguaje de definición de datos)

### Restricciones de integridad

Garantizan que los cambios hechos a la BD no ocasionen inconsistencias en los datos.

1. **Restricciones de dominio (Tipo de datos):** Conjunto de valores y de operaciones permitidas sobre ellos.
2. **Nulos:** Un atributo puede o no admitir nulos. En SQL se especifica mediante la cláusula **NOT NULL.**
3. **Integridad referencial:** Claves foráneas. En SQL se especifican mediante las cláusulas **REFERENCES** y **FOREIGN KEY.**
4. **Clave Primaria:** Garantiza la unicidad y obligatoriedad del o de los atributos que conforman la CP. En SQL se especifica mediante la cláusula **PRIMARY KEY.**
5. **Clave Alternativa:** Garantiza la unicidad de los atributos declarados como tal. Se especifica mediante la cláusula **UNIQUE.** Puede aceptar o no NULLs.
6. **Las reglas de tipo CHECK(condición):** Condiciones de verificación para los valores de uno o varios atributos

#### Modificación y eliminación de la tabla
Se puede modificar el esquema de una tabla con la instrucción ALTER TABLE.
```sql
ALTER TABLE revision ADD fecharev DATE;
```
Para destruir una tabla (Se elimina el esquema y los datos) se usa DROP.
```
DROP TABLE revision;
```
Arcos
Supertipos y subtipos
## DML (Lenguaje de manipulación de datos)
### Consultas 
- **INSERT** 
- **DELETE**
- **UPDATE**
- **SELECT**
- **FROM**
- **WHERE**
- **GROUP BY**
- **HAVING**
- **ORDER BY**
- **AS**
- **DISTINCT**
- **LIKE**


### Joins
Hay 3 formas de hacer un Join
#### Forma “clásica”:
```sql
SELECT *
FROM empleado, departamento
WHERE empleado.depto = departamento.depto;
```
#### INNER JOIN:
``` sql
SELECT *
FROM empleado INNER JOIN departamento ON
empleado.depto = departamento.depto;
```
#### NATURAL JOIN: 
```sql
SELECT * 
FROM empleado NATURAL JOIN departamento;
```
## DCL (Lenguaje de control de datos)
Para permisos a usuarios 

## Algebra Relacional

**Tabla Empleado:**

| id_empleado | nombre | id_depto | salario |
|-------------|--------|----------|---------|
| 1           | Ana    | 101      | 5000    |
| 2           | Juan   | 102      | 4000    |
| 3           | María  | 103      | 6000    |
| 4           | Pedro  | 101      | 4500    |

**Tabla Departamento:**

| id_depto | nombre_depto | presupuesto |
|----------|--------------|-------------|
| 101      | Ventas       | 6000        |
| 102      | Finanzas     | 4000        |
| 103      | IT           | 7000        |
| 104      | RRHH         | 5000        |

#### Unión ($R_1 \cup R_2$)
Retorna una relación que contiene todas la tuplas de R1 y de R2 (Eliminando las tuplas repetidas). **Las relaciones deben tener cabecera idéntica para que sean compatibles para la unión**

#### Intersección ($R_1 \cap R_2$)
Retorna una relación que contiene todas las tuplas que aparecen tanto en R1 como en R2. **Las relaciones deben tener cabecera idéntica para que sean compatibles para la unión. Es conmutativa y asociativa.**

#### R1 $-$ R2 (Diferencia)
En este lo que vemos son todos los elementos que estan en R1 pero no se encuentan en R2.

#### R2 $\div$ R2 
En este caso vemos todos las tuplas  de R1 que estan relacionados con todas las tuplas de R2. Si hago la divicion R2(a,b) $\div$ R2(a,c) usa el atributo a como referencia u mira si los otros atributos de R1 estan relacionados exclisivamente con todos los valores de este atributo.
#### Natural Join ( $\Join$ )
Este caso lo vamos a desglosar por pasos
1. Lo primero que hace es que identifica los mismas columnas en ambas relaciones 
2. Compara los valores de ambas columnas 
3. Devuelve solo las finalas que conicidan 

| id_empleado | nombre | id_depto | salario | nombre_depto | presupuesto |
|-------------|--------|----------|---------|--------------|-------------|
| 1           | Ana    | 101      | 5000    | Ventas       | 6000        |
| 2           | Juan   | 102      | 4000    | Finanzas     | 4000        |
| 3           | María  | 103      | 6000    | IT           | 7000        |
| 4           | Pedro  | 101      | 4500    | Ventas       | 6000        |
#### Semi Join ($R_1\ltimes R_2$)
Similar a la reunión natural pero solo se muestran los atributos de la relación de la izquierda 

| id_empleado | nombre | id_depto | salario |
|-------------|--------|----------|---------|
| 1           | Ana    | 101      | 5000    |
| 2           | Juan   | 102      | 4000    |
| 3           | María  | 103      | 6000    |
| 4           | Pedro  | 101      | 4500    |

#### Theta Join ($R_1 \theta_{cond}R_2$)
Es similar con el natural join solo que en este se premite una condicion  (por ejemplo, $=$, $>$, $<$, $>=$, $<=$, $!=$).

| id_empleado | nombre | id_depto | salario | nombre_depto | presupuesto |
|-------------|--------|----------|---------|--------------|-------------|
| 1           | Ana    | 101      | 5000    | Ventas       | 6000        |
| 2           | Juan   | 102      | 4000    | Finanzas     | 4000        |
| 4           | Pedro  | 101      | 4500    | Ventas       | 6000        | 
 
#### Agrupamiento (Ģ)

Aplica una función del grupo sobre un atributo y la agrega a un resultado con un nombre.

- SUM()
- AVG()
- MAX()
- MIN()
- COUNT()

## Calculo relacional

La forma general de una consulta es:

$\{t \mid P(t)\}$

Esto significa: “el conjunto de tuplas  $t$ , tal que el predicado  $P$  es verdadero para  $t$ ”. Aquí, $t$  se denomina variable de tupla, que actúa como un marcador para las tuplas que cumplen con las condiciones establecidas por el predicado  $P$ .

### Elementos del predicado
Tenemos vario elementos

- $t \in R$: La tupla t pertenece a la relación R.
- $t[a]$: : Representa el valor del atributo a en la tupla t.
- **Condiciones compuestas:** Combinaciones de los elementos del predicado, mediante los operadores lógicos (And, Or, Not, etc…).

#### Cuantificador Existencial($\exists$)

$\exists t \in R(Q(t))$

El resultado se considera verdadero si existe al menos una tupla $t$ en la relacion $R$ que satisface el predicado $Q$

#### Cuantificador Universal ($\forall$)
$\forall r \in R (Q(t))$
Su resultado es verdadero si todas las tuplas $t$ de $R$ satisfacen el predicado $Q$

Esta tambien se puede expresar en terminos del cuantificador existencial usando una doble negación.

 $\forall r \in R(Q(t)) = \neg\exists t \in R(\neg Q(t))$

lo que signfica para todo  $t$  en  $R$ ,  $Q(t)$  es verdadero” es equivalente a “no existe un  $t$  en  R  tal que  $Q(t)$  sea falso

#### Ejemplo

1. Imprimir la información de todos los estudiantes
${t | t \in EST}$

2. Igual que a) pero solo aquellos estudiantes mayores de 25 años.
$t | t \in EST \land t[edad] > 25$

3. Imprimir solo las cédulas de los estudiantes mayores de 25 años.
$t  s \in EST (t[ced] = s[ced] \land s[edad] > 25)$

4. Imprimir solo las cédulas de los estudiantes mayores de 25 años
$t |s \in EST (t[ced] = s[ced] \land t[nom] = s[nom])$

## Fnnciones de ventana
Lo que hacemos aca es hallar el valor de algo segun la suma de de lo que le inidcamos y partiendo 

permite obtener un determinado valor (un valor calculado a partir de un conjunto de filas) para la fila actual (the current row).
``` sql
SELECT code, country,
SUM(value) OVER(PARTITION BY country) AS totval
FROM sale;
```
![Captura de pantalla 2024-09-24 a la(s) 10.03.00 p. m.](https://hackmd.io/_uploads/rkgjOTe-A0.png)
![Captura de pantalla 2024-09-24 a la(s) 10.07.13 p. m.](https://hackmd.io/_uploads/rJXO0gWRA.png)

aca vemos una relacion llamada 'sale' donde hacemos la siguiente funcion de ventana ,  es sumar los 'values' segun las particiones de country , si tenemos dos ciudades iguales sumalos el valode cada una y luego sacamos es nueva columna con las sumas ya particionadas. Tambien se puedecon COUNT lo que hace es contar en este caso las ciudades repetida y saca el nuevo valor

Una pregunta frecuente es ¿cómo enumerar las filas de una consulta? Para ello SQL ofrece varias
opciones. Veamos las funciones de enumeración: ROW_NUMBER, RANK y DENSE_RANK.

![Captura de pantalla 2024-09-24 a la(s) 10.08.56 p. m.](https://hackmd.io/_uploads/Hkc0ReZC0.png)

Aca vemos se  enumeran  segun las ciudades
Si dos filas tienen el mismo country, su orden es arbitrario, a menos que se agregue un criterio de ordenamiento adicional, por ejemplo.

![Captura de pantalla 2024-09-24 a la(s) 10.11.17 p. m.](https://hackmd.io/_uploads/SkuvkbbAC.png)

| fila     | columna      | valor       |
|----------|--------------|-------------|
| 1        | 1            | 6000        |
| 1        | 2            | 4000        |
| 1        | 3            | 7000        |
| 2        | 1            | 5000        |
| 2        | 2            | 5000        |
| 2        | 3            | 5000        |
| 3        | 1            | 5000        |
| 3        | 2            | 5000        |
| 3        | 3             | 5000        |




habia una consukta en sql     que era SELECT SUM(valor) AS toltal (partition by fila,colunma and orden by fila, columna) AND row_number (por fila y columna) and orden by fila, columna.







