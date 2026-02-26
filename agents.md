# Instrucciones de Desarrollo: App Profesional Therian Quiz

## Objetivo:
Crear una aplicación web de una sola página (Single Page Application), visualmente hermosa, interactiva y profesional, basada exclusivamente en HTML5, CSS3 modernos y JavaScript (ES6+). La app debe estar en ESPAÑOL y no usar frameworks externos.

## 1. Estructura de la Aplicación (HTML):
* Debe tener una sección de `introducción` con el texto de `quiz.md`.
* Debe tener una sección de `quiz` (Parte 1 y Parte 2).
* Debe tener una sección de `resultados`.
* Usar etiquetas semánticas: `<header>`, `<main>`, `<section>`, `<article>`.
* Usar un contenedor principal (`<main id="app">`) donde JavaScript inyectará las preguntas.
* Las preguntas deben renderizarse como tarjetas individuales que se ocultan y muestran suavemente.

## 2. Estilo y Diseño (CSS):
* **Estética Profesional:** Limpia, minimalista, con un toque natural y misterioso, pero *no* infantil. Evitar imágenes de personas con máscaras de therians para evitar controversias; usar imágenes simbólicas de la *esencia animal* y la *naturaleza*.
* **Colores:** Usar una paleta de colores natural inspirada en los arquetipos. Tonos tierra, azules profundos, verde bosque y toques de oro viejo para el Arquetipo D.
* **Tipografía:** Usar fuentes limpias y sans-serif para el texto (ej: Lato, Montserrat) y una fuente con un toque más orgánico y estilizado para los títulos (ej: Lora, Playfair Display).
* **UI/UX:**
    * Diseño Responsivo (Mobile First).
    * Tarjetas de preguntas con bordes suaves y sombra sutil.
    * Transiciones suaves de opacidad (fade-in/fade-out) entre preguntas y al mostrar resultados. No usar transiciones de "página".
    * Botones de opción grandes y táctiles con efecto `hover` y `active`.

## 3. Imágenes (Generación y Manejo):
* **NO usar imágenes de Google o externas.**
* El prompt de generación de imágenes debe instruir al modelo para crear imágenes *interactivas* y *consistentes*.
* **Generar imágenes de fondo:** Una imagen de fondo sutil y dinámica que cambie ligeramente con la Parte 1 (Noche, Bosque, Agua, Pradera).
* **Generar íconos simbólicos:** Un pequeño ícono simbólico y abstracto para cada Arquetipo (A, B, C, D) para mostrar en el resultado. Ej: Un símbolo de brújula o estrellas para Cánidos, un ojo estilizado para Felinos.
* **Generar imagen de resultado:** Una imagen abstracta, hermosa y evocadora para cada resultado (Ej: Una silueta de un lobo en la nieve bajo la aurora boreal).

## 4. Lógica de JavaScript (JS):
* **Variables de Estado:** Mantener variables para `currentQuestionIndex`, `part1_scores {A:0, B:0, C:0, D:0}`, y `part2_scores {X:0, Y:0, Z:0, W:0}`.
* **Función `startQuiz()`:** Ocultar la introducción y mostrar la primera pregunta.
* **Función `handleAnswer()`:**
    * Obtener el valor de la respuesta (A, B, C, D, X, Y, Z, W).
    * Sumar puntos a la variable correspondiente en `part1_scores` (preguntas 1-9) y `part2_scores` (preguntas 10-14).
    * Aumentar `currentQuestionIndex`.
    * Llamar a `renderQuestion()`.
* **Función `renderQuestion()`:**
    * Si `currentQuestionIndex` < 9: Renderizar la pregunta de la Parte 1.
    * Si `currentQuestionIndex` == 9: Mostrar una tarjeta de transición suave explicando que comienza la Parte 2 sobre compatibilidad.
    * Si `currentQuestionIndex` >= 10 y < 14: Renderizar la pregunta de la Parte 2.
    * Si `currentQuestionIndex` == 14: Llamar a `calculateAndShowResults()`.
* **Función `calculateAndShowResults()`:**
    * **Theriotype:** Determinar el Arquetipo ganador (mayor puntaje en `part1_scores`).
    * **Compatibilidad:** Determinar el mayor puntaje en `part2_scores`.
    * **Inyección de Resultados:** Inyectar la descripción del Theriotype, la imagen generada correspondiente y el texto de compatibilidad en la sección de resultados. Usar los textos definidos en `quiz.md`.

## 5. Requisitos de Código Profesional:
* Usar nombres de variables y funciones descriptivos en español.
* Dividir el código JS en módulos lógicos (ej: `questions.js`, `logic.js`, `ui.js`).
* Añadir comentarios claros y concisos.
* Asegurar que la app sea accesible (usar atributos `aria` si es necesario).