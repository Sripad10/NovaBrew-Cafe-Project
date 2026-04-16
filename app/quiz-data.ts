export type PersonalityKey =
  | "bold-explorer"
  | "smooth-operator"
  | "cozy-classic"
  | "wild-card";

export type Personality = {
  key: PersonalityKey;
  name: string;
  shortLabel: string;
  description: string;
  resultSummary: string;
  recommendation: {
    primary: string;
    secondary: string;
    note: string;
  };
  palette: {
    gradient: string;
    accent: string;
    soft: string;
    emoji: string;
  };
};

export type Question = {
  id: number;
  prompt: string;
  options: Array<{
    label: string;
    text: string;
    personality: PersonalityKey;
  }>;
};

export const personalities: Personality[] = [
  {
    key: "bold-explorer",
    name: "Bold Explorer",
    shortLabel: "Bold Explorer",
    description:
      "You gravitate toward intensity, edge, and coffees with a strong point of view. When a flavor profile has presence, you lean in.",
    resultSummary:
      "Your palate loves confidence. You want coffee that feels deliberate, expressive, and impossible to ignore.",
    recommendation: {
      primary: "Double Down",
      secondary: "Midnight Summit",
      note: "These are your signature matches: bold structure, darker roast energy, and a finish that lingers.",
    },
    palette: {
      gradient: "from-[#2c160f] via-[#5b2f17] to-[#d9864a]",
      accent: "#f2a65a",
      soft: "#fff1e3",
      emoji: "🌋",
    },
  },
  {
    key: "smooth-operator",
    name: "Smooth Operator",
    shortLabel: "Smooth Operator",
    description:
      "You like balance, polish, and coffees that feel effortless to love. Your taste is refined, warm, and quietly confident.",
    resultSummary:
      "You are drawn to harmony. You want your cup to feel smooth, approachable, and well put together from the first sip.",
    recommendation: {
      primary: "Sunrise Blend",
      secondary: "Sunday Paper",
      note: "These fits give you balance, warmth, and the kind of everyday elegance NovaBrew should be known for.",
    },
    palette: {
      gradient: "from-[#6f4e37] via-[#b07a4f] to-[#f6cf8b]",
      accent: "#c9833f",
      soft: "#fff5e8",
      emoji: "☀️",
    },
  },
  {
    key: "cozy-classic",
    name: "Cozy Classic",
    shortLabel: "Cozy Classic",
    description:
      "You are comfort-first, emotionally tuned, and deeply loyal to what feels good. You want coffee that settles in gently and keeps you there.",
    resultSummary:
      "Your taste is all about softness, warmth, and rituals that make the day feel better. You want a cup that feels like home with better styling.",
    recommendation: {
      primary: "Golden Hour",
      secondary: "Velvet Fog",
      note: "These recommendations lean creamy, comforting, and easy to return to again and again.",
    },
    palette: {
      gradient: "from-[#8b5a4a] via-[#d29a7f] to-[#f5d8c8]",
      accent: "#c67d61",
      soft: "#fff4ef",
      emoji: "🛋️",
    },
  },
  {
    key: "wild-card",
    name: "Wild Card",
    shortLabel: "Wild Card",
    description:
      "You are curious, expressive, and excited by the unexpected. You do not just want a good cup. You want a story worth repeating.",
    resultSummary:
      "You are here for discovery. Your ideal coffee experience surprises you, teaches you something, and gives you a reason to talk about it later.",
    recommendation: {
      primary: "Wildflower",
      secondary: "Off the Map",
      note: "These pairings keep things bright, adventurous, and just unpredictable enough to stay interesting.",
    },
    palette: {
      gradient: "from-[#4b2142] via-[#975c73] to-[#f7b267]",
      accent: "#d76d77",
      soft: "#fff0f3",
      emoji: "🎨",
    },
  },
];

export const questions: Question[] = [
  {
    id: 1,
    prompt: "Pick the atmosphere that feels most like your perfect cup.",
    options: [
      {
        label: "🌋",
        text: "Dim lights, sharp focus, and something intense enough to wake up the whole room",
        personality: "bold-explorer",
      },
      {
        label: "☀️",
        text: "Warm sunlight, smooth conversation, and a table everyone wants to sit at",
        personality: "smooth-operator",
      },
      {
        label: "🛋️",
        text: "A soft blanket, a slow morning, and absolutely nowhere to be",
        personality: "cozy-classic",
      },
      {
        label: "🎨",
        text: "A hidden cafe with one strange special you have to try",
        personality: "wild-card",
      },
    ],
  },
  {
    id: 2,
    prompt: "Choose the color palette that feels most like your taste.",
    options: [
      {
        label: "🖤",
        text: "Espresso black, deep bronze, and burnt amber",
        personality: "bold-explorer",
      },
      {
        label: "🤎",
        text: "Honey beige, toasted almond, and soft gold",
        personality: "smooth-operator",
      },
      {
        label: "🌫️",
        text: "Cream, dusty rose, and warm oatmeal",
        personality: "cozy-classic",
      },
      {
        label: "🦚",
        text: "Plum, olive, and electric orange",
        personality: "wild-card",
      },
    ],
  },
  {
    id: 3,
    prompt: "Your ideal weekend starts with:",
    options: [
      {
        label: "⚡",
        text: "A bold plan, a strong drink, and zero hesitation",
        personality: "bold-explorer",
      },
      {
        label: "🧺",
        text: "A relaxed brunch with people you actually like",
        personality: "smooth-operator",
      },
      {
        label: "📚",
        text: "Staying in, getting cozy, and easing into the day",
        personality: "cozy-classic",
      },
      {
        label: "🗺️",
        text: "Going somewhere new with no real agenda",
        personality: "wild-card",
      },
    ],
  },
  {
    id: 4,
    prompt: "Pick the kind of surprise you enjoy most.",
    options: [
      {
        label: "🔥",
        text: "Something powerful that instantly grabs your attention",
        personality: "bold-explorer",
      },
      {
        label: "🎁",
        text: "Something thoughtful, polished, and easy to love",
        personality: "smooth-operator",
      },
      {
        label: "🕯️",
        text: "Something comforting that feels like it already knows you",
        personality: "cozy-classic",
      },
      {
        label: "✨",
        text: "Something unexpected that makes you say, wait, what is this?",
        personality: "wild-card",
      },
    ],
  },
  {
    id: 5,
    prompt: "Which setting feels most like your personal rhythm?",
    options: [
      {
        label: "🏙️",
        text: "Fast-moving city energy at golden hour",
        personality: "bold-explorer",
      },
      {
        label: "🌤️",
        text: "A bright kitchen with music in the background",
        personality: "smooth-operator",
      },
      {
        label: "🍂",
        text: "A quiet window seat on a rainy afternoon",
        personality: "cozy-classic",
      },
      {
        label: "🌌",
        text: "A late-night spot you found by accident and now want to tell nobody about",
        personality: "wild-card",
      },
    ],
  },
  {
    id: 6,
    prompt: "When you try something new, what are you hoping for?",
    options: [
      {
        label: "💥",
        text: "Intensity and impact",
        personality: "bold-explorer",
      },
      {
        label: "👌",
        text: "Balance and confidence",
        personality: "smooth-operator",
      },
      {
        label: "💛",
        text: "Comfort with just enough charm",
        personality: "cozy-classic",
      },
      {
        label: "🚀",
        text: "Discovery and a story worth telling",
        personality: "wild-card",
      },
    ],
  },
];
