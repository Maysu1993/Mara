# Fortinet: Fundamentos de Ciberseguridad

---

# CURSO 1

---

## Módulo 2 — Actores de Amenaza

### ¿Qué es un actor de amenaza?
Son personas que intentan robar, sabotear o impedir que utilices sistemas informáticos o accedas a información que estás autorizado a utilizar.

**Se agrupan según:**
- Personalidad
- Motivaciones
- Método de ataque

---

### Tipos de actores maliciosos

*Explorador · Hacktivista · Ciberterrorista · Cibercriminal · Ciberguerrero*

#### Explorador
Es el menos nefasto. La notoriedad es su mayor motivador: actúa más por curiosidad, queriendo saber qué tipo de debilidades y vulnerabilidades existen en las redes informáticas. Uno de los métodos más usados es la suplantación de identidad.

![Explorador](https://i.imgur.com/wvOk97S.png)

#### Hacktivista
Está motivado por la ideología o animado por una fuerza emotiva. El idealismo los ayuda a actuar colectivamente hacia el enemigo en común. Entre sus estrategias comunes se encuentran las botnets y los ataques DDoS.

#### Ciberterrorista
También impulsado por una ideología, pero su ataque es más violento hacia una sociedad ya que es más masivo: se dirigen a infraestructuras en línea (centrales nucleares, redes eléctricas, etc.). Su método favorito es la suplantación de identidad dirigida.

#### Cibercriminal
Su motivación es egocéntrica: quieren dinero. Lo logran mediante robo de identidad, suplantación de identidad, malware o ransomware.

#### Ciberguerrero
Son los menos interesados en sí mismos pero los más peligrosos, porque tienen a su disposición los recursos de una nación. Dependiendo del estado por el que luchen pueden ser buenos o malos. Pueden hacer espionaje, extorsión o uso de ciberarmas para dañar. Corrigen las vulnerabilidades de zero days.

---

### Clasificación por sombrero

| Tipo | Descripción |
|------|-------------|
| **White hat** | Ético |
| **Black hat** | Malicioso |
| **Grey hat** | No es malicioso pero no siempre es ético |
| **Blue hat** | Contratación por un tercero |

---

### ¿Qué es una amenaza a la ciberseguridad?
Una amenaza a la ciberseguridad es una acción que aprovecha una vulnerabilidad y provoca daños en una red o sistemas informatico.

**Tres componentes:**
1. Vulnerabilidad
2. Mecanismo
3. Ruta

**Ejemplos:**
- La vulnerabilidad es el usuario.
- El mecanismo es el malware y el mensaje de ingeniería social.
- La ruta es el correo electrónico.


---

### Categorías principales de amenaza a la ciberseguridad

- **Ingeniería social:** manipulación psicológica
- **Malware:** diseñado para interrumpir, dañar u obtener acceso no autorizado
- **Acceso no autorizado:** usar a alguien más sin autorización, observar y aprovechar cualquier falla para acceder
- **Falla del diseño del sistema:** defecto de seguridad que se puede aprovechar

---

### Vectores comunes de ataque
DDoS, DoS, suplantación de identidad, ransomware, etc.

---

### Panorama de amenazas

La inteligencia frente a amenazas es el conocimiento basado en evidencia, incluyendo el contexto, los mecanismos, los indicadores y las implicaciones sobre una amenaza o peligro existente.

**CVSS**

![CVSS](https://i.imgur.com/wvOk97S.png)



---

### Procesamiento de inteligencia frente a amenazas

1. Identificar las ciberamenazas más importantes que se deben detener.
2. Recopilar información sobre amenazas de fuentes internas y externas.
3. Procesar la información.
4. Analizar la información y buscar los indicadores de intrusión.
5. Difundir los análisis y cualquier información nueva.

---

### Marcos de ataque

![Marco](https://i.imgur.com/29EVEOf.png)

Esto se desarrolló para ataques más desarrollados (APT — amenazas persistentes avanzadas). Son como una caja de herramientas para que los profesionales de ciberseguridad mejoren la postura de seguridad de una organización.

![Ejemplos de marcos](https://i.imgur.com/9ZDRuT9.png)

#### Cadena de eliminación de ciberseguridad (Lockheed Martin)

Modelo de siete pasos que describe las etapas de un ciberataque, desde el reconocimiento inicial hasta la exfiltración de datos.

![Cadena](https://i.imgur.com/Wqvrhxw.png)

1. **Reconocimiento:** El atacante recopila información sobre el objetivo y sus vulnerabilidades mediante redes, motores de búsqueda, etc.
2. **Armamento:** Crea una carga útil o vulnerabilidad de seguridad (malware, troyano) empaquetada de forma difícil de detectar.
3. **Entrega:** Se entrega la carga útil al objetivo por correo electrónico o mediante la inyección en sitios web vulnerables.
4. **Vulnerabilidad de seguridad:** Se usa la carga útil para acceder al objetivo.
5. **Instalación:** El atacante se afianza en el sistema del objetivo para permanecer o eliminar sus rastros.
6. **Comando y control:** El atacante establece un método de comunicación remoto con el sistema infectado.
7. **Exfiltración:** Se logra el objetivo final: extraer la información.

> **Nota:** Tiene como desventaja que supone que el ataque es externo.

#### MITRE ATT&CK

Recurso en constante evolución que proporciona un lenguaje y enfoque común para detener y mitigar ataques. Tiene una matriz organizada en "técnicas" que describen tácticas y métodos específicos que usan los atacantes, agrupadas en categorías como "acceso inicial", "ejecución" y "evasión de la defensa".

**Tácticas, Técnicas y Procedimientos (TTP).**

---

## Módulo 3 — Ingeniería Social

### ¿Qué es?
Es el acto de manipular a las personas para obtener ventajas, por lo general a expensas de los objetivos. Puede tener como resultado la pérdida de información, chantaje, interrupción, etc.

**Ejemplo:** cuando un actor malicioso convence a su objetivo de hacer ciertas cosas para así obtener información.

---

### Técnicas de ingeniería social

La ingeniería social sigue siendo una de las principales causas de las violaciones de datos en la red. Se refiere a una amplia gama de ataques que aprovechan las emociones humanas para manipular a un objetivo, ya sea incitando a la acción o a la inacción.

**Dos características importantes:**
1. El objetivo es lograr un resultado deseable para el orquestador.
2. El método es la manipulación emocional.

**Señales para detectar un ataque de ingeniería social:**
- Una petición emocional que aprovecha el miedo, la curiosidad, la excitación, la ira, la tristeza o la culpa.
- Un sentido de urgencia en torno a la solicitud.
- Un intento de establecer confianza con el destinatario.

**Suplantación de identidad (Phishing):** aprovecha el correo electrónico como vector de ataque y se dirige a cualquier persona con una dirección de correo. Es correo no deseado malicioso enviado masivamente esperando que al menos una persona caiga. También puede referirse como categoría a: suplantación dirigida, alto perfil, smishing y vishing.

---

### Ingeniería social usando correo electrónico

![Correo electrónico](https://i.imgur.com/ajDkgud.png)

---

### Ingeniería social usando medios distintos al correo electrónico

#### Smishing
- **Vector:** Texto
- **Objetivo:** Cualquier persona o grupo

![Smishing](https://i.imgur.com/7Nm3pas.png)

#### Vishing
- **Vector:** Teléfono / Voz
- **Objetivo:** Cualquier persona o grupo

---

### Ingeniería social — Medios electrónicos agnósticos

![Agnóstico 1](https://hackmd.io/_uploads/H1SUe2Lk-e.png)
![Agnóstico 2](https://hackmd.io/_uploads/SkXwl3IJbx.png)
![Agnóstico 3](https://hackmd.io/_uploads/Skphx3UJZl.png)

---

### Técnicas de ingeniería social — Parte B

#### Tipos de ataques de IS

**Scareware (Ataque rogue):** Aparece una advertencia indicando que la computadora está infectada por malware y que se debe descargar un antivirus a través del enlace proporcionado. El software ofrecido suele ser falso o estar infectado.

**Ataque "abrevadero":** El atacante compromete un sitio que probablemente visite un grupo objetivo. Los actores maliciosos aprovechan redes sociales como Facebook y LinkedIn para cultivar relaciones con sus objetivos.

![Tipos IS](https://hackmd.io/_uploads/S1N0b38kWe.png)

**Honeypot:** Crea una trampa virtual para atraer atacantes y así evaluar, analizar sus métodos y mejorar los sistemas de seguridad.

![Honeypot](https://hackmd.io/_uploads/HyGgG38Jbg.png)

![Más tipos](https://hackmd.io/_uploads/B1H4f2IyZe.png)

---

## Amenaza Interna

Una amenaza interna se refiere a un individuo o individuos que trabajan para una organización o tienen acceso autorizado a sus redes y que suponen una amenaza física o ciberamenaza. Generalmente es un empleado actual, pero también podría ser un exempleado, contratista, socio comercial, miembro de la junta directiva o un impostor.

**Dos grupos principales:**
- **Negligentes:** ayudan involuntariamente a los actores maliciosos por error humano, mal juicio o descuido.
- **Maliciosos:** actúan intencionalmente en contra de la organización.

Los objetivos de las amenazas internas maliciosas (turncloaks) incluyen el espionaje, el fraude, el robo de propiedad intelectual y el sabotaje.

![Amenaza interna](https://hackmd.io/_uploads/H1oprh8yZg.png)

**Tres tipos de amenaza interna maliciosa:**
- **Lobos solitarios:** trabajan de forma independiente y sin influencias externas.
- **Colaboradores:** usuarios autorizados que trabajan con un tercero (competidor, Estado-Nación, crimen organizado, etc.).
- **Topos:** personas del exterior que obtienen acceso haciéndose pasar por proveedor, socio, contratista o empleado.

![Tipos de amenaza interna](https://hackmd.io/_uploads/S1Mv8hUybg.png)

---

### Métodos con vectores de amenaza físicos y digitales

![Método 1](https://hackmd.io/_uploads/HJXcv3Uy-e.png)
![Método 2](https://hackmd.io/_uploads/H1Tjv2LJbg.png)
![Método 3](https://hackmd.io/_uploads/HJn2PnUk-l.png)
![Método 4](https://hackmd.io/_uploads/SyhpPh8J-x.png)

**Indicadores de comportamiento:** empleado descontento, guardar rencor, asumir más tareas con excesivo entusiasmo, infracciones rutinarias, desprecio abierto de políticas, intentos de burlar la seguridad.

**Indicadores digitales (actividad anómala en red):**
- Actividad a horas inusuales (ej. conectarse a la red a las 4:00 a.m.)
- Volumen de tráfico inusual (transferencia de grandes cantidades de datos)
- Tipo de actividad (acceder a recursos atípicos no relacionados con su trabajo)
- Solicitudes repetidas de acceso a sistemas fuera de su función laboral
- Uso de dispositivos no autorizados (unidades USB)
- Rastreo de la red y búsqueda deliberada de información confidencial
- Envío de información sensible por correo electrónico hacia el exterior

---

### Acciones personales para proteger los activos de una organización

- Conocer las políticas de seguridad de su organización.
- No utilizar atajos que evadan los protocolos de seguridad.
- No dejar las credenciales de inicio de sesión en notas adhesivas.
- No permitir el tailgating.
- No almacenar documentos digitales confidenciales sin cifrar ni dejar documentos físicos desprotegidos.
- No desactivar la seguridad ni los controles de los endpoints.
- No compartir información confidencial con personas no autorizadas.
- Utilizar parches de seguridad tan pronto como estén disponibles las actualizaciones.

---

### Acciones en la red para proteger los activos de una organización

Identificar los activos críticos (lógicos y físicos): redes, sistemas, información confidencial, instalaciones y personas. Clasificar y priorizar cada activo e identificar el estado actual de protección.

Herramientas como aplicaciones de aprendizaje automático (ML) pueden ayudar a analizar el flujo de datos y priorizar alertas. El análisis del comportamiento de usuario y evento (UEBA) ayuda a detectar, analizar y alertar al equipo de seguridad sobre posibles amenazas internas.

![Red acciones](https://hackmd.io/_uploads/HJnp22Ikbe.png)

---

## Fraude, Estafas y Campañas de Influencia

### Ciberfraude y Ciberestafas

![Ciberfraude](https://hackmd.io/_uploads/B1Qj62LyZe.png)

**Ejemplos:**
- **Sitios web gubernamentales de imitación:** actores maliciosos crean sitios falsos para robar credenciales o información de tarjetas de crédito.
- **Estafas de citas y romances:** aprovechan sitios de citas, redes sociales y salas de chat para obtener datos personales o dinero.
- **Fraude de vacaciones:** ofrecen vacaciones y alojamientos en línea que no existen.
- **Compromiso de correo electrónico empresarial (BEC):** el actor hackea una transacción por correo entre cliente y proveedor, luego envía una factura duplicada con sus datos bancarios.
- **Pharming:** redirigen el tráfico de un sitio legítimo a uno falso (ej. sitio bancario).
- **Estafas con tarjetas de felicitación:** envían tarjetas de felicitación maliciosas en cumpleaños o festividades.

---

### Campañas de influencia en línea

![Campañas](https://hackmd.io/_uploads/HyN8C3Ukbl.png)

---

## Módulo 4 — Malware

### ¿Qué es el malware?
Abreviatura de *software malicioso*. Interrumpe, daña u obtiene acceso no autorizado a una computadora. Los actores maliciosos lo diseñan para modificar el comportamiento de un programa, espiar, exfiltrar datos, cifrar información y pedir rescate, o denegar el acceso a un sistema.

**Síntomas comunes de infección:**
- Los dispositivos se vuelven lentos o no responden.
- Aparición de ventanas emergentes no deseadas.
- Las aplicaciones se cierran inesperadamente.
- Las aplicaciones no se cargan desde el menú inicio.
- El sistema falla y la computadora se apaga sola.
- Correos electrónicos en la bandeja de salida que no fueron enviados por el usuario.
- Cambios inexplicables (página de inicio modificada, configuración del navegador alterada).

![Malware síntomas](https://hackmd.io/_uploads/Hyy6FpL1-g.png)

---

### Virus

![Virus](https://hackmd.io/_uploads/H10RK6Ly-e.png)

**Características definitorias:**
- Un usuario debe invocarlos.
- Se insertan o adhieren en aplicaciones legítimas.
- Se diseñan para propagar la infección a otras aplicaciones y computadoras de la red.

![Características virus](https://hackmd.io/_uploads/ByKZq681Wx.png)

#### Tipos de virus

![Tipo 1](https://hackmd.io/_uploads/B1o79pIyZg.png)
![Tipo 2](https://hackmd.io/_uploads/HyZ8qp8Jbx.png)
![Tipo 3](https://hackmd.io/_uploads/S1LvcaIybl.png)
![Tipo 4](https://hackmd.io/_uploads/B1Hd5pUybg.png)
![Tipo 5](https://hackmd.io/_uploads/B1yY5TUy-x.png)
![Tipo 6](https://hackmd.io/_uploads/Sy4sqp8JZe.png)

---

### Otros tipos de malware (no virus)

- **Gusano:** No necesita un sistema host y se puede propagar entre sistemas y redes sin acción del usuario (a diferencia del virus que requiere ejecución del usuario).
- **Rootkit:** Conjunto de programas diseñados para permitir acceso a un área no permitida. Enmascara su existencia. Funciona cerca o dentro del kernel del sistema operativo. No puede autorreplicarse ni propagarse por los sistemas.
- **Ataque de inyección de DLL:** Permite ejecutar código malicioso reemplazando archivos DLL legítimos. Difícil de detectar porque implica el uso de archivos y procesos legítimos.
- **Ataque de manipulación de controlador:** Cambia o reemplaza el software del controlador que permite al sistema operativo comunicarse con dispositivos de hardware.
- **Programa potencialmente no deseado (PUP):** Programa no deseado aunque el usuario consintió su descarga. Incluye spyware, adware y dialer; generalmente se descarga junto con otro programa.
- **Spyware:** Obtiene información encubierta sobre las actividades del usuario mediante transmisión secreta de datos desde el disco duro.

![Malware tipos 1](https://hackmd.io/_uploads/HyKwoaUy-x.png)
![Malware tipos 2](https://hackmd.io/_uploads/rJlJciTU1Wx.png)
![Malware tipos 3](https://hackmd.io/_uploads/Hk65jT81Zg.png)
![Malware tipos 4](https://hackmd.io/_uploads/HktTo6UyWe.png)

---

### Vector de ataque

![Vector 1](https://hackmd.io/_uploads/BJDon681be.png)
![Vector 2](https://hackmd.io/_uploads/H1C0na81Zl.png)
![Vector 3](https://hackmd.io/_uploads/HJZZp6IkZl.png)

#### Vectores de ataque de malware

![Malware vector 1](https://hackmd.io/_uploads/ryoma681Ze.png)
![Malware vector 2](https://hackmd.io/_uploads/ryAS6aUkWg.png)
![Malware vector 3](https://hackmd.io/_uploads/SJpITTU1Wl.png)
![Malware vector 4](https://hackmd.io/_uploads/HJltpp8y-x.png)
![Malware vector 5](https://hackmd.io/_uploads/H1p5apIyZl.png)
![Malware vector 6](https://hackmd.io/_uploads/BJIjTpUyWg.png)

---

# CURSO 2

---

## Firewalls

![Firewall general](https://hackmd.io/_uploads/H14BEgD1-l.png)

### Evolución de los Firewalls

#### Primera generación — Firewall de filtro de paquetes (sin estado)
Examina la información de los protocolos de la capa de transporte y enrutamiento: direcciones de red de origen y destino, protocolos y números de puerto. Las reglas se ordenan en una lista y la coincidencia se hace de arriba a abajo. Aprueba un paquete si las direcciones, protocolo y número de puerto coinciden con su política; de lo contrario, el paquete se descarta.

![Firewall 1G](https://hackmd.io/_uploads/Hyi5NgwJbx.png)

#### Segunda generación — Firewall con estado
Compensa las limitaciones del firewall sin estado desarrollando criterios adicionales para bloquear o aprobar tráfico. Observa las conexiones de red a lo largo del tiempo mediante el seguimiento de la comprobación de 5-tuplas y el estado de la conexión en su tabla de sesiones. Si una conexión se comporta inadecuadamente o el tráfico de retorno no coincide con el de entrada, el firewall bloquea esa conexión.

![Firewall 2G](https://hackmd.io/_uploads/SJMsIgP1Wl.png)

> **Limitación:** No puede bloquear paquetes no autorizados si usan un protocolo aceptable como HTTP, ya que no puede distinguir entre distintos usos del mismo puerto.

![Limitación 2G](https://hackmd.io/_uploads/SkBVvlvkZl.png)

#### Tercera generación — Filtrado de capa de aplicación
Profundiza en las cargas útiles de los datos. Comprende los protocolos de la capa de aplicación (HTTP, FTP, DNS) y controla los distintos usos del mismo protocolo básico. HTTP puede distinguir entre tráfico de navegador, blog, intercambio de archivos, comercio electrónico, redes sociales, VoIP y correo electrónico. Los firewalls UTM también combinan antivirus, filtrado de spam, IPS y VPN.

![Firewall 3G](https://hackmd.io/_uploads/BkjktlP1Wg.png)

#### Next-Generation Firewalls (NGFW)
Proporcionan funcionalidades de seguridad avanzadas. Funcionan como el control de seguridad de un aeropuerto con varios puntos de verificación. Examinan los paquetes y toman decisiones basadas en reglas para aprobar o rechazar el tráfico.

![NGFW 1](https://hackmd.io/_uploads/H1ef9xwJ-l.png)
![NGFW 2](https://hackmd.io/_uploads/SJtKqxPJ-e.png)
![NGFW 3](https://hackmd.io/_uploads/SJ1sclwk-l.png)
![NGFW 4](https://hackmd.io/_uploads/rkEeoewJ-l.png)

También ofrecen inspección de alto rendimiento y mayor visibilidad de la red para proteger centros de datos modernos y distribuidos en infraestructura de TI compleja e híbrida. La inspección incluye aplicaciones, recursos informáticos, análisis, datos cifrados y almacenamiento en varias nubes privadas y públicas.

---

## Control de Acceso a la Red (NAC)

El NAC es un dispositivo o máquina virtual que controla el acceso a una red. Tiene visibilidad completa de los perfiles de red y categoriza automáticamente los dispositivos. Evalúa y clasifica el cumplimiento de las políticas de seguridad por usuario, dispositivo, ubicación, sistema operativo y otros criterios.

NAC comenzó como método de autenticación y autorización de dispositivos (estándar IEEE 802.1X), con tres partes: el dispositivo cliente, el autenticador y el servidor de autenticación.

![NAC](https://hackmd.io/_uploads/Hy_DJ-wJbe.png)

#### Portal cautivo
Método para controlar el acceso a una red pública. Ejemplo: al conectarse a una red en una cafetería, se debe interactuar con una página web que pide aceptar condiciones legales antes de conceder el acceso.

#### Retos del NAC
- **BYOD:** Los dispositivos personales no están controlados por el departamento de MIS de la empresa.
- **IoT:** Los dispositivos IoT expanden drásticamente la superficie de ataque y se conectan de vuelta a las redes de los proveedores.

#### Funcionalidades
Lo primero que hace NAC es crear perfiles de todos los dispositivos conectados. Luego permite el acceso a los recursos de la red según el perfil del dispositivo, definido por función. Si un dispositivo no tiene un perfil definido, se deniega la entrada.

Ejemplo: NAC puede permitir que una cámara IP se conecte a un servidor NVR, pero impedir que se conecte a un servidor de finanzas. Si la cámara es comprometida, el malware solo puede infectar aquellos objetos a los que el dispositivo tiene permiso para conectarse.

![NAC funcionalidades](https://hackmd.io/_uploads/ry1VLWwkZx.png)

NAC se puede integrar en el marco de seguridad para responder automáticamente ante violaciones de datos, notificar al SOC y coordinarse con otros dispositivos para neutralizar amenazas.

#### Importancia del NAC

- **Mayor seguridad:** supervisa todos los dispositivos autenticando usuarios y dispositivos en el momento en que entran en la red.
- **Ahorro de costos:** el seguimiento y protección automatizados requieren menos recursos de TI.
- **Automatización:** verifica automáticamente usuarios y políticas de seguridad de los endpoints.
- **Mejores experiencias de TI:** el acceso sin fricciones proporciona una mejor experiencia de usuario.
- **Facilidad de control:** sirve como inventario permanente de todos los endpoints autorizados por la organización.

---

## Sandbox

### ¿Qué es?
Sistema que confina las acciones de una aplicación dentro de un entorno virtual seguro. Aísla la aplicación para que cualquier intención maliciosa se pueda descubrir de forma segura, sin causar daños a la red. Si ocurre algo peligroso, solo afecta al sandbox.

![Sandbox](https://hackmd.io/_uploads/Byeu6-D1-g.png)

### ¿Por qué se creó?
Los actores de amenazas aprovechan vulnerabilidades de aplicaciones legítimas para comprometer dispositivos. Los firewalls y antivirus pueden detener amenazas conocidas, pero no pueden hacer nada contra los **ataques de día cero** (cuando se aprovecha una vulnerabilidad desconocida). El Sandboxing se creó como defensa contra estos ataques.

### ¿Cómo funciona?
Ofrece un espacio virtual aislado que imita los sistemas informáticos. Permite que las posibles amenazas se ejecuten de manera segura dentro de estos sistemas virtuales y las analiza. Si detecta un comportamiento malicioso, pone el archivo en cuarentena e impide que acceda a otros dispositivos de la red.

### Evolución del Sandbox (tres generaciones)

1. **Primera generación:** Dificultades para compartir información sobre amenazas con otros dispositivos debido a dependencia de arquitecturas independientes. Cada solución requería su propia consola de administración.

2. **Segunda generación:** Mejor integración con otros dispositivos de seguridad. Permitía a los analistas correlacionar la inteligencia frente a amenazas de forma centralizada desde un panel único. También podía compartir información con servicios de inteligencia en la nube.

3. **Tercera generación:** Los actores de amenazas aprovechan la IA para acelerar el desarrollo de nuevas vulnerabilidades. Los sandboxes de tercera generación no solo detectan brechas sino también las previenen, usando el lenguaje universal MITRE ATT&CK para categorizar modelos y metodologías de amenazas.

### FortiSandbox

![FortiSandbox 1](https://hackmd.io/_uploads/BJGIkfD1-l.png)
![FortiSandbox 2](https://hackmd.io/_uploads/HkAd1fDybe.png)

---

## WAF (Web Application Firewall)

### ¿Qué es?
Dispositivo o software que monitorea el tráfico HTTP/HTTPS y puede bloquear el tráfico malicioso hacia y desde una aplicación web. Los WAF se centran en el contenido de aplicaciones web, mientras que los firewalls de borde forman puertas seguras a nivel de red. Al inspeccionar el tráfico HTTP, un WAF puede detener ataques como inyección SQL, XSS, inclusión de archivos y configuraciones incorrectas de seguridad.

### Orígenes
El antecesor del WAF es el firewall de aplicaciones desarrollado en los años 90, que se centraba en algunos protocolos como FTP y RSH. Con el debut de la World Wide Web en 1991, la necesidad de una defensa contra ciberataques basados en HTTP se convirtió en prioridad máxima.

### Ejemplo de vulnerabilidad (Inyección SQL)
Un actor malicioso, al pedirle que introduzca una contraseña, escribe una expresión SQL válida (como `2+2=4`). Cuando esta se envía a la base de datos para verificación, se identifica como verdadera y el actor obtiene acceso. La primera generación de WAF usaba listas de bloqueo y atributos HTTP basados en firmas para combatir esto.

### Evolución del WAF

La creciente popularidad de Internet aumentó los falsos positivos hasta proporciones que superaban la capacidad de los equipos de TI. La siguiente generación de WAF incorporó aprendizaje del comportamiento de las aplicaciones para crear referencias y evaluar si los intentos de acceso eran normales o sospechosos. También introdujo monitoreo de sesiones y heurística para detectar variantes de firmas conocidas.

No había defensa contra ataques de día cero. La siguiente evolución fue el aprendizaje automático (ML): análisis del comportamiento a velocidad de máquina, adaptándose a atributos siempre cambiantes de una amenaza.

**Características adicionales incorporadas:**
- Defensa DDoS
- Reputación de IP
- Antivirus
- Prevención de pérdida de datos (DLP)

Los WAF modernos pueden compartir información con otros dispositivos de seguridad (firewalls, sandboxes), formando parte de una defensa colectiva. Los ataques de día cero se pueden exponer en entornos sandbox y sus firmas se pueden compartir con otras redes.

![WAF evolución](https://hackmd.io/_uploads/Bk0m4fDkWg.png)
![WAF moderno](https://hackmd.io/_uploads/ryrkSMvJWl.png)

---

## Puerta de Enlace de Correo Electrónico (SEG)

### El correo electrónico como vector de ataque
El correo electrónico ofrece comunicación rápida y permite el anonimato. El **spam** malicioso que incita a hacer clic en enlaces o descargar archivos se denomina suplantación de identidad (phishing). En 2004 se registraron 176 ataques de phishing; en 2012 eran 28,000. Una fuente estimó 500 millones de ataques en 2022, con un costo promedio de $4.35 millones de dólares por violación de datos.

### Puerta de enlace segura de correo electrónico

![SEG 1](https://hackmd.io/_uploads/SJIMPfv1be.png)
![SEG 2](https://hackmd.io/_uploads/rJezPzvJWe.png)
![SEG 3](https://hackmd.io/_uploads/By8jPzD1bx.png)

#### Funciones de la SEG
- **Autenticación y verificación de identidades:** Admite varios métodos para autenticar la identidad de los remitentes y validar fuentes de correo electrónico.
- **Filtrado de malware:** Escanea archivos adjuntos y enlaces para detectar malware.
- **Cifrado:** Protege el contenido del acceso no autorizado durante la transmisión.
- **Firma digital:** Ayuda a identificar al remitente y verificar la integridad del contenido.

#### Marco de la Política del Remitente (SPF)
Cuando se envía un correo, el servidor receptor verifica el registro SPF del dominio del remitente para confirmar si la dirección IP está autorizada. Si no aparece en el registro SPF, el correo puede marcarse como sospechoso o rechazarse. SPF trabaja junto con DKIM y DMARC para proporcionar seguridad integral del correo electrónico.

#### Nuevas tecnologías SEG
Las SEG modernas incorporan mayor automatización y aprendizaje automático. En algunos casos se integran con firewalls de borde y sandboxes.

> **FortiMail®** de Fortinet es una SEG que incluye todas estas características, con soporte para SPF, DKIM y DMARC, e integración con firewalls y soluciones de sandboxing.

---

## Tipos de Filtrado de Contenido

### ¿Qué es?
Proceso para filtrar o restringir el acceso a correos electrónicos, páginas web, ejecutables y otros elementos sospechosos. Medida de seguridad habitual incorporada en firewalls de Internet que bloquea contenidos nocivos, ilegales o inapropiados.

### Tipos de filtros de contenido

#### Filtros de motores de búsqueda
Clasifican los contenidos web de acuerdo con su texto e imágenes, asignando una ponderación específica medida contra un conjunto de clasificación (seguro, moderado o estricto). El aprendizaje automático ayuda a definir las ponderaciones para evitar falsos positivos.

#### Filtros de correo electrónico
Revisan el encabezado de los correos entrantes comparándolo con listas negras en tiempo real. Analizan el cuerpo del mensaje para detectar contenido inapropiado, revisan archivos adjuntos e identifican palabras clave o tipos de archivos no autorizados (como ejecutables). Permiten bloquear, poner en cuarentena o rechazar correos maliciosos.

#### Filtros de contenido basados en DNS
Revisan el sitio web durante la resolución del dominio a través de servidores DNS usando listas de bloqueo. Si el sitio no está permitido, el navegador se redirige a un mensaje de sustitución. Alternativamente, una empresa puede definir una lista blanca con todos los sitios aprobados.

#### Filtros web
Similares a los filtros DNS pero con la función adicional de categorizar los sitios web. Por ejemplo, las escuelas en Estados Unidos deben adherirse a la Ley de Protección de la Infancia en Internet (CIPA). Todos los sitios y sus contenidos se clasifican mediante aprendizaje automático, permitiendo o bloqueando el acceso según la categoría y el perfil del usuario.

### Ventajas

![Ventajas filtrado](https://hackmd.io/_uploads/rJ7BCMDJZg.png)

---

## Wi-Fi Segura

### ¿Qué es?
La Wi-Fi, basada en las normas IEEE 802.11, es una tecnología inalámbrica para la conexión en red de área local de dispositivos. Su desarrollo se basó en protocolos similares a Ethernet. Entre las tecnologías comunes se incluyen enrutadores, switches y DNS. Las redes inalámbricas generalmente se conectan a redes cableadas: el enrutador de casa se convierte en la puerta de enlace hacia la WAN a través de conexiones DSL, Internet por cable u otras.

### Ventajas y desventajas
- **Principal ventaja:** Movilidad: puede caminar con un dispositivo por cualquier lugar dentro del alcance Wi-Fi.
- **Principal desventaja:** Seguridad. Si no se siguen los protocolos adecuados, los actores maliciosos pueden escuchar las comunicaciones.

### Evolución de los protocolos de protección
- **WEP:** Privacidad equivalente por cable (primera generación).
- **WPA / WPA2:** WPA2 emplea AES para cifrar datos. Introdujo autenticación de nivel empresarial (802.1x). Aún vulnerable a frases de contraseña débiles.
- **WPA3 (2018):** Nuevo establecimiento de comunicación más seguro, método más fácil para agregar dispositivos, mayores tamaños de clave y otras características de seguridad.

### Riesgos de ingeniería social en Wi-Fi

1. **Honeypots en lugares públicos:** Los actores maliciosos instalan puntos de acceso (AP) falsos en lugares como cafeterías. Personas desprevenidas que se conectan exponen sus credenciales y datos de tarjeta de crédito. Desconfíe aunque el nombre de la red parezca legítimo.

2. **Ataque Evil Twin (man-in-the-middle):** Los dispositivos recuerdan redes a las que se conectaron en el pasado y las buscan automáticamente. Un atacante puede escuchar a un teléfono buscando una red conocida, configurar un AP falso con ese nombre y engañar al dispositivo para que se conecte. Nunca se debe confiar en un SSID con seguridad abierta; se debe usar cifrado adicional o VPN.

### Buenas prácticas para configurar una Wi-Fi
- Cambiar el nombre SSID y la frase de contraseña predeterminada del dispositivo.
- Elegir una frase de contraseña compleja.
- Activar la seguridad/cifrado en el enrutador.
- Actualizar al firmware más reciente.
- Seleccionar el protocolo de seguridad más reciente (WPA3).
- Monitorear los dispositivos conectados a la red.
- Los AP más recientes pueden detectar y suprimir AP no autorizados (verificar legalidad según jurisdicción).

**Características clave de una LAN inalámbrica segura:** cifrado robusto, autenticación robusta, segmentación de red y red de invitados, listas de control de acceso, monitoreo de la red, compatibilidad con software cliente.

---

## Técnicas de Endurecimiento de Endpoints

### Endurecimiento de endpoints
Con la proliferación de dispositivos IoT, el número de endpoints a proteger aumentó exponencialmente. El endurecimiento de endpoints se puede dividir en cuatro categorías:

1. **Controles administrativos:** contraseñas seguras, restricción de acceso de usuarios y red usando el Principio de Privilegio Mínimo (PoLP).
2. **Protección de endpoint local:** seguridad del sistema operativo, administración de arranque, cifrado del disco local y técnicas de DLP.
3. **Mantenimiento de endpoint:** parches y actualizaciones regulares, verificaciones periódicas de políticas y copias de seguridad precisas.
4. **Monitoreo de dispositivos:** a través de un cliente EPP, sistemas IDS especializados en la red, o plataformas EDR que pueden bloquear preventivamente ataques nuevos.

---

### Controles administrativos

La forma más sencilla de proteger endpoints y dispositivos IoT es asegurarse de que tengan una contraseña segura. Especialmente importante en dispositivos IoT domésticos, que vienen con contraseñas predeterminadas que el usuario no está obligado a cambiar.

El **Principio de Privilegio Mínimo (PoLP):** aplicar permisos basados en la necesidad. Si un atacante obtiene acceso a una cuenta restringida, será mucho menos perjudicial que si obtiene acceso de administrador completo.

Para endpoints que no pueden restringir el acceso, considerar: contraseñas muy seguras o autenticación de dos factores, o restringir las direcciones IP que pueden acceder al dispositivo usando un enrutador o firewall.

Una defensa exhaustiva con varias capas de seguridad hace más difícil comprometer un endpoint. Recordar que una red es tan segura como su endpoint más vulnerable.

---

### Protección de endpoint local

**1. Endurecimiento del firmware y arranque:**
Se pasa por alto frecuentemente. Han surgido amenazas que atacan el firmware y los procesos de arranque. Especialmente importante para dispositivos IoT. Proteger físicamente los dispositivos es crucial: muchos tienen un procedimiento de restablecimiento de la cuenta de administrador que solo requiere acceso físico. Bloquear el BIOS y otros sistemas de arranque puede evitar estos ataques.

**2. Firmware:**
Software que se ejecuta desde un chip en el endpoint. Informa sobre el hardware conectado al dispositivo y ayuda a cargar el sistema operativo. Las computadoras modernas usan BIOS (heredado) o UEFI (más reciente, con interfaz gráfica y características de seguridad más sólidas). UEFI puede restringir el firmware para que solo cargue software aprobado, una de sus ventajas más importantes sobre BIOS.

**3. Sistema operativo:**
Siempre es buena idea seleccionar un OS fácil de administrar y seguro. Tener una lista fija de OS de confianza puede reforzar la seguridad de la red: si un ataque de firmware compromete un dispositivo que intenta conectarse con un OS desconocido, otros dispositivos de seguridad pueden denegar el acceso.

**4. Cifrado de disco completo (FDE):**
Protege los datos en endpoints portátiles ante robo. El sistema operativo cifra el disco; en el arranque, UEFI carga la información de descifrado. Las claves criptográficas se almacenan en un Módulo de Plataforma de Confianza (TPM) y se protegen mediante contraseña. En caso de robo, no se puede recuperar ninguna información útil.

**5. Unidad de autocifrado (SED):**
Disco duro con módulo integrado que maneja automáticamente el cifrado y descifrado. La labor criptográfica recae en el módulo del disco duro, no en la CPU.

**6. DLP (Prevención de pérdida de datos):**
Detecta si alguien intenta copiar información confidencial de un dispositivo o enviarla a través de la red. Puede bloquear o registrar la transacción. También puede limitar el uso de unidades USB o discos externos. La DLP basada en la red inspecciona el tráfico para alertar sobre información confidencial transmitida.

**7. Nota importante:**
Muchos dispositivos modernos como teléfonos inteligentes usan cifrado de disco automáticamente, pero en algunos puede estar desactivado por defecto. Siempre verificar si están disponibles el cifrado de disco y la DLP, especialmente en dispositivos IoT.

---

## SOAR (Orquestación, Automatización y Respuesta de Seguridad)

### ¿Qué es?
SOAR conecta las herramientas de la pila de seguridad en flujos de trabajo definidos que se pueden ejecutar automáticamente, permitiendo aumentar la eficacia del equipo automatizando procesos manuales repetitivos.

La automatización es crítica porque los equipos de seguridad están abrumados. Más herramientas de seguridad generan más alertas, que se tratan en procesos manuales y cambios de contexto (pasando de una herramienta a otra). La **fatiga de alertas** es la degradación del rendimiento ante una saturación de alertas. Simplemente contratar más analistas no es solución por la escasez de profesionales calificados.

### Funcionalidades de SOAR

**1. Orquestación y automatización:** SOAR une las herramientas de la pila de seguridad, reduciendo el cambio de contexto. Los procesos se pueden traducir manual o automáticamente en **manuales de estrategias** (playbooks): conjuntos de pasos similares a un diagrama de flujo que se repiten a demanda, asegurando que se siga cada paso del procedimiento operativo estándar.

**2. Investigación:** Los equipos pueden hacer tareas de investigación (revisar fuentes de inteligencia frente a amenazas, consultar SIM por eventos relacionados) directamente desde la plataforma SOAR. También pueden tomar medidas de mitigación desde SOAR (ej. bloquear una IP en el firewall o eliminar un correo de phishing).

**3. Optimización de operaciones:** SOAR permite asignar alertas a diferentes analistas o equipos en diferentes fases del proceso de respuesta. Los usuarios asignados pueden agregar información a la alerta para que otros tengan contexto adicional.

### Manuales de estrategia (Playbooks)
Los equipos usan manuales de estrategias (también llamados flujos de trabajo) para responder a las alertas o incidentes de la misma manera cada vez. Los manuales hacen tareas repetitivas (recopilar datos, enviar correos electrónicos) y pueden pausar cuando se necesita supervisión humana (como al implementar un bloqueo de firewall).

**Beneficios:** mejoran la velocidad de respuesta y coherencia, mantienen la autoridad humana sobre el proceso, reducen la carga de trabajo de los analistas y las posibilidades de error.

---

## SIEM (Administración de Información y Eventos de Seguridad)

### ¿Qué es?
Introducida en 2005, SIEM analiza las alertas de seguridad en tiempo real. Fundamentalmente hace tres cosas:

1. **Recopila, normaliza y almacena** eventos y alertas de dispositivos de red, seguridad, servidores, bases de datos, aplicaciones y endpoints en una ubicación segura y central (física, virtual, en instalaciones o en la nube). Los logs seguros garantizan que un atacante no los haya eliminado para ocultar sus actividades.

2. **Ejecuta análisis avanzados** en tiempo real y mediante datos históricos para identificar posibles incidentes de seguridad. Los posibles incidentes se priorizan por riesgo, gravedad e impacto. Con el tiempo evolucionó de reglas simples de correlación al monitoreo de anomalías en el comportamiento del usuario (UEBA) e indicadores de compromiso (IoC).

3. **Demuestra que los controles de seguridad** bajo su supervisión están implementados y son eficaces. El principal factor para la compra de SIEM ha sido el cumplimiento normativo.

### Propósito del SIEM
Los equipos de seguridad frecuentemente no descubrían las brechas hasta muchos meses después de que ocurrían, y era más frecuente que las descubriera un tercero. Los proveedores de SIEM agregaron funcionalidades de detección de amenazas: inteligencia de amenazas integrada, análisis histórico y en tiempo real, UEBA y aprendizaje automático para examinar grandes volúmenes de datos.

### Complejidad del SIEM
Obstaculizó su mayor aceptación: era complejo de configurar, integrar y usar; difícil de ajustar; exigía alto nivel de competencia. Además, la escasez de profesionales calificados y el enfoque aislado en NOC y SOC aumentaban la complejidad. Un entorno de múltiples proveedores funcionaba en contra de la interoperabilidad.

### Avances del SIEM
La escasez de personal impulsó mayor automatización e IA: detecta más rápido tendencias y patrones en enormes cargas de datos. Los últimos avances integraron SIEM en NOC y SOC, estableciéndolo como centro neurálgico de todas las operaciones.

SIEM moderno usa un motor de ML en tiempo real para:
- Detectar activos y configurar dispositivos automáticamente.
- Establecer un inventario de dispositivos, aplicaciones, usuarios y servicios.
- Crear una topología de interconexión y establecer una referencia del comportamiento normal.
- Detectar comportamiento anormal y alertar de ciberataques antes de que ocurra una violación.

> SIEM evolucionó de plataforma de información → centro de inteligencia frente a amenazas → centro de seguridad y operaciones de red totalmente integrado y automatizado.

---

## SD-WAN

### ¿Qué es?
Tecnología que usa los principios de las redes definidas por software (SDN) para mejorar cómo las redes de área amplia (WAN) se conectan entre diferentes ubicaciones. Ayuda a las organizaciones a conectar usuarios, aplicaciones y datos de manera segura, con mejor rendimiento y administración centralizada.

Surgió como respuesta al aumento del uso de aplicaciones críticas basadas en la nube y la expansión de oficinas remotas y fuerza de trabajo remota.

### Funcionalidades
SD-WAN monitorea el rendimiento de las conexiones WAN y regula varios tipos de tráfico para garantizar velocidades altas constantes. Permite el enrutamiento del tráfico basado en aplicaciones (ej. reservar enlaces de alta velocidad para aplicaciones críticas). Compatible con aplicaciones en centros de datos locales, nubes públicas o privadas y servicios SaaS (SalesForce, Dropbox, AWS, etc.).

### Ventajas de SD-WAN sobre WAN tradicional

- **Orquestación centralizada:** administra implementaciones, configuraciones y operaciones de forma centralizada, reduciendo complejidad y recursos necesarios.
- **Acceso directo a la nube:** elimina el backhauling, permitiendo acceso directo a servicios en la nube para todos los usuarios independientemente de su ubicación.
- **Mejor rendimiento de aplicaciones:** puede priorizar tráfico crítico (ej. VoIP) y dirigirlo por la ruta más eficiente, reduciendo pérdida de paquetes y latencia.
- **Mayor agilidad del negocio:** implementación de actualizaciones en todas las redes simultáneamente.
- **Ahorro de costos:** enruta el tráfico eficientemente por varios canales (MPLS, Internet pública, LTE, banda ancha), reduciendo la necesidad de aumentar ancho de banda en enlaces costosos.
- **Mayor seguridad:** características de seguridad integradas (NGFW, IPS, cifrado, AV, sandboxing).

### Evolución de SD-WAN (tres fases)

**Fase 1 — Mayor ancho de banda:** Desarrollada como respuesta al elevado costo y limitado ancho de banda de la WAN tradicional. Las técnicas básicas de equilibrio de carga permitieron tomar decisiones inteligentes para las aplicaciones sobre enlaces WAN híbridos (proveedor de servicios, banda ancha, LTE).

**Fase 2 — Alto rendimiento:** Nuevas funcionalidades: conmutación por error, recuperación de la virtualización y enrutamiento basado en aplicaciones. La virtualización permitió a los administradores gestionar las rutas desde un panel de control unificado.

**Fase 3 — Infraestructura de seguridad unificada:** SD-WAN evolucionó hacia una infraestructura unificada para la nube, la movilidad y tecnologías "como servicio", integrando seguridad y red en un dispositivo único de **Secure SD-WAN**.

### Secure SD-WAN
Combinación de las funciones de un firewall y la SD-WAN en un solo dispositivo. Fortinet introdujo este término.

- Facilita la administración de necesidades de aplicaciones y reduce el costo operativo priorizando aplicaciones críticas.
- Consola de administración centralizada con visibilidad de panel único y telemetría.
- Análisis integrales sobre uso del ancho de banda, definición de aplicaciones, selección de rutas y panorama de amenazas.

---

## ZTNA (Zero Trust Network Access)

### ¿Qué es?
El ZTNA establece una sesión segura entre una entidad final y una red, garantizando un control granular sobre el acceso a los recursos y ejerciendo **confianza cero**, independientemente de la ubicación de la entidad final o de la red.

**Principio de acceso con privilegios mínimos:** a los usuarios solo se les concede acceso a los recursos necesarios para su trabajo.

**Concepto de confianza cero:** opera bajo la premisa de que no se debe confiar en ningún usuario ni dispositivo (dentro o fuera de la red) a menos que se verifique minuciosamente su identificación y estado de seguridad. Supone que las amenazas son omnipresentes y que cada intento de acceso es una amenaza potencial.

### ¿Cómo funciona?
El dispositivo que se conecta establece automáticamente una sesión cifrada entre un **cliente de ZTNA** en la entidad final y el **proxy de acceso de ZTNA** (que puede ser un firewall). El proxy oculta las ubicaciones de las aplicaciones solicitadas y dirige la solicitud solo si el usuario cumple los requisitos de acceso.

**Flujo completo:**
1. El endpoint se conecta al proxy de acceso de ZTNA; FortiGate desafía al endpoint para la identificación del dispositivo.
2. El endpoint envía el certificado del dispositivo a FortiGate, demostrando su identidad.
3. FortiGate aplica las etiquetas y reglas asociadas y determina si rechaza o permite continuar.
4. FortiGate desafía al endpoint para la autenticación del usuario.
5. El endpoint solicita credenciales al usuario y las entrega al proxy.
6. El proxy envía las credenciales al servidor de autenticación (Active Directory, LDAP, base de datos o IDaaS).
7. El proxy recupera la identidad del usuario junto con la información de sus funciones.
8. Si dispositivo, usuario, etiquetas, reglas y funciones permiten el acceso, se inicia una sesión cifrada y el usuario obtiene acceso a la aplicación.

**Componentes adicionales:**
- **Autenticación:** el usuario se identifica a través de un servidor backend o IDaaS; la política se aplica con base en las funciones del usuario.
- **Servidor de políticas de ZTNA:** controla el acceso específicamente a las aplicaciones. Por ejemplo, el acceso puede basarse en geolocalización: si el dispositivo se conecta desde un punto inesperado, se puede denegar el acceso o reducir los privilegios. Si un dispositivo no pasa la verificación de seguridad, también se puede denegar el acceso.

---


## Seguridad en la Nube

### Antes de la nube
Las organizaciones adquirían sus propios sistemas informáticos en sus instalaciones, administrados por equipos expertos. Era caro (hardware + mano de obra), pero aumentó la productividad y ayudó a mantener la ventaja competitiva.

Con el tiempo se observó que la mayoría de los servidores estaban inactivos la mayor parte del tiempo: muchos recursos desaprovechados.

### Virtualización
Proviene de la tecnología de mainframe. Permite que un servidor único ejecute los sistemas operativos y aplicaciones de varios servidores al mismo tiempo, consolidando cargas de trabajo en menos servidores y ahorrando dinero.

### Modelos de servicio en la nube

| Modelo | Nombre completo |
|--------|----------------|
| **IaaS** | Infraestructura como servicio |
| **PaaS** | Plataforma como servicio |
| **SaaS** | Software como servicio |

### Seguridad en la nube
Cuando las aplicaciones se alojan en el propio centro de datos de una empresa, el panorama de seguridad es sencillo. En la nube, la seguridad es una **responsabilidad compartida** entre el proveedor y el cliente. Está diseñada en capas e incluye tanto componentes físicos como lógicos.

#### Seguridad para IaaS
- El **proveedor** es responsable de proteger la infraestructura y garantizar su disponibilidad.
- El **cliente** es responsable de proteger el acceso, el tráfico de red y las aplicaciones de datos que instala sobre esa infraestructura.

#### Herramientas de seguridad — Problemas
1. Las herramientas que ofrecen los proveedores generalmente tienen pocas funciones de seguridad básicas. Si un atacante evade estas herramientas en la capa de infraestructura, probablemente también pueda evadirlas en el nivel de aplicación del cliente.

2. Muchas organizaciones operan en un entorno de **nubes múltiples** (aplicaciones en su propio centro de datos + proveedor A + proveedor B + múltiples SaaS). Esto genera múltiples soluciones de seguridad independientes y no coordinadas, cuya complejidad crece exponencialmente con el número de proveedores involucrados.

---

## Borde de Servicios de Acceso Seguro (SASE)

### Evolución de los requisitos de red
Las organizaciones exigen que sus usuarios tengan acceso inmediato, continuo y seguro a datos y recursos basados en la red y en la nube, independientemente de la ubicación, dispositivo o momento. Este acceso debe ser escalable y elástico, integrando sitios de red de borde delgado y usuarios remotos en la infraestructura central.

### ¿Qué es SASE?
SASE combina las funcionalidades de **Red como servicio** con las de **Seguridad como servicio**, suministrado a través de la nube como modelo de consumo. Permite que trabajadores remotos aprovechen FWaaS, SWG, ZTNA y detección de amenazas.

> **SASE = SSE (Borde de servicio de seguridad) + SD-WAN**

### Ventajas de SASE
- Seguridad flexible y coherente independientemente de dónde estén los usuarios, cargas de trabajo, dispositivos o aplicaciones.
- Reducción de costos y complejidad de TI.
- Experiencia de usuario rápida y sin interrupciones.
- Vital para garantizar la seguridad de trabajadores remotos.

### SASE Unificado de Fortinet
Integra tecnologías esenciales de red y seguridad suministradas a través de la nube. Combina SD-WAN con un Borde de servicio de seguridad (SSE) para ofrecer redes y seguridad tanto en el borde de la red como a los trabajadores remotos.

### Características clave de SASE

**1. SD-WAN**
Dirige inteligentemente el tráfico a las rutas más eficientes para Internet, aplicaciones en la nube y centros de datos. Facilita la implementación rápida de nuevas aplicaciones y la administración de políticas en múltiples ubicaciones.

**2. Secure Web Gateway (SWG)**
Protege a usuarios, dispositivos y aplicaciones de amenazas en línea. Filtra malware, evita la pérdida de datos e impone el cumplimiento de políticas de Internet.

**3. Firewall como servicio (FWaaS)**
Reemplaza los appliances de firewall físicos por equivalentes en la nube con funcionalidades NGFW: IPS, antimalware, inspección SSL y Sandbox.

**4. Agente de seguridad de acceso a la nube (CASB)**
Garantiza un uso seguro de aplicaciones y servicios en la nube. Previene fugas de datos, infección por malware, incumplimiento normativo y falta de visibilidad en nubes públicas (IaaS), privadas o SaaS.

**5. ZTNA (Zero Trust Network Access)**
Proporciona a los usuarios remotos acceso seguro a aplicaciones internas. Ningún usuario ni dispositivo es de confianza automática: cada intento de acceso es cuestionado y verificado. Incluye MFA, NAC y aplicación de políticas de acceso.

**6. Administración centralizada**
Una única consola para todas las características de seguridad. Agiliza el control de cambios, la administración de parches y las políticas. Garantiza una distribución coherente de políticas en toda la organización.