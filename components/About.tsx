import Counter from "./Counter";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

const stats = [
  { value: 200, suffix: "+", label: "Videos captured" },
  { value: 4, suffix: "K", label: "Delivery resolution" },
  { value: 3, suffix: "", label: "Drones in the kit" },
  { value: 5, suffix: "+", label: "Years behind the lens" },
];

const gear = [
  {
    role: "Aerial",
    title: "Drones",
    tag: "3 drones",
    items: ["DJI Air 3", "DJI Air 3S", "DJI Air 2"],
  },
  {
    role: "Capture",
    title: "Cameras",
    tag: "Sony",
    items: ["Sony FX3", "Sony A7 IV", "Sony A7 III"],
  },
  {
    role: "Glass",
    title: "Lenses",
    tag: "Wide to tele",
    items: ["Sony GM 24-70mm", "Sony GM 50mm", "Sony 85mm", "Sigma 16mm"],
  },
  {
    role: "Stabilize",
    title: "Gimbals",
    tag: "DJI RS",
    items: ["DJI RS 5", "DJI RS 4"],
  },
];

const workflow = [
  { step: "01", title: "Shoot (শুটিং)", text: "ফ্লাইট প্ল্যান করা, সঠিক আলোর পেছনে ছোটা এবং ক্লিন সোর্স ফুটেজ ক্যাপচার করা।" },
  { step: "02", title: "Cut (এডিটিং)", text: "গল্প এবং রিদম তৈরি করা, এবং অপ্রয়োজনীয় ও অপ্রাসঙ্গিক অংশগুলো ছেঁটে ফেলা।" },
  { step: "03", title: "Grade (কালার গ্রেডিং)", text: "শটগুলো ম্যাচ করা, কন্ট্রাস্ট ঠিক করা এবং একটি কনসিস্টেন্ট বা নিখুঁত লুক ফুটিয়ে তোলা।" },
  { step: "04", title: "Deliver (ডেলিভারি)", text: "যে প্ল্যাটফর্মে যাবে তার উপযোগী করে সাউন্ড, টাইটেল এবং এক্সপোর্ট টিউন করা।" },
];

const facts = [
  { label: "Based in", value: "Rajshahi, Bangladesh" },
  { label: "Focus", value: "Commercial, documentary & aerial" },
  { label: "Languages", value: "Bangla · English" },
];

const services = [
  "Facebook Ad Video",
  "Documentary",
  "OVC & Commercial",
  "Corporate Work",
  "Drone Videography",
];

const tools = ["Premiere Pro", "DaVinci Resolve", "After Effects", "Sony FX3", "DJI Air 3S"];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          eyebrow="About me"
          title="I shoot from the ground and the sky, and tell the story in the cut"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Bio card, styled like a viewfinder */}
          <Reveal className="md:col-span-2">
            <div className="glass relative h-full overflow-hidden rounded-3xl p-8">
              {/* viewfinder corners */}
              <span className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-current opacity-30" />
              <span className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-current opacity-30" />
              <span className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b-2 border-l-2 border-current opacity-30" />
              <span className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-current opacity-30" />

              <div className="ff-mono mb-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em]">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                  <span className="c-muted">REC</span>
                </span>
                <span className="c-muted">4K · 24 FPS · 00:00:24:00</span>
              </div>

              <div className="c-muted space-y-4 text-[16.5px] leading-relaxed">
                <p>
                  <b>আসাদুজ্জামান আল আমিন</b> — রাজশাহীর একজন পেশাদার সিনেমাটোগ্রাফার এবং ড্রোন পাইলট।

                  আমি Sony FX3 এবং A7 series ক্যামেরা ব্যবহার করে Facebook ad videos, documentaries, OVC & commercials এবং corporate work-এর মতো কাজগুলো অত্যন্ত নিখুঁতভাবে ফুটিয়ে তুলি। পাশাপাশি, প্রতিটি প্রজেক্টে রিয়েল মোশন ও বিশালতার অনুভূতি আনতে আমি উড়িয়ে থাকি DJI Air 3, Air 3S এবং Air 2 ড্রোন ।
                </p>
                <p>
                  শটের প্রপার প্লানিং এবং নিরাপদে ড্রোন ওড়ানো থেকে শুরু করে — কালার গ্রেডিং, সাউন্ড ডিজাইন ও নিখুঁত পেসিংয়ের মাধ্যমে একটি ভিডিওকে শেষ পর্যন্ত ধরে রাখার পুরো পাইপলাইন নিয়েই আমি কাজ করি।

                  বর্তমানে আমি freelance work, collaborations এবং full-time roles - এর জন্য উন্মুক্ত আছি।
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {facts.map((f) => (
                  <div key={f.label}>
                    <p className="ff-mono c-muted text-[11px] uppercase tracking-wider">{f.label}</p>
                    <p className="ff-head mt-1 text-sm font-semibold">{f.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <p className="ff-mono c-muted mb-2 text-[11px] uppercase tracking-wider">What I do</p>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <span
                      key={s}
                      className="ff-mono rounded-full border border-current/20 px-3 py-1 text-[11px] uppercase tracking-wider"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="ff-mono rounded-full border border-current/20 px-3 py-1 text-[11px] uppercase tracking-wider c-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 120}>
                <div className="glass h-full rounded-3xl p-6">
                  <p className="ff-head grad-text text-4xl font-bold">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="ff-mono c-muted mt-1 text-[11px] uppercase tracking-wider">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Gear cards */}
          <div className="grid gap-6 sm:grid-cols-2 md:col-span-3 lg:grid-cols-4">
            {gear.map((g, i) => (
              <Reveal key={g.title} delay={i * 120}>
                <div className="glass group h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <span className="ff-mono c-muted text-[11px] uppercase tracking-[0.2em]">{g.role}</span>
                    <span className="ff-mono rounded-full border border-current/20 px-2.5 py-0.5 text-[10px] uppercase tracking-wider c-muted">
                      {g.tag}
                    </span>
                  </div>
                  <h3 className="ff-head grad-text mt-4 text-2xl font-bold">{g.title}</h3>
                  <ul className="ff-mono mt-3 space-y-1.5 text-sm">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Timeline / workflow */}
          <Reveal className="md:col-span-3">
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center justify-between">
                <p className="ff-mono c-muted text-[11px] uppercase tracking-[0.2em]">My workflow</p>
                <p className="ff-mono c-muted text-[11px] uppercase tracking-wider">Timeline 01</p>
              </div>

              {/* decorative editing timeline */}
              <div className="mt-5 space-y-1.5" aria-hidden="true">
                <div className="flex h-3 gap-1">
                  <span className="w-[22%] rounded-sm bg-current opacity-30" />
                  <span className="w-[14%] rounded-sm bg-current opacity-15" />
                  <span className="w-[30%] rounded-sm bg-current opacity-40" />
                  <span className="w-[10%] rounded-sm bg-current opacity-15" />
                  <span className="flex-1 rounded-sm bg-current opacity-25" />
                </div>
                <div className="flex h-3 gap-1">
                  <span className="w-[8%]" />
                  <span className="w-[26%] rounded-sm bg-current opacity-20" />
                  <span className="w-[18%] rounded-sm bg-current opacity-35" />
                  <span className="flex-1 rounded-sm bg-current opacity-15" />
                </div>
                <div className="flex h-2 items-end gap-[3px]">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-full rounded-sm bg-current opacity-20"
                      style={{ height: `${30 + ((i * 37) % 70)}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {workflow.map((w) => (
                  <div key={w.step} className="border-t border-current/15 pt-4">
                    <p className="ff-mono grad-text text-sm font-semibold">{w.step}</p>
                    <p className="ff-head mt-1 text-lg font-semibold">{w.title}</p>
                    <p className="c-muted mt-1 text-sm leading-relaxed">{w.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}