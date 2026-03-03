---
title: Fortinet
tags: [Ciber,sistemas,UN]
date: 2026-03-02
image: "../assets/Ciberattack.png"
---

# Modulo 2 - Actores de amenaza

**Que es?**
Son peronas que intentar robar, sarotar o impedir que utilices sistemas informaticos o acceda a informacion que esta autorizado a utilizar etc.

**Agrupacions**
- personalidad
- motivaciones
- Método de ataque.

## Tipos de actores maliciosos

*explorador,hacktivista,ciberterrorista, cibercriminal, ciberguerrero.*

### Explorador

es el menos nefasto, la notoriedad es el mayor motivador en este grupo.El lo hace mas  por curiosidad, ya que quiere saber que tipo de deebilidades y vulnerabilidades existen en las reds informaticas. uno de lo metodos mas usados es la suplantacion de identidad.
![Captura de pantalla 2025-11-01 a la(s) 4.53.04 p.m.](https://hackmd.io/_uploads/Hk2BZ-4kWl.png)

### Hacktivistas

Estos estan motivados porla ideologia o animados por. fuerza emotiva. el idelaismo los ayuda a actuar colectivamente hacia el enemigo en común. De las estrategias comunes tenemos (botnet) y hacen DDos.

### Ciberterrorista
En este tambien es impuldada por una ideologia pero su ataque es mas violento hacia una sociedad ya que su ataque es mas masivo pues se dirigen a infrastucturas en linea (centrales nucleares, redes electricas etc). pero su metodo favorito es la suplantacion de idetidad dirigida.

### Cibercriminal.
La motivaicon de estos es mas egocentrista pues quieren dinero por medio de varios metodos como(robo deidentidad, suplantacion de indentidad, malware o ransomwere).
### Ciberguerrero
Son los menos interesados en ellos mismos pero son mas peligrosos porque tienden a su disposicion los recursos de una nacion y depende el estado por el que luchen si son buenas o malos, pueden hacer espionaje, la estorcion o el uso de ciberarmas para dañar. fcorrigen las vulnerabilidad de zero days.

- **White hat:** Etico
- **Black hat:** Malicioso
- **Grey hat:** No es malicioso pero no siempre es etico.
- **Blue hat:** Contratación por un tercero.

**Que es una amenaza a al ciberseguridad?**
![Captura de pantalla 2025-11-01 a la(s) 5.10.46 p.m.](https://hackmd.io/_uploads/SJ7OBW4kWe.png)

Tres componentes que lo componen:
1. Vulnerabilidad
2. Mecanismo
3. Ruta

Ejemplos: 

![Captura de pantalla 2025-11-01 a la(s) 5.12.18 p.m.](https://hackmd.io/_uploads/ryAaB-4JZx.png)

![Captura de pantalla 2025-11-01 a la(s) 5.13.15 p.m.](https://hackmd.io/_uploads/HkvZL-41bl.png)

## categorias principalesde amenaza a la ciberseguridad

- Ingenieria social: manipulaicon psicologica
- malware: diseñana para interrumpir, dañar u obtenrr acceso no autorizado etc
- acceso no autorizado: usar al alguien mas si autorizado, observar y aprovechar cualquier falla para acceder
- falla del diseño del sistema: defecto de seguridad que se puede aprovechar

## Vectores comunes de ataque a la ciberseguridad
- DDos, Dos, suplantacion de identidad, ransomwere etc.

## Panorama de amenazas

la inteligencia frente a amenzas es el conocimiento basado en evidencia, incluyendo el contexto, los mecanismos, los indicadores, las implicaciones cobre una amenaza o peligro exixtente.


**CVSS**

![Captura de pantalla 2025-11-01 a la(s) 5.27.40 p.m.](https://hackmd.io/_uploads/HkdPFWVkWg.png)
**TT&Ck**

![Captura de pantalla 2025-11-01 a la(s) 5.29.01 p.m.](https://hackmd.io/_uploads/SkY3FZVJbl.png)
![Captura de pantalla 2025-11-01 a la(s) 5.28.41 p.m.](https://hackmd.io/_uploads/B1r6KZVy-x.png)

### Procesamiento de inteligencia frente a amenazas

**1. identificar las ciberamenazas mas importantes que se deben detener.**
**2. recopile informacion sonre amenazas de fuentes interbas y externas.**
**3.Procesar la información**
**4. analice la información y y busque los idicadores de intrución.**
**5. Difunda los análisis y cualquier informacion nueva.**

## Marcos de ataque

![Captura de pantalla 2025-11-01 a la(s) 5.36.21 p.m.](https://hackmd.io/_uploads/Byxuob4kbe.png)

esto se desarrollo para ataques mas desarrollados(APT amenaza persistentes avanzadas). son como una caja de herramientas pra que los profesionales de ciberseguridad mejoren la postura de seguridad de una organizacion. algunos ejemplos de marcos de ataque son estas dos:

![Captura de pantalla 2025-11-01 a la(s) 5.37.54 p.m.](https://hackmd.io/_uploads/HJyRoZV1Wx.png)

### Cadena de eliminacion de ciberseguridad(Lockheed Martin)

Este es un modelo de siete pasos que describe las etapas de un ciberataque, desde el reconocimiento inicial y el armamento del metodo de ataque hasta la vulnerabilidad de seguridad final y la exfiltración de datos.

![Captura de pantalla 2025-11-01 a la(s) 5.42.22 p.m.](https://hackmd.io/_uploads/HJqChbEJbl.png)

1. **reconocimiento:** El atacante recopila informacion sobre el objetivo y sus vulnerabilidades esto mediante redes, motores de busqueda etc.  
2. **Armamento:** crea una carga util o una vulnerabilidad de seguridad que se puede entregar al objetivo, esto podria ser una malware, troyano y empaquetralo de forma que sea dificil de detectar.
3. **Entrega:** este se entrega la carga util al objetivo por medio de un correo o el aprovechamiento de una vulnerabilidad en un sitios web para inyectar la carga util en el sistemas
4. **vulnerabilidad de seguridad:** se usa carga util para acceder al objetivo
5. **Instalacion:** en esta el atacante se afianza en el sistemas del objetivo ya sea para permanecer o eliminar sus rastros.
6. **Comando y control:** Aqui el atacante estable un metodo de comunicacion remoto con el sisetmas dañado o infectado
7. **Exfiltracion:** aqui se logra el objetivo que es estraer la informacion.

Nota: tiene ciertas desventajas y es que supone que el ataque es externo.

### MITRE ATT&CK

Este un recurso en constante evolucion que proporciona un lenguaje y enfoque comun para detener y mitigar ataques

Este tiene una matriz que esta organizada en una serie de "tecnicas" que describen tacticas y metodos especificos que utilizan los atacantes para comprometer sistemas. estas tecnicas se agrupan en categorias basadas en el tipo de ataque o actividad que se hac. como "acceso inicial", "ejecución" y " evación de la defensa".

Tacticas, tecnicas y procedimiento (TTP).

## Alertas y avisos de brotes

![Captura de pantalla 2025-11-01 a la(s) 6.00.21 p.m.](https://hackmd.io/_uploads/S1WMZz4kbl.png)

![Captura de pantalla 2025-11-01 a la(s) 6.01.00 p.m.](https://hackmd.io/_uploads/B1_4ZM4kWe.png)
![Captura de pantalla 2025-11-01 a la(s) 6.01.33 p.m.](https://hackmd.io/_uploads/Sk9LbGNy-x.png)

# Modulo 3

## Ingenieria Social
**Que es?**
Es el acto de manipular a la personas para obtner ventajas, por lo general a expensas de los objetivos.

Pueden tener como resultado, la perdidad de infromacion, chantaje, interrupcion etc.

**Ejemplos:** cuando un actor maliciosos convense a su objetivo de hacer ciertas cosas y asi obtener informacion




### Tecnicas de ingenria social
**¿Qué es la ingeniería social?** La ingeniería social es un término que se introdujo, pero dada su importancia, merece la pena volver a tratar. Según una fuente, la ingeniería social sigue siendo una de las principales causas de las violaciones de datos en la red. La ingeniería social se refiere a una amplia gama de ataques que aprovechan las emociones humanas para manipular a un objetivo. El ataque podría incitar al objetivo a la acción o a la falta de acción. Por último, la ingeniería social tiene como objetivo dirigir al objetivo en una dirección prescrita por el orquestador y, por lo general, en detrimento del objetivo. Los ejemplos de objetivos de ingeniería social incluyen la divulgación de información confidencial, la transferencia de dinero y la influencia sobre una persona o personas para que


Dos características importantes de la ingeniería social son:
- Una, el objetivo es lograr un resultado deseable para el orquestador.
- Dos, el método es la manipulación emocional.

Para detectar un ataque de ingeniería social, busque las siguientes señales:

- Una petición emocional que aprovecha el miedo, la curiosidad, la excitación, la ira, la tristeza o la culpa
- Un sentido de urgencia en torno a la solicitud y
- Un intento de establecer confianza con el destinatario

Las dos características importantes de la suplantación de identidad son que aprovecha el correo electrónico como vector de ataque y que se dirige a cualquier persona con una dirección de correo electrónico El ataque es indiscriminado, en cuanto a quién recibe el correo electrónico. La suplantación de identidad es simplemente correo no deseado malicioso que se envía a tantas personas como sea posible con la esperanza de que al menos una se deje engañar. Sin embargo, suplantación de identidad también puede tener un significado de categoría: se puede utilizar para referirse a todos los ataques de ingeniería social electrónica, como suplantación de identidad dirigida, alto perfil, smishing y vishing.
### Ingenieria social utilizando como medio al correo electronico
![Captura de pantalla 2025-11-03 a la(s) 5.38.27 p.m.](https://hackmd.io/_uploads/HJRk1n8kbx.png)

### Ingenieria social utilizando medios distintos al correo electronico
#### Smishing
- vector: texto
- Objetivo cualquier perosna o grupo
 ![Captura de pantalla 2025-11-03 a la(s) 5.41.00 p.m.](https://hackmd.io/_uploads/SkOKJhLkWg.png)
#### Vishing
- Vector: telegono/voz.
- Objetivo: cualquier persona o grupo.

### Ingeniería social, medios electronicos agnósticos
![Captura de pantalla 2025-11-03 a la(s) 5.44.25 p.m.](https://hackmd.io/_uploads/H1SUe2Lk-e.png)
![Captura de pantalla 2025-11-03 a la(s) 5.44.40 p.m.](https://hackmd.io/_uploads/SkXwl3IJbx.png)
![Captura de pantalla 2025-11-03 a la(s) 5.46.10 p.m.](https://hackmd.io/_uploads/Skphx3UJZl.png)

## Tecnicas de ingenieria social, Parte B

### Tipode de ataques de IS
Está navegando por Internet cuando aparece una advertencia en la que se le indica que su computadora está infectada por malware y que, para limpiarla, debe descargar el software antivirus a través del enlace proporcionado. Si alguna vez le sucedió esto, tuvo un ataque de scareware. Es muy probable que el software antivirus que se le ofrece, gratuito o por un costo, sea falso o esté infectado por malware. Un ataque de scareware también se conoce como ataque rogue.
En un ataque "abrevadero", el atacante puede comprometer un sitio que probablemente visite un grupo objetivo particular. Se sabe que los actores maliciosos aprovechan las redes sociales, como Facebook y LinkedIn, para iniciar y cultivar relaciones con sus objetivos.

![Captura de pantalla 2025-11-03 a la(s) 5.50.45 p.m.](https://hackmd.io/_uploads/S1N0b38kWe.png)

Crea una trampa virt$$ual para atraer atacantes y asi evaluar, analizar sus metodos y mejorar los sistemas de seguridad.
![Captura de pantalla 2025-11-03 a la(s) 5.51.17 p.m.](https://hackmd.io/_uploads/HyGgG38Jbg.png)

![Captura de pantalla 2025-11-03 a la(s) 5.52.24 p.m.](https://hackmd.io/_uploads/B1H4f2IyZe.png)

## Amenaza interna

Una amenaza interna se refiere a un individuo o individuos que trabajan para una organización o tienen acceso autorizado a sus redes o sistemas y que suponen una amenaza física o ciberamenaza para la organización. Por lo general, la persona con información privilegiada es un empleado actual, pero también podría ser un exempleado, contratista, socio comercial, miembro de la junta directiva o incluso un impostor que obtiene acceso a información confidencial o privilegios de red.

Hay diferentes maneras de clasificar las amenazas internas y asignarles nombres, pero esencialmente hay dos grupos principales: los que ayudan involuntariamente a los actores maliciosos por un error humano, mal juicio o descuido y los que están dentro y actúan maliciosamente. El primer grupo podría denominarse negligente y el segundo malicioso. Estas dos categorías pueden subdividirse aún más.
Los principales objetivos de las amenazas internas maliciosas, algunas veces llamadas turncloaks, incluyen el espionaje, el fraude, el robo de propiedad intelectual y el sabotaje. Presentamos un ejemplo: en 2020, un exejecutivo de la empresa A robó secretos comerciales de su división de vehículos autónomos y se los entregó a su nuevo empleador. Obtuvo una condena de 18 meses de cárcel.

![Captura de pantalla 2025-11-03 a la(s) 6.07.43 p.m.](https://hackmd.io/_uploads/H1oprh8yZg.png)

Las amenazas internas maliciosa se pueden dividir en tres tipos: **topos, colaboradores y lobos solitarios**. Los **lobos** solitarios pueden parecer tan inofensivos como las ovejas, pero albergan intenciones maliciosas. Además, como su nombre indica, los lobos solitarios trabajan de forma independiente y sin influencias externas. Los **colaboradores** son usuarios autorizados que trabajan con un tercero. El tercero puede ser un competidor, un Estado-Nación, una red del crimen organizado o un individuo. Un tercer tipo de persona maliciosa con información privilegiada es una persona del exterior que obtiene acceso a la red de la organización. Podría obtener acceso a la organización haciéndose pasar por un proveedor, socio, contratista o empleado. Este tipo de persona maliciosa con información privilegiada se le conoce conoce como topo.

![Captura de pantalla 2025-11-03 a la(s) 6.10.12 p.m.](https://hackmd.io/_uploads/S1Mv8hUybg.png)

### Métodoa que se utilizan con vectores de amenaza fisicos y digitales

![Captura de pantalla 2025-11-03 a la(s) 6.15.20 p.m.](https://hackmd.io/_uploads/HJXcv3Uy-e.png)

![Captura de pantalla 2025-11-03 a la(s) 6.15.45 p.m.](https://hackmd.io/_uploads/H1Tjv2LJbg.png)

![Captura de pantalla 2025-11-03 a la(s) 6.16.00 p.m.](https://hackmd.io/_uploads/HJn2PnUk-l.png)

![Captura de pantalla 2025-11-03 a la(s) 6.16.13 p.m.](https://hackmd.io/_uploads/SyhpPh8J-x.png)

Si una persona con información privilegiada parece estar descontento con la organización, parece guardar rencor a la organización o empieza a asumir más tareas con excesivo entusiasmo, podrían ser indicadores de una posible amenaza interna. El contexto lo es todo. Hay personalidades ambiciosas o de tipo A que asumen agresivamente nuevos retos. Sin embargo, si el comportamiento de un empleado cambia sensiblemente sin ninguna explicación lógica, podría ser un indicador de amenaza. Las infracciones rutinarias, el desprecio abierto de las políticas de la organización o los intentos de burlar la seguridad también son posibles indicadores de comportamiento de una amenaza interna.

La actividad anómala a nivel de red es un indicador digital. Se pueden rastrear varias actividades, como:
- Actividad a horas inusuales, como conectarse a la red a las 4:00 a. m. o trabajar siempre hasta tarde.
- Volumen de tráfico, como la transferencia de cantidades inusuales de datos dentro de la red.
- Tipo de actividad, como acceder a recursos atípicos o no necesarios para el trabajo de la persona con información privilegiada.

También se debe alertar sobre actividades digitales, como:
- Solicitudes repetidas de acceso a sistemas no relacionados con su función laboral.

- Utilizar dispositivos no autorizados, como unidades USB.
- Rastreo de la red y búsqueda deliberada de información confidencial.
- Envío de información sensible por correo electrónico hacia e exterior de la organización

### Acciones personales para proteger los activos de una organización

- Conocer las políticas de seguridad de su organización.
- No utilizar accesos directos que evadan los protocolos de seguridad.
- No dejar las credenciales de inicio de sesión en notas adhesivas.
- No permitir el tailgating.
- No almacenar documentos digitales confidenciales sin cifrar ni dejar documentos físicos desprotegidos.
- No desactivar la seguridad ni los controles de los endpoints. No compartir información confidencial ni privada con personas no autorizadas.
- Utilizar parches de seguridad en sus dispositivos tan pronto como estén disponibles las actualizaciones del sistema operativo y de software.

### Acciones en la red para proteger los activos de una organizacion

En primer lugar, identifique los activos críticos de su organización, tanto lógicos como físicos. Entr ellos se incluyen las redes, los sistemas, la información confidencial, las instalaciones y las personas. Clasifique y priorice cada activo e identifique el estado actual de I protección de cada uno de estos. Al priorizar los activos, puede enfocarse en proteger primero los activos más importantes.
Herramientas como las aplicaciones de aprendizaje automático (ML) pueden ayuda a analizar el flujo de datos y priorizar las alertas más relevantes. Puede utilizar herramientas forenses y analíticas digitales, como el análisis del comportamiento de usuario y evento (UEBA) para ayudar a detectar, analizar y alertar al equipo de seguridad sobre cualquier posible amenaza interna. El análisis del comportamiento de usuario y dispositivo puede establecer una referencia para la actividac normal de acceso a datos, mientras que la supervisión de la actividad de la base de datos puede ayudar a identificar infracciones de las políticas.

![Captura de pantalla 2025-11-03 a la(s) 6.37.35 p.m.](https://hackmd.io/_uploads/HJnp22Ikbe.png)

## fraude, estafas y campañas de influencia

### Ciberfraude y Ciberestafas
![Captura de pantalla 2025-11-03 a la(s) 6.41.11 p.m.](https://hackmd.io/_uploads/B1Qj62LyZe.png)
Los ejemplos de ciberfraude y ciberestafas incluyen los siguientes:
- Sitios web gubernamentales de imitación: los actores maliciosos utilizan la suplantación de identidad, la suplantación de identidad dirigida u otra variante para proporcionar un enlace a un sitio del gobierno falso, normalmente con la intención de robar las credenciales o la información de la tarjeta de crédito del usuario.
- Estafas de citas y romances: los actores maliciosos aprovechan sitios web de citas, redes sociales y salas de chat legítimos para obtener datos personales o dinero de las personas.
- Fraude de vacaciones: los actores maliciosos ofrecen a los clientes vacaciones y alojamientos en línea que no están disponibles o no exister
- Compromiso de correo electrónico empresarial: este tipo de fraude se produce cuando un actor malicioso jaquea una transacción por correo electrónico, por ejemplo, entre un cliente y un proveedor. Luego, el actor malicioso envía una factura duplicada con la información de la cuenta bancaria del acto malicioso y solicita el pago.
- Pharming: los actores maliciosos redirigen el tráfico de un sitio web legítimo a otro falso, como un sitio de comercio electrónico 0 bancario.
- Estafas con tarjetas de felicitación: este tipo de fraude consiste en enviar una tarjeta de felicitación maliciosa a una persona el día de su cumpleaños o durante una festividad importante, como Navidad o Pascua.
### campañas de influencia en linea

![Captura de pantalla 2025-11-03 a la(s) 6.44.08 p.m.](https://hackmd.io/_uploads/HyN8C3Ukbl.png)
# Modulo 4

## Malware
**¿Qué es el malware?** El término malware es la abreviatura de software malicioso que interrumpe, daña u obtiene acceso no autorizado a una computadora. Los actores maliciosos diseñan el malware para hacer varias tareas, como modificar el comportamiento d un programa, espiar a las personas que utilizan la computadora infectada, exfiltra datos, cifrar información importante, y luego pedir un rescate o denegar a los usuario el acceso a un sistema. El propósito de cada tipo de malware depende de los objetivos de los actores maliciosos. Además, una campaña de ataque podría utilizar varios tipos de malware diseñados para hacer tareas específicas en cada fase del ataque. 

Si el malware infecta su computadora, su comportamiento puede cambiar bruscamente y sin ninguna razón obvia. Algunos síntomas comunes de infección de la computadora son:
- Los dispositivos informáticos de repente se vuelven lentos o no responden.
- La aparición de ventanas emergentes no deseadas en una aplicación o navegador web son signos reveladores de que un malware, virus o spyware está afectando a su dispositivo.
- Las aplicaciones se cierran inesperadamente solas. Esto probablemente significa que el software está infectado con algún tipo de virus o malware.
Las aplicaciones no se cargan cuando se seleccionan en el menu inicio.

El sistema falla y la computadora se apaga sola inexplicablemente.
Correos electrónicos en su bandeja de salida que no envió. Los jáqueres utilizan las cuentas de correo electrónico de otras personas para propagar malware y ejecutar ciberataques más amplios. Los correos electrónicos en su bandeja de salida que no envió pueden ser un signo de infección.
Los cambios inexplicables en una computadora, como la modificación de la página de inicio del sistema o la actualización de la configuración del navegador, son indicios de la presencia de malware.
![Captura de pantalla 2025-11-03 a la(s) 7.32.51 p.m.](https://hackmd.io/_uploads/Hyy6FpL1-g.png)
### Virus
![Captura de pantalla 2025-11-03 a la(s) 7.33.23 p.m.](https://hackmd.io/_uploads/H10RK6Ly-e.png)
Los virus informáticos tienen varias características definitorias que debe conocer.
En primer lugar, un usuario debe invocar a los virus informáticos; en segundo lugar, se insertan o adhieren en aplicaciones legítimas; y, en tercer lugar, se diseñan para que propaguen la infección a otras aplicaciones y computadoras de la red.
![Captura de pantalla 2025-11-03 a la(s) 7.34.05 p.m.](https://hackmd.io/_uploads/ByKZq681Wx.png)

#### Tipo de virus
![Captura de pantalla 2025-11-03 a la(s) 7.34.38 p.m.](https://hackmd.io/_uploads/B1o79pIyZg.png)


![Captura de pantalla 2025-11-03 a la(s) 7.35.17 p.m.](https://hackmd.io/_uploads/HyZ8qp8Jbx.png)
![Captura de pantalla 2025-11-03 a la(s) 7.35.37 p.m.](https://hackmd.io/_uploads/S1LvcaIybl.png)
![Captura de pantalla 2025-11-03 a la(s) 7.35.53 p.m.](https://hackmd.io/_uploads/B1Hd5pUybg.png)
![Captura de pantalla 2025-11-03 a la(s) 7.36.03 p.m.](https://hackmd.io/_uploads/B1yY5TUy-x.png)
![Captura de pantalla 2025-11-03 a la(s) 7.36.41 p.m.](https://hackmd.io/_uploads/Sy4sqp8JZe.png)

### Malware y sus tipos

características de un virus. Por ejemplo, el malware de 
- gusano no necesita un sistema host y se puede propagar entre sistemas y redes sin la acción del usuario, mientras que un virus necesita que un usuario ejecute su código. A continuación se indican otros tipos de malware que no son virus:
- Un rootkit es un conjunto de programas informáticos, normalmente maliciosos, diseñados para permitir el acceso a una computadora o a un área de su software a la que no se permite de otro modo. Por lo general, un rootkit enmascarara su existencia o la de otro software. Funciona cerca o dentro del kernel del sistema operativo, pero no se puede autorreplicar ni propagar por los sistemas. 
-  Un ataque de inyección de DLL permite al atacante ejecutar el código malicioso reemplazando los archivos DLL legítimos por otros maliciosos. Este tipo de ataque es difícil de detectar y prevenir porque, implica usualmente el uso de archivos y procesos legítimos. Del mismo modo, un ataque de manipulación de controlador cambia o reemplaza el software del controlador que permite al sistema operativo comunicarse con dispositivos de hardware.
-  por los sistemas. Un ataque de inyección de DLL permite al atacante ejecutar el código malicioso reemplazando los archivos DLL legítimos por otros maliciosos. Este tipo de ataque es difícil de detectar y prevenir porque, implica usualmente el uso de archivos y procesos legítimos. Del mismo modo, un ataque de manipulación de controlador cambia o reemplaza el software del controlador que permite al sistema operativo comunicarse con dispositivos de hardware.
-  Un programa potencialmente no deseado (PUP) es un programa que puede ser no deseado, a pesar de que el usuario da su consentimiento para descargarlo. Los PUP incluyen spyware, adware y dialer, por lo general, se descargan junto con un programa que el usuario quiere.


El spyware es un malware que obtiene información encubierta sobre las actividades informáticas de un usuario mediante la transmisión secreta de datos desde el disco duro. EΙ spyware es un tipo de malware que recopila información personal y recoge datos sobre un usuario sin su consentimiento.

![Captura de pantalla 2025-11-03 a la(s) 7.39.55 p.m.](https://hackmd.io/_uploads/HyKwoaUy-x.png)
![Captura de pantalla 2025-11-03 a la(s) 7.40.35 p.m.](https://hackmd.io/_uploads/rJlJciTU1Wx.png)
![Captura de pantalla 2025-11-03 a la(s) 7.40.49 p.m.](https://hackmd.io/_uploads/Hk65jT81Zg.png)
![Captura de pantalla 2025-11-03 a la(s) 7.41.32 p.m.](https://hackmd.io/_uploads/HktTo6UyWe.png)

### Vector de ataque

![Captura de pantalla 2025-11-03 a la(s) 7.45.15 p.m.](https://hackmd.io/_uploads/BJDon681be.png)
![Captura de pantalla 2025-11-03 a la(s) 7.46.10 p.m.](https://hackmd.io/_uploads/H1C0na81Zl.png)
![Captura de pantalla 2025-11-03 a la(s) 7.46.44 p.m.](https://hackmd.io/_uploads/HJZZp6IkZl.png)
#### Vectores de atque de malware
![Captura de pantalla 2025-11-03 a la(s) 7.47.24 p.m.](https://hackmd.io/_uploads/ryoma681Ze.png)
![Captura de pantalla 2025-11-03 a la(s) 7.47.59 p.m.](https://hackmd.io/_uploads/ryAS6aUkWg.png)
![Captura de pantalla 2025-11-03 a la(s) 7.48.17 p.m.](https://hackmd.io/_uploads/SJpITTU1Wl.png)
![Captura de pantalla 2025-11-03 a la(s) 7.48.51 p.m.](https://hackmd.io/_uploads/HJltpp8y-x.png)
![Captura de pantalla 2025-11-03 a la(s) 7.49.20 p.m.](https://hackmd.io/_uploads/H1p5apIyZl.png)
![Captura de pantalla 2025-11-03 a la(s) 7.49.31 p.m.](https://hackmd.io/_uploads/BJIjTpUyWg.png)

# Curso 2

## Firewalls
![Captura de pantalla 2025-11-03 a la(s) 10.34.14 p.m.](https://hackmd.io/_uploads/H14BEgD1-l.png)

### Evolución de firewalls
#### Firewalls de primera generación
La primera generación de firewall es un firewall de filtro de paquetes, también conocido como firewall sin estado. Examina la información de los protocolos de la capa de transporte y enrutamiento, como las direcciones de red de origen y destino, los protocolos y los números de puerto. Las políticas de firewall usan estos atributos para definir qué paquetes se aprueban. Las reglas se ordenan en una lista y la coincidencia potencial se hace en orden de arriba a abajo. La última política de firewall puede ser implícita, denegando el paquete de manera predeterminada, o explícita, haciendo la acción configurada correspondiente o aprobando o denegando el paquete.
Un firewall sin estado aprueba un paquete si las direcciones de red, el protocolo y el número de puerto coinciden con los de su política de firewall. Si no es así, el paquete se descarta o se bloquea silenciosamente.

![Captura de pantalla 2025-11-03 a la(s) 10.35.42 p.m.](https://hackmd.io/_uploads/Hyi5NgwJbx.png)

#### Firewalls con estado
La segunda generación de firewall, conocida como firewall con estado, compensa las limitaciones del firewall sin estado desarrollando criterios adicionales para bloquear o aprobar el tráfico.
Un firewall de estado está diseñado para observar las conexiones de red a lo largo del tiempo mediante el seguimiento de la comprobación de 5-tuplas y el estado de la conexión en su tabla de sesiones. Observa cómo se establecen nuevas conexiones de red y examina continuamente el tráfico que va y viene entre los endpoints. Si una conexión se comporta de forma inadecuada o si el tráfico de retorno no coincide con el tráfico de entrada correspondiente, el firewall bloquea esa conexión. Cualquier paquete que no pertenezca a una conversación conocida o que no coincida con una política de firewall aprobada se descarta.
![Captura de pantalla 2025-11-03 a la(s) 10.44.21 p.m.](https://hackmd.io/_uploads/SJMsIgP1Wl.png)

Aunque los firewall con estado son una mejora, siguen sin poder bloquear los paquetes no autorizados si usan un protocolo aceptable, como HTTP. La explosión de la World Wide Web promovió el HTTP como uno de los protocolos de red más usados. El problema es que HTTP se usa de muchas formas, como en el contenido de texto estático, el comercio electrónico, el alojamiento de archivos y muchos otros tipos de aplicaciones web. Debido a que todas usan el mismo número de puerto, el firewall no puede distinguirlas.
Los administradores de red deben distinguir entre aplicaciones aprobadas y maliciosas para determinar cuáles se deben aprobar o bloquear. Los firewalls deben examinar más a fondo las cargas útiles de datos para determinar cómo se usan protocolos como HTТР.
![Captura de pantalla 2025-11-03 a la(s) 10.46.46 p.m.](https://hackmd.io/_uploads/SkBVvlvkZl.png)

#### Firewalls de tercera genereación
La tercera generación de firewall profundiza en las cargas útiles de los datos. Aunque siguen siendo de estado, estos firewalls comprenden los protocolos de la capa de aplicación y controlan los distintos usos del mismo protocolo básico. Esto se conoce como filtrado de la capa de aplicación. Los firewall que implementan el filtrado de la capa de la aplicación pueden comprender protocolos como HTTP, FTP y DNS.
HTTP puede distinguir entre el tráfico del navegador, un blog, un sitio para intercambio de archivos, comercio electrónico, redes sociales, voz sobre IP y correo electrónico. Los firewall UTM también combinan protecciones adicionales como antivirus, filtrado de correo electrónico no deseado, un Sistema de prevención de intrusiones (IPS) y una Red privada virtual (VPN).
![Captura de pantalla 2025-11-03 a la(s) 10.54.05 p.m.](https://hackmd.io/_uploads/BkjktlP1Wg.png)

#### Next generation firewalls
 Un firewall debe evitar los ciberataques en evolución en todos los extremos de la red y, al mismo tiempo, ofrecer seguridad, confiabilidad y rendimiento de la red. Los Next-Generation Firewalls, como el de FortiGate, proporcionan estas funcionalidades de seguridad avanzadas.
 
Un Next-Generation Firewall funciona como el control de seguridad de un aeropuerto, y ambos, tienen varios puntos de verificación de seguridad. Al igual que un agente de seguridad examina el pase de abordaje como primera línea de defensa, un Next-Generation Firewall examina los paquetes y toma decisiones basadas en reglas para aprobar o rechazar el tráfico.
![Captura de pantalla 2025-11-03 a la(s) 10.58.58 p.m.](https://hackmd.io/_uploads/H1ef9xwJ-l.png)
![Captura de pantalla 2025-11-03 a la(s) 11.01.00 p.m.](https://hackmd.io/_uploads/SJtKqxPJ-e.png)
![Captura de pantalla 2025-11-03 a la(s) 11.01.21 p.m.](https://hackmd.io/_uploads/SJ1sclwk-l.png)
![Captura de pantalla 2025-11-03 a la(s) 11.02.47 p.m.](https://hackmd.io/_uploads/rkEeoewJ-l.png)

Los Next-Generation Firewalls también ofrecen inspección de alto rendimiento y mayor visibilidad de la red, con poca o ninguna degradación, para proteger y dar apoyo a centros de datos modernos y distribuidos ubicados en una infraestructura de Tl compleja e híbrida. Los centros de datos híbridos ofrecen a las empresas mayor agilidad, flexibilidad y escalabilidad según la demanda, así como una superficie de ataque expandida que requiere una estrategia de seguridad igualmente evolucionada. La inspección de alto rendimiento incluye aplicaciones, recursos informáticos, análisis, datos cifrados que circulan por toda la infraestructura y almacenamiento de datos en varias nubes privadas y públicas.

## Control de acceso a la red

El Control de acceso a la red (NAC) es un dispositivo o máquina virtual que controla el acceso a una red. Tiene una visibilidad completa de los perfiles de red y categoriza automáticamente los dispositivos. Evalúa y clasifica el cumplimiento de las políticas de seguridad por usuario, dispositivo, ubicación, sistema operativo y otros criterios que podrían detectar actividades inusuales. Muchas soluciones NAC tienen una arquitectura centralizada que mejora el control de los dispositivos en redes grandes y de múltiples sitios.

NAC comenzó como un método de autenticación y autorización de dispositivos que se unían a la red, que seguía los estándares IEEE 802.1Χ. ΕΙ método de autenticación involucraba a tres partes: el dispositivo cliente, el autenticador y el servidor de autenticación. El autenticador podía ser un switch de red o un punto de acceso inalámbrico que diferenciaba la red protegida de la desprotegida. El cliente proporcionaba credenciales en forma de nombre de usuario y contraseña, certificado digital u otro medio al autenticador, que reenviaba estas credenciales al servidor. Dependiendo del resultado de la autenticación, el autenticador bloqueaba el dispositivo o permitía su acceso a la red.

![Captura de pantalla 2025-11-03 a la(s) 11.21.46 p.m.](https://hackmd.io/_uploads/Hy_DJ-wJbe.png)
#### Portal cautivo
Otro método para controlar el acceso a una red, especialmente a una red disponible al público, es un portal cautivo. Un ejemplo de esto es cuando se conecta a una red en una cafetería. Antes de acceder a la red, es posible que tenga que interactuar con una página web que pide que acepte unas condiciones legales antes de conceder el acceso.
#### Retos del NAC
A medida que los endpoints proliferaban en las organizaciones, se necesitaban controles mayores. El acceso de invitados, los dispositivos de traiga su propio dispositivo (BYOD) y el Internet de las Cosas (IoT) introducen problemas complejos para la seguridad de la red. 

El primero es que los dispositivos que intentan conectarse a la red son dispositivos de propiedad personal, no activos de una organización. El departamento de MIS de la empresa no controla lo que se ejecuta en estos dispositivos, por ejemplo, software antivirus o aplicaciones no seguras.

Un segundo reto es que los dispositivos del loT son hardware con sensores que transmiten datos de un lugar a otro a través de Internet, lo que expande drásticamente la superficie de ataque. Las organizaciones compran dispositivos habilitados para loT a otros proveedores, y estos dispositivos se conectan de nuevo a las redes de los proveedores para proporcionar información sobre el uso del producto y las necesidades de mantenimiento.

Las organizaciones aguantan este tipo de cosas porque ahorran dinero.
#### Funcionalidades

Cuando el MIS introduce el NAC en una red, lo primero que hace NAC es crear perfiles de todos los dispositivos conectados. Luego, NAC permite el acceso a los recursos de la red según el perfil del dispositivo, que se define por función. Si un dispositivo no tiene un perfil definido o un perfil que coincida con una función concreta, se deniega la entrada. Esto es como conceder a las personas acceso a información confidencial y aplicaciones según su necesidad de conocerla.
![Captura de pantalla 2025-11-03 a la(s) 11.48.48 p.m.](https://hackmd.io/_uploads/SyRhS-w1bx.png)

Por ejemplo, NAC puede permitir la conexión de una cámara IP a un servidor de grabación de video en red (NVR), pero impedir que se conecte a un servidor de finanzas. Según su perfil, una cámara IP no tiene por qué comunicarse con un servidor de finanzas. NAC dirigirá la cámara IP a su VLAN correspondiente y el firewall hará el resto. Cuando el acceso se concede de esta forma, la red se segmenta por función del dispositivo. Si un dispositivo se compromete, el malware solo puede infectar aquellos objetos a los que el dispositivo tiene permiso para conectarse. Así, la cámara IP comprometida del ejemplo anterior podría infectar el servidor NVR, pero no el servidor de finanzas.
![Captura de pantalla 2025-11-03 a la(s) 11.50.43 p.m.](https://hackmd.io/_uploads/ry1VLWwkZx.png)

Esto también se aplica a los contratistas, socios e invitados que necesitan ingresar a la red de una organización. En este caso, estos usuarios están segmentados por perfil y pueden acceder de manera segura a la red mientras se les bloquea el acceso a las áreas restringidas.
Para garantizar que la red siga siendo segura, las políticas de usuarios y dispositivos se ajustan a medida que cambian las personas, los endpoints y las empresas.

NAC se puede integrar en el marco de seguridad, de modo que cuando se detecta una violación de datos, NAC responde automáticamente para notificar al centro de operaciones de seguridad (SOC) y se coordina con otros dispositivos de seguridad para neutralizar la amenaza. También puede generar informes e información sobre los intentos de acceso en toda la organización.
NAC se integra con otros productos de puntos de seguridad, como switches y soluciones de red, a través de la Interfaz de programación de aplicaciones (API) abierta/RESTful o el Shell seguro (SSH).

#### Importancia de las NAC
- **Mayor seguridad:** NAC supervisa todos los dispositivos que se usan en la organización, lo que significa que mejora la seguridad autenticando a los usuarios y dispositivos en el momento en que entran en la red.
- **Ahorro de costos:** el seguimiento y la protección automatizados de los dispositivos a escala tienen como resultado un ahorro de costos para las organizaciones, debido a que se necesitan menos recursos de TI.
- **Automatización:** a medida que aumenta el número y la variedad de dispositivos que usan las organizaciones, estas no pueden verificar manualmente a los usuarios y las políticas de seguridad de sus endpoints cuando intentan entrar en la red. Las características de automatización del NAC ofrecen una enorme eficacia al proceso de autenticación de usuarios y dispositivos y de autorización del acceso.
- **Mejores experiencias de Tl:** el acceso sin dificultades proporciona una experiencia de usuario sin fricciones al conectarse a la red.
- **Facilidad de control:** las características de visibilidad del NAC sirven efectivamente como inventario permanente de todos los endpoints autorizados por la organización. Esto es útil no solo cuando Tl necesita determinar a qué endpoints o usuarios se da acceso a la red, sino también para la
administración del ciclo de vida, cuando los dispositivos se deben eliminar o sustituir.

## Sandbox

### Que es?
Un sandbox, en el contexto de la seguridad informática, es un sistema que confina las acciones de una aplicación, como abrir un documento de Word o un navegador, dentro de un entorno virtual seguro. En un sandbox, una aplicación se aísla para que cualquier intención maliciosa se pueda descubrir de forma segura, sin causar daños a la red. Si ocurre algo inesperado o peligroso, solo afecta al sandbox, y no a las demás computadoras y dispositivos de la red. Por lo general, el equipo de seguridad de la información de una organización administra la tecnología de sandbox, pero la usan los equipos de operaciones de red, aplicaciones y escritorio para reforzar la seguridad en sus dominios respectivos.

![Captura de pantalla 2025-11-04 a la(s) 12.21.39 a.m.](https://hackmd.io/_uploads/Byeu6-D1-g.png)

### Porque se creo esta tecnologia de sandbox?
Los actores de amenazas aprovechan las vulnerabilidades de seguridad de las aplicaciones legítimas para comprometer un dispositivo y, desde allí, moverse por la red para infectar otros dispositivos. Los firewalls y el software antivirus pueden detener las amenazas conocidas, pero no pueden hacer nada contra los ataques de día cero. Un ataque de día cero se produce cuando un actor de amenazas aprovecha una vulnerabilidad desconocida. Sandboxing se creó como defensa contra los ataques de día cero.

### Como funciona?
Un sandbox ofrece un espacio virtual aislado que imita los sistemas informáticos y las aplicaciones. Permite que las posibles amenazas se ejecuten de manera segura dentro de estos sistemas virtuales y analiza estas amenazas. Si un sandbox considera que un archivo es seguro, no toma ninguna medida; pero si detecta un comportamiento malicioso, pone el archivo en cuarentena e impide que acceda a otras computadoras y dispositivos de la red.

### Como ha evoluciondado la tecnologia sandbox?

Se puede clasificar en tres generaciones

1. **Soluciones Sandboxing de primera generación**
Los primeros sandboxes se enfrentaban a dificultades cuando intentaban compartir información sobre amenazas con otros dispositivos de seguridad debido a la dependencia de la arquitectura de seguridad de soluciones independientes. Las soluciones independientes no se podían integrar fácilmente con productos de otros proveedores, lo que obligaba al Centro de operaciones de seguridad (SOC) a usar una consola de administración distinta para cada una de estas. En consecuencia, el proceso de consolidación y análisis de los datos de inteligencia frente a amenazas era complicado y necesitaba mucho tiempo.

2. **Soluciones Sandboxing de segunda generación**
Los sandboxes de segunda generación se integraban mejor con otros dispositivos de seguridad, lo que permitía compartir mejor la información.
Este nuevo enfoque de seguridad de la red permitía a los analistas correlacionar la inteligencia frente a amenazas de forma centralizada y responder a estas desde un panel único. Además, un entorno de seguridad de red integrado podía compartir información con un servicio de inteligencia frente a amenazas en la nube, que a su vez podía enviar esa información a otras redes. 
3. **Soluciones Sandboxing de tercera generación**
Los actores de amenazas aprovechan la automatización y los métodos de inteligencia artificial (IA) para acelerar el desarrollo de nuevas vulnerabilidades de seguridad. Los ataques basados en IA necesitaban un sandbox de tercera generación basado en un estándar de análisis de amenazas. Los dispositivos de sandbox de tercera generación no solo ayudan a detectar brechas de manera oportuna, sino que también evitan que ocurran. Estas soluciones usan el lenguaje de seguridad universal MITRE ATT&CK para categorizar modelos y metodologías de amenazas.

### FortiSanbox
![Captura de pantalla 2025-11-04 a la(s) 12.29.40 a.m.](https://hackmd.io/_uploads/BJGIkfD1-l.png)

![Captura de pantalla 2025-11-04 a la(s) 12.30.24 a.m.](https://hackmd.io/_uploads/HkAd1fDybe.png)


## WAF
### Que es un WAF
Un Web Application Firewall (WAF) es un dispositivo o software que monitorea el tráfico HTTP/HTTPS y puede bloquear el tráfico malicioso hacia y desde una aplicación web. Los WAF se centran en el contenido de aplicaciones web, mientras que los firewalls de borde forman puertas seguras de enlace entre la red de área local (LAN) y los servidores externos a nivel de red. Al inspeccionar el tráfico HTTP, un WAF puede detener ataques dirigidos a fallas de la seguridad de aplicaciones web, como inyección SQL, scripting entre sitios (XSS), inclusión de archivos y configuraciones incorrectas de seguridad. Debido a que se pasa mucho tiempo, tanto en el trabajo como en casa interactuando con aplicaciones y servidores web, el WAF es un componente vital del arsenal que se usa contra los actores maliciosos y sus esquemas de ataque.

### Origenes de los firewalls de aplicación
El antecesor del WAF es el firewall de aplicaciones que se desarrolló en los años 90.
Aunque en gran medida era un firewall basado en la red, se podía centrar en algunas aplicaciones o protocolos, como el protocolo de transferencia de archivos (FTP) y el shell remoto (RSH), que es un programa informático de línea de comandos. El debut de la World Wide Web, en 1991, fue la "explosión" del universo de Internet, que desde entonces no ha dejado de expandirse a un ritmo acelerado. La accesibilidad y apertura de Internet permitieron a cualquier persona buscar y explorar, pero también permitió a los actores maliciosos usarla para sus propios y sórdidos fines.

A medida que más personas y organizaciones se convertían en víctimas de espionaje, robos y otros delitos, el desarrollo de una defensa contra los ciberataques basados en HTTP se convirtió en la prioridad máxima. Dado que todas las aplicaciones web usaban HTTP y los puertos 80 0 443, el WAF no podía confiar en los métodos de firewall de borde tradicional, que basaban las decisiones en una lista de bloqueo de direcciones de red y bloqueaban protocolos y números de puerto específicos.
### Ejemplos de vulnerabilidades
Imagine que dirige un negocio en Internet. Los clientes y socios se conectan a su sitio para comprar productos y servicios. Para acceder a su sitio, deben usar una página de inicio de sesión típica que les pide introducir su ID de usuario y contraseña. Un usuario, John Smith, escribe su ID de usuario, jsmith, y su contraseña en la página de inicio de sesión. Esta información se verifica en una base de datos back-end. Si la contraseña es verdadera, John Smith puede acceder a su sitio; pero si la contraseña es falsa, no se permite su acceso.

Un actor malicioso, que se hace pasar por John Smith, intenta acceder a su sitio, pero no conoce la contraseña de John. El actor malicioso podría intentar adivinar la contraseña de John Smith, pero eso llevaría mucho tiempo. En su lugar, cuando se pide que introduzca una contraseña, el actor malicioso escribe, abc123 ο 2+2=4. Cuando estas credenciales se envían a la base de datos para su verificación, es probable que la contraseña abc123 se identifique como falsa; sin embargo, la expresión, 2+2=4, que es una instrucción SQL válida, se identificará como verdadera y el actor malicioso obtendrá acceso.

Mediante ataques de inyección SQL para aprovechar la vulnerabilidad de seguridad de esta falla, los actores maliciosos pudieron ingresar a algunos sitios. Para combatir esto, la primera generación de WAF usaba listas de bloqueo y atributos HTTP basados en firmas para alertar al firewall de un ataque, por lo que los ataques de inyección SQL, como el descrito en este ejemplo, ya no tenían éxito.

### aevolucio2n de WAF
La creciente popularidad de Internet pronto condujo a un aumento en el número y la complejidad de las aplicaciones web, lo que hizo que el enfoque cantidad de falsos positivos, alertas de ataques que, de hecho, eran conexiones legítimas, creció hasta proporciones que superaban la capacidad de los equipos de seguridad de TI. La siguiente generación de los WAF era más inteligente, los firewalls incluían un elemento de aprendizaje. Los WAF estudiaban el comportamiento de las aplicaciones y usaban lo que aprendían para crear una aplicaciones y determinar si esos intentos eran normales o irregulares y, por lo tanto, sospechosos. La siguiente basado en firmas de los WAF quedara obsoleto. Además, la referencia. Luego, usaban esa referencia para evaluar los intentos de acceso a las aplicaciones y determinar si esos intentos eran normales o irregulares y, por lo tanto, sospechosos. La siguiente generación también introdujo el monitoreo de sesiones y la heurística, que permitían que el firewall detectara variantes de firmas conocidas. Esto fue un avance; sin embargo, los equipos de seguridad de Tl que supervisaban las iniciativas de aprendizaje y defensa de las aplicaciones no pudieron seguir el ritmo de las rápidas mutaciones de los métodos existentes ni del creciente número de vulnerabilidades de seguridad nuevas.

Adicionalmente, no había una defensa contra los ataques de día cero, que aprovechan una debilidad desconocida en el código de una aplicación.
![Captura de pantalla 2025-11-04 a la(s) 12.50.23 a.m.](https://hackmd.io/_uploads/Bk0m4fDkWg.png)

La siguiente evolución lógica en el desarrollo del WAF fue el aprendizaje automático (ML). Sin la supervisión humana, el análisis del comportamiento se podía hacer entonces a velocidad de máquina y adaptarse a los atributos siempre cambiantes de una amenaza. Otras características de seguridad que se agregaron a los firewalls son las siguientes:

- Defensa de denegación de servicio distribuido (DDoS)
- Reputación de IP 
- Antivirus
- Prevención de pérdida de datos (DLP)

Los WAF podían supervisar el tráfico HTTP y detener cualquier acción que infringiera el comportamiento aceptable. Podían identificar a un usuario, correlacionar las acciones de intentos del usuario con sus permisos y detener cualquier acción más allá del alcance de su función. Los WAF también podían compartir información y colaborar con otros dispositivos de seguridad de la red, como otros firewalls y sandboxes. Esta capacidad permitió que los WAF formaran parte de una defensa colectiva, en lugar de trabajar de manera independiente.
Las funcionalidades de sandboxing implicaban que el material sospechoso se pudiera probar de manera segura, aislado de la red. Los ataques de día cero se podían exponer y poner en cuarentena en estos entornos de sandbox y sus firmas se podían compartir con otros dispositivos de la red. Además, cualquier descubrimiento en consecuencia se podía cargar en un centro de inteligencia frente a amenazas en Internet, donde se podía comunicar a otras redes.

![Captura de pantalla 2025-11-04 a la(s) 12.53.26 a.m.](https://hackmd.io/_uploads/ryrkSMvJWl.png)
## Puerta de enlace de correo electronico

### Correo electronico
El correo electrónico ofrece una forma rápida y barata de comunicarse. También permite el anonimato. Si bien las personas u organizaciones pueden transmitir mensajes o publicidad a una amplia audiencia prácticamente sin costo alguno, el correo electrónico también da a los actores maliciosos los medios para difundir información errónea, promover el fraude, robar información personal y distribuir malware. El acto de enviar correos electrónicos no solicitados e irrelevantes a muchos destinatarios se denomina correo no deseado (spam). Como se ha visto, el correo no deseado que incita a los destinatarios a hacer clic en un enlace o descargar un archivo se denomina suplantación de identidad según America Online en 1996.

La técnica del suplantación de identidad se basa en la ingenuidad humana, el descuido o la distracción para que funcione. Instruir a los empleados o al público sobre la suplantación de identidad no ha acabado con estos ataques. En 2004, se registraron 176 ataques de suplantación de identidad, pero en 2012 esta cifra había aumentado a 28,000-Y siguen creciendo. Una fuente estimó que hubo 500 millones de ataques de suplantación de identidad en 2022. Los ataques de suplantación de identidad siguen creciendo porque son rentables. Continúan siendo la principal causa de violaciones de datos, con un costo promedio de $4.35 millones de dólares por violación de datos.

### Puerta de enlace de correo electronico
![Captura de pantalla 2025-11-04 a la(s) 1.02.29 a.m.](https://hackmd.io/_uploads/SJIMPfv1be.png)

![Captura de pantalla 2025-11-04 a la(s) 1.02.41 a.m.](https://hackmd.io/_uploads/rJezPzvJWe.png)
![Captura de pantalla 2025-11-04 a la(s) 1.05.14 a.m.](https://hackmd.io/_uploads/By8jPzD1bx.png)

#### SEG
La SEG ofrece autenticación y verificación de identidades. Admite varios métodos para autenticar la identidad de los remitentes y validar las fuentes del correo electrónico para evitar el spoofing y la personificación fraudulenta del correo electrónico. Otra función de la SEG es el filtrado de malware. Este tipo de filtro escanea los archivos adjuntos y enlaces del correo electrónico para detectar si hay malware para evitar que contenido potencialmente dañino llegue a la bandeja de entrada del destinatario. Además, la SEG puede cifrar el correo electrónico para proteger el contenido del acceso no autorizado durante la transmisión. Algunos sistemas pueden firmar digitalmente los correos electrónicos, lo que ayuda a identificar al remitente y verificar la integridad del contenido.
#### Marco de la pilitica del remitente

En el nivel del servidor de correo electrónico receptor también funciona el marco de la política del remitente (SPF). Cuando se envía un correo electrónico, el servidor de correo electrónico del destinatario verifica el registro del SPF del dominio del remitente para verificar si la dirección IP del servidor remitente está autorizada para enviar correos electrónicos en nombre de ese dominio. Si la dirección IP del servidor remitente no aparece en el registro SPF, el servidor del destinatario puede marcar el correo electrónico como sospechoso, rechazarlo o tomar otras medidas basándose en la configuración del servidor de correo electrónico del destinatario. Este proceso ayuda a evitar el spoofing y la falsificación de la dirección del remitente mediante la verificación de la autenticidad del servidor remitente.

EI SPF trabaja junto con otras tecnologías de autenticación de correo electrónico como correo identificado con claves de dominio (DKIM) y autenticación de mensajes basada en dominio, informes y conformidad (DMARC) para proporcionar una seguridad integral del correo electrónico. Aunque el SPF es una herramienta eficaz en la lucha contra el spoofing y el fraude en el correo electrónico, tiene limitaciones y se debe usar junto con otros métodos de autenticación de correo electrónico como el correo identificado con claves de dominio (DKIM) y la autenticación de mensajes basada en dominio, informes y conformidad (DMARC), para tener una estrategia de seguridad de correo electrónico más sólida.

#### Nuevas tecnologias SEG

Las puertas de enlace seguras de correo electrónico continúan evolucionando a medida que evolucionan las amenazas.

En la actualidad, las SEG incorporan una mayor automatización y aprendizaje automático, lo que alivia las demandas impuestas a los centros de operaciones de seguridad. En algunos casos, una SEG se integra con otros dispositivos de seguridad de red, como los firewall de borde y segmentación y sandboxes.

Fortinet tiene una SEG llamada FortiMail®. FortiMail® incluye todas las características expuestas en esta presentación, incluyendo compatibilidad con SPF, DKIM y DMARC, además de integrarse con los firewall y soluciones de sandboxing.

## Tipo de filtrado de contenido
### Que es?
El filtrado de contenido es un proceso para filtrar o restringir el acceso a correos electrónicos, páginas web, ejecutables y otros elementos sospechosos. Es una medida de seguridad habitual que se incorpora generalmente a los firewalls de Internet y bloquea los contenidos que contienen información nociva, ilegal o inapropiada. Por ejemplo, los padres usan con frecuencia el filtrado web para proteger a sus hijos de material gráfico o inapropiado.

### Filtrado de contenido
Los filtros de contenido se us de diferentes maneras para bloquear el acceso a distintos tipos de materiales. Los tipos más comunes de filtros de contenido incluyen filtros de motores de búsqueda, filtros correo electrónico, filtros de contenido basados en DNS y filtros web. Haga clic en las diferentes pestañas para obtener más información sob cada tipo.
#### Filtros de motores de búsqueda
Los filtros de los motores de búsqueda clasifican los contenidos web de acuerdo c su texto y sus imágenes. El texto y las imágenes tienen u ponderación específica, que s mide con respecto a un conjunto de clasificación. Las ponderaciones varían basándose en el nivel declasificación que se establece como seguro, moderado o estricto. El aprendizaje automático ayuda a definir las ponderaciones para evitar posibles falsos positivos. Dependiendo del valor que se obtiene y del tamaño del documento, el contenido se puede clasificar como seguro, moderado, inapropiado o rechazado desde un punto de vista estricto. El resultado del motor de búsqueda mostrará entonces los contenidos si cumplen el nivel de clasificación establecido.

#### Filtros de correo electrónico
Los filtros de contenido de correo electrónico revisan el encabezado de los correos entrantes comparándolo con listas negras en tiempo real. Los datos sin procesar del cuerpo se analizan para detectar contenido inapropiado, lo que proporciona un nivel de confianza de correo no deseado similar al de las ponderaciones de los motores de búsqueda. Los filtros de contenido de correo electrónico también revisan los archivos adjuntos, identifican palabras clave o posibles tipos de archivos no autorizados, como los ejecutables, y completan el filtrado de contenido del correo electrónico. Esto permite a los usuarios bloquear, poner en cuarentena o rechazar correos electrónicos maliciosos, incluyendo la suplantación de identidad, al mismo tiempo que aceptan los correos electrónicos entrantes apropiados.
Haga clic en los íconos para obtener más información.
#### Filtros de contenido basados en DNS
Los filtros de contenido basados en DNS revisan el sitio web durante la resolución del dominio a través de servidores DNS usando listas de bloqueo. Si el sitio web no está permitido, el navegador se redirige a un mensaje de sustitución que anuncia que la página está bloqueada. Alternativamente, una empresa puede definir una lista blanca, incluyendo todos los sitios web que la empresa aprueba. El filtrado de contenido basado en DNS bloquearía entonces todos los demás sitios web.
#### Filtros web
Los filtros web son similares a los filtros de contenido basados en DNS, con una función adicional que categoriza los sitios web. Por ejemplo, un requisito para las escuelas en Estados Unidos es adherirse a la Ley de Protección de la Infancia en Internet (CIPA), un proyecto de ley que trata la preocupación por el acceso delos niños a contenidos obscenos o nocivos a través de Internet, como la pornografía. Por ello, las escuelas primarias y secundarias usan filtros web para bloquear el material considerado nocivo para los menores. Todos los sitios web y sus contenidos se clasifican mediante el aprendizaje automático, de modo que el acceso a una URL específica se permite o bloquea según su categoría y el perfil del usuario.

### Ventajas
![Captura de pantalla 2025-11-04 a la(s) 1.32.44 a.m.](https://hackmd.io/_uploads/rJ7BCMDJZg.png)

## Wi-fi segura
### Que es?
La Wi-Fi, basada en las normas IEEE 802.11, es una tecnología inalámbrica empleada para la conexión en red de área local de dispositivos. Su desarrollo se basó en protocolos y tecnología similares como Ethernet, que incluye IP en la capa de red y TCP y UDP en la capa de transporte. Entre las tecnologías comunes se incluyen enrutadores, switches, el sistema de nombres de dominio (DNS) y, en la mayoría de los casos, las redes inalámbricas se conectan a redes cableadas. Por ejemplo, la red inalámbrica de su casa permite que sus dispositivos se comuniquen sin conexiones físicas cableadas, pero para la comunicación externa más allá de la red de su casa, el enrutador de su casa se convierte en la puerta de enlace. Este enrutador está físicamente conectado a la red de área amplia (WAN) a través de conexiones cableadas, como la línea de suscriptor digital (DSL), Internet por cable u otras tecnologías. Haga clic en el término subrayado para obtener más información.

### Ventajas y Desventajas
Sin embargo, hay una gran diferencia entre las redes inalámbricas y las cableadas. Los datos no se conducen a través de un cable de cobre trenzado ni de fibra óptica, como en la mayoría de las redes cableadas, sino que se envían a través de ondas de radio o microondas. Este medio de transmisión diferente tiene ventajas e inconvenientes. La principal ventaja de las redes inalámbricas es la movilidad: puede caminar con un dispositivo por cualquier lugar dentro del alcance Wi-Fi y no estar atado a un cable. Por supuesto, algunos dispositivos móviles, como los teléfonos móviles, también usan la tecnología celular, que amplía su alcance. La principal desventaja de las redes inalámbricas es la seguridad. Si no se siguen los protocolos de seguridad adecuados, los actores malicioso pueden escuchar las comunicaciones.

### Protección de redes
Las partes interesadas en Wi-Fi introdujeron un protocolo de cifrado conocido como privacidad equivalente por cable (WEP), al que sucedieron las versiones uno y dos de acceso Wi-Fi protegido (WPA). WPA2 emplea el estándar de cifrado avanzado (AES) para cifrar los datos salientes, un estándar establecido por el Instituto Nacional de Estándares y Tecnología (NIST) de Estados Unidos. Además, la tecnología vio cómo se agregaban nuevos métodos de autenticación de nivel empresarial, lo que dio lugar a dos opciones de seguridad para cada estilo. A nivel de la seguridad doméstica, la autenticación de red y el intercambio de claves siguieron dependiendo de una frase de contraseña compartida. En cuanto a la seguridad empresarial, se introdujo el uso de mecanismos de autenticación 802.1x, como los empleados en las redes cableadas, para autenticar a los usuarios y establecer el cifrado. No obstante, la seguridad de las redes, sobre todo en la red doméstica, seguía estando en riesgo si se usaban frases de contraseña mal elegidas o débiles.
Lanzado en 2018, el acceso protegido de Wi-Fi 3 (WPA3) introdujo un nuevo establecimiento de comunicación más seguro para establecer conexiones, un método más fácil para agregar dispositivos a la red, mayores tamaños de clave y otras características de seguridad. Mientras la tecnología de seguridad continuaba mejorando, los actores maliciosos dirigieron sus esfuerzos a las técnicas de ingeniería social. Los actores maliciosos aprovecharon las vulnerabilidades de seguridad del descuido o de la ingeniudad humana.

### Riesgos de ingenieria social de wifi

1. Las redes Wi-Fi gratuitas en lugares públicos conllevan riesgos. Los actores maliciosos pueden instalar puntos de acceso (AP) que actúen como honeypots en lugares como cafeterías. Las personas desprevenidas que se conectan a estas supuestas redes gratuitas no se dan cuenta de que el hacker tiene acceso a todo lo que hacen en línea. Por ejemplo, si introduce las credenciales de su cuenta y los datos de su tarjeta de crédito, pueden obtenerlos. Desconfíe, aunque el nombre de una red parezca legítimo.

2. Además, nuestros dispositivos portátiles recuerdan las redes a las que nos conectamos en el pasado. Para ayudarnos, buscan automáticamente el nombre de la red o el Identificador del conjunto de servicios (SSID) y se vuelven a conectar a esa red cuando la detectan. Esto significa que un jáquer informático puede escuchar su teléfono buscando la Wi-Fi legítima del hotel a la que se conectó el año pasado, configurar un AP falso que emita ese nombre de red y engañar a su dispositivo para que se conecte. Esto a veces se denomina ataque evil twin, que es un tipo de ataque man-in-the-middle que se usa para robar información e infiltrarse en los dispositivos que se conectan. A menos que se dé cuenta de que su dispositivo está ahora conectado a la Wi-Fi, puede pasar datos a través del AP falso, exponiendo de nuevo todo lo que está haciendo. Nunca debe confiar en un SSID con seguridad abierta y usar otros medios para cifrar sus comunicaciones, como aprovechar la característica de cifrado integrada en su dispositivo o VPN.

### Buenas practicas para configurar un WI-FI

Cuando configure un enrutador/AP, recuerde cambiar el nombre SSID y la frase de contraseña predeterminada que venían con el dispositivo. Asegúrese de elegir una frase de contraseña compleja y de que la seguridad esté activada en el enrutador para que los datos se cifren cuando se envíen entre los dispositivos. Actualice al firmware más reciente, seleccione el protocolo de seguridad más reciente, como WPA3, y use las características de seguridad más recientes. Por ejemplo, algunos softwares de enrutador/AP permiten que monitoree los dispositivos conectados a su red.

Los AP más recientes pueden hacer inspecciones de seguridad del tráfico y detectar y suprimir los AP no autorizados. La supresión de AP tiene algunas advertencias legales, que difieren según los países y otros distritos legales. Asegúrese de que conoce la legalidad de la supresión de AP antes de implementarla.

Algunas de las características clave de una solución LAN inalámbrica segura son el cifrado robusto, la autenticación robusta, la segmentación de la red y de la red de invitados, las listas de control de acceso que identifican los dispositivos permitidos en la red, el monitoreo de la red, etc. Además, antes de seleccionar un protocolo de Wi-Fi segura, asegúrese de que sea compatible con el software cliente.

## Tecnicas de endurecimiento de endpoint

### Endurecimiento endpoints
1. Con la propagación de los dispositivos del Internet de las cosas o loT, el número de endpoints que se deben proteger aumentó exponencialmente. Afortunadamente, hay muchas estrategias y políticas que se usan para proteger no solo los endpoints de clientes y servidores tradicionales, sino también los dispositivos nuevos conectados a la red que proliferan en todos los aspectos de la vida. Muchas de estas técnicas están orientadas a empresas y redes de empresas, pero también se pueden usar en sus entornos personales y de casa. Recuerde que una de las mayores amenazas que produce la propagación de los endpoints es la de un dispositivo no seguro que permite el acceso no autorizado a una red en la que se puede aprovechar una vulnerabilidad de seguridad para recopilar información o comprender otros dispositivos.


2. El endurecimiento de endpoints se puede dividir en varias categorías. La primera categoría consiste en usar controles administrativos para aplicar contraseñas seguras y restringir el acceso de los usuarios y de la red usando el Principio de privilegio mínimo (PoLP).
La segunda consiste en endurecer la protección de endpoint local mediante una combinación de seguridad del sistema operativo, administración de arranque, cifrado del disco local y técnicas de Prevención de pérdida de datos (DLP).
La tercera es un mantenimiento de endpoint adecuado para garantizar que a todos los dispositivos se les apliquen parches y se actualicen con regularidad, que se hagan verificaciones periódicas de las políticas y que se mantengan copias de seguridad precisas para facilitar la recuperación.

La cuarta es el monitoreo de los dispositivos de los endpoints, que se puede hacer localmente a través de un cliente de la Plataforma de protección de endpoints (EPP), si se dispone de este, o a través de las redes a las que están conectados los dispositivos mediante sistemas de detección de intrusiones (IDS) especializados en la red. También es posible implementar plataformas de Detección y respuesta de endpoints (EDR) que puedan bloquear preventivamente ataques nuevos, no descubiertos y tomar medidas inmediatas contra archivos y programas sospechosos.
Esta lección cubre los tres primeros temas.

### Controles administrativos
1. La forma más sencilla de endurecer y proteger sus
endpoints y dispositivos del loT es asegurarse de que el dispositivo tenga una contraseña segura. Esto es
especialmente importante en los dispositivos del loT
domésticos, que vienen generalmente con una contraseña predeterminada que el usuario no está obligado a cambiar en la instalación. El seguimiento y la aplicación de contraseñas seguras en todos los dispositivos conectados es un primer paso sencillo que
puede ayudar a reducir su riesgo en general. Una primera estrategia de ataque común es escanear una red para detectar los dispositivos e intentar iniciar
sesión y obtener acceso a un dispositivo local usando
contraseñas predeterminadas.
2. La forma más sencilla de endurecer y proteger sus
endpoints y dispositivos del loT es asegurarse de que el dispositivo tenga una contraseña segura. Esto es
especialmente importante en los dispositivos del loT
domésticos, que vienen generalmente con una contraseña predeterminada que el usuario no está obligado a cambiar en la instalación. Elseguimiento y la aplicación de contraseñas seguras en todos los dispositivos conectados es un primer paso sencillo que
puede ayudar a reducir su riesgo en general. Una primera estrategia de ataque común es escanear una red para detectar los dispositivos e intentar iniciar
sesión y obtener acceso a un dispositivo local usando
contraseñas predeterminadas.

Si un atacante obtiene acceso a una cuenta con acceso restringido, será mucho menos perjudicial que si un atacante obtiene acceso de administrador completo porque el dispositivo usa la función administrativa predeterminada. La aplicación de permisos basados en la necesidad se denomina Principio de privilegio mínimo o PoLP, y es una buena regla a seguir cuando se define alguna política de seguridad, ya sea para endpoints, autenticación o acceso a archivos.

3. En los endpoints más sencillos que no pueden restringir el acceso de usuarios o administradores, considere bloquear el acceso con contraseñas muy seguras o autenticación de dos factores, c restringir las direcciones IP que pueden acceder al dispositivo usando otro dispositivo, como un enrutador o un firewall.
Una defensa exhaustiva es muy importante cuando se endurecen los endpoints. Si hay varias capas de seguridad, es más difícil comprometer un endpoint y usarlo para seguir con el ataque de una red. Recuerde que una red es tan segura como su endpoint más vulnerable, por lo que tener una vista más amplia y descendente para diseñar y aplicar la seguridad puede ser de gran ayuda para determinar las políticas de una red, aunque no se puedan aplicar por igual a todos los dispositivos.
### Protección de endpoint local

1. Con frecuencia, se pasa por alto un área en la seguridad de endpoint y es el endurecimiento del firmware y los procesos de arranque. La mayoría de las
prácticas de seguridad se enfocan en proteger los dispositivos cuando están en funcionamiento y conectados a la red. Sin embargo, han surgido amenazas que atacan el firmware y los procesos de arranque de los dispositivos de endpoint. El endurecimiento del
firmware y los procesos de arranque es especialmente
importante para los dispositivos del loT, que carecen de muchas de las protecciones integradas que a las computadoras de escritorio, portátiles y servidores más tradicionales se les han integrado a lo largo de
los años para protegerse contra el compromiso del firmware malicioso.

2. Proteger físicamente los dispositivos para que los atacantes no tengan acceso físico es extremadamente importante. Es mucho más fácil comprometer un sistema informático tradicional si se tiene acceso físico porque muchos dispositivos tienen un procedimiento de restablecimiento de la cuenta de administrador que solo requiere acceso físico al dispositivo. Bloquear el Sistema básico de entrada/salida (BIOS) y otros sistemas de arranque puede evitar que este tipo de ataques tengan éxito.

3. Por lo general, el firmware es el software que se ejecuta desde un chip en el endpoint. Este software es responsable de informar sobre el hardware que se conecta al dispositivo.
Después de que el firmware hace todas las comprobaciones de hardware, ayuda a cargar el sistema operativo.
Generalmente, las computadoras modernas usan el método heredado Sistema básico de entrada y salida (BIOS) o la más reciente Interfaz de firmware extensible unificada (UEFI). Ambos hacen funciones similares, pero UEFI es mucho más reciente y, por lo general, incorpora una interfaz gráfica y características de seguridad más sólidas.
Conocer cómo cargan sus sistemas operativos los endpoints de la red y cómo proteger contra cualquier posible peligro es importante para prevenir los ataques de malware de firmware, en los qu se inserta código en el firmware que puede hacer que los endpoints carguen software malicioso o sistemas operativos completamente nuevos que luego se pueden usar para poder comprometer otros dispositivos. Restringir el firmware para que solo cargue software aprobado es una de las nuevas funciones más importantes de UEFI sobre BIOS.

4. Por lo general, la elección de un OS no es un lujo que pueden tener los administradores de seguridad; sin embargo, en la medida de lo posible, siempre es una buena idea seleccionar y usar un OS que sea fácil de administrar y seguro. En la actualidad, muchos OS incorporan características de seguridad que facilitan la administración y el cumplimiento de las políticas de seguridad. Además, muchos dispositivos de seguridad de red actuales pueden permitir el acceso basándose en el tipo de OS. Tener una lista fija de OS de confianza puede ayudarle a reforzar la seguridad de la red en general permitiendo el acceso a sus redes únicamente a los tipos y versiones de OS conocidos. De este modo, si un ataque de firmware compromete un dispositivo, que luego intenta conectarse a la red con un OS desconocido, otros dispositivos de seguridad pueden denegar el acceso.
Aunque el BIOS y UEFI son específicos para las computadoras tradicionales y portátiles, la mayoría de los endpoints usan algún tipo de cargador de arranque y firmware para proteger y cargar el OS. Conocer y garantizar que estos sistemas estén bloqueados es un paso fundamental para la seguridad de endpoint.

4. Una de las principales ventajas de usar computadoras portátiles y teléfonos celulares para trabajar es que son portátiles. Una preocupación frecuente sobre estos dispositivos es la seguridad de los datos. Si roban una computadora portátil y los datos no están cifrados, es muy fácil que el ladrón extraiga información útil. Además de ser perjudicial para la persona, una computadora portátil corporativa sin cifrar puede contener mucha información útil sobre la postura de seguridad de la empresa. Solo con ver el historial de navegación y las consultas DNS almacenadas en caché de una computadora se puede revelar información confidencial de la red y procedimientos de seguridad. Proteger y cifrar completamente los endpoints es un aspecto crítico de la ciberseguridad, especialmente para los dispositivos de alto riesgo que pudieran contener gran cantidad de información confidencial.
5. La forma más habitual de proteger estos dispositivos es usar el cifrado de disco completo o FDE. EI FDE es una solución basada en software en la que el sistema operativo cifra el disco. En el arranque, UEFI carga la información de descifrado del sistema operativo. Por lo general, las claves criptográficas se almacenan en un Módulo de plataforma de confianza (TPM) y se protegen mediante una contraseña u otro método de autenticación. Después de acceder a las claves, el disco puede descifrarse y el OS puede cargarse con normalidad. Debido a que todo el disco está cifrado, en caso de robo no se puede recuperar ninguna información útil, salvo si se intenta forzar el cifrado de la unidad, lo que es muy costoso.
6. Otra forma de implementar el cifrado de disco completo es usar una unidad de autocifrado o SED. Una SED es un disco duro con un módulo integrado que maneja automáticamente el cifrado y descifrado del contenido del disco duro mediante instrucciones del firmware y OS. Con una unidad SED, la labor criptográfica recae en el módulo integrado en el disco duro, en lugar que en la CPU y el software del dispositivo.
7. Una última forma de proteger los datos en un endpoint es usar software de DLP. Este puede detectar si alguien está intentando copiar información confidencial de un dispositivo o enviarla a través de la red. La DLP puede bloquear o registrar la transacción por seguridad. Otro uso común de la DLP es impedir o limitar el uso de unidades que se conectan como memorias USB o discos duros externos para evitar la copia de grandes cantidades de datos. La DLP también puede basarse en la red, donde los dispositivos inspeccionan el tráfico de la red para alertar a los administradores sobre palabras clave u otra información confidencial que se transmita a través de las redes.
8. Muchos dispositivos modernos,como los teléfonos inteligentes, usan automáticamente el cifrado de disco completo, pero en algunos dispositivos, esta opción puede estar desactivada de manera predeterminada.
Revise siempre si están disponibles el cifrado de disco y la DLP en los endpoints, especialmente en los dispositivos del loT que pueden no tener estas funciones activadas de manera predeterminada.

## Orquestación, automatización y respuesta de seguridad(SOAR)

### Que es?
Orquestación, automatización y respuesta de seguridad (SOAR) es un término de moda en el sector de la seguridad. SOAR conecta las herramientas de su pila de seguridad en flujos de trabajo definidos, que se pueden ejecutar automáticamente. En otras palabras, SOAR permite que aumente la eficacia de su equipo automatizando procesos manuales repetitivos.

La automatización es muy importante en el mundo de la seguridad actual porque los equipos de seguridad están abrumados. A medida que se desarrollan nuevas herramientas para hacer frente a un panorama de amenazas en constante evolución, los analistas que las usan deben alternar entre ellas para hacer sus tareas cotidianas. Una tarea cotidiana habitual es responder a las alertas. Con más herramientas de seguridad llegan más alertas, que se tratan en una serie de procesos manuales y cambios de contexto, es decir, pasando de una herramienta a otra. Tener más alertas a las que responder cada día significa que tiene menos tiempo para dedicar a cada alerta, lo que aumenta la probabilidad de que se cometan errores. La degradación del rendimiento ante una saturación de alertas se denomina fatiga de alertas.

Una forma de mitigar la fatiga de alertas es simplemente contratar más analistas. Sin embargo, simplemente no hay suficientes analistas calificados para contratar. Si contratar más analistas no es una opción, una solución sencilla para la fatiga es SOAR.

### Funcionalidades de SOAR

1. SOAR une las herramientas de su pila de seguridad. Al extraer datos de estas fuentes, SOAR reduce el cambio de contexto al que se enfrentan los analistas. Por lo tanto, los analistas pueden hacer todos sus procesos de investigación habituales directamente desde la interfaz de origen. Además, esos procesos se pueden traducir manual o automáticamente en un manual de estrategias, que es un conjunto de pasos similar a un diagrama de flujo, que se pueden repetir a demanda. Mediante un manual de estrategias, se puede asegurar de que se siga cada paso de su procedimiento operativo estándar. También tiene datos sobre exactamente qué se hizo, cuándo y quién lo hizo. Esta funcionalidad se denomina orquestación y automatización.
 
2. La investigación es otra funcionalidad crucial de SOAR. Cuando aparece una alerta sospechosa, los equipos pueden hacer sus tareas de investigación, como revisar en las fuentes de inteligencia frente a amenazas una reputación o consultar en un sistema de administración de información de seguridad (SIM) por eventos relacionados desde dentro de la plataforma SOAR. La información obtenida de esta investigación determinará los pasos de mitigación necesarios. Luego, debido a que SOAR es un banco de trabajo unificado de todas sus herramientas de seguridad, puede tomar esos pasos de mitigación también desde SOAR. Por ejemplo, desde SOAR puede bloquear el tráfico de una dirección IP maliciosa en su firewall o eliminar un mensaje de correo electrónico de suplantación de identidad de su servidor de correo electrónico. Al incorporar sus procesos estándar a los manuales de estrategias, puede sustituir los procesos manuales repetitivos y que necesitan mucho tiempo por la automatización a velocidad de máquina. La automatización libera a los analistas para que dediquen más tiempo a investigar las alertas críticas.

3. Implementar SOAR en su ecosistema hace más que simplemente centralizar sus procesos de respuesta a incidentes: optimiza una operación completa. La optimización tiene como resultado respuestas optimizadas a velocidad de máquina, permitiendo a los equipos mejorar la colaboración y manejar mejor la interminable oleada de alertas. Esto se debe a que SOAR permite a los usuarios asignar alertas a diferentes analistas o equipos en diferentes fases del proceso de respuesta, y que los usuarios asignados agreguen información a la alerta a medida que trabajan en esta, de modo que otros que hagan referencia a esa alerta más tarde tengan un contexto adicional sobre la investigación.

### Manuales de estrategia
Los equipos usan manuales de estrategias, algunas veces llamados flujos de trabajo, para responder a las alertas o incidentes de la misma manera cada vez. Los manuales de estrategias trabajan al unísono con los equipos de seguridad tomando los pasos que un analista implementaría típicamente al responder a un incidente.
Los manuales de estrategias hacen las tareas repetitivas, como recopilar datos en un reporte o enviar correos electrónicos, y pueden hacer una pausa cuando se necesita la supervisión humana, como cuando se implementa un bloqueo de firewall. Los manuales de estrategias son la clave de la funcionalidad de automatización de SOAR, que permiten a los equipos mejorar su velocidad de respuesta y coherencia, al mismo tiempo que mantienen la autoridad humana sobre el proceso. Por último, el uso de un manual de estrategias puede conducir a una reducción de la carga de trabajo de los analistas y de las posibilidades de error.

## SIEM
###  Que es?
Se introdujo en 2005, SIEM, también conocida como administración de información y eventos de seguridad, analiza las alertas de seguridad en tiempo real.
Fundamentalmente, las SIEM hacen tres cosas:
**Uno:** Recopilar, normalizar y
almacenar eventos y alertas de los dispositivos de red y seguridad, servidores, bases de datos, aplicaciones y endpoints de la organización en una ubicación segura y central. SIEM recopila información de dispositivos físicos y virtuales, tanto en las instalaciones como en la nube. Los investigadores habían determinado que iniciar sesión en cada sistema para comprobar si había eventos de registro relevantes era cada vez más imposible. Además, si los registros no eran seguros, no había garantías de que un atacante no hubiera eliminado las entradas para ocultar sus actividades.

**Dos:** Ejecuta análisis avanzados
de los datos, en tiempo real y mediante datos históricos, para identificar posibles incidentes de seguridad que debe investigar un humano. Los posibles incidentes se priorizan por riesgo, gravedad e impacto. Con el tiempo, estos análisis de seguridad evolucionaron de emplear reglas simples de correlación cruzada al monitoreo de anomalías en el comportamiento del usuario, vigilar los Indicadores de Compromiso (loC) conocidos y aplicar modelos sofisticados de aprendizaje automático.

**Tres:** Demuestra que todos los controles de seguridad bajo la supervisión de SIEM están implementados y son eficaces.
Aunque el mantenimiento de la seguridad por sí mismo debería impulsar los requisitos de seguridad y un nivel adecuado de inversión, el principal factor para la compra de SIEM ha sido el cumplimiento normativo.

### Propósito de SIEM
A medida que los ciberataques se volvían más sigilosos y sofisticados, las demandas de información sobre un ciberataque, incluyendo sus características, propósito y alcance de la penetración en la red, se hacían más apremiantes. Este es un hecho alarmante: los equipos de seguridad con mucha frecuencia no descubrían las brechas hasta muchos meses después de que ocurrían, y era más frecuente que las descubriera un tercero que su propio equipo de seguridad interno.
La seguridad de Tl necesitaba una visión holística de la actividad de la red y los datos en tiempo real recopilados por la SIEM cubrieron esta necesidad. Los proveedores de SIEM agregaron funcionalidades de detección de amenazas con inteligencia de amenazas integrada, análisis histórico y en tiempo real, y análisis del comportamiento del usuario y de la entidad (UEBA). Más recientemente, el aprendizaje automático se convirtió en parte del conjunto de herramientas de la SIEM y es necesario especialmente cuando se examinan grandes volúmenes de datos.

### Complejidad SIEM
Otro problema que obstaculizó la mayor aceptación de las organizaciones de la SIEM fue el esfuerzo que implicaba su configuración, integración y uso. La tecnología era compleja y difícil de ajustar, era difícil identificar ataques y exigía que el usuario tuviera un alto nivel de competencia para saber lo
que se buscaba. A pesar de todas sus funcionalidades, la SIEM no era una tecnología del tipo configurar y olvidar. Otros dos factores agravaron la situación. Uno, la seguridad de Tl tiene una cantidad insuficiente de profesionales calificados, y dos, el enfoque aislado que se usa en los centros de operaciones de red (NOC) y los Centros de operaciones de seguridad (SOC) típicos aumenta la complejidad y causa falta de visibilidad de la red. Un entorno
compuesto por soluciones de múltiples proveedores, de un solo punto, con diferentes sistemas operativos, ciclos de parches, protocolos y lógica, funcionaba en contra de la interoperabilidad y la simplificación. El resultado fue una mayor demanda de los recursos escasos de TI, mayores posibilidades de error humano y una menor visibilidad de la seguridad de la red.

Así pues, aunque la SIEM avanzó mucho al pasar de ser una plataforma de información a un centro de inteligencia frente a amenazas, sigue estando restringida por limitaciones tanto externas como internas.

### Avance SIEM
La escasez sistémica de personal capacitado fue el impulso para aumentar la automatización y el aprendizaje automático en los dispositivos de SIEM posteriores. La inteligencia artificial detecta más rápido las tendencias y los patrones en enormes cargas útiles de datos que incluso el hombre más inteligente. Además, se gana tiempo y precisión configurando la SIEM para responder y corregir automáticamente.
Los últimos avances de la SIEM también se integraron en el NOC y el SOC, estableciendo así la SIEM como el centro neurálgico de todas las operaciones de red y seguridad. De este modo, desde un panel único, la seguridad de TI obtiene visibilidad de toda la red. SIEM simplifica la implementación y la integración
mediante un motor de aprendizaje automático, en tiempo real, de detección de activos y configuración de dispositivos. Esta herramienta establece un inventario de dispositivos de red, aplicaciones, usuarios y servicios empresariales. Luego, crea una topología que muestra cómo está interconectado cada objeto, estableciendo así una referencia del comportamiento normal de la red. Determinando la normalidad y con la ayuda del aprendizaje automático, el comportamiento anormal puede alertar a los analistas de un ciberataque, que se puede detener antes de que se produzca una violación de datos.
SIEM evolucionó de una plataforma de información, a un centro de inteligencia frente a amenazas, a un centro de seguridad y operaciones de red totalmente integrado y automatizado.

## SD-WAN
### Que es?
A medida que sigue aumentando el uso de aplicaciones críticas para la empresa basadas en la nube, las organizaciones con una infraestructura distribuida de oficinas remotas y una fuerza de trabajo remota en expansión necesitan adaptarse. En este cambiante panorama de consumidores, la solución más eficaz es pasar de redes de área amplia (WAN) estáticas y con un rendimiento limitado a arquitecturas WAN definidas por software (SD-WAN).
### Estructura de SD-WAN
SD-WAN (red de área amplia definida por software) es una tecnología que usa los principios de las redes definidas por software (SDN) para mejorar la forma en que las redes de área amplia (WAN) se conectan entre diferentes ubicaciones. Ayuda a las organizaciones a conectar usuarios, aplicaciones y datos de manera segura, dando un mejor rendimiento y facilitando la administración de la red mediante el control centralizado.
### Funcionalidad de SD-WAN
SD-WAN monitorea el rendimiento de las conexiones de WAN y regula varios tipos de tráfico para garantizar velocidades altas constantes y optimizar la conectividad general. Permite el enrutamiento del tráfico basado en aplicaciones y permite un ajuste preciso, como reservar costosos enlaces de alta velocidad para aplicaciones críticas para la empresa. A diferencia de la estructura WAN tradicional centrada en el enrutador, el modelo SD-WAN es totalmente compatible con aplicaciones ubicadas en centros de datos locales, nubes públicas o privadas y servicios SaaS como SalesForce, Dropbox, AWS y otros.
### Ventajas de us de la SD-WAN
Existen varias ventajas de usar SD-WAN frente a la solución WAN tradicional. Haga clic en cada ficha para obtener más información.
**Orquestación centralizada:** la SD-WAN administra de forma centralizada las implementaciones, las configuraciones y las operaciones. Esto permite a los administradores de red generar y modificar reglas de seguridad en tiempo real de acuerdo con las demandas de la red en evolución. Esta característica ayuda a reducir la complejidad y los recursos que necesita la organización para administrar sus redes.
**Acceso directo a la nube:** la SD-WAN elimina la necesidad de backhauling.
Permite el acceso directo a servicios críticos en la nube para todos los usuarios, independientemente de su ubicación. Así, elimina la necesidad de enrutar el tráfico de las sucursales por el centro de datos, independientemente del destino real.
**Mejor rendimiento de las aplicaciones:** una SD-WAN se puede configurar para priorizar el tráfico crítico para la empresa y los servicios en tiempo real como el Protocolo de voz sobre Internet (VoIP) y direccionarlo por la ruta más eficiente. Tener varias opciones para mover el tráfico ayuda a reducir la pérdida de paquetes por circuitos sobrecargados y la latencia debido al tráfico pesado, mejorando el rendimiento y la experiencia del usuario.
**Mayor agilidad del negocio:** con la SD-WAN, los planificadores de red pueden implementar actualizaciones en todas las redes simultáneamente. Esto permite a las organizaciones responder a sus cambiantes necesidades empresariales con rapidez y sin demora.
**Ahorro de costos:** la SD-WAN permite enrutar el tráfico de forma eficiente por varios canales, incluyendo los circuitos MPLS existentes e Internet pública a través de LTE y la banda ancha.
Esto reduce la necesidad de aumentar el ancho de banda en enlaces costosos, como MPLS.
**Mayor seguridad:** con las características de seguridad integradas y la capacidad de restringir el acceso a la red, las organizaciones. pueden protegerse contra amenazas internas y externas de forma más eficaz. Se recomienda usar soluciones de SD-WAN que proporcionen una amplia gama de características de seguridad integradas, como NGFW, IPS, cifrado, AV y funcionalidades de sandboxing que pueden ayudar a evitar la pérdida de datos, el tiempo de inactividad, las infracciones normativas y las responsabilidades legales.

### Evolución de SD-WAN

La tecnología de la SD-WAN pasó por tres etapas clave de evolución, adaptándose constantemente a la rápida evolución del panorama de TI. Haga clic en cada ficha para obtener más información.

**Fase 1: necesidad de mayor ancho de banda**
La SD-WAN se desarrolló como una respuesta al elevado costo y al limitado ancho de banda de la WAN tradicional. Una solución a estos problemas consistía en agregar varios enlaces de operador dedicados y equilibrar la carga por tráfico de aplicaciones, en función del ancho de banda disponible. Agregar varios productos de distintos proveedores, cada uno con una consola de administración diferente que no se integra totalmente con otros productos, aumentó significativamente la complejidad de la infraestructura de red. Aun así, la primera generación de SD-WAN resolvió una necesidad empresarial urgente: sus técnicas básicas de equilibrio de carga permitieron a las redes tomar decisiones empresariales inteligentes para las aplicaciones sobre enlaces WAN híbridos, incluyendo los de proveedor de servicios, banda ancha y evolución de largo plazo o LTE.

**Fase 2: necesidad de alto rendimiento**
Durante esta etapa, se desarrollaron nuevas funcionalidades, como la conmutación por error y recuperación de la virtualización y el enrutamiento basado en aplicaciones. Estas mejoras fueron impulsadas por la demanda de un mayor rendimiento y agilidad en las operaciones de la WAN. Esto trató el problema de las demoras asociadas con la instalación de MPLS y la virtualización permitió a los administradores de red administrar las rutas desde un panel de control unificado que simplificó los procesos operativos.

**Fase 3: Necesidad de una infraestructura de seguridad unificada**
En esta fase, la tecnología de la SD-WAN evolucionó más allá de la conexión de sucursales remotas a una infraestructura unificada para la nube, la movilidad y las tecnologías "como servicio" mediante la integración de las funcionalidades de seguridad y red en un dispositivo único de Secure SD-WAN. Esto permite que las empresas reemplacen sus productos de múltiples puntos por un potente dispositivo de seguridad único, a un costo reducido y con una mayor facilidad de administración.

### Secure SD-WAN

Secure SD-WAN es la combinación de las funciones de un firewall y la SD-WAN en un solo dispositivo. Esto aumenta la seguridad de la red y simplifica la tarea del administrador de la red.
Fortinet introduce el término Secure SD-WAN.

- Secure SD-WAN facilita la administración de las necesidades de las aplicaciones y reduce el costo operativo de las empresas priorizando las aplicaciones críticas para la empresa y asignando el ancho de banda según sus requisitos operativos.

- Una consola de administración centralizada proporciona visibilidad de panel único y telemetría para identificar, solucionar y resolver problemas de red con un mínimo de personal de TI.

- Los análisis integrales sobre el uso del ancho de banda, la definición de aplicaciones, la selección de rutas y el panorama de amenazas a la seguridad no solo proporcionan visibilidad en la red extendida, sino que ayudan a los administradores a rediseñar rápidamente las políticas, basándose en estadísticas históricas, para mejorar el rendimiento de la red y las aplicaciones.

## ZTNA
### Que es?
El ZTNA establece una sesión segura entre una entidad final y una red, al mismo tiempo que garantiza un control granular sobre el acceso a los recursos y ejerce confianza cero, independientemente de la ubicación de la entidad final o de la red.
Parte del principio de confianza cero es la práctica del acceso con privilegios mínimos, lo que significa que a los usuarios solo se les concede acceso a los recursos necesarios para cumplir los requisitos de su trabajo, y nada más.
Como concepto de seguridad de red, la confianza cero opera bajo la premisa de que no se debe confiar en ningún usuario ni dispositivo dentro o fuera de la red, a menos que se verifique minuciosamente su identificación y estado de seguridad. La confianza cero opera bajo el supuesto de que las amenazas, tanto fuera como dentro de la red, son omnipresentes. La confianza cero también supone que cada intento de acceder a una red o aplicación es una amenaza.
Por lo tanto, independientemente de si la entidad final es remota o local, el dispositivo informático que se conecta establece automáticamente una sesión cifrada con la red. En concreto, esta conexión se produce entre un cliente de ZTNA en la entidad final y el proxy de acceso de ZTNA, que podría ser un firewall. El punto proxy oculta para el exterior las ubicaciones de las aplicaciones solicitadas. El proxy dirige la solicitud del cliente a la aplicación, que podría estar en las instalaciones locales o en la nube, solo si el usuario cumple los requisitos de acceso.
Otros componentes de ZTNA son la autenticación y la seguridad. Debido a que el usuario se identifica mediante la autenticación en un servidor backend de las instalaciones locales o una Identidad como servicio (IDaaS), la política se puede aplicar con base en las funciones del usuario.
Además, el servidor de políticas de ZTNA ejecuta políticas para controlar el acceso, especificamente a las aplicaciones. Por ejemplo, el acceso se podría basar, en parte, en la geolocalización. Por lo tanto, si el dispositivo remoto se conecta desde un punto inesperado del mundo, se podría denegar el acceso a una aplicación o reducir los privilegios.
Del mismo modo, si un dispositivo no pasa la verificación de seguridad, se le podría negar el acceso al usuario. La seguridad consta de firewalls y proxy de acceso de ZTNA, que controlan el acceso y dan seguridad a los recursos de la aplicación.
### Como funciona?

Cuando el endpoint se conecta al proxy de acceso de ZTNA, FortiGate desafía al endpoint para la identificación del dispositivo.
El endpoint envía el certificado del dispositivo a FortiGate, demostrando la identidad del dispositivo. Luego, FortiGate aplica las etiquetas y reglas asociadas, y determina si debe rechazar la solicitud, o permitir que el dispositivo proceda.

FortiGate desafía al endpoint para la autenticación del usuario.
El endpoint solicita al usuario sus credenciales y entrega las credenciales al proxy de acceso.
A su vez, el proxy de acceso envía las credenciales del usuario al backend para su autenticación.
El servidor de autenticación puede ser un Active Directory, un directorio LDAP, una base de datos o una IDaaS.
El proxy de acceso de ZTNA recupera la identidad del usuario, junto con la información de sus funciones. FortiGate usa la información de las funciones para facilitar la determinación de si el usuario tiene permiso para acceder a la aplicación de red solicitada.

Por último, suponiendo que el dispositivo y el usuario se identificaron, y que las etiquetas y reglas de los dispositivos adicionales a las funciones del usuario permitan el acceso al recurso, se inicia una sesión cifrada entre el cliente de ZTNA y el proxy de acceso de ZTNA, y el usuario obtiene acceso a la aplicación.
## Seguridad en la nube
### Antes que la nube se creara
Aunque "la nube" tiene un gran reconocimiento público, pocos entienden lo que realmente significa.
Antes de que la nube se creara, las organizaciones adquirían sus propios sistemas informáticos para ejecutar el software de aplicación necesario para el funcionamiento de la empresa. Estos sistemas informáticos estaban ubicados en las instalaciones de la organización y los administraban equipos de expertos. Aunque no siempre era así, por lo general, había más de un sistema informático (o servidor) por aplicación principal.
Esta configuración era cara por el costo de capital del hardware informático y el costo de la mano de obra de los expertos residentes que lo mantenían todo en funcionamiento; aunque mereció la pena. Estos sistemas aumentaron la productividad global y ayudaron a mantener la ventaja competitiva.

No hace mucho tiempo, una persona se dio cuenta de que, de todos sus sistemas informáticos, solo unos pocos estaban completamente ocupados en un momento dado. La mayoría estaban inactivos, esperando a que llegara la siguiente transacción. En resumen: había muchos recursos desaprovechados.

### Virtualización
Se ha desarrollado una nueva forma de usar el hardware de los servidores llamada virtualización. La virtualización proviene de una tecnología antigua de la informática de mainframe que permite que un servidor único ejecute los sistemas operativos y las aplicaciones de varios servidores al mismo tiempo. La virtualización consolida las cargas de trabajo en menos servidores, lo que aumenta su uso y ahorra dinero.

### Introducción a la nube
Se ha desarrollado una nueva forma de usar el hardware de los servidores llamada virtualización. La virtualización proviene de una tecnología antigua de la informática de mainframe que permite que un servidor único ejecute los sistemas operativos y las aplicaciones de varios servidores al mismo tiempo. La virtualización consolida las cargas de trabajo en menos servidores, lo que aumenta su uso y ahorra dinero.

### Infraestructura como servicio(IaaS)
### Plataforma como servicio(PaaS)
### Software como servicio(PaaS)
![Captura de pantalla 2025-11-04 a la(s) 5.18.29 p.m.](https://hackmd.io/_uploads/S1z6sldJWe.png)


