// Riddles Database - Simplified TypeScript version
// Extracted from Contentful data

export interface Riddle {
  id: string;
  title: string;
  slug: string;
  description?: string;
  keywords?: string;
  question: string;
  hint?: string;
  answer?: string;
}

export const riddles: Riddle[] = [
  {
    id: "45hJ5dKGMEHCHfU5bYcw4x",
    title: "Wealth",
    slug: "wealth",
    question: "Which train station in Singapore shares its wealth?",
    hint: "Line: Green (East-West Line).\nGeneral location: Central, west.",
    answer: "Commonwealth.",
  },
  {
    id: "u3JwyOaG3vd81EAIgjCAh",
    title: "Royalty",
    slug: "royalty",
    question: "Which train station(s) are associated with royalty? There are 2 answers.",
    hint: "Lines: One is on the green (East-West Line) and the other is on the blue (Downtown Line).\nLocation: Both stations are in the West.",
    answer: "Queenstown and King Albert Park.",
  },
  {
    id: "3jQpqXRmCVbZm9NtqG1pFi",
    title: "Bug",
    slug: "bug",
    question: 'Which train station has "bug" in its name?',
    hint: "Line: East-West (Green).\nLocation: Central East.",
    answer: "Bugis.",
  },
  {
    id: "4zlHUbehfUdJZ8luVrhguD",
    title: "Cosmetics",
    slug: "cosmetics",
    question: "Which train station sells cosmetics?",
    hint: "Line: Downtown (Blue).\nLocation: West, Bukit Timah area.",
    answer: "Beauty World.",
  },
  {
    id: "3Eq4AEFOESp1IuBglFZk89",
    title: "Glamorous Shots",
    slug: "glamorous-shots",
    question: "Where do you go to shoot glamorous shots?",
    hint: "Line: East-West (Green).\nLocation: West.",
    answer: "Glamenti (Clementi).",
  },
  {
    id: "32U0ceptS8qYUHBeHKpGRl",
    title: "Nuts",
    slug: "nuts",
    question: "Which train station sells nuts?",
    hint: "Line: Downtown (Blue).\nLocation: West.",
    answer: "Cashew.",
  },
  {
    id: "2WFVStIOcdOaHNcU9rO7EB",
    title: "Famous Scientists",
    slug: "famous-scientists",
    question: "Which 2 train stations are named after famous scientists?",
    hint: "First station\n\nSecond station",
    answer: "Newton and King Albert Park.",
  },
  {
    id: "1JbVLcXUnjfN7bK6eVgyx4",
    title: "Sleep",
    slug: "sleep",
    question: "Which 5 train stations are associated with sleep?",
    hint: "First station:\n\nSecond station:\n\nThird station:\n\nFourth station:\n\nFifth station:",
    answer: "Boon Lay, Paya Lebar (Paya Ley-bar), Bedok, Bedok Reservoir, and Bedok North.",
  },
  {
    id: "1K5rxkuHuj5BXCUtpsHXKL",
    title: "Star",
    slug: "Star",
    question: "Which train station do you go to see the Star?",
    hint: "Line: East-West (Green).\nLocation: West.",
    answer: "Buona Vista (the Star Vista is located there).",
  },
  {
    id: "1o6otmeaqookQ8V7NNRSwe",
    title: "Choke",
    slug: "choke",
    question: "Which train station makes you choke?",
    hint: "Line: North-South (Red).\nLocation: West. Lot One is located near this station.",
    answer: "Choke Chu Kang (Choa Chu Kang).",
  },
  {
    id: "1kruow2Dm6FsUhdH6FIYnA",
    title: "Spices",
    slug: "Spices",
    question: "Which train station sells spice?",
    hint: "Line: North-East (Purple) and Downtown (Blue). It's an interchange.\nLocation: Central.\nAnother hint: which country is usually associated with spice? The MRT station has this country in its name.",
    answer: "Little India.",
  },
  {
    id: "3AWYnIakbEBMvs2JSf0VYq",
    title: "Lion Dance",
    slug: "lion-dance",
    question: "Which train station do you go to watch a lion dance performance?",
    hint: "Line: North-East (Purple) and Downtown (Blue).\nLocation: Central.\nAnother hint: which country did lion dance originate from?",
    answer: "Chinatown.",
  },
  {
    id: "JvtK02Rp2hTIremYfNw48",
    title: "Lumber",
    slug: "lumber",
    question: "Which 4 stations produce lumber?",
    hint: "First station:\n\nSecond station:\n\nThird station:\n\nFourth station:",
    answer: "Woodlands, Woodleigh, Woodlands North, Woodlands South.",
  },
  {
    id: "4l1UNmwk4xDIjEzYMPWeZE",
    title: "Unhygienic",
    slug: "unhygienic",
    question: "Which train station is unhygienic?",
    hint: "Line: North-South (Red).\nLocation: North.",
    answer: "Eee-shun (Yishun).",
  },
];

// Helper functions for accessing riddles
export function getRiddleBySlug(slug: string): Riddle | undefined {
  return riddles.find((riddle) => riddle.slug === slug);
}

export function getRiddleById(id: string): Riddle | undefined {
  return riddles.find((riddle) => riddle.id === id);
}

export function getAllRiddles(): Riddle[] {
  return riddles;
}

export function getRiddleSlugs(): string[] {
  return riddles.map((riddle) => riddle.slug);
}

export function getTotalRiddlesCount(): number {
  return riddles.length;
}
