export type RallyVideo = {
  title: string;
  tagline: string;
  category: string;         // filter button: "Michil / Rally", "Public Meeting", "Campaign Video", "Event Coverage"
  playbackId: string;       // Mux dashboard → Asset → Playback ID
  ratio: "16/9" | "9/16";
  featured?: boolean;
  client?: string;          // party / organizer / candidate
  location?: string;
  year?: string;
  gear?: string;
  notes?: string[];
  tags?: string[];
};

export const rallyVideos: RallyVideo[] = [
  {
    title: "Michil Aerial Coverage",
    tagline: "Drone and ground coverage that shows the full size and energy of the procession.",
    category: "Michil / Rally",
    playbackId: "uM35gl01zYIcAcMcubgPIwX00xXFx6OgGgesdChOxxaE8",
    ratio: "16/9",
    featured: true,
    client: "Party",
    location: "Rajshahi",
    year: "2024",
    gear: "DJI Air 3S · Sony FX3 · DJI RS 4",
    notes: [
      "Wide aerial shots to show the scale of the crowd, with gimbal shots moving through the procession.",
      "Fast, rhythmic edit with natural sound, slogans and a strong colour grade.",
    ],
    tags: ["Drone", "Crowd", "Gimbal", "Colour grade"],
  },
  {
    title: "Public Meeting Program",
    tagline: "A clean highlight film of the stage, the speakers and the audience.",
    category: "Public Meeting",
    playbackId: "9eIeokXVnepWfLn00f7LKLpj3gE4sJDGecALxddYe02L8",
    ratio: "16/9",
    client: "Shibir Program",
    location: "Rajshahi",
    year: "2025",
    gear: "Sony A7 IV · Sony GM 24-70mm",
    notes: [
      "Multi-angle coverage of the speakers with clear audio and reaction shots from the crowd.",
      "Cut into a short highlight reel for sharing on Facebook.",
    ],
    tags: ["Multi-cam", "Highlights", "Event"],
  },
  // {
  //   title: "Campaign Reel",
  //   tagline: "A short vertical video made for Facebook and Reels to reach voters fast.",
  //   category: "Campaign Video",
  //   playbackId: "YOUR_MUX_PLAYBACK_ID_3",
  //   ratio: "9/16",
  //   client: "Candidate name",
  //   location: "Rajshahi",
  //   year: "2026",
  //   gear: "Sony A7 III · Sony 85mm",
  //   notes: [
  //     "Strong opening, bold text and a clear message in under 60 seconds.",
  //     "Subtitles added so it works with the sound off.",
  //   ],
  //   tags: ["Vertical", "Facebook", "Subtitles"],
  // },
];