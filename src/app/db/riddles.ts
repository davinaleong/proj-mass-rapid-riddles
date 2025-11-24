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
    id: "52HqJSJSNdSmlMNf5yH0ZQ",
    title: "All Surround Sound",
    slug: "all-surround-sound",
    question: "Which station gives you all surround sound?",
    hint: "Line: North-South (Red), North-East (Purple), and Circle (Yellow). It's an interchange.\nLocation: Central.",
    answer: "Dolby Ghaut (Dohby Ghaut).",
  },
  {
    id: "6m5vkfyOAfSLhOUXjXZDK8",
    title: "Amazing Grace",
    slug: "amazing-grace",
    question: "Which train station can be found in the song Amazing Grace?",
    hint: "Line: East-West (Green).\nLocation: West.",
    answer: "Tuas ('Twas grace that taught...).",
  },
  {
    id: "2sdjBbo4379aqd4Q1GX0LM",
    title: "Australia",
    slug: "australia",
    question: "Which train station is associated with Australia?",
    hint: "Line: North-South (Red).\nLocation: North.",
    answer: "Canberra.",
  },
  {
    id: "1hmdYQiSJAzfBe9DXnTPOE",
    title: "B",
    slug: "b",
    question: "Which train station is the second letter of the alphabet?",
    hint: "Line: North-South (Red) and Circle (Yellow).\nLocation: Central.",
    answer: "Bishan (Bee-shan).",
  },
  {
    id: "2EMZK6hj9LbgYH43Xc0xmx",
    title: "Back",
    slug: "back",
    question: "Which 2 train stations are the opposite of \"back\"?",
    hint: "First station:\n\nSecond station:",
    answer: "HarbourFront and Bayfront.",
  },
  {
    id: "1BixbQbQpVZjJSAm2Ctugm",
    title: "Bark",
    slug: "bark",
    question: "Which train station barks?",
    hint: "Line: North-South (Red).\nLocation: West.",
    answer: "Bukit Gom-bark (Bukit Gombak).",
  },
  {
    id: "3jQpqXRmCVbZm9NtqG1pFi",
    title: "Bug",
    slug: "bug",
    question: "Which train station has \"bug\" in its name?",
    hint: "Line: East-West (Green).\nLocation: Central East.",
    answer: "Bugis.",
  },
  {
    id: "76dLS7siiHH7YlSh29BRoT",
    title: "Canned Berries",
    slug: "canned-berries",
    question: "Which train station sells canned berries?",
    hint: "Line: North-South (Red).\nLocation: North.",
    answer: "Canberra.",
  },
  {
    id: "hEY7DkTHmT7ozkcpsSCHN",
    title: "Cash",
    slug: "cash",
    question: "Which train station is associated with cash?",
    hint: "Line: Downtown (Blue).\nLocation: West.",
    answer: "Cashew (Cash-ew).",
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
    id: "4tV80Uzx7PGoyRQCntd91c",
    title: "Colour",
    slug: "colour",
    question: "Which 3 stations have the name of a colour in the station's name?",
    hint: "First station:\n\nSecond station:\n\nThird station:",
    answer: "Redhill, Ang Mo Kio (Ang is red in Cantonese), and Tanah Merah (Merah is red in Malay).",
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
    id: "1h4aTiMQauorN3RqTFgyBw",
    title: "Dove",
    slug: "dove",
    question: "Which train station is associated with a dove?",
    hint: "Line: East-West (Green).\nLocation: West.",
    answer: "Dover.",
  },
  {
    id: "5qyutIt9e96X8BknuLfa0d",
    title: "Expensive Pens",
    slug: "expensive-pens",
    question: "Which train station sells expensive pens?",
    hint: "Line: Circle (Yellow).\nLocation: East.",
    answer: "Mont-batten (Mountbatten and Montblanc).",
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
    id: "7j6mcN4yafQ1Mhv2upJPvI",
    title: "Fast Food",
    slug: "fast-food",
    question: "Which train station is associated with a large fast-food restaurant chain?",
    hint: "Line: Circle (Yellow) and Downtown (Blue).\nLocation: East.",
    answer: "McPherson (MacPherson and McDonald's).",
  },
  {
    id: "2eBNgF7hJ9MY8eNeJIZdTf",
    title: "Four Seasons",
    slug: "four-seasons",
    question: "Which 2 train stations are associated with the four seasons?",
    hint: "First station:\n\nSecond station:",
    answer: "Summerset (Somerset) and Springleaf.",
  },
  {
    id: "45ZpZHMFbmT0rlaDqPQOdI",
    title: "Fruit Trees",
    slug: "fruit-trees",
    question: "Which train station has fruit trees?",
    hint: "Line: North-South (Red) and Thomson-East-Coast (Brown). It's an interchange.\nLocation: Central.",
    answer: "Orchard.",
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
    id: "3W4uEhWcy0XoUbterqvLA",
    title: "Health",
    slug: "health",
    question: "Which train station is full of health?",
    hint: "Line: Thomson East Coast (Brown).\nLocation: Central.",
    answer: "Maxwell.",
  },
  {
    id: "7qVEL04XuoezjLbibLhPTV",
    title: "Ice-cream",
    slug: "ice-cream",
    question: "Which train station is a Singaporean brand of ice-cream?",
    hint: "Line: North-East (Purple).\nLocation: Central north-west.",
    answer: "Potong Pasir.",
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
    id: "4xXvHYHgeQVoJ8M03H456X",
    title: "Navy",
    slug: "navy",
    question: "Which train station is the commander of a navy?",
    hint: "Line: North-South (Red).\nLocation: North.",
    answer: "Admiralty.",
  },
  {
    id: "29erbrjG7sqi83WxqRjNdf",
    title: "Numbers",
    slug: "numbers",
    question: "Which 2 train stations have numbers in their name?",
    hint: "Front station:\n\nSecond station:",
    answer: "one-north and Sixth Avenue.",
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
    id: "X7ejkceNnmwpAXIUct7Gh",
    title: "Papaya",
    slug: "papaya",
    question: "Which train station sells papaya?",
    hint: "Line: East-West (Green) and Circle (Yellow).\nLocation: East.",
    answer: "Papaya Lebar (Paya Lebar).",
  },
  {
    id: "1IZdvFHCDl2FqH1tGNzJaV",
    title: "Payment",
    slug: "payment",
    question: "Which 2 stations are associated with payment?",
    hint: "First station:\n\nSecond station:",
    answer: "Toh Payoh (Toh Pay-oh) and Paya Lebar (Pay-a Lebar).",
  },
  {
    id: "1PlSi21FiYM0hMgb5c0YoA",
    title: "Pets",
    slug: "pets",
    question: "Which train station is associated with pets?",
    hint: "Line: Circle (Yellow).\nLocation: South-West.",
    answer: "Haw Paw Villa (Haw Par Villa).",
  },
  {
    id: "42dqgqYHVA0EGWDlyCUh5x",
    title: "Planet",
    slug: "planet",
    question: "Which train station has the name of a planet in it?",
    hint: "Line: North-South (Red).\nLocation: North-West.",
    answer: "Marsling (Mars-ling).",
  },
  {
    id: "54j5bv3M3ZXIK72hWnsVzk",
    title: "Prom Night",
    slug: "prom-night",
    question: "Which train station do you go to for prom night?",
    hint: "Line: Circle (Yellow) and Downtown (Blue).\nLocation: South-east.",
    answer: "Promenade.",
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
    id: "2jyoog5ojADf2Ajk7gEaKX",
    title: "Simpsons",
    slug: "simpsons",
    question: "Which train station is featured in the Simpsons?",
    hint: "Line: Circle (Yellow).\nLocation: Central, north-east.",
    answer: "Bartley (Bart-ley). Bart is a character in the Simpsons.",
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
    id: "1kruow2Dm6FsUhdH6FIYnA",
    title: "Spices",
    slug: "Spices",
    question: "Which train station sells spice?",
    hint: "Line: North-East (Purple) and Downtown (Blue). It's an interchange.\nLocation: Central.\nAnother hint: which country is usually associated with spice? The MRT station has this country in its name.",
    answer: "Little India.",
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
    id: "4l1UNmwk4xDIjEzYMPWeZE",
    title: "Unhygienic",
    slug: "unhygienic",
    question: "Which train station is unhygienic?",
    hint: "Line: North-South (Red).\nLocation: North.",
    answer: "Eee-shun (Yishun).",
  },
  {
    id: "45hJ5dKGMEHCHfU5bYcw4x",
    title: "Wealth",
    slug: "wealth",
    question: "Which train station in Singapore shares its wealth?",
    hint: "Line: Green (East-West Line).\nGeneral location: Central, west.",
    answer: "Commonwealth.",
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
