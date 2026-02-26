// =============================================
// DATA: Preguntas, descripciones y compatibilidad
// =============================================

// Descripciones extendidas para que sean fáciles de entender
// incluso para personas que no conocen la comunidad Therian
const theTypeDescriptions = {
    A: {
        title: "El Cánido de la Manada",
        image: "img/canido_manada.png",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z"/></svg>',
        description: "Tu espíritu se conecta con la esencia del lobo y los cánidos. Eres una persona profundamente leal, protectora y orientada a la comunidad. Encuentras tu fuerza en la unión con los demás, y tu instinto natural es cuidar y guiar a quienes te rodean. Como el lobo, valoras la manada por encima de todo: la familia, los amigos cercanos, el equipo. Tu energía brilla más cuando estás rodeado de personas que amas.",
    },
    B: {
        title: "El Felino Solitario y Nocturno",
        image: "img/felino_nocturno.png",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
        description: "Tu espíritu se conecta con la esencia del felino: el gato montés, la pantera o el lince. Eres una persona independiente, observadora y profundamente intuitiva. Prefieres la calidad sobre la cantidad en tus relaciones, y necesitas tu espacio personal para recargar energía. Como el felino, tu fuerza está en tu paciencia, tu capacidad de análisis y tu misterio natural. Brillas con luz propia en silencio.",
    },
    C: {
        title: "El Viajero del Agua y la Adaptación",
        image: "img/viajero_agua.png",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12h4l2-3 4 6 2-3h4"/><path d="M2 18h4l2-3 4 6 2-3h4"/></svg>',
        description: "Tu espíritu se conecta con la esencia de los animales acuáticos y adaptables: la nutria, el delfín o el zorro. Eres curioso, ingenioso y te adaptas con facilidad a cualquier situación. Fluyes entre distintos grupos sociales con naturalidad y siempre estás buscando nuevas experiencias. Como el agua, tu fuerza está en tu flexibilidad y tu capacidad de encontrar caminos donde otros ven obstáculos.",
    },
    D: {
        title: "El Observador de la Pradera Abierta",
        image: "img/observador_pradera.png",
        icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>',
        description: "Tu espíritu se conecta con la esencia del águila, el ciervo o el caballo salvaje. Eres una persona libre, perceptiva y con una visión amplia del mundo. Valoras tu independencia pero también sabes moverte con gracia entre diferentes círculos. Como el observador de la pradera, tu fuerza está en tu perspectiva panorámica, tu calma y tu capacidad de ver lo que otros pasan por alto.",
    }
};

const theCompatibilityMap = {
    X: {
        title: "Cánidos — La Lealtad",
        text: "Tu corazón busca a alguien leal, protector y presente. Resonarás mejor con personas que tengan espíritu de manada: aquellos que se quedan a tu lado sin importar qué. Juntos forman un vínculo inquebrantable basado en la confianza mutua."
    },
    Y: {
        title: "Felinos — El Espacio",
        text: "Tu corazón busca a alguien que respete tu individualidad. Resonarás con personas que entienden el valor del silencio, la calma y la independencia. Juntos crean una conexión profunda sin necesidad de palabras."
    },
    Z: {
        title: "Acuáticos/Adaptables — La Curiosidad",
        text: "Tu corazón busca a alguien aventurero y curioso. Resonarás con personas que disfrutan explorar, aprender y compartir experiencias nuevas. Juntos convierten cada día en una aventura."
    },
    W: {
        title: "Aves/Pradera — La Perspicacia",
        text: "Tu corazón busca a alguien libre y comunicativo. Resonarás con personas que valoran la claridad, la honestidad y la libertad de ser uno mismo. Juntos encuentran armonía en el movimiento y la apertura."
    }
};

// Imágenes asociadas a ciertas preguntas (por índice 0-based)
// Se muestran para dar contexto visual al ambiente descrito
const questionImages = {
    1: "img/bosque_nevado.png",     // Pregunta 2: ¿Qué entorno te hace sentir en casa?
    5: "img/noche_oscura.png",      // Pregunta 6: ¿Con qué momento del día sientes conexión?
    7: "img/rio_frondoso.png",      // Pregunta 8: Si te perdieras en la naturaleza...
    8: "img/pradera_abierta.png",   // Pregunta 9: ¿Qué textura te conecta con tu animal?
};

// === PARTE 1: Descubriendo tu Theriotype (9 preguntas) ===
const questionsPart1 = [
    {
        question: "¿Cuál de tus sentidos primarios es tu principal herramienta de conexión con el mundo?",
        options: [
            { text: "El Oído: Detectar el más mínimo movimiento en la manada.", value: "A" },
            { text: "La Vista: Ver perfectamente en la oscuridad y el sigilo.", value: "B" },
            { text: "El Olfato: Identificar cada rastro en el viento o el agua.", value: "C" },
            { text: "El Tacto: Sentir las vibraciones y la textura de la tierra.", value: "D" }
        ]
    },
    {
        question: "¿Qué entorno te hace sentir verdaderamente \"en casa\"?",
        options: [
            { text: "Un bosque denso y nevado con tu grupo.", value: "A" },
            { text: "La oscuridad silenciosa y alta de la noche.", value: "B" },
            { text: "Un río sinuoso con orillas frondosas.", value: "C" },
            { text: "Praderas infinitas bajo un cielo abierto.", value: "D" }
        ]
    },
    {
        question: "Cuando te enfrentas a una amenaza o desafío repentino, tu primer instinto es:",
        options: [
            { text: "Alertar a los demás y prepararte para la defensa grupal.", value: "A" },
            { text: "Acechar en silencio para analizar el momento perfecto para actuar.", value: "B" },
            { text: "Adaptarte rápidamente o usar tu astucia para encontrar una salida.", value: "C" },
            { text: "Confiar en tu velocidad para evadir o eludir la confrontación.", value: "D" }
        ]
    },
    {
        question: "¿Qué tipo de movimiento te resulta más natural y liberador?",
        options: [
            { text: "Correr a gran velocidad en terreno abierto.", value: "A" },
            { text: "Trepar o saltar ágilmente por estructuras.", value: "B" },
            { text: "Nadar o moverte con fluidez en el agua.", value: "C" },
            { text: "Trotar o caminar de forma rítmica y constante.", value: "D" }
        ]
    },
    {
        question: "En tu \"vida de manada\" (relaciones sociales), prefieres:",
        options: [
            { text: "Ser leal y proteger a un grupo grande y cohesionado.", value: "A" },
            { text: "Mantener pocos vínculos profundos y valorar mucho tu soledad.", value: "B" },
            { text: "Ser adaptable, curioso y capaz de socializar con diversos grupos.", value: "C" },
            { text: "Observar desde la distancia y moverte libremente entre grupos.", value: "D" }
        ]
    },
    {
        question: "¿Con qué momento del día sientes una conexión más profunda?",
        options: [
            { text: "El Amanecer: La energía renovada de la mañana.", value: "A" },
            { text: "La Medianoche: El silencio y el dominio de la oscuridad.", value: "B" },
            { text: "El Atardecer: La transición y el cambio de luz.", value: "C" },
            { text: "El Mediodía: La luz brillante y la claridad del sol.", value: "D" }
        ]
    },
    {
        question: "¿Cuál de estas \"sensaciones fantasma\" te resulta más familiar?",
        options: [
            { text: "El peso y la agilidad de una cola larga y peluda.", value: "A" },
            { text: "La sensación de orejas puntiagudas moviéndose para enfocar el sonido.", value: "B" },
            { text: "La tensión de colmillos y garras listos para usar.", value: "C" },
            { text: "La presión y la sensación de plumas o cuernos.", value: "D" }
        ]
    },
    {
        question: "Si te perdieras en la naturaleza, ¿qué tipo de refugio buscarías intuitivamente?",
        options: [
            { text: "Una guarida segura en la tierra o entre raíces.", value: "A" },
            { text: "Un lugar elevado y protegido con vista clara.", value: "B" },
            { text: "Un refugio cerca del agua o en una cueva.", value: "C" },
            { text: "Un lugar abierto pero con rutas de escape rápidas.", value: "D" }
        ]
    },
    {
        question: "¿Qué textura te hace sentir una conexión visceral con tu animal interior?",
        options: [
            { text: "La suavidad y el calor de un pelaje denso.", value: "A" },
            { text: "La agudeza de garras y dientes afilados.", value: "B" },
            { text: "La fluidez del agua o la aspereza de la corteza.", value: "C" },
            { text: "La dureza de la piedra o la textura de la hierba.", value: "D" }
        ]
    }
];

// === PARTE 2: Compatibilidad (5 preguntas) ===
const questionsPart2 = [
    {
        question: "En una relación cercana, ¿qué valoras más?",
        options: [
            { text: "Lealtad y protección incondicional.", value: "X" },
            { text: "Respeto absoluto por el espacio personal.", value: "Y" },
            { text: "Aventuras compartidas y aprendizaje mutuo.", value: "Z" },
            { text: "Comunicación clara y libertad de movimiento.", value: "W" }
        ]
    },
    {
        question: "¿Cuál es tu método de comunicación preferido con alguien importante?",
        options: [
            { text: "Un guiño o un gesto físico sutil de confirmación.", value: "X" },
            { text: "El silencio cómodo y la mera presencia física.", value: "Y" },
            { text: "Una conversación animada y el intercambio de ideas.", value: "Z" },
            { text: "Señales sutiles y observación del lenguaje corporal.", value: "W" }
        ]
    },
    {
        question: "Ante un conflicto o desacuerdo, ¿cómo reaccionas ante tu compañero?",
        options: [
            { text: "Te interpones para protegerlo o mediar.", value: "X" },
            { text: "Te retiras temporalmente para enfriar las cosas.", value: "Y" },
            { text: "Buscas una solución creativa y diplomática juntos.", value: "Z" },
            { text: "Te adaptas y buscas una perspectiva neutral.", value: "W" }
        ]
    },
    {
        question: "Tu idea de un \"tiempo de calidad\" compartido es:",
        options: [
            { text: "Descansar juntos y acurrucarse en la guarida.", value: "X" },
            { text: "Observar un atardecer en silencio absoluto.", value: "Y" },
            { text: "Explorar un territorio nuevo juntos.", value: "Z" },
            { text: "Correr o moverte libremente por espacios abiertos.", value: "W" }
        ]
    },
    {
        question: "En una situación de peligro, esperas que tu compañero:",
        options: [
            { text: "Se quede a tu lado y pelee si es necesario.", value: "X" },
            { text: "Se ponga a salvo y confíe en tu instinto.", value: "Y" },
            { text: "Use su astucia para crear una distracción o salida.", value: "Z" },
            { text: "Mantenga la calma y te guíe hacia la libertad.", value: "W" }
        ]
    }
];

const allQuestions = [...questionsPart1, ...questionsPart2];
