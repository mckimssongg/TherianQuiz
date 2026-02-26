const theTypeDescriptions = {
    A: {
        title: "El Cánido de la Manada",
        icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36z\"/></svg>", 
    },
    B: {
        title: "El Felino Solitario y Nocturno",
        icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></svg>",
    },
    C: {
        title: "El Viajero del Agua y la Adaptación",
        icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M2 12h4l2-3 4 6 2-3h4\"/><path d=\"M2 18h4l2-3 4 6 2-3h4\"/></svg>",
    },
    D: {
        title: "El Observador de la Pradera Abierta",
        icon: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"12\" r=\"5\"/><path d=\"M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42\"/></svg>",
    }
};

const theCompatibilityMap = {
    X: "Compatible con **[Cánidos]** (Complementa la lealtad).",
    Y: "Compatible con **[Felinos]** (Complementa el espacio).",
    Z: "Compatible con **[Acuáticos/Adaptables]** (Complementa la curiosidad).",
    W: "Compatible con **[Aves/Pradera]** (Complementa la perspicacia)."
};

// Part 1
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
        question: "¿Cuál de estas \"phantom sensations\" (sensaciones fantasma) te resulta más familiar?",
        options: [
            { text: "El peso y la agilidad de una cola larga y peluda.", value: "A" },
            { text: "La sensación de orejas puntiagudas moviéndose para enfocar el sonido.", value: "B" },
            { text: "La tensión de colmillos y garras listos para usar.", value: "C" },
            { text: "La presión y la sensación de plumas o cuernos/astas.", value: "D" }
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

// Part 2
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
        question: "Ante un conflicto de manada (desacuerdo), ¿cómo reaccionas ante tu compañero?",
        options: [
            { text: "Te interpones físicamente para protegerlo o mediar.", value: "X" },
            { text: "Te retiras temporalmente para enfriar las cosas solo.", value: "Y" },
            { text: "Buscas una solución creativa y diplomática juntos.", value: "Z" },
            { text: "Te adaptas y buscas una perspectiva neutral.", value: "W" }
        ]
    },
    {
        question: "Tu idea de un \"tiempo de calidad\" compartido es:",
        options: [
            { text: "Descansar juntos y acurrucarse en la guarida.", value: "X" },
            { text: "Observar un atardecer en silencio absoluto.", value: "Y" },
            { text: "Explorar un territorio nuevo o pescar juntos.", value: "Z" },
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
