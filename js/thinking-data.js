/* =========================================================
   Thinking Playground – Expanded Content Dataset
   ========================================================= */

window.DATA = {
  /* ===================== EXPLORE ===================== */
  explore: [
    "Why do simple rules create complex outcomes?",
    "What makes a question powerful?",
    "Why do wrong answers often feel right?",
    "What changes when you reverse a problem?",
    "Is uncertainty always a weakness?",
    "Can thinking be practiced like a skill?",
    "Does speed reveal priorities?",
    "Why does simplicity feel harder than complexity?",
    "What do constraints actually enable?",
    "When does intuition outperform logic?",
    "Why do we trust some explanations more than others?",
    "What happens when you remove the obvious option?",
    "Is clarity discovered or created?",
    "Why do humans prefer stories over facts?",
    "What makes a problem feel difficult?",
    "When does thinking stop being useful?",
    "What role does silence play in insight?",
    "Why do limits sharpen creativity?"
  ],

  /* ====================== LOGIC ======================= */
  logic: [
    {
      title: "Constraints",
      question: "If a rule applies everywhere except one case, is it still a rule?",
      options: [
        { label: "Yes", insight: "Rules guide behavior, not perfection." },
        { label: "No", insight: "Exceptions can weaken trust." },
        { label: "Depends on purpose", insight: "Rules exist to serve goals." }
      ],
      metaInsight:
        "Logic improves when we examine why rules exist, not just whether they are absolute."
    },
    {
      title: "Assumptions",
      question: "If every option seems wrong, what should you question first?",
      options: [
        { label: "The question itself", insight: "Poor framing limits good answers." },
        { label: "The information", insight: "Missing data creates false dilemmas." },
        { label: "Your assumptions", insight: "Hidden beliefs shape conclusions." }
      ],
      metaInsight:
        "Strong reasoning begins by questioning what we take for granted."
    },
    {
      title: "Contradiction",
      question: "Can two opposing ideas both be true?",
      options: [
        { label: "Yes", insight: "Context can reconcile contradictions." },
        { label: "No", insight: "Truth must be consistent." },
        { label: "Sometimes", insight: "Perspective changes meaning." }
      ],
      metaInsight:
        "Many conflicts dissolve when context is made explicit."
    },
    {
      title: "Absolutes",
      question: "Why do absolute statements often fail under scrutiny?",
      options: [
        { label: "They ignore edge cases", insight: "Reality resists total certainty." },
        { label: "They simplify complexity", insight: "Simplicity hides nuance." },
        { label: "They assume uniformity", insight: "Differences matter." }
      ],
      metaInsight:
        "Precision often matters more than confidence."
    }
  ],

  /* ===================== RIDDLES ====================== */
  riddle: [
    {
      title: "Silent Traveler",
      question: "I can travel around the world while staying in a corner. What am I?",
      options: ["A stamp", "A thought", "Sound", "Time"],
      correct: "A stamp",
      explanation:
        "A stamp enables travel without moving itself.",
      cognitiveTrap:
        "Abstract answers feel clever, but riddles often reward literal reframing."
    },
    {
      title: "The More You Take",
      question: "The more you take, the more you leave behind. What is it?",
      options: ["Footsteps", "Memories", "Time", "Breath"],
      correct: "Footsteps",
      explanation:
        "Taking steps leaves traces rather than possessions.",
      cognitiveTrap:
        "People prefer abstract concepts, but the answer is physical."
    },
    {
      title: "Always Ahead",
      question: "What is always in front of you but can never be seen?",
      options: ["The future", "Air", "Thoughts", "Light"],
      correct: "The future",
      explanation:
        "The future exists conceptually, not visually.",
      cognitiveTrap:
        "We look for physical objects when the answer is conceptual."
    },
    {
      title: "No Beginning",
      question: "What has no beginning, end, or middle?",
      options: ["A circle", "Time", "Space", "Silence"],
      correct: "A circle",
      explanation:
        "A circle loops endlessly without distinct segments.",
      cognitiveTrap:
        "Abstract answers distract from geometric simplicity."
    },
    {
      title: "One Word",
      question: "What word is spelled incorrectly in every dictionary?",
      options: ["Incorrectly", "Wrong", "Misspelled", "Error"],
      correct: "Incorrectly",
      explanation:
        "The riddle plays on literal interpretation.",
      cognitiveTrap:
        "We overthink instead of reading carefully."
    }
  ],

  /* ==================== DECISIONS ===================== */
  decision: [
    {
      title: "Responsibility",
      question: "Is it better to decide alone or involve others?",
      options: [
        { label: "Decide alone", insight: "Speed increases, blind spots remain." },
        { label: "Involve others", insight: "Quality improves, time increases." },
        { label: "Depends on stakes", insight: "Context determines strategy." }
      ],
      metaInsight:
        "Good judgment adapts decision style to impact."
    },
    {
      title: "Risk",
      question: "When facing uncertainty, what matters most?",
      options: [
        { label: "Experience", insight: "Experience guides intuition but biases judgment." },
        { label: "Data", insight: "Data informs but never completes the picture." },
        { label: "Values", insight: "Values anchor decisions when facts are unclear." }
      ],
      metaInsight:
        "Uncertainty is navigated, not eliminated."
    },
    {
      title: "Trade-offs",
      question: "When resources are limited, what should guide allocation?",
      options: [
        { label: "Urgency", insight: "Urgent needs demand attention." },
        { label: "Impact", insight: "High impact justifies investment." },
        { label: "Fairness", insight: "Equity sustains trust." }
      ],
      metaInsight:
        "Every choice sacrifices something."
    }
  ],

  /* ===================== MIND ========================= */
  mind: [
    {
      title: "Memory Pattern",
      question: "Remember this sequence: 7 – 2 – 9 – 4 – 6. What helps most?",
      options: [
        { label: "Repetition", insight: "Strengthens recall." },
        { label: "Grouping", insight: "Reduces cognitive load." },
        { label: "Visualization", insight: "Images beat symbols." }
      ],
      metaInsight:
        "Different minds benefit from different strategies."
    },
    {
      title: "Focus",
      question: "When does your thinking feel clearest?",
      options: [
        { label: "Silence", insight: "Low stimulation reduces mental noise." },
        { label: "Movement", insight: "Motion improves flow." },
        { label: "Constraints", insight: "Limits sharpen attention." }
      ],
      metaInsight:
        "Focus is personal, not universal."
    },
    {
      title: "Attention",
      question: "What most often breaks your concentration?",
      options: [
        { label: "Notifications", insight: "External interruptions fragment thought." },
        { label: "Worry", insight: "Internal noise competes for attention." },
        { label: "Fatigue", insight: "Energy limits cognition." }
      ],
      metaInsight:
        "Attention is managed, not forced."
    }
  ]
};
