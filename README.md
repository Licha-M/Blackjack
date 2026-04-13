# 🃏 BlackJack Web App

Una implementación completa y funcional del clásico juego de cartas BlackJack (Veintiuno), desarrollada íntegramente con tecnologías web nativas (Vanilla JavaScript, HTML5, CSS3). 

Este proyecto simula la experiencia de un casino, implementando las reglas estándar del juego, incluyendo la gestión de probabilidades, el cálculo dinámico del valor del As y la mecánica avanzada de "Dividir" (Split) la mano.

## 🚀 Características Principales

* **Lógica de Juego Completa:** Motor de juego que maneja las reglas tradicionales, incluyendo plantarse, pedir carta y la obligación del crupier de pedir hasta alcanzar 16 puntos.
* **Mecánica de "Dividir" (Split):** Sistema robusto que permite al jugador dividir su mano en dos instancias independientes cuando recibe cartas del mismo valor, gestionando puntuaciones y turnos por separado.
* **Cálculo Dinámico del As:** Algoritmo que ajusta automáticamente el valor del As (1 u 11) para optimizar la puntuación del jugador sin pasarse de 21.
* **Gestión de Estado y Baraja:** Algoritmo de exclusión de cartas (`cartasExcluidas`) que simula una baraja real de 52 cartas, evitando duplicados en una misma ronda.
* **Sistema de Progresión:** Seguimiento del rendimiento mediante un sistema de partidas a 10 rondas, calculando un registro histórico de Victorias, Empates y Derrotas.
* **Interfaz Gráfica Responsiva:** Diseño inmersivo estilo tapete de casino, con posicionamiento absoluto y transformaciones CSS para la correcta superposición visual de las cartas.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la aplicación y modales.
* **CSS3:** Renderizado visual, variables CSS para animaciones de posición, Flexbox para layouts y sombreados para profundidad.
* **Vanilla JavaScript (ES6+):** Lógica del motor del juego, manipulación del DOM en tiempo real y gestión del estado (rondas, puntajes). No requiere frameworks externos.

## 📁 Arquitectura y Flujo del Sistema

El proyecto sigue una separación clara de responsabilidades:

* `index.html`: Contiene el árbol DOM inicial, los menús superpuestos (como las reglas y la pantalla de victoria/derrota) y los contenedores de los jugadores.
* `style.css`: Define la interfaz gráfica. Destaca el uso de variables CSS locales (`--index`) inyectadas dinámicamente para lograr el efecto de "abanico" al repartir las cartas en la mesa.
* `programa.js`: El núcleo de la aplicación. Maneja las funciones de cálculo (`alea`, `otra`, `pcarta`), la lógica de finalización de turnos (`fin`, `fin2`) y la evaluación de la condición de victoria (`ganador`, `ganador2`).
* `esquema.png`: Documentación visual del Wireframe y la distribución espacial de los componentes en la interfaz de usuario.
* `icono.ico` / `logo.png`: Recursos de identidad visual.
* `cartas/` *(Directorio requerido)*: Contiene los *assets* gráficos de la baraja, organizados por palo y valor numérico.

## ⚙️ Instalación y Despliegue

Al ser una aplicación estática (Frontend del lado del cliente), no requiere configuración de servidores ni instalación de dependencias.

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/nombre-del-repo.git](https://github.com/tu-usuario/nombre-del-repo.git)
    ```
2.  **Verificar los recursos gráficos:**
    Asegúrate de que la carpeta `cartas/` esté presente en el directorio raíz con las subcarpetas del `1` al `4` (representando los palos) y las imágenes numeradas (`1.png` a `13.png`), además de la carta de reverso (`R.png`).
3.  **Ejecutar:**
    Abre el archivo `index.html` en cualquier navegador web moderno (Chrome, Firefox, Edge, Safari).

## 📖 Cómo Jugar (Reglas Integradas)

El sistema incluye un modal de documentación interna accesible desde la interfaz gráfica. 
* **Objetivo:** Vencer al crupier obteniendo una puntuación más cercana a 21 sin pasarse.
* **Controles:**
    * **Repartir:** Inicia una nueva ronda.
    * **Pedir Carta:** Toma una carta adicional de la baraja.
    * **Parar:** Finaliza tu turno y cede el control al algoritmo del crupier.
    * **Dividir:** Disponible únicamente en el turno inicial si las cartas tienen el mismo valor.
    * **Retirarse:** Abandona la ronda actual (se cuenta como derrota).

## 👥 Créditos / Autores

* Desarrollado y diseñado por **[Licha](https://github.com/Licha-M)** y **[Agus](https://github.com/)**.

## 📄 Licencia

Este proyecto es de código abierto. [Puedes añadir aquí tu licencia, e.g., MIT, GPL, etc.]
