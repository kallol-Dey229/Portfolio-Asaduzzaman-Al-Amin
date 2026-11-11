export type SportsVideo = {
  title: string;
  tagline: string;
  category: string;         // filter button: "Tournament", "Match Highlights", "Player Promo", "Aerial"
  playbackId: string;       // Mux dashboard → Asset → Playback ID
  ratio: "16/9" | "9/16";
  featured?: boolean;
  client?: string;          // club / organizer / team
  location?: string;
  year?: string;
  gear?: string;
  notes?: string[];
  tags?: string[];
};

// TODO: replace the placeholder playbackIds and details with your real projects
export const sportsVideos: SportsVideo[] = [
  {
    title: "Football Tournament Highlights",
    tagline: "The goals, the crowd and the final whistle, cut into one high-energy film.",
    category: "Tournament",
    playbackId: "5xsEAEBDk8ku9Vo1T1NComR6wTiI4tApiTUJkHXLi1g",
    ratio: "16/9",
    featured: true,
    client: "Football Ground",
    location: "Rajshahi",
    year: "2025",
    gear: "Sony FX3 · GM 24-70mm · DJI Air 3S",
    notes: [
      "Drone shots of the stadium and ground, with close-up action and crowd reactions on the camera.",
      "Fast cuts, speed ramps and punchy sound design to match the pace of the game.",
    ],
    tags: ["Drone", "Multi-cam", "Speed ramp", "Sound design"],
  },
  // {
  //   title: "Match Day Reel",
  //   tagline: "A short vertical recap made for Facebook and Reels right after the match.",
  //   category: "Match Highlights",
  //   playbackId: "YOUR_MUX_PLAYBACK_ID_2",
  //   ratio: "9/16",
  //   client: "Club name",
  //   location: "Rajshahi",
  //   year: "2026",
  //   gear: "Sony A7 IV · Sony GM 50mm",
  //   notes: [
  //     "Quick turnaround edit with the best moments, bold text and scores.",
  //     "Built for sharing the same day while the excitement is still high.",
  //   ],
  //   tags: ["Vertical", "Fast turnaround", "Facebook"],
  // },
  // {
  //   title: "Player Promo",
  //   tagline: "A cinematic portrait film that shows a player's skill, style and story.",
  //   category: "Player Promo",
  //   playbackId: "YOUR_MUX_PLAYBACK_ID_3",
  //   ratio: "16/9",
  //   client: "Player / Team name",
  //   location: "Rajshahi",
  //   year: "2026",
  //   gear: "Sony FX3 · Sony 85mm · DJI RS 4",
  //   notes: [
  //     "Slow motion training shots with dramatic lighting and a moody colour grade.",
  //     "Gimbal moves and tight close-ups to build a hero look.",
  //   ],
  //   tags: ["Slow motion", "Gimbal", "Colour grade"],
  // },
];