// State variables
let currentQuestionIndex = 0;
let part1_scores = { A: 0, B: 0, C: 0, D: 0 };
let part2_scores = { X: 0, Y: 0, Z: 0, W: 0 };

// DOM Elements
const introSection = document.getElementById('intro');
const quizSection = document.getElementById('quiz');
const transitionSection = document.getElementById('transition');
const resultsSection = document.getElementById('results');

const backgroundLayer = document.getElementById('background-layer');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const phaseTitle = document.getElementById('phase-title');
const progressBar = document.getElementById('progress');

// Buttons
document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('continue-btn').addEventListener('click', continueToPhase2);
document.getElementById('restart-btn').addEventListener('click', resetQuiz);

function switchSection(oldSection, newSection) {
    oldSection.classList.remove('active');
    setTimeout(() => {
        newSection.classList.add('active');
    }, 600); // Wait for CSS transition (0.6s)
}

function startQuiz() {
    switchSection(introSection, quizSection);
    renderQuestion();
}

function handleAnswer(value) {
    // Add points based on the value
    if (['A', 'B', 'C', 'D'].includes(value)) {
        part1_scores[value]++;
    } else if (['X', 'Y', 'Z', 'W'].includes(value)) {
        part2_scores[value]++;
    }

    // Fade out current options container smoothly
    optionsContainer.style.opacity = '0';
    
    setTimeout(() => {
        currentQuestionIndex++;
        
        if (currentQuestionIndex === 9) {
            // Trigger transition to Phase 2
            switchSection(quizSection, transitionSection);
            optionsContainer.style.opacity = '1';
        } else if (currentQuestionIndex === 14) {
            // End of quiz
            calculateAndShowResults();
            optionsContainer.style.opacity = '1';
        } else {
            renderQuestion();
            optionsContainer.style.opacity = '1';
        }
    }, 400); // Short delay for fade-out effect on options
}

function continueToPhase2() {
    backgroundLayer.classList.add('phase2');
    switchSection(transitionSection, quizSection);
    renderQuestion();
}

function renderQuestion() {
    const totalQuestions = allQuestions.length;
    const progressPercent = ((currentQuestionIndex) / totalQuestions) * 100;
    progressBar.style.width = `${progressPercent}%`;

    if (currentQuestionIndex < 9) {
        phaseTitle.textContent = "Parte 1: Descubriendo tu Theriotype";
    } else {
        phaseTitle.textContent = "Parte 2: Tu Compatibilidad Therian";
    }

    const currentQ = allQuestions[currentQuestionIndex];
    questionText.textContent = `${currentQuestionIndex + 1}. ${currentQ.question}`;
    
    // Clear previous options
    optionsContainer.innerHTML = '';

    currentQ.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = opt.text;
        btn.onclick = () => handleAnswer(opt.value);
        optionsContainer.appendChild(btn);
    });
}

function getHighestScore(scoreObj) {
    return Object.keys(scoreObj).reduce((a, b) => scoreObj[a] > scoreObj[b] ? a : b);
}

function calculateAndShowResults() {
    const archetypeKey = getHighestScore(part1_scores);
    const compatibilityKey = getHighestScore(part2_scores);

    const archetype = theTypeDescriptions[archetypeKey];
    const compatibility = theCompatibilityMap[compatibilityKey];

    // Populate results UI
    document.getElementById('result-icon-container').innerHTML = archetype.icon;
    document.getElementById('theriotype-title').textContent = archetype.title;
    
    // We update background visually depending on archetype
    if (archetypeKey === 'A') backgroundLayer.style.background = 'radial-gradient(circle at 50% 50%, #2f3a4c 0%, #1a1f2c 100%)';
    if (archetypeKey === 'B') backgroundLayer.style.background = 'radial-gradient(circle at 50% 50%, #1c1822 0%, #0a080d 100%)';
    if (archetypeKey === 'C') backgroundLayer.style.background = 'radial-gradient(circle at 50% 50%, #1b3a4b 0%, #0b1a23 100%)';
    if (archetypeKey === 'D') backgroundLayer.style.background = 'radial-gradient(circle at 50% 50%, #4a4221 0%, #1d190b 100%)';

    // Parse markdown-like bold for compatibility using simple regex
    const parsedCompat = compatibility.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    document.getElementById('compatibility-desc').innerHTML = parsedCompat;

    switchSection(quizSection, resultsSection);
    progressBar.style.width = '100%';
}

function resetQuiz() {
    currentQuestionIndex = 0;
    part1_scores = { A: 0, B: 0, C: 0, D: 0 };
    part2_scores = { X: 0, Y: 0, Z: 0, W: 0 };
    
    // Reset background styles immediately inline
    backgroundLayer.classList.remove('phase2');
    backgroundLayer.style.background = ''; 

    switchSection(resultsSection, introSection);
}
