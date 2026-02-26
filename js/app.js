// =============================================
// APP.JS — Motor del Quiz Therian
// =============================================

// === Estado del Quiz ===
let currentQuestionIndex = 0;
let part1_scores = { A: 0, B: 0, C: 0, D: 0 };
let part2_scores = { X: 0, Y: 0, Z: 0, W: 0 };

// === Audio Context para sonidos sutiles ===
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

// Sonido sutil al seleccionar una opción (click suave tipo "pop")
function playSelectSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.15);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.15);
}

// Sonido suave de transición entre secciones
function playTransitionSound() {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(400, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(700, audioCtx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.4);
}

// Sonido especial para resultados
function playResultSound() {
    if (!audioCtx) return;
    const notes = [523, 659, 784]; // C5, E5, G5 — acorde mayor
    notes.forEach((freq, i) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.12);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime + i * 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.12 + 0.6);
        osc.start(audioCtx.currentTime + i * 0.12);
        osc.stop(audioCtx.currentTime + i * 0.12 + 0.6);
    });
}

// === Referencias al DOM ===
const introSection = document.getElementById('intro');
const quizSection = document.getElementById('quiz');
const transitionSection = document.getElementById('transition');
const resultsSection = document.getElementById('results');

const backgroundLayer = document.getElementById('background-layer');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const phaseTitle = document.getElementById('phase-title');
const progressBar = document.getElementById('progress');
const questionImageWrapper = document.getElementById('question-image-wrapper');
const questionCounter = document.getElementById('question-counter');

// === Event Listeners ===
document.getElementById('start-btn').addEventListener('click', () => {
    initAudio();
    playTransitionSound();
    startQuiz();
});
document.getElementById('continue-btn').addEventListener('click', () => {
    playTransitionSound();
    continueToPhase2();
});
document.getElementById('restart-btn').addEventListener('click', () => {
    playSelectSound();
    resetQuiz();
});

// === Cambio suave entre secciones ===
function switchSection(oldSection, newSection) {
    oldSection.classList.remove('active');
    setTimeout(() => {
        newSection.classList.add('active');
    }, 600);
}

// === Iniciar el Quiz ===
function startQuiz() {
    switchSection(introSection, quizSection);
    renderQuestion();
}

// === Manejar respuesta ===
function handleAnswer(value) {
    playSelectSound();

    // Sumar puntos según la fase
    if (['A', 'B', 'C', 'D'].includes(value)) {
        part1_scores[value]++;
    } else if (['X', 'Y', 'Z', 'W'].includes(value)) {
        part2_scores[value]++;
    }

    // Fade-out de opciones
    optionsContainer.style.opacity = '0';
    
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex === 9) {
            // Mostrar tarjeta de transición a Parte 2
            playTransitionSound();
            switchSection(quizSection, transitionSection);
            optionsContainer.style.opacity = '1';
        } else if (currentQuestionIndex === 14) {
            // Fin del quiz — calcular resultados
            calculateAndShowResults();
            optionsContainer.style.opacity = '1';
        } else {
            renderQuestion();
            optionsContainer.style.opacity = '1';
        }
    }, 400);
}

// === Continuar a la Parte 2 ===
function continueToPhase2() {
    backgroundLayer.classList.add('phase2');
    switchSection(transitionSection, quizSection);
    renderQuestion();
}

// === Renderizar pregunta actual ===
function renderQuestion() {
    const totalQuestions = allQuestions.length;
    const progressPercent = ((currentQuestionIndex) / totalQuestions) * 100;
    progressBar.style.width = progressPercent + '%';

    // Actualizar título de fase
    if (currentQuestionIndex < 9) {
        phaseTitle.textContent = "Parte 1: Descubriendo tu Theriotype";
    } else {
        phaseTitle.textContent = "Parte 2: Tu Compatibilidad";
    }

    // Contador de pregunta
    questionCounter.textContent = "Pregunta " + (currentQuestionIndex + 1) + " de " + totalQuestions;

    const currentQ = allQuestions[currentQuestionIndex];
    questionText.textContent = (currentQuestionIndex + 1) + ". " + currentQ.question;
    
    // Imagen de la pregunta (si existe)
    if (questionImages[currentQuestionIndex]) {
        questionImageWrapper.innerHTML = '<img src="' + questionImages[currentQuestionIndex] + '" alt="Ambiente natural">';
        questionImageWrapper.style.display = 'block';
    } else {
        questionImageWrapper.innerHTML = '';
        questionImageWrapper.style.display = 'none';
    }

    // Renderizar opciones
    optionsContainer.innerHTML = '';
    currentQ.options.forEach(function(opt) {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = opt.text;
        btn.onclick = function() { handleAnswer(opt.value); };
        optionsContainer.appendChild(btn);
    });
}

// === Obtener la clave con mayor puntaje ===
function getHighestScore(scoreObj) {
    return Object.keys(scoreObj).reduce(function(a, b) {
        return scoreObj[a] > scoreObj[b] ? a : b;
    });
}

// === Calcular y mostrar resultados ===
function calculateAndShowResults() {
    playResultSound();

    const archetypeKey = getHighestScore(part1_scores);
    const compatibilityKey = getHighestScore(part2_scores);

    const archetype = theTypeDescriptions[archetypeKey];
    const compatibility = theCompatibilityMap[compatibilityKey];

    // Ícono
    document.getElementById('result-icon-container').innerHTML = archetype.icon;
    
    // Título del arquetipo
    document.getElementById('theriotype-title').textContent = archetype.title;
    
    // Imagen del resultado
    const resultImageWrapper = document.getElementById('result-image-wrapper');
    resultImageWrapper.innerHTML = '<img src="' + archetype.image + '" alt="' + archetype.title + '">';

    // Descripción extendida del arquetipo
    document.getElementById('theriotype-desc').textContent = archetype.description;

    // Compatibilidad
    document.getElementById('compatibility-title').textContent = compatibility.title;
    document.getElementById('compatibility-desc').textContent = compatibility.text;

    // Cambiar fondo según arquetipo
    const bgMap = {
        A: 'radial-gradient(circle at 50% 50%, #2f3a4c 0%, #1a1f2c 100%)',
        B: 'radial-gradient(circle at 50% 50%, #1c1822 0%, #0a080d 100%)',
        C: 'radial-gradient(circle at 50% 50%, #1b3a4b 0%, #0b1a23 100%)',
        D: 'radial-gradient(circle at 50% 50%, #4a4221 0%, #1d190b 100%)'
    };
    backgroundLayer.style.background = bgMap[archetypeKey];

    switchSection(quizSection, resultsSection);
    progressBar.style.width = '100%';
}

// === Reiniciar el Quiz ===
function resetQuiz() {
    currentQuestionIndex = 0;
    part1_scores = { A: 0, B: 0, C: 0, D: 0 };
    part2_scores = { X: 0, Y: 0, Z: 0, W: 0 };
    
    backgroundLayer.classList.remove('phase2');
    backgroundLayer.style.background = '';

    switchSection(resultsSection, introSection);
}
