// StarPets marketplace — real items, images, and links from starpets.zone
const IMG = "https://starpets.zone/images/";

// Hero banner carousel images from the original site
export const heroBanners = [
  `${IMG}image-38.png`,
  `${IMG}Screenshot2025-11-6180338.png`,
  `${IMG}UiQNQTcM97-7e9e75a8.png`,
];

const bundleArt = "data:image/svg+xml;charset=UTF-8,%0A%20%20%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%201000%22%3E%0A%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%230f1113%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23131519%22%2F%3E%0A%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%3Crect%20width%3D%22800%22%20height%3D%221000%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22400%22%20cy%3D%22500%22%20r%3D%22270%22%20fill%3D%22%2378bb4a%22%2F%3E%0A%20%20%20%20%3Ccircle%20cx%3D%22400%22%20cy%3D%22500%22%20r%3D%22195%22%20fill%3D%22none%22%20stroke%3D%22rgba(255%2C255%2C255%2C0.88)%22%20stroke-width%3D%2212%22%2F%3E%0A%20%20%20%20%3Cg%20fill%3D%22%23ffffff%22%20font-family%3D%22Arial%2C%20Helvetica%2C%20sans-serif%22%20text-anchor%3D%22middle%22%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%22400%22%20y%3D%22440%22%20font-size%3D%2272%22%20font-weight%3D%22700%22%20letter-spacing%3D%222%22%3EThe%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%22400%22%20y%3D%22560%22%20font-size%3D%22136%22%20font-weight%3D%22900%22%20letter-spacing%3D%22-6%22%3EBundle%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cellipse%20cx%3D%22400%22%20cy%3D%22820%22%20rx%3D%22170%22%20ry%3D%2238%22%20fill%3D%22rgba(0%2C0%2C0%2C0.22)%22%2F%3E%0A%20%20%3C%2Fsvg%3E%0A";

// Info text from the original site
export const siteInfo = {
  waitTimes: `This is how long it takes to get your pet. Some pets take longer. You can skip the wait and get it faster for 500 Robux. If you skip, you get a pet worth the same amount. Need help? Ask us.`,
  tos: `Rules. Please read them before buying. We can change them anytime.`,
};

// Helper: determine rarity from the pet name
function normalizeName(name) {
  return name.toUpperCase().replace(/-/g, " ").replace(/\s+/g, " ").trim();
}

function getRarity(name) {
  const n = normalizeName(name);
  if (n.includes("EVERY") || n.includes("SALE") || n.startsWith("5 ")) return "bundle";
  if (n.startsWith("MEGA") || n.includes("MEGA NEON")) return "mega";
  if (n.startsWith("NEON")) return "neon";
  if (n.startsWith("SKIP")) return "skip";
  return "regular";
}

const customWaitTimes = {
  "NEON FROST DRAGON": "1 month",
  "FROST DRAGON": "2 years",
  "MEGA FROST DRAGON": "No wait",
  "EVERY REGULAR PET": "6 months",
  "EVERY NEON PET": "2 days",
  "EVERY MEGA PET": "No wait",
  "NEON OWL": "1 year 6 months",
  "OWL": "3 years",
  "MEGA OWL": "2 days",
  "NEON GIRAFFE": "3 weeks",
  "GIRAFFE": "2 years",
  "MEGA NEON GIRAFFE": "1 hour",
  "NEON BAT DRAGON": "1 month",
  "MEGA BAT DRAGON": "1 hour",
  "BAT DRAGON": "5 months",
  "MEGA BALLOON UNICORN": "2 years",
  "NEON COW": "2 years",
  "COW": "3 years",
  "MEGA NEON DALMATIAN": "9 months",
  "NEON DALMATIAN": "2 years",
  "DALMATIAN": "3 years",
  "5 NO POTION MEGA SHADOW DRAGONS": "No wait",
  "SALE 5 OF EVERY MEGA NEON IN GAME": "No wait",
  "MEGA NEON TURTLE": "2 years",
  "TURTLE": "5 years",
  "NEON TURTLE": "3 years",
  "MEGA NEON KANGAROO": "2 years 6 months",
  "NEON KANGAROO": "3 years",
  "KANGAROO": "4 years",
  "BLAZING LION": "3 years",
  "NEON ALBINO MONKEY": "3 years",
  "NEON STRAWBERRY SHORTCAKE BAT DRAGON": "3 years",
  "MEGA NEON HEDGEHOG": "3 months",
  "HEDGEHOG": "3 years",
  "NEON HEDGEHOG": "2 years",
  "MEGA PARROT": "1 week",
  "PARROT": "3 years",
  "NEON PARROT": "2 years",
  "MEGA ARCTIC REINDEER": "2 years",
  "MEGA COW": "1 year 6 months",
  "NEON CROW": "2 years",
  "SKIP 2 PETS WAITLISTS": "Skip pass",
  "SKIP WAITLIST": "Skip pass",
  "SKIP OWL COW": "Skip pass",
};

function makePet(name, image, href, price = null, waitTime = null, imageOverride = null) {
  const rarity = getRarity(name);
  const waitMap = {
    regular: "1-3 yrs",
    neon: "3-5 yrs",
    mega: "5-8 yrs",
    bundle: "2-6 months",
    skip: "Custom",
  };
  const normalizedName = normalizeName(name);
  const resolvedWait = waitTime ?? customWaitTimes[normalizedName] ?? waitMap[rarity];

  return {
    name: name.replace(/-/g, " "),
    image: imageOverride ?? `${IMG}${image}`,
    rarity,
    href,
    price: price === null ? "TBD" : `${price} Robux`,
    waitTime: resolvedWait,
  };
}

export const pets = [
  // Section 1 — Frost Dragons, Bundles, Owls
  makePet("NEON FROST DRAGON", "image-3.png", "https://www.roblox.com/catalog/135855418648647/1000-Pet", 1250, null, "https://cdn.starpets.gg/AM/610x610/frost_dragon_288374801322567532732771106755523238591.webp"),
  makePet("FROST DRAGON", "image-6.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 750, null, "https://cdn.starpets.gg/AM/610x610/frost_dragon_288374801322567532732771106755523238591.webp"),
  makePet("MEGA FROST DRAGON", "image-11.png", "https://www.roblox.com/catalog/125355415365411/1500-Pet", 1500, null, "https://cdn.starpets.gg/AM/610x610/frost_dragon_288374801322567532732771106755523238591.webp"),
  makePet("Every Regular Pet", "image-9.png", "https://www.roblox.com/catalog/99665197903411/1750-Pet", 1750, null, bundleArt),
  makePet("Every Neon Pet", "image-12.png", "https://www.roblox.com/catalog/81851714300950/2000-Pet", 2000, null, bundleArt),
  makePet("Every Mega Pet", "image-13.png", "https://www.roblox.com/catalog/81851714300950/2000-Pet", 2500, null, bundleArt),
  makePet("NEON OWL", "Screenshot2025-11-15105654.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 750, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Owl.png?v=1767964180&utm_source=chatgpt.com"),
  makePet("OWL", "Screenshot2025-11-15105638.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 500, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Owl.png?v=1767964180&utm_source=chatgpt.com"),
  makePet("MEGA OWL", "Screenshot2025-11-15105643.png", "https://www.roblox.com/catalog/135855418648647/1000-Pet", 1250, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Owl.png?v=1767964180&utm_source=chatgpt.com"),

  // Section 2 — Giraffes, Bat Dragons, Cows, Dalmatians
  makePet("Neon Giraffe", "Screenshot2025-11-15110116.png", "https://www.roblox.com/catalog/135855418648647/1000-Pet", 1300, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Giraffe.png?v=1767963009&utm_source=chatgpt.com"),
  makePet("Giraffe", "Screenshot2025-11-15110033.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 750, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Giraffe.png?v=1767963009&utm_source=chatgpt.com"),
  makePet("Mega Neon Giraffe", "Screenshot2025-11-15110106.png", "https://www.roblox.com/catalog/125355415365411/1500-Pet", 1550, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Giraffe.png?v=1767963009&utm_source=chatgpt.com"),
  makePet("NEON BAT DRAGON", "image-14.png", "https://www.roblox.com/catalog/135855418648647/1000-Pet", 1300, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Bat_Dragon.png?v=1763570266&utm_source=chatgpt.com"),
  makePet("MEGA BAT DRAGON", "image-16.png", "https://www.roblox.com/catalog/125355415365411/1500-Pet", 1600, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Bat_Dragon.png?v=1763570266&utm_source=chatgpt.com"),
  makePet("BAT DRAGON", "image-17.png", "https://www.roblox.com/catalog/135855418648647/1000-Pet", 1000, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Bat_Dragon.png?v=1763570266&utm_source=chatgpt.com"),
  makePet("MEGA BALLOON UNICORN", "image-18.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 750, null, "https://cdn.starpets.gg/AM/610x610/balonu_5412769337445457907636170318766617772.webp"),
  makePet("NEON COW", "Screenshot2025-11-15112045.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 500, null, "https://cdn.starpets.gg/AM/610x610/cow_55393920947545740169286759073539942259.webp"),
  makePet("COW", "Screenshot2025-11-15112052.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 300, null, "https://cdn.starpets.gg/AM/610x610/cow_55393920947545740169286759073539942259.webp"),
  makePet("Mega Neon Dalmatian", "Screenshot2025-11-15112341.png", "https://www.roblox.com/catalog/135855418648647/1000-Pet", 1000, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Dalmatian.png?v=1763634431&utm_source=chatgpt.com"),
  makePet("Neon Dalmatian", "image-19.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 625, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Dalmatian.png?v=1763634431&utm_source=chatgpt.com"),
  makePet("Dalmatian", "Screenshot2025-11-15112355.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 400, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Dalmatian.png?v=1763634431&utm_source=chatgpt.com"),

  // Section 3 — Shadow Dragons sale
  makePet("5 No Potion Mega Shadow Dragons", "image-20.png", "https://www.roblox.com/catalog/81851714300950/2000-Pet", 5000, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Shadow_Dragon.png?v=1767963054&utm_source=chatgpt.com"),
  makePet("Sale 5 of Every Mega Neon In Game", "image-21.png", "https://www.roblox.com/catalog/81851714300950/2000-Pet", 5000, null, bundleArt),

  // Section 4 — Turtles, Kangaroos, Lions, Monkeys, Bat Dragons
  makePet("Mega Neon Turtle", "image-22.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 700, null, "https://cdn.starpets.gg/AM/610x610/turtle_66206713544449291159512730973707281506.webp"),
  makePet("Turtle", "Screenshot2025-11-15141840.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 250, null, "https://cdn.starpets.gg/AM/610x610/turtle_66206713544449291159512730973707281506.webp"),
  makePet("Neon Turtle", "Screenshot2025-11-15141852.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 450, null, "https://cdn.starpets.gg/AM/610x610/turtle_66206713544449291159512730973707281506.webp"),
  makePet("Mega Neon Kangaroo", "image-23.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 625, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Kangaroo.png?v=1767962888&utm_source=chatgpt.com"),
  makePet("Neon Kangaroo", "image-24.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 400, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Kangaroo.png?v=1767962888&utm_source=chatgpt.com"),
  makePet("Kangaroo", "image-25.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 250, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Kangaroo.png?v=1767962888&utm_source=chatgpt.com"),
  makePet("Blazing Lion", "Screenshot2025-11-15142453.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 450, null, "https://cdn.starpets.gg/AM/610x610/lures_2023_blazing_lion_42148974014549937326294968256751041216.webp"),
  makePet("Neon Albino Monkey", "image-26.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 400, null, "https://cdn.starpets.gg/AM/610x610/albino_monkey_169927362982746335625898276804524868161.webp?utm_source=chatgpt.com"),
  makePet("Neon Strawberry Shortcake Bat Dragon", "Screenshot2025-11-15142448.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 450, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Strawberry_Shortcake_Bat_Dragon.png?v=1767963600&utm_source=chatgpt.com"),

  // Section 5 — Hedgehogs, Parrots, Reindeer, Crows, Skips
  makePet("Mega Neon Hedgehog", "image-27.png", "https://www.roblox.com/catalog/135855418648647/1000-Pet", 1100, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Hedgehog.png?v=1767964004&utm_source=chatgpt.com"),
  makePet("Hedgehog", "image-29.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 450, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Hedgehog.png?v=1767964004&utm_source=chatgpt.com"),
  makePet("Neon Hedgehog", "image-28.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 700, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Hedgehog.png?v=1767964004&utm_source=chatgpt.com"),
  makePet("Mega Parrot", "image-30.png", "https://www.roblox.com/catalog/135855418648647/1000-Pet", 1200, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Parrot.png?v=1767962933&utm_source=chatgpt.com"),
  makePet("Parrot", "image-31.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 500, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Parrot.png?v=1767962933&utm_source=chatgpt.com"),
  makePet("Neon Parrot", "image-32.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 700, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Parrot.png?v=1767962933&utm_source=chatgpt.com"),
  makePet("Mega Arctic Reindeer", "image-34.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 800, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Arctic_Reindeer.png?v=1763570266&utm_source=chatgpt.com"),
  makePet("MEGA COW", "image-33.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 800, null, "https://cdn.starpets.gg/AM/610x610/cow_55393920947545740169286759073539942259.webp"),
  makePet("Neon Crow", "Screenshot2025-11-15183333.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 800, null, "https://cdn.shopify.com/s/files/1/0700/1836/7797/files/Crow.png?v=1763634431&utm_source=chatgpt.com"),
  makePet("Skip 2 Pets Waitlists", "image-35.png", "https://www.roblox.com/catalog/135855418648647/1000-Pet", 1250, null, "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/5X/5/e/c/d/5ecdd80195640e6f9ce8bbaf4a25d588af456191.gif"),
  makePet("Skip Waitlist", "image-36.png", "https://www.roblox.com/catalog/125935994105994/750-Pet", 750, null, "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/5X/5/e/c/d/5ecdd80195640e6f9ce8bbaf4a25d588af456191.gif"),
  makePet("Skip Owl Cow", "image-37.png", "https://www.roblox.com/catalog/89910914378603/500-Pet", 500, null, "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/5X/5/e/c/d/5ecdd80195640e6f9ce8bbaf4a25d588af456191.gif"),
];

export const rarityConfig = {
  regular: {
    label: "FR PET",
    border: "rgba(96, 165, 250, 0.45)",
    text: "#E0F2FE",
    badgeBg: "#2563EB",
    badgeText: "#EFF6FF",
  },
  neon: {
    label: "NEON",
    border: "rgba(74, 222, 128, 0.45)",
    text: "#DCFCE7",
    badgeBg: "#15803D",
    badgeText: "#ECFDF5",
  },
  mega: {
    label: "MEGA NEON",
    border: "rgba(196, 181, 253, 0.5)",
    text: "#F5F3FF",
    badgeBg: "#7C3AED",
    badgeText: "#F5F3FF",
  },
  bundle: {
    label: "BUNDLE",
    border: "rgba(167, 243, 208, 0.45)",
    text: "#ECFDF5",
    badgeBg: "#047857",
    badgeText: "#ECFDF5",
  },
  skip: {
    label: "SKIP",
    border: "rgba(251, 191, 36, 0.45)",
    text: "#FEF3C7",
    badgeBg: "#B45309",
    badgeText: "#FFFBEB",
  },
};