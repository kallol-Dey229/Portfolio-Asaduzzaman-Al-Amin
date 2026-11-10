export type FoodVideo = {
  title: string;
  tagline: string;
  category: string;         // filter button: "Facebook Ad", "Restaurant Film", "Reel", "Menu Shoot"
  playbackId: string;       // Mux dashboard → Asset → Playback ID
  ratio: "16/9" | "9/16";
  featured?: boolean;
  client?: string;          // restaurant / brand name
  location?: string;
  year?: string;
  gear?: string;
  notes?: string[];
  tags?: string[];
};

// TODO: replace the placeholder playbackIds and details with your real food projects
export const foodVideos: FoodVideo[] = [
  {
    title: "Restaurant Brand Film",
    tagline: "A cinematic film that shows the food, the kitchen and the atmosphere of the restaurant.",
    category: "Restaurant Film",
    playbackId: "YOUR_MUX_PLAYBACK_ID_1",
    ratio: "16/9",
    featured: true,
    client: "Restaurant name",
    location: "Rajshahi",
    year: "2026",
    gear: "Sony FX3 · GM 24-70mm · DJI RS 4",
    notes: [
      "Slow macro shots of steam, sizzle and plating to make every dish look irresistible.",
      "Drone exterior and gimbal walk-through to show the space and the vibe.",
    ],
    tags: ["Macro", "Gimbal", "Colour grade", "Sound design"],
  },
  {
    title: "Facebook Food Ad",
    tagline: "A short, punchy ad built to stop the scroll and drive orders.",
    category: "Facebook Ad",
    playbackId: "tl85kvxojFwdXqk5eTjS007TCXbc021DZC9zfM2yxWEpE",
    ratio: "9/16",
    client: "Food ad",
    location: "Rajshahi",
    year: "2025",
    gear: "Sony A7 IV · Sony GM 50mm",
    notes: [
      "Hook in the first 2 seconds with a close-up food reveal.",
      "Fast cuts, bold text and clear call-to-action for Facebook and Reels.",
    ],
    tags: ["Facebook Ad", "Vertical", "Fast cut"],
  },
  {
    title: "Menu & Dish Shoot",
    tagline: "Clean, appetising dish footage for menus, social posts and delivery apps.",
    category: "Documentary Shoots",
    playbackId: "YOUR_MUX_PLAYBACK_ID_3",
    ratio: "9/16",
    client: "Cafe name",
    location: "Rajshahi",
    year: "2026",
    gear: "Sony A7 III · Sony 85mm",
    notes: [
      "Soft window-style lighting with shallow depth of field.",
      "Consistent colour so the whole menu looks like one brand.",
    ],
    tags: ["Product", "Shallow DOF", "Lighting"],
  },
];