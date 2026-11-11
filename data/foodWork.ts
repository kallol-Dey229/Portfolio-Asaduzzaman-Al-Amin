export type FoodVideo = {
  title: string;
  tagline: string;
  category: string;         // filter button: "Food Documentary", "Facebook Ad", "Street Food", "Food Story"
  playbackId: string;       // Mux dashboard → Asset → Playback ID
  ratio: "16/9" | "9/16";
  featured?: boolean;
  client?: string;          // brand / producer / subject name
  location?: string;
  year?: string;
  gear?: string;
  notes?: string[];
  tags?: string[];
};

// TODO: replace the placeholder playbackIds and details with your real projects
export const foodVideos: FoodVideo[] = [
  {
    title: "The Story Behind the Taste",
    tagline: "A food documentary about the people, the process and the tradition behind a dish.",
    category: "Food Documentary",
    playbackId: "YOUR_MUX_PLAYBACK_ID_1",
    ratio: "16/9",
    featured: true,
    client: "Subject / Producer name",
    location: "Rajshahi",
    year: "2026",
    gear: "Sony FX3 · GM 24-70mm · DJI RS 4",
    notes: [
      "Follows the maker from the market to the kitchen, with real voices and natural sound.",
      "Slow macro shots of steam, sizzle and hands at work, with aerial views to set the place.",
    ],
    tags: ["Documentary", "Interview", "Macro", "Colour grade"],
  },
  {
    title: "Facebook Food Ad",
    tagline: "A short, punchy ad built to stop the scroll and make people hungry.",
    category: "Facebook Ad",
    playbackId: "tl85kvxojFwdXqk5eTjS007TCXbc021DZC9zfM2yxWEpE",
    ratio: "9/16",
    client: "Food brand",
    location: "Rajshahi",
    year: "2025",
    gear: "Sony A7 IV · Sony GM 50mm",
    notes: [
      "Hook in the first 2 seconds with a close-up food reveal.",
      "Fast cuts, bold text and a clear call-to-action for Facebook and Reels.",
    ],
    tags: ["Facebook Ad", "Vertical", "Fast cut"],
  },
  {
    title: "Street Food Stories",
    tagline: "A documentary-style look at the street food, the vendors and the crowd around them.",
    category: "Street Food",
    playbackId: "YOUR_MUX_PLAYBACK_ID_3",
    ratio: "9/16",
    client: "Vendor / Location name",
    location: "Rajshahi",
    year: "2026",
    gear: "Sony A7 III · Sony 85mm",
    notes: [
      "Handheld, natural-light shots that catch the sound, smoke and energy of the street.",
      "Short human moments between the food shots, so it feels like a real story.",
    ],
    tags: ["Documentary", "Handheld", "Natural light"],
  },
];