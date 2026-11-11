export type FoodVideo = {
  title: string;
  tagline: string;
  category: string;         // filter button: "Facebook Ad", "Documentary", "Corporate Shoot"
  playbackId: string;       // Mux dashboard → Asset → Playback ID
  ratio: "16/9" | "9/16";
  featured?: boolean;
  client?: string;          // brand / company / subject name
  location?: string;
  year?: string;
  gear?: string;
  notes?: string[];
  tags?: string[];
};

export const foodVideos: FoodVideo[] = [
  // {
  //   title: "The Story Behind the Brand",
  //   tagline: "A documentary about the people, the process and the purpose behind a business.",
  //   category: "Documentary",
  //   playbackId: "YOUR_MUX_PLAYBACK_ID_1",
  //   ratio: "16/9",
  //   featured: true,
  //   client: "Subject / Producer name",
  //   location: "Rajshahi",
  //   year: "2026",
  //   gear: "Sony FX3 · GM 24-70mm · DJI RS 4",
  //   notes: [
  //     "Follows real people at work, with honest interviews and natural sound.",
  //     "Ground footage with aerial views to set the place and the scale.",
  //   ],
  //   tags: ["Documentary", "Interview", "Gimbal", "Colour grade"],
  // },
  {
    title: "Facebook Ad Video",
    tagline: "A short, punchy ad built to stop the scroll and drive action.",
    category: "Facebook Ad",
    playbackId: "tl85kvxojFwdXqk5eTjS007TCXbc021DZC9zfM2yxWEpE",
    ratio: "9/16",
    client: "Food Brand",
    location: "Rajshahi",
    year: "2025",
    gear: "Sony A7 IV · Sony GM 50mm",
    notes: [
      "Hook in the first 2 seconds, with a clear message and call-to-action.",
      "Fast cuts and bold text, made for Facebook and Reels.",
    ],
    tags: ["Facebook Ad", "Vertical", "Fast cut"],
  },
//   {
//     title: "Corporate Profile Film",
//     tagline: "A clean, professional film that shows a company's team, work and values.",
//     category: "Corporate Shoot",
//     playbackId: "YOUR_MUX_PLAYBACK_ID_3",
//     ratio: "16/9",
//     client: "Company name",
//     location: "Rajshahi",
//     year: "2026",
//     gear: "Sony A7 III · Sony 85mm · DJI Air 3S",
//     notes: [
//       "Office, team and leadership shots with soft, even lighting.",
//       "Drone exterior and a clear voice-over or interview to tell the company story.",
//     ],
//     tags: ["Corporate", "Interview", "Drone", "Lighting"],
//   },
// 
];