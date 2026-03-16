export const games = [
  {
    slug: "museum-multiverse",
    title: "Museum Multiverse",
    logo: "/assets/img/desktop--mmlogo-oculusstore-1900F860-0654-4595-8AF5-6DD53DDDAE84@2x.png",
    heroImage:
      "/assets/img/mobile-game-showcase-hero-image-mobile--A17A3CFD-1001-41F0-B69A-8440E534AC7B.jpg",
    description:
      "The Webby-nominated Museum Multiverse is a virtual reality platformer. This perspective-changing experience chronicles JR's adventures, a kid who has mysteriously awoken in an abandoned museum. He must traverse the various worlds within the art pieces within the depths of the cursed museum to find a way to escape.",
    types: ["Adventure", "Narrative"],
    trailer: "https://www.youtube.com/embed/MF46EPlngic?rel=0",
    screenshots: [
      "/assets/img/desktop--game-showcase-shape-B382B0A8-43A4-49F3-A7F0-63B7A5646875@2x.png",
      "/assets/img/desktop--game-showcase-path-4DFBA9FD-1B74-4DBE-AFFD-EC6F67C6026E@2x.png",
      "/assets/img/desktop--game-showcase-path-742AA8C3-49D2-474C-851C-E9CBBC04BE61@2x.png",
    ],
    stores: [
      {
        name: "Meta",
        url: "https://www.meta.com/experiences/4785010358239288/",
      },
      {
        name: "Viveport",
        url: "https://www.viveport.com/0315d7b3-788b-4de2-a27b-4de1d83fa251",
      },
      {
        name: "Pico",
        url: "https://store-global.picoxr.com/global/detail/1/4376",
      },
    ],
    platforms: ["VR"],
    players: "1 Player",
    logoOffset: 15,
    metaDescription:
      "Museum Multiverse — A Webby-nominated VR platformer by Made in Brooklyn Games. Explore worlds inside art.",
  },
  {
    slug: "dont-look-away-vr",
    title: "Don't Look Away VR",
    logo: "/assets/img/DLAV2.png",
    heroImage: null,
    description:
      "Don't Look Away is a psychological horror experience that pits you against a mysterious entity bent on breaking down your mind, body, and soul before it feeds. Strapped to a chair, bound and gagged, with only a limited ability to reach for what's within your grasp, can you figure out the mystery of the room before it's too late? Just remember, whatever you do, whatever may happen, whatever you may see or hear... Don't Look Away.",
    types: ["Horror", "Psychological"],
    trailer: "https://www.youtube.com/embed/ENK8DGBomeQ?rel=0",
    screenshots: ["https://hessvacio.com/images/DLA_StoreShot1.png"],
    stores: [
      {
        name: "Meta",
        url: "https://www.meta.com/en-gb/experiences/dont-look-away/1072923619492704/",
      },
    ],
    platforms: ["VR"],
    players: "1 Player",
    logoOffset: 12,
    logoHeight: 1800,
    metaDescription:
      "Don't Look Away VR — A psychological horror experience by Made in Brooklyn Games. Can you solve the mystery before it's too late?",
  },
  {
    slug: "kanye-nest",
    title: "KanyeNest",
    logo: "/assets/img/KanyeNestV1.png",
    heroImage: null,
    description:
      "KanyeNest is a parody pet simulator where you take care of a baby Kanye West and hilarity ensues. Raise your little baby KanyeNest to be the illest rapper alive. Kanye needs no food or water just Ego and Creativity, but if he gets out of line don't forget to Discipline him. Take out the haters around your little Kanye and help him become a Rap God.",
    types: ["Web Game"],
    trailer: null,
    screenshots: [],
    stores: [
      {
        name: "Newgrounds",
        url: "https://www.newgrounds.com/portal/view/725028",
      },
    ],
    platforms: ["Web"],
    players: "1 Player",
    logoOffset: 15,
    metaDescription:
      "KanyeNest — A parody pet simulator by Made in Brooklyn Games. Raise baby Kanye to become a Rap God.",
  },
  {
    slug: "potion-panic",
    title: "Potion Panic",
    logo: "/assets/img/potionpanic.png",
    heroImage: null,
    description:
      "You play as a newly-minted apprentice to a wizard, taking over their traveling potions cart. Mix together ingredients to make zany potions, helping to cure (or exacerbate) your customers' ailments.",
    types: ["Web Game"],
    trailer: "https://www.youtube.com/embed/oLidrV_JSlg?rel=0",
    screenshots: [],
    stores: [
      {
        name: "Newgrounds",
        url: "https://www.newgrounds.com/portal/view/730727",
      },
    ],
    platforms: ["Web"],
    players: "[PLACEHOLDER_PLAYERS]",
    logoOffset: 15,
    metaDescription:
      "Potion Panic — A web game by Made in Brooklyn Games. Mix potions and cure your customers' ailments.",
  },
];

export function getGameBySlug(slug) {
  return games.find((g) => g.slug === slug) ?? null;
}
