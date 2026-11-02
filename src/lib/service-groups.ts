export const serviceGroups = [
  {
    id: "pharma-advisory", title: "Pharma strategic advisory", intro: "Strategy and know-how for pharma growth.",
    services: [
      { title: "Business Development", description: "Partnerships, licensing and distribution deals that turn pipeline into revenue." },
      { title: "Technical Services", description: "Expert guidance across manufacturing and operations, from specification to shop floor." },
      { title: "Training", description: "Practical, role-specific training that upskills your teams and sticks." },
    ],
  },
  {
    id: "ma-transactions", title: "M&A & business transactions", intro: "Deals done right.",
    services: [
      { title: "Mergers & Acquisitions", description: "Find, evaluate, negotiate and close. Buy-side and sell-side support end to end." },
      { title: "Corporate Services", description: "Structuring, compliance and governance that keeps you clean, credible and deal-ready." },
    ],
  },
  {
    id: "market-entry", title: "Market entry & expansion", intro: "Find the market. Win the market. Cross the border.",
    services: [
      { title: "Market Survey", description: "Ground-level research so you enter with data, not guesses." },
      { title: "Export & Import", description: "Global trade support across markets, partners and documentation." },
      { title: "Projects", description: "End-to-end planning and execution, on time and on budget." },
    ],
  },
  {
    id: "fractional-partner", title: "Fractional strategy partner", intro: "Senior thinking on call, without the full-time cost.",
    services: [
      { title: "System Development", description: "The processes and controls your operation runs on, built to scale." },
      { title: "HR Practices", description: "Policies, structures and people systems that attract talent and hold the team together." },
      { title: "Strategic Advisory Retainer", description: "On-call senior advice for founders and CEOs. Monthly retainer." },
    ],
  },
];

export const serviceContactPath = (title: string) => `/contact?service=${encodeURIComponent(title)}`;