---
title: Capa fisica - Modelo osi
tags: [redes,sistemas]
date: 2026-03-02
image: "../assets/Ciberattack.png"
---

# Modelos OSI
Ya sea una conexión a una impresora local en el hogar o a un sitio web en otro país, para que se pueda producir cualquier comunicación de red se debe establecer antes una conexión a una red local. Una conexión física puede ser una conexión por cable o una conexión inalámbrica mediante ondas de radio.

![redes1](https://i.imgur.com/sMKYk5D.png)
Estos son los componentes de un punto de acceso:

1. Las antenas inalámbricas (Estas están integradas dentro de la versión del router que se muestra en la figura anterior).
2. Varios puertos de switch de Ethernet
3. Un puerto de internet

### Tarjetas de interfaz de red
Las tarjetas de interfaz de red (NIC) conectan un dispositivo a la red. Las NIC de Ethernet se usan para una conexión por cable,
# Capa Fisica clase 5 de mayo

## Caracteristicas
La capa física de OSI proporciona los medios de transporte de los bits que conforman una trama de la capa de enlace de datos a través de los medios de red. Esta capa acepta una trama completa desde la capa de enlace de datos y la codifica como una secuencia de señales que se transmiten en los medios locales. Un dispositivo final o un dispositivo intermediario recibe los bits codificados que componen una trama.

### Estándares de la capa física
Los estándares de la capa física se implementan en hardware, y los rigen diversos organismos, incluidos los siguientes:
- ISO
- EIA/TIA
- ITU-T
- ANSI
- IEEE

### Componentes fisicos
Los componentes físicos son los dispositivos de hardware electrónico, medios y otros conectores que transmiten las señales que representan los bits. Todos los componentes de hardware, como NIC, interfaces y conectores, materiales y diseño de los cables, se especifican en los estándares asociados con la capa física.
### Codificación
La codificación, o codificación de línea, es un método que se utiliza para convertir una transmisión de bits de datos en un “código” predefinido. Los códigos son grupos de bits utilizados para ofrecer un patrón predecible que pueda reconocer tanto el emisor como el receptor. 
![redes2](https://i.imgur.com/iYo6p4J.png)
### Señalización
La capa física debe generar las señales inalámbricas, ópticas o eléctricas que representan los “1” y los “0” en los medios. La forma en que se representan los bits se denomina método de señalización. Los estándares de la capa física deben definir qué tipo de señal representa un “1” y qué tipo de señal representa un “0”. Esto puede ser tan simple como un cambio en el nivel de una señal eléctrica o de un pulso óptico. Por ejemplo, un pulso largo podría representar un 1 mientras que un pulso corto podría representar un 0.

### Ancho de banda
Los diferentes medios físicos admiten la transferencia de bits a distintas velocidades. La transferencia de datos generalmente se discute en términos de ancho de banda. El ancho de banda es la capacidad a la que un medio puede transportar datos. El ancho de banda digital mide la cantidad de datos que pueden fluir desde un lugar hacia otro en un período de tiempo determinado. El ancho de banda generalmente se mide en kilobits por segundo (kbps), megabits por segundo (Mbps) o gigabits por segundo (Gbps).
![Captura de pantalla 2025-05-07 a la(s) 11.16.19 a.m.](https://imgur.com/zwrD8RW)

### Latencia
El concepto de latencia se refiere a la cantidad de tiempo, incluidas las demoras, que les toma a los datos transferirse desde un punto determinado hasta otro.

### Rendimiento
El rendimiento es la medida de transferencia de bits a través de los medios durante un período de tiempo determinado.
Debido a diferentes factores, el rendimiento generalmente no coincide con el ancho de banda especificado en las implementaciones de la capa física. El rendimiento suele ser menor que el ancho de banda. Hay muchos factores que influyen en el rendimiento:

- La cantidad de tráfico
- El tipo de tráfico
- La latencia creada por la cantidad de dispositivos de red encontrados entre origen y destino.

## Cableado de cobre
### Caracteristicas
Las redes utilizan medios de cobre porque son económicos y fáciles de instalar, y tienen baja resistencia a la corriente eléctrica. Sin embargo, estos medios están limitados por la distancia y la interferencia de señal.

Los datos se transmiten en cables de cobre como impulsos eléctricos. Un detector en la interfaz de red de un dispositivo de destino debe recibir una señal que pueda decodificarse exitosamente para que coincida con la señal enviada. No obstante, cuanto más lejos viaja una señal, más se deteriora. Esto se denomina atenuación de señal. Por este motivo, todos los medios de cobre deben seguir limitaciones de distancia estrictas según lo especifican los estándares que los rigen.

- **Interferencia electromagnética (EMI) o interferencia de radiofrecuencia (RFI):** las señales de EMI y RFI pueden distorsionar y dañar las señales de datos que transportan los medios de cobre.
- **Crosstalk** Crosstalk se trata de una perturbación causada por los campos eléctricos o magnéticos de una señal de un hilo a la señal de un hilo adyacente.

Para contrarrestar los efectos negativos de la EMI y la RFI, algunos tipos de cables de cobre se empaquetan con un blindaje metálico y requieren una conexión a tierra adecuada.

Para contrarrestar los efectos negativos del crosstalk, algunos tipos de cables de cobre tienen pares de hilos de circuitos opuestos trenzados que cancelan dicho tipo de interferencia en forma eficaz.

### Tipos de cableado de cobre
- Par trenzado no blindado (UTP)
El cableado de par trenzado no blindado (UTP) es el medio de red más común. El cableado UTP, que se termina con conectores RJ-45, se utiliza para interconectar hosts de red con dispositivos intermediarios de red, como switches y routers.

- Par trenzado blindado (STP)
El par trenzado blindado (STP) proporciona una mejor protección contra ruido que el cableado UTP. Sin embargo, en comparación con el cable UTP, el cable STP es mucho más costoso y difícil de instalar. Al igual que el cable UTP, el STP utiliza un conector RJ-45.

-  Cable coaxial
El cable coaxial obtiene su nombre del hecho de que hay dos conductores que comparten el mismo eje. Como se muestra en la figura, el cable coaxial consta de lo siguiente:

Se utiliza un conductor de cobre para transmitir las señales electrónicas.
Una capa de aislamiento plástico flexible que rodea al conductor de cobre.
Sobre este material aislante, hay una malla de cobre tejida o una hoja metálica que actúa como segundo hilo en el circuito y como blindaje para el conductor interno. La segunda capa o blindaje reduce la cantidad de interferencia electromagnética externa.
La totalidad del cable está cubierta por un revestimiento para evitar daños físicos menores.

## cableado UTP
### Propiedades del cableado UTP
Este consta de cuatro pares de hilos codificados por colores que están trenzados entre sí, estos no utilizan blindaje para contraarrestar los efectos de EMI Y RFI pero usa algunos metodos que son

- **Anulación**:Los diseñadores ahora emparejan los hilos en un circuito. Cuando dos hilos en un circuito eléctrico están cerca, los campos magnéticos son exactamente opuestos entre sí. Por lo tanto, los dos campos magnéticos se anulan y también anulan cualquier señal de EMI y RFI externa.
- **Variando el número de vuektas pr par de hilos**:Se cambian el numero de vueltas de cada par de hilos en un cable 

### Estandares
Establecidos por la TIA/EIA-568. Los cables se dividen en categorías según su capacidad para transportar datos de ancho de banda a velocidades mayores.

- La categoría 3 se utilizó originalmente para la comunicación de voz a través de líneas de voz, pero más tarde para la transmisión de datos.
- Las categorías 5 y 5e se utilizan para la transmisión de datos. La categoría 5 soporta 100Mbps y la categoría 5e soporta 1000 Mbps
- La categoría 6 tiene un separador añadido entre cada par de cables para soportar velocidades más altas. Categoría 6 soporta hasta 10 Gbps.
- Categoría 7 también soporta 10 Gbps.
- Categoría 8 soporta 40 Gbps.

### Clabes UTP directos y cruzados

#### T568A y T568B Estandares
![Captura de pantalla 2025-05-20 a la(s) 10.52.33 a.m.](https://hackmd.io/_uploads/r1lIHm9-gg.png)
#### Cable directo de Ethernet
El tipo más común de cable de red. Por lo general, se utiliza para interconectar un host con un switch y un switch con un router.
#### Clable cruzado Ethernet
utilizado para interconectar dispositivos similares. Por ejemplo, para conectar un switch a un switch, un host a un host o un router a un router. (esto se considera heredado).

![Captura de pantalla 2025-05-20 a la(s) 10.53.22 a.m.](https://hackmd.io/_uploads/Byen9BQ5Zeg.png)


## Cableado de fibra optica

Este es inmune a RFI-EMI, si sufre atenuación por la distancia, es mas costoso y la para la instalación se necesita un conocimiento de experto. En datos tenemos dos tipo de fibra

- **fibra Monomodo:**Una de sus caracteristicas es que es muy delgada y en esta solo viaja un haz de luz y como su trayectoria es una linea recta por lo que tiene mas alcance, pero como desventaja tenemos, menos ancho de banda y usa la tecnologia laser que es muy caro
- **fibra Multimodo:**  Este es mucho mas grueso su trayectoria es en sic-saz por lo que las distancias son mas cortas pero tiene mas ancho de banda. Este utiliza tecnologia LED y esta es mas economica.

Esta solo puede tener 2km pero el cobre puede ser de 100 metros

### Actividad en Cisco Packer tracer
La idea es hacer una conexion de fibra optica
1. configurar el switch
2. configurar el server

## Medios inalambricos
Los medios inalámbricos transportan señales electromagnéticas que representan los dígitos binarios de las comunicaciones de datos mediante frecuencias de radio y de microondas.

### Limitaciones
- **Area de cobertura**:Las tecnologías inalámbricas de comunicación de datos funcionan bien en entornos abiertos. Sin embargo, existen determinados materiales de construcción utilizados en edificios y estructuras, además del terreno local, que limitan la cobertura efectiva.
- **Interferencia**: La tecnología inalámbrica también es vulnerable a la interferencia, y puede verse afectada por dispositivos comunes como teléfonos inalámbricos etc.
- **Seguridad**:La cobertura de la comunicación inalámbrica no requiere acceso a un hilo físico de un medio. Por lo tanto, dispositivos y usuarios sin autorización para acceder a la red pueden obtener acceso a la transmisión.
- **Medio compartido**

### Tipos de medios inalambrios
- **Wi-Fi (IEEE 802.11)** - Tecnología de red LAN inalámbrica (WLAN), comúnmente llamada Wi-Fi. WLAN utiliza un protocolo por contención conocido como acceso múltiple por detección de portadora con prevención de colisiones (CSMA/CA).
- **Bluetooth (IEEE 802.15)** - Este es un estándar de red de área personal inalámbrica (WPAN), comúnmente conocido como «Bluetooth». Utiliza un proceso de emparejamiento de dispositivos para distancias de 1 a 100 metros.
- **WiMAX (IEEE 802:16)** - Comúnmente conocida como Interoperabilidad mundial para el acceso por microondas (WiMAX), utiliza una topología punto a multipunto para proporcionar un acceso de ancho de banda inalámbrico.
- **Zigbee (IEEE 802.15.4)** - Zigbee es una especificación utilizada para comunicaciones de baja velocidad de datos y baja potencia. Está diseñado para aplicaciones que requieren corto alcance, baja velocidad de datos y larga duración de la batería. Zigbee se utiliza normalmente para entornos industriales e Internet de las cosas (IoT), tales como interruptores de luz inalámbricos y recopilación de datos de dispositivos médicos.

### LAN inalambrica
Una implementación común de tecnología inalámbrica de datos permite a los dispositivos conectarse en forma inalámbrica a través de una LAN. En general, una WLAN requiere los siguientes dispositivos de red:

- **Punto de acceso inalámbrico (AP)** - Concentra las señales inalámbricas de los usuarios y se conecta a la infraestructura de red existente basada en cobre, como Ethernet. 
- **Adaptadores NIC inalámbricos** - Brindan capacidad de comunicaciones inalámbricas a los hosts de red

# Sistemas numéricos
## Numeración binaria
### Direcciones binaria e IPv4
Binario es un sistema de numeración que consta de los dígitos 0 y 1 llamados bits. En contraste, el sistema de numeración decimal consta de 10 dígitos que consisten en los dígitos desde el 0 al 9.

Cada dirección consta de una cadena de 32 bits, divididos en cuatro secciones denominadas octetos. Cada octeto contiene 8 bits (o 1 byte) separados por un punto. Por ejemplo, a la PC1 de la ilustración se le asignó la dirección IPv4 11000000.10101000.00001010.00001010. La dirección de gateway predeterminado sería la de la interfaz Gigabit Ethernet del R1, 11000000.10101000.00001010.00000001.

# Data link
Aca tenemos entremado, deteccion de erroores y control de acceso al medio, cuando     queremos saber si es una lan o wan esta capa es donde revisamos las siguientes caracteristica.

![WhatsApp Image 2025-05-16 at 12.31.53](https://hackmd.io/_uploads/ByT3UlSZxg.jpg)


### LAN
- Local
- Estas tiene muy buen ancho de banda (+BW), la cobertura de las lan es mas limitada a lo sumo un campus univertario
- No tiene costo (osea no tiene que pagarle a un proveedor para poner otro router en su casa)
### WAN
- Wide
- Estas tiene menos ancho de bando, pero su cobertura es mucho mas grande, incluso internet en una WAn de WAN.
- Estas si tiene un costo que hay que pagarle a los proveedores de servicios de internet.

WIC = 128k tiene menos velocidad.
HWIC = permite hasta 2 megas de velocidad en la WAN.

DCE: Proveedor de servicios de internet.
DTE : Es el cliente

#### Configurar el router para hacer una WLAN
##### Router izq (DCE)
Router(config)#int s0/3/1
Router(config-if)#ip add 10.0.0.1 255.0.0.0
Router(config-if)#no sh
Router(config-if)#clock rate 2000000 -> ancho de banda
Router(config-if)#encaptulation ppp
##### Router izq (DTE)
Router(config)#int s0/1/0
Router(config-if)#ip add 10.0.0.2 255.0.0.0
Router(config-if)#no sh
Router(config-if)#encaptulation ppp

### Topologias

Para LAN
- Bus
- Star
Para WLAN
- P2P
- Full Mesh
- 

### Ethernet
#### Protocolos LAN 
- Ethernet -> BUS (capa 2)
- Token Ring -> Anillo (Se iba pasando un token y este tiene cierto tiempo, el tqoken tiene que pasar por los anilloslo que puede llegar a tener mucho retardo).
- FDDI(Interfaz de datos distribuido por fibra), esta usaba un topologia en anillo pero doble. Pero esta es muy costoso.

De los anteriores solo quedo el protocolo Ethernet  este tiene dos sudcapas que son MAC y LLC
- **MAC(Media Access control):** esta sudcapa se relaciona con la capa 1 y esta ha cambiando mucho dependiendo de las necesidades de los medios.
- **LLA(Logical link control):** Esta ha permanecido igual en el tiempo y su conoce segun la IEEE como 802.2, ademas esta se comunica con la capa 3.

**ID o MAC address:** Este es un identificador unico de 48 bits,este numero se recicla ya que el creador de la mac puede estimar el tiempo de vida del dispositivo. que pasa si aun asi el dispositivo sirve? pues el unico problema seria que se encuentren en la misma de red, de resto no pasa nada.

Tenemos una entidad IANA que esta le enseña a los fabricantes como asignar la direccion MAC. esta el OUI que es el idenficador de del modelo y del equipo y el ultimo fragamento es el serial de identificación

Ejemplo: B8-CA-3A-B1-65-F6  los primero tres son OUI(identificador de modelo de dispositivo) y los ultimos tres son el identificador unico del dispositivo.

Tenemos que el switch es el principal dispositivo de la capa 2.Aca vemos un ejemplo de la tabla de direcciones mac que tiene este dispositivo, ya que el es el encargado de redireccionar el mensaje a su destino. Ademas sabe gestonar varios mensajes.En el caso que le lleguen varios mensajes el va tratando uno por uno. Ademas estos tiene un ancho de bando dedicado por cada puerto.

Tenemos otro dispositivo llamado hub pero este no hace diferencias entre direcciones mac, tiene muchas desventajas por ejemplo si intenatmos envoar dos mensajes a un mismo dispositivo, este no los sabe gestionar. Aca el ancho de banda es distribuido entre los puertos que tenga.
```
Switch#show mac address-table
          Mac Address Table
-------------------------------------------

Vlan    Mac Address       Type        Ports
----    -----------       --------    -----

   1    0001.c705.05c6    DYNAMIC     Fa0/5
   1    0060.470c.7e51    DYNAMIC     Fa0/10
   1    00d0.9716.a04b    DYNAMIC     Fa0/15

```
# Data link pagina
La capa de enlace de datos es responsable de las comunicaciones de tarjeta de interfaz de red (NIC) a tarjeta de interfaz de red. La capa de vínculo de datos realiza lo siguiente:

- Permite que las capas superiores accedan a los medios. El protocolo de capa superior no conoce completamente el tipo de medio que se utiliza para reenviar los datos.
- Acepta datos, generalmente paquetes de Capa 3 (es decir, IPv4 o IPv6) y los encapsula en tramas de Capa 2.
- Controla cómo los datos se colocan y reciben en los medios.
- Intercambia tramas entre puntos finales a través de los medios de red.
- Recibe datos encapsulados, generalmente paquetes de Capa 3, y los dirige al protocolo de capa superior adecuado.
- Realiza la detección de errores y rechaza cualquier trama dañada.
## Proposito de data link
### IEEE 802 LAN/MAN
![Captura de pantalla 2025-06-06 a la(s) 4.35.57 p.m.](https://hackmd.io/_uploads/SJjS1kbmxl.png)

#### Control de enlace lógico (LLC)
Esta subcapa IEEE 802.2 se comunica entre el software de red en las capas superiores y el hardware del dispositivo en las capas inferiores. Coloca en la trama información que identifica qué protocolo de capa de red se utiliza para la trama. Esta información permite que múltiples protocolos de Capa 3, como IPv4 e IPv6, utilicen la misma interfaz de red y medios.

La subcapa LLC toma los datos del protocolo de red, que generalmente es un paquete IPv4 o IPv6, y agrega información de control de Capa 2 para ayudar a entregar el paquete al nodo de destino. 
La capa superior de las dos subcapas de enlace de datos es la subcapa de control de enlace lógico. Su función principal es actuar como interfaz entre la subcapa MAC inferior y la capa de red dentro del modelo OSI durante la transferencia de datos. 

Si está familiarizado con los protocolos de control de enlace de datos sincrónico (SDLC) y de control de enlace de datos de alto nivel (HDLC), observará que el control de enlace lógico funciona de manera similar. 

Una forma importante en que la LLC realiza esta función de interfaz es mediante la multiplexación . En un escenario real, la multiplexación se vería así: en una gran ciudad, el servicio postal recoge cartas de varios barrios, las clasifica centralmente y utiliza varios camiones para entregar lotes mixtos a múltiples ubicaciones. Cada camión transporta cartas a diferentes destinos hasta que llegan a sus puntos de entrega específicos.

Este método permite que existan múltiples protocolos de red dentro de una única red de puntos de acceso múltiples. 

La multiplexación se puede considerar como la capa LLC que fragmenta los datos en paquetes más pequeños para ahorrar recursos. La capa LLC crea tramas. Cada trama LLC consta de un paquete de datos precedido por un encabezado LLC que incluye información sobre la ubicación de los datos. También es aceptable referirse a una trama como una unidad de datos del protocolo LLC.

- Otro aspecto clave de la capa LLC es su función de control de flujo . Dado que diferentes sistemas informáticos pueden enviar y recibir datos a distintas velocidades, la capa LLC garantiza que los sistemas más rápidos no sobrecarguen a los más lentos.
- La comprobación de errores también funciona en la subcapa LLC. Cuando la capa multiplexa al enviar datos o demultiplexa al recibirlos, la capa LLC verifica si se ha producido alguna pérdida de trama en los datos.Si la capa de control del enlace lógico detecta una pérdida de trama, simplemente devuelve los datos al origen, que los retransmite 

### Control de acceso a medios (MAC)
[Teoria mas clara](https://www.ipxo.com/blog/llc-and-mac/)
implementa esta subcapa (IEEE 802.3, 802.11 o 802.15) en hardware. Es responsable de la encapsulación de datos y el control de acceso a los medios. Proporciona direccionamiento de capa de enlace de datos y está integrado con varias tecnologías de capa física.
- Delimitación de tramas - El proceso de entramado proporciona delimitadores importantes que se utilizan para identificar un grupo de bits que componen una trama. Estos bits delimitadores proporcionan sincronización entre los nodos de transmisión y de recepción.
- Direccionamiento - proporciona direccionamiento de origen y destino para transportar la trama de capa 2 entre dispositivos en el mismo medio compartido.
- Detección de errores - Cada trama contiene un tráiler utilizado para detectar errores de transmisión.
### Provisión de acceso a los medios
Las interfaces del router encapsulan el paquete en la trama apropiada. Se utiliza un método adecuado de control de acceso a los medios para acceder a cada enlace. En cualquier intercambio de paquetes de capas de red, puede haber muchas transiciones de medios y capa de enlace de datos.

En cada salto a lo largo de la ruta, un router realiza las siguientes funciones de Capa 2:

1. Aceptan una trama proveniente de un medio.
2. Desencapsulan la trama.
3. Vuelven a encapsular el paquete en una trama nueva.
4. Reenvían la nueva trama adecuada al medio de ese
5. segmento de la red física.
### 6.1.4 Estándares de la capa de enlace de datos

Las organizaciones de ingeniería que definen estándares abiertos y protocolos que se aplican a la capa de acceso a la red (es decir, las capas físicas y de enlace de datos OSI) incluyen lo siguiente:

- Instituto de Ingenieros Eléctricos y Electrónicos (IEEE)
- Unión Internacional de Telecomunicaciones (ITU)
- Organización Internacional para la Estandarización --(ISO)
- Instituto Nacional Estadounidense de Estándares (ANSI)
## Topologías

### 6.2.1 Topologías física y lógica

#### Topologia fisica
Identifica las conexiones físicas y cómo se interconectan los dispositivos finales y los dispositivos intermedios (es decir, routers, switches y puntos de acceso inalámbrico). La topología también puede incluir la ubicación específica del dispositivo, como el número de habitación y la ubicación en el rack del equipo. Las topologías físicas generalmente son punto a punto o en estrella.
![Captura de pantalla 2025-06-06 a la(s) 5.35.44 p.m.](https://hackmd.io/_uploads/SJJ8ayZXgl.png)
#### Topología logica
Se refiere a la forma en que una red transfiere tramas de un nodo al siguiente. Esta topología identifica las conexiones virtuales mediante interfaces de dispositivo y esquemas de direccionamiento IP de capa 3.
![Captura de pantalla 2025-06-06 a la(s) 5.36.18 p.m.](https://hackmd.io/_uploads/BylO6k-Qxx.png)
### 6.2.2 Topologías de WAN

#### Topologia WAN punto a punto
Las topologías físicas punto a punto conectan dos nodos directamente, como se muestra en la figura. En esta disposición, los dos nodos no tienen que compartir los medios con otros hosts. Además, cuando se utiliza un protocolo de comunicaciones en serie, como el Protocolo punto a punto (PPP), un nodo no tiene que hacer ninguna determinación sobre si una trama entrante está destinada para él u otro nodo. Por lo tanto, los protocolos de enlace de datos lógicos pueden ser muy simples, dado que todas las tramas en los medios solo pueden transferirse entre los dos nodos. El nodo coloca las tramas en los medios en un extremo y esas tramas son tomadas de los medios por el nodo en el otro extremo del circuito punto a punto.

# Terminos
- **duplex:**capacidad de un dispositivo o sistema para enviar y recibir datos simultáneamente o en diferentes momentos
- **Semiduplex:** los dos dispositivos pueden recibir y trasmitir pero no al pueden hacer las dos cosas al mismo tiempo, eso quiere decir que mientras recibe no puede transmitir
Es importante que dos interfaces interconectadas, como la NIC de un host y una interfaz en un switch Ethernet, operen con el mismo modo dúplex. De lo contrario, habrá incompatibilidad de dúplex y se generará ineficiencia y latencia en el enlace.
tenemos que un metodo  de duplex completo no requiere de un metodo de acceso porque este perime recibir y trasmitir de manera simultanea por tanto no requiere saber los turnos de quien va primero.

- **Broadcast:** Tiene una dirección MAC de destino de FF-FF-FF-FF-FF-FF en hexadecimal (48 unidades en binario).
- **Multicast:** Si los datos encapsulados son un paquete de multicast IP, a los dispositivos que pertenecen a un grupo de multicast se les asigna una dirección IP de grupo de multicast. El rango de direcciones de multicast IPv4 es 224.0.0.0 a 239.255.255.255. El rango de direcciones de multicast IPv6 comienza con ff00 :: / 8. Debido a que las direcciones de multicast representan un grupo de direcciones (a veces denominado grupo de hosts), solo se pueden utilizar como el destino de un paquete. El origen siempre tiene una dirección de unicast.

Hay una dirección MAC de destino **01-00-5E** cuando los datos encapsulados son un paquete de multicast IPv4 y una dirección MAC de destino de **33-33** cuando los datos encapsulados son un paquete de multicast IPv6.

 