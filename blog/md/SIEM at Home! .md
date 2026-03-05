---
title: SIEM at Home!
tags: [Projects, Cybersecurity]

---

# Wazuh SIEM Home Lab
**Autor:** Maylen  
**Fecha:** Marzo 2026  
**Plataforma:** Apple Silicon (M1) · VMware Fusion 13 · Docker · Wazuh 4.14.3


## Introducción

Este laboratorio documenta el despliegue de Wazuh, una plataforma SIEM/XDR de código abierto, en un entorno virtualizado local. El objetivo es simular un entorno de monitoreo de seguridad real, recolectando y analizando eventos de múltiples endpoints con distintos sistemas operativos.

Un SIEM (Security Information and Event Management) es la pieza central de cualquier SOC (Security Operations Center). Permite recolectar logs de toda la infraestructura, detectar amenazas, investigar incidentes y garantizar el cumplimiento normativo.


## Arquitectura

### Componentes

| Componente | Tecnología | Función |
|---|---|---|
| Host | Apple Silicon M1 | Máquina física anfitriona |
| Hipervisor | VMware Fusion 13 | Virtualización |
| Servidor | Ubuntu 24.04 LTS | Sistema operativo del servidor SIEM |
| Contenedores | Docker | Plataforma de despliegue de Wazuh |
| SIEM/XDR | Wazuh 4.14.3 | Plataforma central de seguridad |
| Agente 1 | macOS | Endpoint workstation monitoreado |
| Agente 2 | Ubuntu 22.04 LTS (Docker) | Servidor Linux monitoreado |

![Lab1](https://i.imgur.com/2GkSIg9.png)

- **Nota:** Se optó por el despliegue mediante **Docker** principalmente para resolver conflictos de compatibilidad con la arquitectura **ARM64 (Apple Silicon M1)** del host. El uso de contenedores permitió abstraer las dependencias del sistema y garantizar la estabilidad de los binarios de Wazuh, asegurando que el SIEM funcionara correctamente.


## Proceso de instalación

### 1. Preparación del servidor (Ubuntu VM)

```bash
# Verificar espacio disponible
df -h

# Expandir volumen lógico si es necesario
growpart /dev/nvme0n1 3
pvresize /dev/nvme0n1p3
lvextend -l +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv
resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv
```

### 2. Despliegue de Wazuh con Docker

```bash
# Clonar el repositorio oficial de Wazuh Docker
git clone https://github.com/wazuh/wazuh-docker.git
cd wazuh-docker/single-node

# Levantar los contenedores
docker-compose up -d
```

**Verificar que los contenedores están corriendo:**

```bash
docker-compose ps
```

```
single-node_wazuh.indexer_1    Up    0.0.0.0:9200->9200/tcp
single-node_wazuh.manager_1    Up    0.0.0.0:1514-1515->1514-1515/tcp
single-node_wazuh.dashboard_1  Up    0.0.0.0:443->5601/tcp
```
![Lab2](https://i.imgur.com/NawVrXr.png)

### 3. Registro del agente macOS

Desde el dashboard: **Agents Management → Deploy new agent**

Configuración utilizada:
- OS: macOS
- Architecture: Apple Silicon (ARM64)
- Server address: `172.16.158.130`
- Agent name: `macos-endpoint-01`

```bash
# Ejecutado en la terminal del Mac
curl -so wazuh-agent.pkg https://packages.wazuh.com/4.x/macos/wazuh-agent-4.14.3-1.arm64.pkg \
  && echo "WAZUH_MANAGER='172.16.158.130' && WAZUH_AGENT_NAME='macos-endpoint-01'" \
  > /tmp/wazuh_envs \
  && sudo installer -pkg ./wazuh-agent.pkg -target /

# Iniciar el agente
sudo launchctl load /Library/LaunchDaemons/com.wazuh.agent.plist
```
![Lab3](https://i.imgur.com/2LLBVEd.png)

### 4. Registro del agente Linux (contenedor Docker)

```bash
# Levantar contenedor Ubuntu
docker run -dit --name linux-victim ubuntu:22.04 bash
docker exec -it linux-victim bash

# Instalar dependencias dentro del contenedor
apt --fix-broken install -y
apt-get install -y curl sudo lsb-release python3 distro-info-data

# Descargar e instalar el agente
curl -o wazuh-agent.deb \
  https://packages.wazuh.com/4.x/apt/pool/main/w/wazuh-agent/wazuh-agent_4.14.3-1_arm64.deb \
  && WAZUH_MANAGER='172.16.158.130' WAZUH_AGENT_NAME='07dd51079b78' \
  dpkg -i ./wazuh-agent.deb


# Iniciar el agente (sin systemd en contenedor)
/var/ossec/bin/wazuh-control start
```

![Lab4](https://i.imgur.com/OfiiWke.png)



## Endpoints monitoreados

### macos-endpoint-01
- **OS:** macOS 
- **IP:** 172.16.158.1
- **Tipo:** Workstation (simula un equipo corporativo de usuario)
- **Grupo:** default

### linux-server-01 (Ubuntu 22.04 LTS)
- **OS:** Ubuntu 22.04.5 LTS
- **IP:** 172.17.0.2
- **Tipo:** Servidor (simula un servidor de producción)
- **Grupo:** default


## Análisis de vulnerabilidades

### Resumen — Endpoint macOS

Wazuh identificó **448 vulnerabilidades** en el endpoint macOS mediante su módulo de detección de vulnerabilidades:

| Severidad | Cantidad | CVSS Score |
|---|---|---|
| Critical | 33 | >= 9.0 |
| High | 137 | 7.0 - 8.9 |
| Medium | 248 | 4.0 - 6.9 |
| Low | 30 | < 4.0 |

### Paquetes más afectados

| Paquete | Vulnerabilidades | Riesgo principal |
|---|---|---|
| macOS Sequoia 15.4.1 | 324 | Escalada de privilegios a root, sandbox escape |
| Safari | 67 | XSS, spoofing de URLs, crashes por contenido web |
| Wireshark | 14 | Buffer overflows en parsers de protocolos |
| pip / setuptools | 23 | Path traversal con potencial RCE |
| Microsoft Teams | 1 (Critical) | Heap buffer overflow en libwebp (CVE-2023-4863) |

![Lab5](https://i.imgur.com/AbjaJfE.png)

### Hallazgos destacados — macOS

**CVE-2025-46285 (CVSS: 9.8 - Critical)**  
Desbordamiento de entero en el kernel de macOS. Una app maliciosa puede ganar privilegios root. Corregido en macOS Sequoia 15.7.3.

**CVE-2025-6558 (CVSS: 9.1 - Critical)**  
Sandbox escape en el motor ANGLE/GPU de Chromium. Un atacante remoto puede escapar del sandbox mediante una página HTML maliciosa.

**CVE-2025-43542 (High)**  
Los campos de contraseña pueden quedar expuestos visualmente al controlar un dispositivo remotamente via FaceTime.

### Observación de configuración

Durante el análisis del archivo `/etc/sudoers` del endpoint macOS se identificó:

```
Defaults !log_allowed
```

Esta configuración deshabilita el registro de comandos sudo exitosos, lo que representa un **gap de visibilidad** en el monitoreo tradicional. Wazuh compensa este comportamiento mediante su propio módulo de auditoría independiente del sistema operativo.

### Recomendaciones de remediación — macOS

1. **Prioritario:** Actualizar macOS a la versión 15.7.3 o superior
2. **Alto:** Actualizar Safari, Wireshark y Microsoft Teams
3. **Medio:** Actualizar pip y setuptools (`pip install --upgrade pip setuptools`)
4. **Configuración:** Habilitar logging de sudo exitosos removiendo `!log_allowed`

---

### Resumen — Servidor Linux (Ubuntu 22.04)

Wazuh identificó **37 vulnerabilidades** en el contenedor Ubuntu mediante su módulo de detección:

| Severidad | Cantidad | CVSS Score |
|---|---|---|
| Critical | 0 | >= 9.0 |
| High | 7 | 7.0 - 8.9 |
| Medium | 20 | 4.0 - 6.9 |
| Low | 10 | < 4.0 |

### Paquetes más afectados — Linux

| Paquete | Vulnerabilidades | Riesgo principal |
|---|---|---|
| curl / libcurl4 | 4 | Fuga de tokens OAuth2, fallo en cookies seguras |
| libpam (módulos PAM) | 4 | Escalada de privilegios a root via symlink attacks |
| libc6 / libc-bin | 2 | Integer overflow con potencial heap corruption |
| ncurses | 4 | Segmentation fault explotable |
| tar | 1 | Directory traversal en TAR archives |

![Lab6](https://i.imgur.com/scKRmUm.png)

### Hallazgos destacados — Linux

**CVE-2025-8941 (High) — linux-PAM**  
Afecta `libpam-modules`, `libpam0g` y `libpam-runtime`. El módulo `pam_namespace` maneja incorrectamente rutas controladas por el usuario, permitiendo a atacantes locales usar symlink attacks y race conditions para **escalar privilegios a root**. Especialmente relevante porque durante la simulación se creó el usuario no autorizado `hacker123`, que podría explotar esta vulnerabilidad.

**CVE-2025-9086 (High) — curl y libcurl4**  
Un bug en la lógica de comparación de rutas de cookies permite que un sitio HTTP sobreescriba cookies marcadas como `secure` de HTTPS. Puede derivar en **robo de sesión o credenciales** en servidores que consumen APIs externas.

**CVE-2026-0861 (High) — libc6 y libc-bin**  
Integer overflow en funciones de memoria de la GNU C Library (`memalign`, `posix_memalign`, `aligned_alloc`). Puede resultar en **heap corruption**, base técnica de muchos exploits avanzados.

**CVE-2025-45582 (Medium) — tar**  
Directory traversal en TAR archives mediante un proceso de dos pasos con symlinks. Especialmente peligroso en pipelines CI/CD donde se extraen múltiples archivos TAR automáticamente.

**CVE-2025-14524 (Medium) — curl**  
Tokens OAuth2 se filtran en redirecciones cross-protocol hacia IMAP, LDAP, POP3 o SMTP. Relevante en cualquier servidor que consuma APIs con autenticación moderna.

### Security Configuration Assessment (SCA) — Linux

Wazuh ejecutó automáticamente el benchmark **CIS Ubuntu Linux 22.04 LTS v2.0.0**, obteniendo:

| Controles pasados | Controles fallidos | No aplicables | Score |
|---|---|---|---|
| 72 | 81 | 54 | **47%** |

Un score de 47% indica que el servidor tiene múltiples configuraciones inseguras por defecto. En un entorno de producción real, el objetivo mínimo sería superar el 80%. Los controles fallidos incluyen típicamente configuraciones de SSH, permisos de archivos críticos y políticas de contraseñas.

![Lab7](https://i.imgur.com/thEyFa9.png)

### Comparativa de vulnerabilidades entre endpoints

| Métrica | macOS (workstation) | Linux (servidor) |
|---|---|---|
| Total vulnerabilidades | 448 | 37 |
| Critical | 33 | 0 |
| High | 137 | 7 |
| Causa principal | SO desactualizado | Librerías del sistema core |
| CIS Benchmark | No disponible | 47% (81 controles fallidos) |

La diferencia en cantidad refleja que macOS acumula vulnerabilidades por falta de actualizaciones del SO, mientras que Linux tiene menos pero afectan componentes fundamentales del sistema como PAM y libc.


## Análisis Técnico de Telemetría

Para elevar el valor de este laboratorio, no solo se monitorizaron ataques simulados, sino que se realizó un análisis profundo de la telemetría real capturada por Wazuh. A continuación, se detalla la interpretación de un hallazgo crítico de vulnerabilidad.

### Caso de Estudio: Análisis de CVE-2026-20636 (macOS)

Al inspeccionar los eventos del agente `macos-endpoint-01`, se identificó una vulnerabilidad activa que permite entender cómo un analista de SOC prioriza las amenazas.

#### 1. Anatomía del Evento (Data Extraction)
Extrayendo los datos crudos del JSON de la alerta, obtenemos los siguientes puntos de decisión:

- **Identificador:** `CVE-2026-20636`
- **Severidad:** `Medium` (Base Score: 6.5)
- **Vector de Ataque:** `NETWORK` (Significa que la amenaza puede venir de internet, no requiere acceso físico).
- **Condición del Paquete:** `Package less than 26.3`.

![lab8](https://i.imgur.com/oRuQ4AY.png)
![Lab9](https://i.imgur.com/2JXewnv.png)

#### 2. Interpretación Técnica
El log indica que el sistema operativo (macOS 15.4.1) tiene una debilidad en el **manejo de memoria (CWE-119)**.

> **Análisis:** La vulnerabilidad se dispara al procesar contenido web malicioso. Si un usuario del endpoint visita un sitio comprometido, el atacante podría causar un fallo en el proceso (`crash`) o potencialmente ejecutar código. La relevancia de detectar esto mediante el SIEM es que nos permite anticiparnos al exploit antes de que ocurra la brecha.

#### 3. Respuesta y Remediación
Gracias al enriquecimiento de datos de Wazuh, el SIEM nos proporciona la solución directa:
- **Acción:** Actualizar el sistema a macOS Sequoia 15.7.4 o macOS Tahoe 26.3.
- **Referencia:** [Apple Security Support](https://support.apple.com/en-us/126346).



### Caso de Estudio: Monitoreo de Red Activo (Netstat)

Se validó la capacidad de respuesta ante cambios en tiempo real en la red del host macOS.

- **Evento detectado:** `Listened ports status (netstat) changed` (Regla 533).
- **Análisis visual:** Como se observa en la imagen inferior, el SIEM detectó la apertura del puerto dinámico `49628`.
- **Evidencia técnica:** Al comparar el campo `previous_log` con el `full_log`, se identifica la aparición de la cadena `tcp4 127.0.0.1.49628`, lo que activa la alerta de nivel 7.

![Lab10](https://i.imgur.com/gM556dw.png)

**Conclusión:** Los puertos en el rango 49152–65535 en sistemas macOS suelen ser asignados dinámicamente para conexiones temporales de salida (como peticiones DNS, actualizaciones de software o sesiones de navegador).


## Conclusiones

Este laboratorio demostró la efectividad de Wazuh como herramienta XDR en un entorno híbrido. Los hitos alcanzados fueron:

1. **Visibilidad total:** De un entorno sin visibilidad a monitoreo centralizado de dos endpoints multiplataforma.
2. **Criterio Técnico:** Capacidad de distinguir entre amenazas reales y falsos positivos de red.
3. **Metodología Profesional:** Aplicación del ciclo de detección, análisis y remediación.



## Referencias

- [Documentación oficial de Wazuh](https://documentation.wazuh.com)
- [Wazuh Docker deployment guide](https://documentation.wazuh.com/current/deployment-options/docker/docker-installation.html)
- [MITRE ATT&CK Framework](https://attack.mitre.org)
- [NVD - National Vulnerability Database](https://nvd.nist.gov)