# [H9](https://hackatomik.com) {CAMPUS}

Guías de referencia en las que se basa este documento:

- [Google Sheets](https://docs.google.com/presentation/d/1yFgv_sgQCuoQkRluLT_CJEhkL_EhxLZjVOIPLTYUnu8/edit#slide=id.p)
- [Google Docs](https://docs.google.com/document/d/1EigNMC-xV0_U9QUnzn9mBy6SONNiOMUiKQ_4ygZ09kY/edit#heading=h.muiob841iq98)

## Índice

- [Git y GitHub](#git-y-github)
- [Herramientas de Computación Aplicadas](#herramientas-de-computación-aplicadas)
  - [TIC](#tecnología-de-información-y-comunicaciones-tic)
  - [Sistemas Colaborativos](#sistemas-colaborativos-sisco)
  - [Métodos Numéricos](#métodos-numéricos)
- [Recursos Adicionales](#recursos-adicionales)

## Git y GitHub

Objetivos de la guía

- Enseñar a los estudiantes a utilizar GitHub para la colaboración en proyectos de ingeniería.
- Facilitar el aprendizaje de sistemas colaborativos mediante la práctica con GitHub.
- Aplicar GitHub en la resolución de problemas de Métodos Numéricos.
- Integrar el uso de TIC en el currículum de ingeniería.

### Paso 1: Crear una Cuenta de GitHub

Visita [GitHub](https://github.com) y haz clic en "Sign up".

Ingresa tu dirección de correo electrónico y sigue las instrucciones para crear tu cuenta.

Verifica tu cuenta mediante el correo electrónico que recibirás de GitHub.

### Paso 2: Instalar Git

Windows:

- Descarga Git desde https://git-scm.com.
- Ejecuta el instalador y sigue las instrucciones.

MacOS:

- Abre la Terminal y ejecuta `brew install git`.

Linux:

- Abre la Terminal y ejecuta `sudo apt-get install git` (para distribuciones basadas en Debian) o `sudo yum install git` (para distribuciones basadas en Red Hat).

### Paso 3: Uso de la Terminal

Algunos comandos para terminal Bash de **Linux** (preferiblemente):

- Navegar entre directorios: `cd <nombre_del_directorio>`
- Listar archivos y directorios: `ls`
- Crear un nuevo directorio: `mkdir <nombre_del_directorio>`
- Crear un nuevo archivo: `touch <nombre_del_archivo>`
- Copiar archivos: `cp <archivo_origen> <archivo_destino>`
- Mover archivos: `mv <archivo_origen> <archivo_destino>`
- Eliminar archivos: `rm archivo`
- Eliminar directorio: `rm -r directorio`
- Ver el contenido de un archivo: `cat archivo`
- Buscar archivos: `find /<ruta> -name "<nombre_del_archivo>"`

### Paso 4: Configurar Git

- Abre la Terminal (o Git Bash en Windows).
- Configura tu nombre de usuario y correo electrónico

```sh
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"

```

### Paso 5: Crear un Nuevo Repositorio en GitHub

- Inicia sesión en GitHub y haz clic en el botón "+" en la esquina superior derecha, luego selecciona "New repository".
- Ingresa un nombre para tu repositorio
  (por ejemplo, "ColLabLearn-Proyecto").
- Opcionalmente, agrega una descripción.
- Selecciona "Public" o "Private" según prefieras.
- Haz clic en "Create repository".

### Paso 6: Clonar el Repositorio en tu Computadora

- Copia la URL del repositorio (haz clic en el botón "Code" y luego copia la URL).
- Abre la Terminal y navega al directorio donde quieres clonar el repositorio.

## Herramientas de Computación Aplicadas

Alternativas de software a usar para matemáticas:

- **SageMath** (Gratuito Open Source)

  1. Instalación:
     - Descarga e instala SageMath desde https://sagemath.org.
  2. Uso Básico
     - Abre SageMath y utiliza el cuaderno interactivo para realizar cálculos matemáticos.

- **MATLAB** (propietario)
  1. Instalación:
     - Descarga e instala MATLAB desde https://mathworks.com.
  2. Uso Básico:
     - Abre MATLAB y utiliza el entorno de desarrollo para realizar cálculos y simulaciones.
- **Mathematica**
  1. Instalación:
     - Descarga e instala Mathematica desde https://wolfram.com.
  2. Uso Básico:
     - Abre Mathematica y utiliza el entorno de desarrollo para realizar cálculos simbólicos y numéricos.
- **Wolfram Alpha**
  1. Acceso en Línea:
     - Visita https://wolframalpha.com.
  2. Uso Básico:
     - Introduce consultas matemáticas y científicas para obtener respuestas inmediatas.

### Tecnología de Información y Comunicaciones (TIC)

#### Gestión de Proyectos

1. **Uso de Plataformas Colaborativas como GitHub Projects:**
   - Asigna tareas y monitoriza el progreso de proyectos utilizando tableros visuales y herramientas de gestión de tareas.
   - Implementa metodologías ágiles como Scrum o Kanban para mejorar la eficiencia y colaboración dentro del equipo.
1. **Implementación de Metodologías Ágiles:**
   - Adopta prácticas ágiles como sprints, reuniones diarias (stand-ups) y revisiones de sprint para fomentar la comunicación y la entrega continua de valor.
   - Utiliza retrospectivas para identificar áreas de mejora y ajustar procesos de trabajo.

#### **Desarrollo de Software**

1. **Utilización de Git para el Control de Versiones:**
   - Permite a los estudiantes trabajar en proyectos de manera colaborativa y ordenada mediante ramas, commits y merges.
   - Facilita la trazabilidad de cambios y la reversión a versiones anteriores en caso de errores.
1. **Integración de Herramientas como SageMath y MATLAB:**
   - Realiza cálculos complejos y simulaciones utilizando SageMath para matemáticas simbólicas y MATLAB para análisis numérico y simulación.
   - Integra estas herramientas con GitHub para compartir y colaborar en proyectos de ingeniería, facilitando el acceso a código y resultados entre los miembros del equipo.

### Sistemas Colaborativos (SISCO)

#### Gestión de Proyectos con GitHub Projects

Uso de GitHub Projects para gestionar tareas y proyectos:

- **Crear Tableros (Boards):**

  - **Organiza tus proyectos:** Utiliza tableros visuales para gestionar y organizar tus proyectos de manera eficiente.
  - **Estructura de Tableros:** Configura columnas estándar como "To Do", "In Progress" y "Done" para visualizar claramente el flujo de trabajo y el estado de cada tarea.

- **Asignación de Tareas:**

  - **Asignación Específica:** Asigna tareas específicas a los miembros del equipo utilizando tarjetas (cards) dentro de cada columna del tablero.
  - **Detalles y Prioridades:** Agrega descripciones detalladas, fechas límite y etiquetas para categorizar y priorizar las tareas, asegurando que todos los miembros del equipo entiendan claramente sus responsabilidades.

- **Rastreo del Progreso:**

  - **Monitoreo del Avance:** Rastrea el avance de cada tarea moviendo las tarjetas a través de las columnas correspondientes, proporcionando una visión clara del estado del proyecto en tiempo real.
  - **Filtros y Vistas:** Utiliza la funcionalidad de filtros y vistas personalizadas para obtener una visión detallada y específica del progreso del proyecto.

#### Revisiones de Código

Utiliza Pull Requests para revisión de código:

- **Creación de Pull Requests:**

  - **Procedimiento de PR:** Al completar una característica o corrección, crea un Pull Request (PR) desde la rama de trabajo hacia la rama principal del repositorio.
  - **Descripción y Referencias:** Incluye una descripción detallada de los cambios realizados y referencia cualquier issue relacionado para proporcionar contexto a los revisores.

- **Revisiones entre Pares:**

  - **Revisión Constructiva:** Fomenta las revisiones de código entre compañeros para mejorar la calidad del código y detectar errores temprano. Los revisores deben dejar comentarios constructivos y sugerencias para mejorar el código.

- **Aprobación e Integración:**

  - **Proceso de Aprobación:** Una vez que el PR ha sido revisado y aprobado, intégralo (merge) a la rama principal. Asegúrate de que todos los comentarios y sugerencias han sido atendidos.
  - **Automatización con CI:** Utiliza herramientas de integración continua (CI) para automatizar las pruebas y asegurar que el nuevo código no rompe funcionalidades existentes. Esto garantiza que el código se mantenga en un estado funcional y estable.

### Métodos Numéricos

#### Álgebra Lineal en Métodos Numéricos

- Sistemas de Ecuaciones Lineales:

  1. **Representación de Sistemas:**
     - **Uso de Matrices y Vectores:** Representa y resuelve sistemas de ecuaciones lineales algebraicas utilizando matrices y vectores. Implementa métodos directos como eliminación gaussiana y factorización LU para encontrar soluciones.
     - **Aplicación en GitHub:** Crea repositorios en GitHub para almacenar y versionar scripts que implementan estos métodos. Utiliza Jupyter Notebooks para documentar y compartir tus soluciones.
  1. **Métodos Iterativos:**
     - **Métodos Jacobi y Gauss-Seidel:** Implementa métodos iterativos para aproximar soluciones de sistemas grandes y dispersos. Evalúa la convergencia y eficiencia de estos métodos.
     - **Aplicación en GitHub:** Comparte tus implementaciones de métodos iterativos en GitHub, utilizando Issues para discutir problemas y Pull Requests para recibir retroalimentación.

- Determinantes y Matrices:

  1. **Cálculo de Determinantes:**
     - **Métodos de Cálculo:** Calcula determinantes de matrices para evaluar la solvencia de sistemas y aplicar técnicas de inversión de matrices.
     - **Aplicación en GitHub:** Almacena scripts para cálculo de determinantes en GitHub y usa GitHub Pages o Jupyter Notebooks para documentar métodos y resultados.
  1. **Inversión de Matrices:**
     - **Técnicas de Inversión:** Utiliza factorización LU y el método de matrices adjuntas para encontrar la inversa de matrices.
     - **Aplicación en GitHub:** Gestiona tus códigos de inversión de matrices en repositorios de GitHub y utiliza Issues para registrar y resolver problemas encontrados durante el desarrollo.

- Valores y Vectores Propios:

  1. **Cálculo de Valores Propios:**
     - **Determinación de Valores y Vectores Propios:** Calcula valores y vectores propios para aplicaciones en estabilidad de sistemas y reducción dimensional.
     - **Aplicación en GitHub:** Comparte tus códigos de cálculo en GitHub y utiliza herramientas como GitHub Actions para automatizar pruebas y validaciones de tus cálculos.
  1. **Descomposición en Valores Singulares (SVD):**
     - **Aplicaciones de SVD:** Aplica SVD para problemas de análisis de datos y reducción de ruido.
     - **Aplicación en GitHub:** Documenta y versiona tus implementaciones de SVD en repositorios de GitHub y usa Jupyter Notebooks para presentar análisis y resultados.

#### Cálculo en Métodos Numéricos

- Diferenciación Numérica:

  1. **Aproximación de Derivadas:**
     - **Métodos de Diferenciación:** Utiliza diferencias finitas para aproximar derivadas de funciones discretas, evaluando la precisión y estabilidad de estos métodos.
     - **Aplicación en GitHub:** Almacena tus implementaciones de diferenciación numérica en GitHub y utiliza Jupyter Notebooks para documentar el análisis de errores y la precisión.
  1. **Errores y Estabilidad:**
     - **Evaluación de Errores:** Evalúa errores de truncamiento y el impacto de la elección del paso en la precisión de las derivadas aproximadas.
     - **Aplicación en GitHub:** Crea repositorios para gestionar experimentos y análisis de errores, utilizando Issues para seguimiento de problemas y Pull Requests para colaboración en la mejora de métodos.

- Integración Numérica:

  1. **Métodos de Integración:**
     - **Aplicación de Métodos:** Aplica métodos como la regla del trapecio, Simpson y cuadratura gaussiana para aproximar integrales definidas, evaluando precisión y rendimiento.
     - **Aplicación en GitHub:** Comparte tus implementaciones de integración numérica en GitHub y utiliza GitHub Actions para ejecutar pruebas automatizadas.
  1. **Errores de Integración:**
     - **Análisis de Errores:** Analiza errores de truncamiento y compara la eficiencia de diferentes métodos según precisión y costo computacional.
     - **Aplicación en GitHub:** Documenta tus análisis de errores en repositorios de GitHub y utiliza Issues para discutir resultados y ajustes en los métodos.

#### Estadística en Métodos Numéricos

- Análisis de Errores:

  1. **Evaluación de Métodos:**
     - **Precisión y Exactitud:** Evalúa la precisión y exactitud de métodos numéricos utilizando análisis de errores absolutos y relativos. Ajusta los métodos para mejorar la exactitud.
     - **Aplicación en GitHub:** Usa GitHub para almacenar y versionar tus análisis de errores y resultados, compartiendo documentos y códigos para colaboración y revisión.
  1. **Errores de Redondeo y Truncamiento:**
     - **Minimización de Errores:** Identifica y minimiza errores de redondeo y truncamiento en cálculos numéricos.
     - **Aplicación en GitHub:** Gestiona scripts de análisis de errores en GitHub, utilizando Issues para registrar problemas y Pull Requests para implementar mejoras.

- Ajuste de Curvas:

  1. **Regresión y Modelado:**
     - **Técnicas de Regresión:** Utiliza técnicas de regresión para ajustar modelos a datos observados, aplicando regresión lineal, polinomial y no lineal.
     - **Aplicación en GitHub:** Comparte tus modelos de regresión y análisis en GitHub, usando Jupyter Notebooks para documentar y presentar resultados.
  1. **Evaluación de Modelos:**
     - **Pruebas de Bondad de Ajuste:** Realiza pruebas de bondad de ajuste y análisis residual para evaluar la calidad del modelo ajustado y ajustar parámetros.
     - **Aplicación en GitHub:** Documenta tus evaluaciones de modelos en repositorios de GitHub y usa herramientas como GitHub Pages para publicar informes de análisis y resultados.

## Recursos Adicionales

- **GitHub Learning Lab:** [GitHub Learning Lab](https://lab.github.com/) ofrece cursos interactivos gratuitos para aprender Git y GitHub.
- **Documentación de GitHub:** [GitHub Docs](https://docs.github.com/en) proporciona guías y tutoriales detallados.
- **Tutoriales de Git:** Atlassian Git Tutorial ofrece una guía completa sobre Git.
