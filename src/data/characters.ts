import { factions, paths, rarities, types } from '../data';
import { Character } from '../types/characters';

export const characters = {
  Trailblazer_Destruction: {
    id: 6,
    name: 'Trailblazer',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/57bf631f82fad2ededd0cb5e78ba5184.png',
    desc: 'A girl who boarded the Astral Express. They chose to travel with the Astral Express to eliminate the dangers posed by the Stellaron.',
    path: paths.Destruction,
    faction: factions.Astral_Express,
    rarity: rarities.Five_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 163,
        base_atk: 84,
        base_def: 62,
        base_speed: 100,
      },
      level80: {
        base_hp: 1203,
        base_atk: 620,
        base_def: 460,
        base_speed: 100,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/6/6f/Character_Trailblazer_%28F%29_Destruction_Splash_Art.png/revision/latest?cb=20230501005741',
  },
  March_7th_Preservation: {
    id: 7,
    name: 'March 7th',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/f758c418c96018dc6f02abbeb0e43bd0.png',
    desc: 'A girl who once slumbered in eternal ice and knows nothing about her past. To find out the truth about her origins, she decided to travel with the Astral Express. As of right now, she has prepared about 67 different versions of her life story for herself.',
    path: paths.Preservation,
    faction: factions.Astral_Express,
    rarity: rarities.Four_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 144,
        base_atk: 69,
        base_def: 78,
        base_speed: 101,
      },
      level80: {
        base_hp: 1058,
        base_atk: 511,
        base_def: 573,
        base_speed: 101,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c7/Character_March_7th_%28Preservation%29_Splash_Art.png/revision/latest?cb=20230525090156',
  },
  Dan_Heng: {
    id: 8,
    name: 'Dan Heng',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/2ad531314e322a948b768d61bda7617a.png',
    desc: 'A cold and reserved young man who is reticent about his past. To avoid his kin, he decided to travel with the Astral Express.',
    path: paths.Hunt,
    faction: factions.Astral_Express,
    rarity: rarities.Four_Star,
    type: types.Wind,
    stats: {
      level1: {
        base_hp: 120,
        base_atk: 74,
        base_def: 54,
        base_speed: 110,
      },
      level80: {
        base_hp: 882,
        base_atk: 546,
        base_def: 396,
        base_speed: 110,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/e/e5/Character_Dan_Heng_Splash_Art.png/revision/latest?cb=20230525090149',
  },
  Himeko: {
    id: 9,
    name: 'Himeko',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/ae18f02270e74491f7413e9e51a3034a.png',
    desc: 'The one who repaired the Astral Express. To witness the vast starry sky, she decided to travel with the Astral Express. Her hobby is brewing hand-made coffee.',
    path: paths.Erudition,
    faction: factions.Astral_Express,
    rarity: rarities.Five_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 142,
        base_atk: 102,
        base_def: 59,
        base_speed: 96,
      },
      level80: {
        base_hp: 1047,
        base_atk: 756,
        base_def: 436,
        base_speed: 96,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/8/8e/Character_Himeko_Splash_Art.png/revision/latest?cb=20230525090036',
  },
  Welt: {
    id: 10,
    name: 'Welt',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/d4fb4a552e185c71c6915093e7bf7012.png',
    desc: 'A seasoned member of the Express Crew. The passion buried in his heart burns anew as he enjoys this fresh adventure. Occasionally, he would sketch the experiences in a notebook.',
    path: paths.Nihility,
    faction: factions.Astral_Express,
    rarity: rarities.Five_Star,
    type: types.Imaginary,
    stats: {
      level1: {
        base_hp: 153,
        base_atk: 84,
        base_def: 69,
        base_speed: 102,
      },
      level80: {
        base_hp: 1125,
        base_atk: 620,
        base_def: 509,
        base_speed: 102,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/1/11/Character_Welt_Splash_Art.png/revision/latest?cb=20230525090017',
  },
  Arlan: {
    id: 11,
    name: 'Arlan',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/68f609cb3555da77fb048880c3a3d992.png',
    desc: "The head of Herta Space Station's Security Department. This quiet boy hopes to protect the researchers who value their pursuit of knowledge, and to help them to complete their work.",
    path: paths.Destruction,
    faction: factions.Herta_Space_Station,
    rarity: rarities.Four_Star,
    type: types.Lightning,
    stats: {
      level1: {
        base_hp: 163,
        base_atk: 81,
        base_def: 45,
        base_speed: 102,
      },
      level80: {
        base_hp: 1199,
        base_atk: 599,
        base_def: 330,
        base_speed: 102,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/5/5b/Character_Arlan_Splash_Art.png/revision/latest?cb=20230216231038',
  },
  Asta: {
    id: 12,
    name: 'Asta',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/d0f9a61ddf5a74f1242e4283d9555728.png',
    desc: "The lead researcher of Herta Space Station and a lady from a renowned family. She's an astronomer overflowing with curiosity, and excels at managing the disparate staff of the space station.",
    path: paths.Harmony,
    faction: factions.Herta_Space_Station,
    rarity: rarities.Four_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 139,
        base_atk: 69,
        base_def: 63,
        base_speed: 106,
      },
      level80: {
        base_hp: 1023,
        base_atk: 511,
        base_def: 463,
        base_speed: 106,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/b/bd/Character_Asta_Splash_Art.png/revision/latest?cb=20230216231122',
  },
  Herta: {
    id: 13,
    name: 'Herta',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/1818f801f61250ba7d23f824f340d710.png',
    desc: 'Member 83 of the Genius Society. The real master of the space station. An incredibly intelligent yet unsympathetic scientist.',
    path: paths.Erudition,
    faction: factions.Herta_Space_Station,
    rarity: rarities.Four_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 129,
        base_atk: 79,
        base_def: 54,
        base_speed: 100,
      },
      level80: {
        base_hp: 952,
        base_atk: 582,
        base_def: 396,
        base_speed: 100,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/8/8c/Character_Herta_Splash_Art.png/revision/latest?cb=20230216231220',
  },
  Bronya: {
    id: 14,
    name: 'Bronya',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/67b6e7b05fdb787bee6cb308600b87f0.png',
    desc: 'Heir apparent to the Supreme Guardian of Belobog. She possesses pride befitting of a princess, but also the determination and integrity of a soldier.',
    path: paths.Harmony,
    faction: factions.Jarilo_VI,
    rarity: rarities.Five_Star,
    type: types.Wind,
    stats: {
      level1: {
        base_hp: 168,
        base_atk: 79,
        base_def: 72,
        base_speed: 99,
      },
      level80: {
        base_hp: 1241,
        base_atk: 582,
        base_def: 533,
        base_speed: 99,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/7/7c/Character_Bronya_Splash_Art.png/revision/latest?cb=20240121130128',
  },
  Seele: {
    id: 15,
    name: 'Seele',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/25aef0a3b83b04994d7941b66d91d3d5.png',
    desc: 'A resident of the Underworld and the backbone of Wildfire. She goes by the alias "Babochka." She has a frank personality, but there is a delicate and sensitive hidden side to her deep in her heart.',
    path: paths.Hunt,
    faction: factions.Jarilo_VI,
    rarity: rarities.Five_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 126,
        base_atk: 87,
        base_def: 49,
        base_speed: 115,
      },
      level80: {
        base_hp: 931,
        base_atk: 640,
        base_def: 363,
        base_speed: 115,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/5/58/Character_Seele_Splash_Art.png/revision/latest?cb=20240121123334',
  },
  Serval: {
    id: 16,
    name: 'Serval',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/df2eaaeb057d1c05385ed285aa234f5b.png',
    desc: "A Belobog mechanic who used to be a researcher for the Technology Division of the Architects. As Gepard Landau's elder sister, her personality stands in stark contrast to her brother's. She loves an ancient form of music known as \"rock 'n' roll\" that was popular before the Eternal Freeze.",
    path: paths.Erudition,
    faction: factions.Jarilo_VI,
    rarity: rarities.Four_Star,
    type: types.Lightning,
    stats: {
      level1: {
        base_hp: 124,
        base_atk: 88,
        base_def: 51,
        base_speed: 104,
      },
      level80: {
        base_hp: 917,
        base_atk: 652,
        base_def: 374,
        base_speed: 104,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/8/8a/Character_Serval_Splash_Art.png/revision/latest?cb=20230525090108',
  },
  Gepard: {
    id: 17,
    name: 'Gepard',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/a81a8f27d3fbf925de733225f292ca5c.png',
    desc: 'A captain in the Silvermane Guards and an outstanding warrior of Belobog. He is meticulous and vigilant to the core and is always true to himself.',
    path: paths.Preservation,
    faction: factions.Jarilo_VI,
    rarity: rarities.Five_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 190,
        base_atk: 73,
        base_def: 89,
        base_speed: 92,
      },
      level80: {
        base_hp: 1397,
        base_atk: 543,
        base_def: 654,
        base_speed: 92,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/9/96/Character_Gepard_Splash_Art.png/revision/latest?cb=20230216232354',
  },
  Natasha: {
    id: 18,
    name: 'Natasha',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/31d2249272f7d1d3f275ac0ba37b49f6.png',
    desc: 'A doctor from the Underworld and a caregiver of children. Alongside her kindness and caring, she also has a hidden dangerous side.',
    path: paths.Abundance,
    faction: factions.Jarilo_VI,
    rarity: rarities.Four_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 158,
        base_atk: 64,
        base_def: 69,
        base_speed: 98,
      },
      level80: {
        base_hp: 1164,
        base_atk: 476,
        base_def: 507,
        base_speed: 98,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/7/7e/Character_Natasha_Splash_Art.png/revision/latest?cb=20240525042421',
  },
  Pela: {
    id: 19,
    name: 'Pela',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/143ecc2f619b54d9ab9a07cbce2a32d1.png',
    desc: 'An intelligence officer for the Silvermane Guards. She has a serious personality and is revered by other members of the Silvermane Guards.',
    path: paths.Nihility,
    faction: factions.Jarilo_VI,
    rarity: rarities.Four_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 134,
        base_atk: 74,
        base_def: 63,
        base_speed: 105,
      },
      level80: {
        base_hp: 987,
        base_atk: 546,
        base_def: 463,
        base_speed: 105,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c9/Character_Pela_Splash_Art.png/revision/latest?cb=20230525090100',
  },
  Clara: {
    id: 20,
    name: 'Clara',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/a47f4aee7fd870aa31503185c7b2e67c.png',
    desc: 'A vagrant girl who lives with robots. She is introverted, gentle, and has a pure heart. She wishes for all Underworlders to become a family.',
    path: paths.Destruction,
    faction: factions.Jarilo_VI,
    rarity: rarities.Five_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 168,
        base_atk: 100,
        base_def: 66,
        base_speed: 90,
      },
      level80: {
        base_hp: 1319,
        base_atk: 737,
        base_def: 485,
        base_speed: 90,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c2/Character_Clara_Splash_Art.png/revision/latest?cb=20230216231958',
  },
  Sampo: {
    id: 21,
    name: 'Sampo',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/266f6cbd790816885fd3a73539f2a4ae.png',
    desc: "A merchant who freely travels between the Overworld and the Underworld. He acts like he is everyone's friend, is enthusiastically humorous, and is good at bantering.",
    path: paths.Nihility,
    faction: factions.Masked_Fool,
    rarity: rarities.Four_Star,
    type: types.Wind,
    stats: {
      level1: {
        base_hp: 139,
        base_atk: 84,
        base_def: 54,
        base_speed: 102,
      },
      level80: {
        base_hp: 1023,
        base_atk: 617,
        base_def: 396,
        base_speed: 102,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/6/65/Character_Sampo_Splash_Art.png/revision/latest?cb=20230525090046',
  },
  Hook: {
    id: 22,
    name: 'Hook',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/1c77557240e3313155f3826a33f305ee.png',
    desc: 'Boss (self-proclaimed) of an Underworld adventure squad, The Moles. She loves freedom and sees life as a series of adventures.',
    path: paths.Destruction,
    faction: factions.Jarilo_VI,
    rarity: rarities.Four_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 182,
        base_atk: 84,
        base_def: 48,
        base_speed: 94,
      },
      level80: {
        base_hp: 1340,
        base_atk: 617,
        base_def: 352,
        base_speed: 94,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/e/ec/Character_Hook_Splash_Art.png/revision/latest?cb=20230525090126',
  },
  Trailblazer_Preservation: {
    id: 23,
    name: 'Trailblazer',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/09fbf52800eca285cffc62e1424c30bc.png',
    desc: 'A girl who boarded the Astral Express. They chose to travel with the Astral Express to eliminate the dangers posed by the Stellaron.',
    path: paths.Preservation,
    faction: factions.Astral_Express,
    rarity: rarities.Five_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 168,
        base_atk: 81,
        base_def: 82,
        base_speed: 95,
      },
      level80: {
        base_hp: 1241,
        base_atk: 601,
        base_def: 606,
        base_speed: 95,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/1/17/Character_Trailblazer_%28F%29_Preservation_Splash_Art.png/revision/latest?cb=20230501005729',
  },
  Qingque: {
    id: 24,
    name: 'Qingque',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/68f232918193bbb624d39eef864fb14f.png',
    desc: 'Diviner of the Divination Commission on the Xianzhou Luofu, and a librarian. Always slacks off and is about to be demoted to a "door guardian."',
    path: paths.Erudition,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Four_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 139,
        base_atk: 88,
        base_def: 60,
        base_speed: 98,
      },
      level80: {
        base_hp: 1023,
        base_atk: 652,
        base_def: 441,
        base_speed: 98,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/d/d1/Character_Qingque_Splash_Art.png/revision/latest?cb=20230210115335',
  },
  Tingyun: {
    id: 25,
    name: 'Tingyun',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/3a9d0e72b8879515385549d52aba6550.png',
    desc: 'Amicassador of the Sky-Faring Commission of the Xianzhou Luofu. She travels with business delegates, forging trade relationships and alliances with many worlds.',
    path: paths.Harmony,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Four_Star,
    type: types.Lightning,
    stats: {
      level1: {
        base_hp: 115,
        base_atk: 72,
        base_def: 54,
        base_speed: 112,
      },
      level80: {
        base_hp: 846,
        base_atk: 529,
        base_def: 396,
        base_speed: 112,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/5/5b/Character_Tingyun_Splash_Art.png/revision/latest?cb=20230210115502',
  },
  Jing_Yuan: {
    id: 26,
    name: 'Jing Yuan',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/00c30eaf7a2ab2f316c292db33e3a364.png',
    desc: "The Divine Foresight, one of the Seven Arbiter-Generals of the Xianzhou Alliance, leads the Cloud Knights of the Xianzhou Luofu. A student of the Luofu's previous Sword Champion, though not known for his martial prowess.",
    path: paths.Erudition,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Five_Star,
    type: types.Lightning,
    stats: {
      level1: {
        base_hp: 158,
        base_atk: 95,
        base_def: 66,
        base_speed: 99,
      },
      level80: {
        base_hp: 1164,
        base_atk: 698,
        base_def: 485,
        base_speed: 99,
      },
    },
    release_date: new Date('2023-05-17'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/4/48/Character_Jing_Yuan_Splash_Art.png/revision/latest?cb=20230210115809',
  },
  Sushang: {
    id: 27,
    name: 'Sushang',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/dd9a74e3b3b3cfef1d72b13017b58c35.png',
    desc: 'Born on the Xianzhou Yaoqing, sent to the Cloud Knights of the Luofu for military training. She wields her family sword, a gift from her mother, and longs for the future she will go on to write.',
    path: paths.Hunt,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Four_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 124,
        base_atk: 76,
        base_def: 57,
        base_speed: 107,
      },
      level80: {
        base_hp: 917,
        base_atk: 564,
        base_def: 418,
        base_speed: 107,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/7/72/Character_Sushang_Splash_Art.png/revision/latest?cb=20230210115023',
  },
  Yanqing: {
    id: 28,
    name: 'Yanqing',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/27fd37cc058095d541bd82c007b683a7.png',
    desc: "General Jing Yuan's retainer. A gifted swordsman who hasn't even come of age. No one can best him when Yanqing holds a sword in hand.",
    path: paths.Hunt,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Five_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 121,
        base_atk: 92,
        base_def: 56,
        base_speed: 109,
      },
      level80: {
        base_hp: 892,
        base_atk: 679,
        base_def: 412,
        base_speed: 109,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/6/6d/Character_Yanqing_Splash_Art.png/revision/latest?cb=20230210121516',
  },
  Bailu: {
    id: 29,
    name: 'Bailu',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/6cbfae03fae10376b940fc30120b00f4.png',
    desc: 'The High Elder of the Vidyadhara, who is also known as the "Healer Lady" on the Luofu. She uses her unique medical science and the medical treatment that can only be provided by the Vidyadhara dragon race to save lives.',
    path: paths.Abundance,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Five_Star,
    type: types.Lightning,
    stats: {
      level1: {
        base_hp: 179,
        base_atk: 76,
        base_def: 66,
        base_speed: 98,
      },
      level80: {
        base_hp: 1319,
        base_atk: 562,
        base_def: 485,
        base_speed: 98,
      },
    },
    release_date: new Date('2023-04-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/e/e9/Character_Bailu_Splash_Art.png/revision/latest?cb=20230210120736',
  },
  Silver_Wolf: {
    id: 710,
    name: 'Silver Wolf',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/440b816d643f7fe275c18d7cdb530e4e.png',
    desc: 'A member of the Stellaron Hunters and a genius hacker. She sees the universe as a massive immersive simulation game and has fun with it. She\'s mastered the skill know as "aether editing" which can be used to tamper with the data of reality.',
    path: paths.Nihility,
    faction: factions.Stellaron_Hunters,
    rarity: rarities.Five_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 142,
        base_atk: 87,
        base_def: 62,
        base_speed: 107,
      },
      level80: {
        base_hp: 1047,
        base_atk: 640,
        base_def: 460,
        base_speed: 107,
      },
    },
    release_date: new Date('2023-06-07'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/6/60/Character_Silver_Wolf_Splash_Art.png/revision/latest?cb=20230216230911',
  },
  Luocha: {
    id: 711,
    name: 'Luocha',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/063eb7a48de60cde11a62e10de637599.png',
    desc: 'Carrying a coffin wherever he goes, he is a foreign trader who came from beyond the stellar seas. Has excellent medical skills.',
    path: paths.Abundance,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Five_Star,
    type: types.Imaginary,
    stats: {
      level1: {
        base_hp: 174,
        base_atk: 102,
        base_def: 49,
        base_speed: 101,
      },
      level80: {
        base_hp: 1280,
        base_atk: 756,
        base_def: 363,
        base_speed: 101,
      },
    },
    release_date: new Date('2023-06-28'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/a/a5/Character_Luocha_Splash_Art.png/revision/latest?cb=20230628091054',
  },
  Yukong: {
    id: 712,
    name: 'Yukong',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/4056de864600648c1b7fe453a41513cc.png',
    desc: "Head of the Sky-Faring Commission on the Xianzhou Luofu. Yukong was a seasoned pilot and a deadshot. Since heading up the commission, she's been buried under mountains of paperwork.",
    path: paths.Harmony,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Four_Star,
    type: types.Imaginary,
    stats: {
      level1: {
        base_hp: 124,
        base_atk: 81,
        base_def: 51,
        base_speed: 107,
      },
      level80: {
        base_hp: 916,
        base_atk: 599,
        base_def: 374,
        base_speed: 107,
      },
    },
    release_date: new Date('2023-06-28'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/0/04/Character_Yukong_Splash_Art.png/revision/latest?cb=20230628090836',
  },
  Blade: {
    id: 789,
    name: 'Blade',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/94893773857267575043bcc0c78931c1.png',
    desc: 'A member of the Stellaron Hunters, and a swordsman who abandoned his body to become a blade. Pledges loyalty to "Destiny\'s Slave," and possesses a terrifying self-healing ability.',
    path: paths.Destruction,
    faction: factions.Stellaron_Hunters,
    rarity: rarities.Five_Star,
    type: types.Wind,
    stats: {
      level1: {
        base_hp: 184,
        base_atk: 73,
        base_def: 66,
        base_speed: 97,
      },
      level80: {
        base_hp: 1358,
        base_atk: 543,
        base_def: 485,
        base_speed: 97,
      },
    },
    release_date: new Date('2023-07-19'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/1/16/Character_Blade_Splash_Art.png/revision/latest?cb=20230501004859',
  },
  Kafka: {
    id: 791,
    name: 'Kafka',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/33d91d2aa748306ab8fe76a37e60d5a5.png',
    desc: 'A member of the Stellaron Hunters. A dashing, collected, and professional beauty. Used the enchantment of Spirit Whisper to set up Trailblazer to absorb the Stellaron. Her hobby is shopping for and organizing her collection of coats.',
    path: paths.Nihility,
    faction: factions.Stellaron_Hunters,
    rarity: rarities.Five_Star,
    type: types.Lightning,
    stats: {
      level1: {
        base_hp: 147,
        base_atk: 92,
        base_def: 66,
        base_speed: 100,
      },
      level80: {
        base_hp: 1086,
        base_atk: 679,
        base_def: 485,
        base_speed: 100,
      },
    },
    release_date: new Date('2023-08-09'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/9/95/Character_Kafka_Splash_Art.png/revision/latest?cb=20230809042240',
  },
  Luka: {
    id: 801,
    name: 'Luka',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/4b35e86d3ccd6b312ea5f0ff3136628f.png',
    desc: "The boxing champion in Belobog's Underground, and one of Wildfire's most capable fighters. The consecutive champion of the Fight Club, his enthusiasm inspires children of the Underworld who dare to dream big.",
    path: paths.Nihility,
    faction: factions.Jarilo_VI,
    rarity: rarities.Four_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 124,
        base_atk: 79,
        base_def: 66,
        base_speed: 103,
      },
      level80: {
        base_hp: 917,
        base_atk: 582,
        base_def: 485,
        base_speed: 103,
      },
    },
    release_date: new Date('2023-08-09'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/5/51/Character_Luka_Splash_Art.png/revision/latest?cb=20230809042157',
  },
  Fu_Xuan: {
    id: 804,
    name: 'Fu Xuan',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/5344c4bce6cbd77b61913833fb0f8b69.png',
    desc: 'The head of the Xianzhou Luofu\'s Divination Commission. A confident and blunt sage. Using her third eye and the Matrix of Prescience, Fu Xuan calculates the Xianzhou\'s route and predicts the fortune of future events. She firmly believes that everything she does is the "best solution" for the situation. Fu Xuan is waiting for the general\'s promised "abdication." However, that day still seems... very far away.',
    path: paths.Preservation,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Five_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 200,
        base_atk: 63,
        base_def: 82,
        base_speed: 100,
      },
      level80: {
        base_hp: 1474,
        base_atk: 465,
        base_def: 606,
        base_speed: 100,
      },
    },
    release_date: new Date('2023-09-20'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/3/3e/Character_Fu_Xuan_Splash_Art.png/revision/latest?cb=20230928224921',
  },
  Dan_Heng_Imbibitor_Lunae: {
    id: 1226,
    name: 'Dan Heng • Imbibitor Lunae',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/e360708232477489d36c145fe4e389fc.png',
    desc: 'Dan Heng\'s true Vidyadhara form, revealed after accepting residual powers from the previous reincarnation of "Imbibitor Lunae." Upon accepting the majestic horns atop his crown, he must accept all the merits and faults attributed to that person. However, he was never himself.',
    path: paths.Destruction,
    faction: factions.Astral_Express,
    rarity: rarities.Five_Star,
    type: types.Imaginary,
    stats: {
      level1: {
        base_hp: 168,
        base_atk: 95,
        base_def: 49,
        base_speed: 102,
      },
      level80: {
        base_hp: 1241,
        base_atk: 698,
        base_def: 363,
        base_speed: 102,
      },
    },
    release_date: new Date('2023-08-30'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/2/2c/Character_Dan_Heng_%E2%80%A2_Imbibitor_Lunae_Splash_Art.png/revision/latest?cb=20230818234313',
  },
  Lynx: {
    id: 1228,
    name: 'Lynx',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/df8fec3999f1e64147d869656e82c4ac.png',
    desc: 'A Belobogian Snow Plains Explorer, and the youngest of the Landau siblings. Calm and collected, with a strong drive for action. Often embarks on solo adventures to explore the snowy wilderness.',
    path: paths.Abundance,
    faction: factions.Jarilo_VI,
    rarity: rarities.Four_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 144,
        base_atk: 67,
        base_def: 75,
        base_speed: 100,
      },
      level80: {
        base_hp: 1058,
        base_atk: 493,
        base_def: 551,
        base_speed: 100,
      },
    },
    release_date: new Date('2023-09-20'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/3/3c/Character_Lynx_Splash_Art.png/revision/latest?cb=20230719101506',
  },
  Jingliu: {
    id: 1387,
    name: 'Jingliu',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/0f3f152bdffd4aa6719b2986fd3d84b0.png',
    desc: "Former Sword Champion of the Luofu, and the creator of the Cloud Knights' legends of undefeated might. Now, her name has been wiped from the records, and she is a traitor of the Xianzhou walking on the fine line between sanity and mara-struck.",
    path: paths.Destruction,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Five_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 195,
        base_atk: 92,
        base_def: 66,
        base_speed: 96,
      },
      level80: {
        base_hp: 1435,
        base_atk: 679,
        base_def: 485,
        base_speed: 96,
      },
    },
    release_date: new Date('2023-10-11'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/9/97/Character_Jingliu_Splash_Art.png/revision/latest?cb=20240525000314',
  },
  Topaz_and_Numby: {
    id: 1389,
    name: 'Topaz & Numby',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/1a258d2a1076ea4516cf5764e8392856.png',
    desc: 'Topaz is the Leader of the Special Debts Picket Team and high-level manager of the Strategic Investment Department under the Interastral Peace Corporation. A member of the "Ten Stronehearts" at a young age, Topaz\'s foundational expertise is "debt retrieval." Her partner, the Warp Trotter "Numby," is also capable of keenly perceiving where "riches" are located, ensuring that jobs based in security, debt collection, and actuarial varieties are of no great challenge. At presently they are traveling the cosmos together, seeking all manner of liability disputes that might be affecting the stable progression of the IPC\'s businesses.',
    path: paths.Hunt,
    faction: factions.Interastral_Peace_Corporation,
    rarity: rarities.Five_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 126,
        base_atk: 84,
        base_def: 56,
        base_speed: 110,
      },
      level80: {
        base_hp: 931,
        base_atk: 620,
        base_def: 412,
        base_speed: 110,
      },
    },
    release_date: new Date('2023-10-27'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/9/9d/Character_Topaz_and_Numby_Splash_Art.png/revision/latest?cb=20231030040101',
  },
  Guinaifen: {
    id: 1392,
    name: 'Guinaifen',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/33932eec4da522bf9a5386a4de475c18.png',
    desc: "A performance artist visiting the Xianzhou Luofu - in other words, a street performer. She's chasing a new life on the Loufu when not concerned with food and shelter.",
    path: paths.Nihility,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Four_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 120,
        base_atk: 79,
        base_def: 60,
        base_speed: 106,
      },
      level80: {
        base_hp: 882,
        base_atk: 582,
        base_def: 441,
        base_speed: 106,
      },
    },
    release_date: new Date('2023-10-27'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/3/33/Character_Guinaifen_Splash_Art.png/revision/latest?cb=20231030040741',
  },
  Huohuo: {
    id: 1533,
    name: 'Huohuo',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/052b3effab13b7b4ebb84b0973556497.png',
    desc: 'A pitiable and helpless Foxian girl who is also a Ten-Lords Commission Judge-in-training, who fears ghosts but must catch them. Due to having a heliobus named Tail sealed in her tail by the judges of the Ten-Lords Comission, she became a "cursed one" who attracts inhuman beings. She fears demons and heliobi, but contrarily is tasked with their capture and entrusted with the heavy task of eradicating vile spirits. Though she believes herself lacking in ability, she is unable to muster the courage to resign and continues onward despite walking in a valley of her own fear.',
    path: paths.Abundance,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Five_Star,
    type: types.Wind,
    stats: {
      level1: {
        base_hp: 184,
        base_atk: 81,
        base_def: 69,
        base_speed: 98,
      },
      level80: {
        base_hp: 1411,
        base_atk: 623,
        base_def: 533,
        base_speed: 98,
      },
    },
    release_date: new Date('2023-11-15'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/8/82/Character_Huohuo_Splash_Art.png/revision/latest?cb=20250604025217',
  },
  Argenti: {
    id: 1535,
    name: 'Argenti',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/d51869e8d720fe379c2d3a56fcf78f2e.png',
    desc: 'A classic knight of the "Knights of Beauty" who is piously seeking his missing Aeon Idrila the "Beauty." Forthright and candid, he wanders the cosmos espousing the virtues of Idrila\'s good name.',
    path: paths.Erudition,
    faction: factions.The_Knights_of_Beauty,
    rarity: rarities.Five_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 142,
        base_atk: 100,
        base_def: 49,
        base_speed: 103,
      },
      level80: {
        base_hp: 1047,
        base_atk: 737,
        base_def: 363,
        base_speed: 103,
      },
    },
    release_date: new Date('2023-12-06'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/9/90/Character_Argenti_Splash_Art.png/revision/latest?cb=20231206232011',
  },
  Hanya: {
    id: 1537,
    name: 'Hanya',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/3790326c5acd456a7cd29cf6335aaf51.png',
    desc: "One of the judges of the Xianzhou Luofu's Ten-Lords Commission. Ordained by the Ten-Lords and wielding the authority of the Oracle Brush, she reads the multitudes of human sins and transgressions, then issues punishments and karmic retribution.",
    path: paths.Harmony,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Four_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 124,
        base_atk: 76,
        base_def: 48,
        base_speed: 110,
      },
      level80: {
        base_hp: 917,
        base_atk: 564,
        base_def: 352,
        base_speed: 110,
      },
    },
    release_date: new Date('2023-12-06'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/e/e8/Character_Hanya_Splash_Art.png/revision/latest?cb=20231206232120',
  },
  Ruan_Mei: {
    id: 1638,
    name: 'Ruan Mei',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/2fe8741bd36bfcabbc914a02d558c80d.png',
    desc: 'A member of the Genius Society and an expert in life sciences. She teamed up with Herta and others to develop the Simulated Universe.',
    path: paths.Harmony,
    faction: factions.Herta_Space_Station,
    rarity: rarities.Five_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 147,
        base_atk: 89,
        base_def: 66,
        base_speed: 104,
      },
      level80: {
        base_hp: 1086,
        base_atk: 659,
        base_def: 485,
        base_speed: 104,
      },
    },
    release_date: new Date('2023-12-27'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/d/d5/Character_Ruan_Mei_Splash_Art.png/revision/latest?cb=20231227021137',
  },
  Dr_Ratio: {
    id: 1639,
    name: 'Dr. Ratio',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/6230d9ea30932b3428e1a75c6b31b0b6.png',
    desc: 'An eccentric, self-centered, slightly gloomy, and yet elegant Intelligentsia Guild member. He often wears a bizarre plaster head sculpture over his head despite his handsome features.',
    path: paths.Hunt,
    faction: factions.Intelligentsia_Guild,
    rarity: rarities.Five_Star,
    type: types.Imaginary,
    stats: {
      level1: {
        base_hp: 142,
        base_atk: 105,
        base_def: 62,
        base_speed: 103,
      },
      level80: {
        base_hp: 1047,
        base_atk: 776,
        base_def: 460,
        base_speed: 103,
      },
    },
    release_date: new Date('2024-01-17'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/5/56/Character_Dr._Ratio_Splash_Art.png/revision/latest?cb=20231227132629',
  },
  Xueyi: {
    id: 1640,
    name: 'Xueyi',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/596c7833fbec289c7da1188d0dc0f371.png',
    desc: 'Judge of the Ten-Lords Commission, which controls life and death on the Luofu. For years after her death, she inhabited a puppet body and returned to the world to fulfill her mission.',
    path: paths.Destruction,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Four_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 144,
        base_atk: 81,
        base_def: 54,
        base_speed: 103,
      },
      level80: {
        base_hp: 1058,
        base_atk: 599,
        base_def: 396,
        base_speed: 103,
      },
    },
    release_date: new Date('2023-12-27'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/b/bc/Character_Xueyi_Splash_Art.png/revision/latest?cb=20231227045314',
  },
  Black_Swan: {
    id: 1806,
    name: 'Black Swan',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/4c25aee3a751d33de2e33458faf53c39.png',
    desc: 'A Memokeeper of the Garden of Recollection. A mysterious and elegant soothsayer. She often wears a warm smile and is willing to patiently listen to the words of others, thus using such means as a pretext to enter "memories" and gain omniscience over certain matters. A lady passionate about collecting unique memories, yet the thoughts that guide her are hard to glean.',
    path: paths.Nihility,
    faction: factions.Garden_of_Recollection,
    rarity: rarities.Five_Star,
    type: types.Wind,
    stats: {
      level1: {
        base_hp: 147,
        base_atk: 89,
        base_def: 66,
        base_speed: 102,
      },
      level80: {
        base_hp: 1086,
        base_atk: 659,
        base_def: 485,
        base_speed: 102,
      },
    },
    release_date: new Date('2024-02-06'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/f/fd/Character_Black_Swan_Splash_Art.png/revision/latest?cb=20240220023547',
  },
  Sparkle: {
    id: 1807,
    name: 'Sparkle',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/b53760112ede65018871c7d7a8a8c07b.png',
    desc: 'A member of the Masked Fools. Inscrutable and unscrupulous. A dangerous maestro of theatrics, utterly engrossed in the art of performance. Adorned with innumerable masks, she is the hero with a thousand faces. Wealth, status, power... None of this matters to Sparkle. The only thing that can get her attention is "amusement."',
    path: paths.Harmony,
    faction: factions.Masked_Fool,
    rarity: rarities.Five_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 190,
        base_atk: 71,
        base_def: 66,
        base_speed: 101,
      },
      level80: {
        base_hp: 1397,
        base_atk: 523,
        base_def: 485,
        base_speed: 101,
      },
    },
    release_date: new Date('2024-02-29'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/9/99/Character_Sparkle_Splash_Art.png/revision/latest?cb=20240327022635',
  },
  Misha: {
    id: 1808,
    name: 'Misha',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/4a22ac1b9309f8e94d1e7563577048a8.png',
    desc: 'A well-behaved young man serving as a hotel bellboy in Penacony. Misha has a great longing for the Nameless and dreams of one day embarking on a journey of his own.',
    path: paths.Destruction,
    faction: factions.Penacony,
    rarity: rarities.Four_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 172,
        base_atk: 81,
        base_def: 54,
        base_speed: 96,
      },
      level80: {
        base_hp: 1270,
        base_atk: 599,
        base_def: 396,
        base_speed: 96,
      },
    },
    release_date: new Date('2024-02-06'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/5/5c/Character_Misha_Splash_Art.png/revision/latest?cb=20240206022717',
  },
  Acheron: {
    id: 1919,
    name: 'Acheron',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/fa895cd3c7dc22e2078c70e5cdb2e920.png',
    desc: 'A drifter claiming to be a Galaxy Ranger. Her true name is unknown. She walks the cosmos alone, carrying with her a long sword.',
    path: paths.Nihility,
    faction: factions.Self_Annihilator,
    rarity: rarities.Five_Star,
    type: types.Lightning,
    stats: {
      level1: {
        base_hp: 153,
        base_atk: 95,
        base_def: 59,
        base_speed: 101,
      },
      level80: {
        base_hp: 1125,
        base_atk: 698,
        base_def: 436,
        base_speed: 101,
      },
    },
    release_date: new Date('2024-03-27'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/7/78/Character_Acheron_Splash_Art.png/revision/latest?cb=20240327021325',
  },
  Aventurine: {
    id: 1920,
    name: 'Aventurine',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/d981b3193e2d83214de84c1ab0d4388a.png',
    desc: 'A senior manager in the IPC Strategic Investment Department and one of the Ten Stonehearts, known for his cornerstone "Aventurine of stratagems." He always dons a smile that conceals his true intentions and lives by the principle of "the greater the risk, the greater the reward."',
    path: paths.Preservation,
    faction: factions.Interastral_Peace_Corporation,
    rarity: rarities.Five_Star,
    type: types.Imaginary,
    stats: {
      level1: {
        base_hp: 163,
        base_atk: 60,
        base_def: 89,
        base_speed: 106,
      },
      level80: {
        base_hp: 1203,
        base_atk: 446,
        base_def: 654,
        base_speed: 106,
      },
    },
    release_date: new Date('2024-04-17'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/a/a9/Character_Aventurine_Splash_Art.png/revision/latest?cb=20240327104723',
  },
  Gallagher: {
    id: 1924,
    name: 'Gallagher',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/4d15e0e6b061924f1628a2844eb47653.png',
    desc: 'A security officer from the Bloodhound Family in Penacony. He is also a slovenly and indolent drinksmith. Though unorganized in apparel and casual in how he makes his drinks, he is always courteous toward visiting guests but keeps his vigilance about him. He seems to carry a weight of a complicated past, yet he never voluntarily divulges any details.',
    path: paths.Abundance,
    faction: factions.Penacony,
    rarity: rarities.Four_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 177,
        base_atk: 72,
        base_def: 60,
        base_speed: 98,
      },
      level80: {
        base_hp: 1305,
        base_atk: 529,
        base_def: 441,
        base_speed: 98,
      },
    },
    release_date: new Date('2024-03-27'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/2/2d/Character_Gallagher_Splash_Art.png/revision/latest?cb=20240327022011',
  },
  Robin: {
    id: 2366,
    name: 'Robin',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/f87d1281884c3344e290be671282ff26.png',
    desc: 'A Halovian singer who was born in Penacony and has risen to cosmic fame. An elegant and demure young lady. This time, she has been invited home by The Family to grace everyone with song during the Charmony Festival. She can use the power of "Harmony" to broadcast her music, manifesting "resonance" among not only her fans but all manner of lifeforms.',
    path: paths.Harmony,
    faction: factions.Penacony,
    rarity: rarities.Five_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 174,
        base_atk: 87,
        base_def: 66,
        base_speed: 102,
      },
      level80: {
        base_hp: 1280,
        base_atk: 640,
        base_def: 485,
        base_speed: 102,
      },
    },
    release_date: new Date('2024-05-08'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/9/92/Character_Robin_Splash_Art.png/revision/latest?cb=20240508021256',
  },
  Boothill: {
    id: 2367,
    name: 'Boothill',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/7afd6413461155ddbda02c24a5283eb3.png',
    desc: 'A cyborg cowboy drifting among the stars. Extremely optimistic and unrestrained. He is a member of the Galaxy Rangers who swore to punish the wretched by any and all means... His flamboyant and brash actions were all to draw the attention of the Interastral Peace Corporation — the target of his revenge.',
    path: paths.Hunt,
    faction: factions.Galaxy_Ranger,
    rarity: rarities.Five_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 163,
        base_atk: 84,
        base_def: 59,
        base_speed: 107,
      },
      level80: {
        base_hp: 1203,
        base_atk: 620,
        base_def: 436,
        base_speed: 107,
      },
    },
    release_date: new Date('2023-05-29'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/b/bb/Character_Boothill_Splash_Art.png/revision/latest?cb=20240624231026',
  },
  Firefly: {
    id: 2494,
    name: 'Firefly',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/9a4bea34ab2de4d4e9c16eeaf46caeb7.png',
    desc: 'A member of the Stellaron Hunters, clad in a set of mechanized armor known as "SAM." Her character is marked by unwavering loyalty and steely resolve. Engineered as a weapon against the Swarm, she experiences accelerated growth, but a tragically shortened lifespan. She joined the Stellaron Hunters in a quest for a chance at "life," seeking to defy her fated demise.',
    path: paths.Destruction,
    faction: factions.Stellaron_Hunters,
    rarity: rarities.Five_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 111,
        base_atk: 71,
        base_def: 105,
        base_speed: 104,
      },
      level80: {
        base_hp: 814,
        base_atk: 523,
        base_def: 776,
        base_speed: 104,
      },
    },
    release_date: new Date('2024-06-19'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/3/38/Character_Firefly_Splash_Art.png/revision/latest?cb=20241007220547',
  },
  Jade: {
    id: 2495,
    name: 'Jade',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/5ed05742508a33929adb1caee9c83006.png',
    desc: 'A senior manager in the IPC Strategic Investment Department and one of the Ten Stonehearts, known for her cornerstone "Jade of Credit." A cold and elegant moneylender, she is skilled at understanding the human heart, with a personal hobby called "Bonajade Exchange." She\'s willing to wait patiently for high-value acquisitions and adept at extracting value from seemingly destitute clients.',
    path: paths.Erudition,
    faction: factions.Interastral_Peace_Corporation,
    rarity: rarities.Five_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 147,
        base_atk: 89,
        base_def: 69,
        base_speed: 103,
      },
      level80: {
        base_hp: 1086,
        base_atk: 659,
        base_def: 509,
        base_speed: 103,
      },
    },
    release_date: new Date('2024-07-10'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/6/6d/Character_Jade_Splash_Art.png/revision/latest?cb=20240706170539',
  },
  Trailblazer_Harmony: {
    id: 2511,
    name: 'Trailblazer',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/6cff2aa54cd3872b44a4a3fea88e92f1.png',
    desc: 'A girl who boarded the Astral Express. They chose to travel with the Astral Express to eliminate the dangers posed by the Stellaron.',
    path: paths.Harmony,
    faction: factions.Astral_Express,
    rarity: rarities.Five_Star,
    type: types.Imaginary,
    stats: {
      level1: {
        base_hp: 147,
        base_atk: 60,
        base_def: 92,
        base_speed: 105,
      },
      level80: {
        base_hp: 1086,
        base_atk: 446,
        base_def: 679,
        base_speed: 105,
      },
    },
    release_date: new Date('2024-05-08'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/0/0a/Character_Trailblazer_%28F%29_Harmony_Splash_Art.png/revision/latest?cb=20240508064117',
  },
  Yunli: {
    id: 2642,
    name: 'Yunli',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/78dd2c4838d777784bc4f257dcf5ce65.png',
    desc: 'A sword hunter from the Xianzhou Zhuming and "the Flaming Heart" General Huaiyan\'s darling granddaughter. Frank and straightforward. She has learned swordplay and forging from Huaiyan since young, and thus is the second-youngest prodigy swordmaster of the Flamewheel Octet.Fueled by an intense loathing for the cursed swords that emerged from the Zhuming, she vowed to "hunt down and wipe out all cursed swords."',
    path: paths.Destruction,
    faction: factions.The_Xianzhou_Zhuming,
    rarity: rarities.Five_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 184,
        base_atk: 92,
        base_def: 62,
        base_speed: 94,
      },
      level80: {
        base_hp: 1358,
        base_atk: 679,
        base_def: 460,
        base_speed: 94,
      },
    },
    release_date: new Date('2024-07-31'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/7/72/Character_Yunli_Splash_Art.png/revision/latest?cb=20241007221656',
  },
  Jiaoqiu: {
    id: 2643,
    name: 'Jiaoqiu',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/574349359fd9921010da934867a84381.png',
    desc: 'A foxian healer and counselor from the Xianzhou Yaoqing. Often greets people with a smile on his face and a scheme in his heart. Born into a prestigious Alchemy Commission family, he once withdrew from practicing medicine due to a broken heart. However, he returned to the field to treat "the Merlin\'s Claw," General Feixiao. Skilled in the study of alchemical prescription that views food as medicine, especially those that induce a sensation of spiciness. They invented a cauldron-based medicinal formula known as the "nine-square grid."',
    path: paths.Nihility,
    faction: factions.The_Xianzhou_Yaoqing,
    rarity: rarities.Five_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 184,
        base_atk: 81,
        base_def: 69,
        base_speed: 98,
      },
      level80: {
        base_hp: 1358,
        base_atk: 601,
        base_def: 509,
        base_speed: 98,
      },
    },
    release_date: new Date('2024-08-21'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/b/be/Character_Jiaoqiu_Splash_Art.png/revision/latest?cb=20240911023034',
  },
  March_7th_Hunt: {
    id: 2657,
    name: 'March 7th',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/c6020c2709bac9d2168fde084480ca9f.png',
    desc: 'March 7th in a Xianzhou-styled outfit. A sword-wielding female martial artist.Learning swordplay from both Yunli and Yanqing, she is eager to create more beautiful memories on the Xianzhou.',
    path: paths.Hunt,
    faction: factions.Astral_Express,
    rarity: rarities.Four_Star,
    type: types.Imaginary,
    stats: {
      level1: {
        base_hp: 144,
        base_atk: 76,
        base_def: 60,
        base_speed: 102,
      },
      level80: {
        base_hp: 1058,
        base_atk: 564,
        base_def: 441,
        base_speed: 102,
      },
    },
    release_date: new Date('2024-07-31'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/b/b9/Character_March_7th_%28The_Hunt%29_Splash_Art.png/revision/latest?cb=20240724123019',
  },
  Feixiao: {
    id: 2947,
    name: 'Feixiao',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/c2a9ea5c3b5198a5f079ec5d578dfa4a.png',
    desc: 'The Xianzhou Yaoqing\'s Merlin\'s Claw and one of the Seven Arbiter-Generals. Unconventional and straightforward, she exudes effortless charm. She is skilled in all forms of martial arts and has honed herself into a supreme weapon. She is widely adored by Xianzhou soldiers and civilians alike as "The Vanquishing General". However, she bears the burden of the Moon Rage affliction. If she were to hunt down all the abominations in her limited lifetime — then the only enemy Feixiao has would be herself.',
    path: paths.Hunt,
    faction: factions.The_Xianzhou_Yaoqing,
    rarity: rarities.Five_Star,
    type: types.Wind,
    stats: {
      level1: {
        base_hp: 142,
        base_atk: 81,
        base_def: 52,
        base_speed: 112,
      },
      level80: {
        base_hp: 1047,
        base_atk: 601,
        base_def: 388,
        base_speed: 112,
      },
    },
    release_date: new Date('2024-09-10'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/6/61/Character_Feixiao_Splash_Art.png/revision/latest?cb=20241007220552',
  },
  Lingsha: {
    id: 2948,
    name: 'Lingsha',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/380e768d866281afd7d2cffc04746f13.png',
    desc: "The new Cauldron Master of the Xianzhou Luofu's Alchemy Commission is one perceptive and intelligent Vidyadhara healer. With a keen sense of smell, she diagnoses ailments and calms minds with aromatic therapy. Adept at navigating complex social relationships, she can remain impeccably composed even when turmoil rages within.",
    path: paths.Abundance,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Five_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 184,
        base_atk: 92,
        base_def: 59,
        base_speed: 98,
      },
      level80: {
        base_hp: 1358,
        base_atk: 679,
        base_def: 436,
        base_speed: 98,
      },
    },
    release_date: new Date('2024-10-02'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/c/c1/Character_Lingsha_Splash_Art.png/revision/latest?cb=20241120224130',
  },
  Moze: {
    id: 2949,
    name: 'Moze',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/a218b9d5e1ff2484637ae118e66e4883.png',
    desc: 'A Shadow Guard of the Yaoqing, Moze is taciturn and solitary, always acting on his own. As an expert in intelligence services and other operations that must remain covert, Moze rarely shows himself before others. The moment he reveals his blade usually spells doom for his enemies. He commands a vast wealth of assassination techniques, coupled with an extraordinary obsession for orderliness and cleanliness.',
    path: paths.Hunt,
    faction: factions.The_Xianzhou_Yaoqing,
    rarity: rarities.Four_Star,
    type: types.Lightning,
    stats: {
      level1: {
        base_hp: 110,
        base_atk: 81,
        base_def: 48,
        base_speed: 111,
      },
      level80: {
        base_hp: 811,
        base_atk: 599,
        base_def: 352,
        base_speed: 111,
      },
    },
    release_date: new Date('2024-09-10'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/8/81/Character_Moze_Splash_Art.png/revision/latest?cb=20240910181952',
  },
  Rappa: {
    id: 3057,
    name: 'Rappa',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/978e0c6eeeac11f667f945a111293fc3.png',
    desc: 'A peculiar girl who appears in Penacony like a flashbang at the darkest hour of night, identifying herself as a ninja and attributing everything in the world to "ninjutsu." Upholding the recitation of ninja mantra, creating Dazzling Ninja Seals, and studying ninja scrolls — That is, the Way of the Ninja involves rap, graffiti, and manga — Through rigorous self-discipline, she roams the stars, upholding justice and righteousness. As a member of the Galaxy Rangers, she relentlessly pursues the villain known as Evil Ninja Osaru, chasing them to the very edge of the Cosmos.',
    path: paths.Erudition,
    faction: factions.Galaxy_Ranger,
    rarity: rarities.Five_Star,
    type: types.Imaginary,
    stats: {
      level1: {
        base_hp: 147,
        base_atk: 97,
        base_def: 62,
        base_speed: 96,
      },
      level80: {
        base_hp: 1086,
        base_atk: 717,
        base_def: 460,
        base_speed: 96,
      },
    },
    release_date: new Date('2024-10-23'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/1/1c/Character_Rappa_Splash_Art.png/revision/latest?cb=20241120154734',
  },
  Sunday: {
    id: 3150,
    name: 'Sunday',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/232c7d3fa3ef91e0dcb034189e28313e.png',
    desc: 'The former head of the Oak Family and the elder brother of Robin. After the upheaval of the Charmony Festival was quelled, he bid farewell to Order and his homeland, boarding the Astral Express in search of a new path.',
    path: paths.Harmony,
    faction: factions.Cosmos,
    rarity: rarities.Five_Star,
    type: types.Imaginary,
    stats: {
      level1: {
        base_hp: 168,
        base_atk: 87,
        base_def: 72,
        base_speed: 96,
      },
      level80: {
        base_hp: 1241,
        base_atk: 640,
        base_def: 533,
        base_speed: 96,
      },
    },
    release_date: new Date('2024-12-04'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/2/21/Character_Sunday_Splash_Art.png/revision/latest?cb=20241224161538',
  },
  Fugue: {
    id: 3151,
    name: 'Fugue',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/e8d610ca22ab071b6591bb4fcd28662e.png',
    desc: 'A tactful foxian girl, whose appearance, name, and identity have all been stolen. The fates have left her a thread of chance at survival, yet the brand of Destruction still writhes with anticipation. The one in a fugue who has experienced life and death and is given a new life... when would she be able to return home?',
    path: paths.Nihility,
    faction: factions.Xianzhou_Luofu,
    rarity: rarities.Five_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 153,
        base_atk: 79,
        base_def: 75,
        base_speed: 102,
      },
      level80: {
        base_hp: 1125,
        base_atk: 582,
        base_def: 557,
        base_speed: 102,
      },
    },
    release_date: new Date('2024-12-25'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/4/4c/Character_Fugue_Splash_Art.png/revision/latest?cb=20241122125941',
  },
  The_Herta: {
    id: 3285,
    name: 'The Herta',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/659dc749feb70d8f0bceb12e0428ff8d.png',
    desc: "Esteemed Genius Society #83, human, female, young, beautiful, attractive. It's said that she lives in the far edge of the Cosmos, almost never leaving. Sounds like her appearance this time... must be for some issue that requires a personal touch, right?",
    path: paths.Erudition,
    faction: factions.Herta_Space_Station,
    rarity: rarities.Five_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 158,
        base_atk: 92,
        base_def: 66,
        base_speed: 99,
      },
      level80: {
        base_hp: 1164,
        base_atk: 679,
        base_def: 485,
        base_speed: 99,
      },
    },
    release_date: new Date('2025-01-15'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/4/42/Character_The_Herta_Splash_Art.png/revision/latest?cb=20250121214107',
  },
  Aglaea: {
    id: 3286,
    name: 'Aglaea',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/07718bc670a83cb649d70654e82a2997.png',
    desc: 'In that holy city kissed by the dawn, the weaver caresses the golden threads, entwining fates. The Chrysos Heir that bears the "Romance" Coreflame gathered the world\'s heroes, leading them on a long journey once more — to topple the gods, reclaim the divine flame, and grant rebirth to the nearly fallen Amphoreus.',
    path: paths.Remembrance,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Lightning,
    stats: {
      level1: {
        base_hp: 168,
        base_atk: 95,
        base_def: 66,
        base_speed: 102,
      },
      level80: {
        base_hp: 1241,
        base_atk: 698,
        base_def: 485,
        base_speed: 102,
      },
    },
    release_date: new Date('2025-02-05'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/8/81/Character_Aglaea_Splash_Art.png/revision/latest?cb=20250117063425',
  },
  Trailblazer_Remembrance: {
    id: 3287,
    name: 'Trailblazer',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/7c3801e4147e3d5419aec6e3450b1c12.png',
    desc: 'A girl who boarded the Astral Express. They chose to travel with the Astral Express to eliminate the dangers posed by the Stellaron.',
    path: paths.Remembrance,
    faction: factions.Astral_Express,
    rarity: rarities.Five_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 143,
        base_atk: 73,
        base_def: 85,
        base_speed: 103,
      },
      level80: {
        base_hp: 1048,
        base_atk: 543,
        base_def: 630,
        base_speed: 103,
      },
    },
    release_date: new Date('2025-01-15'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/b/bb/Character_Trailblazer_%28F%29_Remembrance_Splash_Art_%28Updated%29.png/revision/latest?cb=20251108102447',
  },
  Tribbie: {
    id: 3322,
    name: 'Tribbie',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/f57a22c6c11bc1d099bb6e262a44f84f.png',
    desc: "From that holy land blessed by the tripartite prophecy, the messenger split into a thousand forms, embarking on a long journey. Tribios, Holy Maidens of Janusopolis, the Chrysos Heir who stole Passage's Coreflame. She toiled for the masses, bringing the news of deliverance to all domains. — Go find the children of humanity with golden blood in their veins, shatter the dimmest dark in this world, and walk toward the tomorrow where the stars shine.",
    path: paths.Harmony,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 142,
        base_atk: 71,
        base_def: 99,
        base_speed: 96,
      },
      level80: {
        base_hp: 1047,
        base_atk: 523,
        base_def: 727,
        base_speed: 96,
      },
    },
    release_date: new Date('2025-02-26'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/e/eb/Character_Tribbie_Splash_Art.png/revision/latest?cb=20250309185506',
  },
  Mydei: {
    id: 3324,
    name: 'Mydei',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/de75caf16acea1f66900a323371e9f7a.png',
    desc: 'Kremnos, the mist-shrouded city of chaos and war! Its royal lineage is tainted with patricide, and its god bears the name of calamity. The undying Mydeimos, the lion apart from the rest. Chrysos Heir who seeks the Coreflame of Strife, must suffer a thousand deaths, be bathed in blood on the path home, and bear the madness of fate alone. — Kingslayer be king, godslayer be god. Iron-hooves pound across the wilderness for the campaign, and must eventually soak in the blood of their homeland.',
    path: paths.Destruction,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Imaginary,
    stats: {
      level1: {
        base_hp: 211,
        base_atk: 58,
        base_def: 26,
        base_speed: 95,
      },
      level80: {
        base_hp: 1552,
        base_atk: 426,
        base_def: 194,
        base_speed: 95,
      },
    },
    release_date: new Date('2025-03-19'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/6/67/Character_Mydei_Splash_Art.png/revision/latest?cb=20250725220512',
  },
  Castorice: {
    id: 3560,
    name: 'Castorice',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/619a5956f30a7cbffa38b125150d2831.png',
    desc: '"Servant of Death" Castorice. The land that reveres death, Aidonia, where snow falls endlessly, has today drifted into a sweet slumber. Castorice, daughter of the River of Souls, Chrysos Heir in search of "Death" Coreflame, sets forth. You must guard the lament of souls and embrace the solitude of destiny. — Life and death are but a journey. When butterfly alights on the branch, what withers will bloom anew.',
    path: paths.Remembrance,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 221,
        base_atk: 71,
        base_def: 66,
        base_speed: 95,
      },
      level80: {
        base_hp: 1629,
        base_atk: 523,
        base_def: 485,
        base_speed: 95,
      },
    },
    release_date: new Date('2025-04-09'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/9/94/Character_Castorice_Splash_Art.png/revision/latest?cb=20250409035111',
  },
  Anaxa: {
    id: 3561,
    name: 'Anaxa',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/02472fb114ad645299c6c40ed39c0090.png',
    desc: 'The Grove of Epiphany, where knowledge flourishes and philosophers are born. Yet here stands Anaxagoras the blasphemer, the Chrysos Heir who challenges the Coreflame of Reason. He is questioned: Would you defy the prophecy even if you must bear infamy, and insist on driving the thorns of doubt into the Sacred Tree of wisdom? ——"Ridiculous. In a world full of lies, I am the only truth."',
    path: paths.Erudition,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Wind,
    stats: {
      level1: {
        base_hp: 132,
        base_atk: 102,
        base_def: 75,
        base_speed: 97,
      },
      level80: {
        base_hp: 970,
        base_atk: 756,
        base_def: 557,
        base_speed: 97,
      },
    },
    release_date: new Date('2025-04-30'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/7/73/Character_Anaxa_Splash_Art.png/revision/latest?cb=20250409035048',
  },
  Hyacine: {
    id: 3688,
    name: 'Hyacine',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/0db6f55c8f8fb1bc632ec57a2f7fdaca.png',
    desc: "As the city-state in the clouds crumbles through time, the Twilight Courtyard opens its gates once more, bringing a glimmer of light to Evernight. You, Physician Hyacinthia, Chrysos Heir who guards the Sky Coreflame, must inherit your ancestors' will and mend the torn fabric of dusk and dawn. May the rainbow light pour down, dissolve all grudges, and bring the dawn back to this land.",
    path: paths.Remembrance,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Wind,
    stats: {
      level1: {
        base_hp: 147,
        base_atk: 52,
        base_def: 85,
        base_speed: 110,
      },
      level80: {
        base_hp: 1086,
        base_atk: 388,
        base_def: 630,
        base_speed: 110,
      },
    },
    release_date: new Date('2025-05-21'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/7/7d/Character_Hyacine_Splash_Art.png/revision/latest?cb=20250521031729',
  },
  Cipher: {
    id: 3691,
    name: 'Cipher',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/2d38065d2cfd732380a7a4ca304b3eb1.png',
    desc: 'In the fallen city of bandits, Dolos, the 300 Rogues run wild and free. Race onward, fleet-footed Thief Star Cifera, Chrysos Heir of the "Trickery" Coreflame. May your web of lies spread with the breeze throughout all lands. —"Tryna trick me? Not a chance!"',
    path: paths.Nihility,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 127,
        base_atk: 87,
        base_def: 69,
        base_speed: 106,
      },
      level80: {
        base_hp: 931,
        base_atk: 640,
        base_def: 509,
        base_speed: 106,
      },
    },
    release_date: new Date('2025-06-11'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/0/0d/Character_Cipher_Splash_Art.png/revision/latest?cb=20250725220236',
  },
  Saber: {
    id: 3767,
    name: 'Saber',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/32a3e6a314529a05eb3e2c353e32f50f.png',
    desc: 'The solitary Heroic Spirit traverses the long night of fate. The banner of the round table remains unfurled in a dream. Alas, the knight-king of Camelot has yet to reach that ever-distant utopia. Though still a young maiden, she has heeded the call for this most unique iteration of the Holy Grail War. With the Sword in the Stone offering its choice once more, how shall she shatter the illusions of the past? "The wishes I did not fulfill will end here."',
    path: paths.Destruction,
    faction: factions.Another_World,
    rarity: rarities.Five_Star,
    type: types.Wind,
    stats: {
      level1: {
        base_hp: 168,
        base_atk: 81,
        base_def: 89,
        base_speed: 101,
      },
      level80: {
        base_hp: 1241,
        base_atk: 601,
        base_def: 654,
        base_speed: 101,
      },
    },
    release_date: new Date('2025-07-11'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/0/04/Character_Saber_Splash_Art.png/revision/latest?cb=20250620172940',
  },
  Archer: {
    id: 3768,
    name: 'Archer',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/e8c6fc0c5a5bf9827520114a2bb3ba2c.png',
    desc: 'Despair plays in cycles between the past and future. Countless ideals were incinerated before that red Holy Shroud. Yet, do not let this smear of ashes fool you — Should someone create a phantasmal sweet dream under the guise of false ideals, then he will burn again, facing down the hypocrites of the world till the very end.No matter where he is, he always remains the steadfast hero of justice.',
    path: paths.Hunt,
    faction: factions.Another_World,
    rarity: rarities.Five_Star,
    type: types.Quantum,
    stats: {
      level1: {
        base_hp: 158,
        base_atk: 84,
        base_def: 66,
        base_speed: 105,
      },
      level80: {
        base_hp: 1164,
        base_atk: 620,
        base_def: 485,
        base_speed: 105,
      },
    },
    release_date: new Date('2025-07-11'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/2/25/Character_Archer_Splash_Art.png/revision/latest?cb=20250620172923',
  },
  Phainon: {
    id: 3769,
    name: 'Phainon',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/aa685e015bd409772ce45e488b56fd19.png',
    desc: 'Aedes Elysiae, a remote frontier village isolated from the world, now lives on only in cryptic legends. The Nameless hero, █████, the Chrysos Heir carrying the Coreflame of "Worldbearing," memorizes the ideals of the entire world, carries the fate of millions, and brings the first light of dawn to the new world — "But should dawn have never existed, let the fires of rage burn this body to ashes and transform into the blazing sun of tomorrow!"',
    path: paths.Destruction,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 195,
        base_atk: 79,
        base_def: 95,
        base_speed: 94,
      },
      level80: {
        base_hp: 1435,
        base_atk: 582,
        base_def: 703,
        base_speed: 94,
      },
    },
    release_date: new Date('2025-07-02'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/4/47/Character_Phainon_Splash_Art.png/revision/latest?cb=20250622125151',
  },
  Hysilens: {
    id: 3885,
    name: 'Hysilens',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/a28e45b4af40acdc71936ed4dc1c1750.png',
    desc: "Styxia, the coastal city of intoxication and dreams, where echoes of old songs still drift among the waves. Helektra, Daughter of the Sea, Chrysos Heir who cleanses the Ocean's Coreflame, dispels the murky undercurrents and orchestrates a banquet of revelry for the heroes beyond the sky. The show must go on. Even if hope is as fragile as bubbles, the waves will keep surging forward.",
    path: paths.Nihility,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 163,
        base_atk: 81,
        base_def: 66,
        base_speed: 102,
      },
      level80: {
        base_hp: 1203,
        base_atk: 601,
        base_def: 485,
        base_speed: 102,
      },
    },
    release_date: new Date('2025-08-13'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/6/60/Character_Hysilens_Splash_Art.png/revision/latest?cb=20250720121134',
  },
  Cerydra: {
    id: 3886,
    name: 'Cerydra',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/2d09dda59f13f07d6a04a6f1e1794aac.png',
    desc: 'The Northern Empire, a lost dynasty, where its frozen lands burn with the fever of conquest. Sovereign Cerydra, the Chrysos Heir who wields the Coreflame of "Law," weaves her schemes, contends with the gods, passes judgment upon the faithless, and lays the foundation of Flame-Chase into this world. ..."This is far from the end. Amphoreus\'s journey is set to blaze across the stars!"',
    path: paths.Harmony,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Wind,
    stats: {
      level1: {
        base_hp: 184,
        base_atk: 84,
        base_def: 66,
        base_speed: 99,
      },
      level80: {
        base_hp: 1358,
        base_atk: 620,
        base_def: 485,
        base_speed: 99,
      },
    },
    release_date: new Date('2025-09-02'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/b/ba/Character_Cerydra_Splash_Art.png/revision/latest?cb=20250725220412',
  },
  Evernight: {
    id: 3956,
    name: 'Evernight',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/621cef9c4f0b3e2b62aa1d695a240860.png',
    desc: 'In the Memory Zone secluded from the world, candlelight reflects the past, silently extinguishing in the mist. Evernight, child of Remembrance born from the shadow, Chrysos Heir who conceals the Coreflame of Time, you shall stir the tide of "Oblivion," guarding the wish of the mirrored soul. ——"Don\'t worry, I will guard the path of Trailblaze for you... at any cost ♭"',
    path: paths.Remembrance,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 180,
        base_atk: 74,
        base_def: 79,
        base_speed: 99,
      },
      level80: {
        base_hp: 1319,
        base_atk: 543,
        base_def: 582,
        base_speed: 99,
      },
    },
    release_date: new Date('2025-09-24'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/6/68/Character_Evernight_Splash_Art.png/revision/latest?cb=20250912143541',
  },
  Dan_Heng_Permansor_Terrae: {
    id: 3957,
    name: 'Dan Heng • Permansor Terrae',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/b8e4a0a42283640e7582ffd7cf4f108f.png',
    desc: "The chest of Georios, the body of the fallen dragon supporting the shattered earth, enduring millennia of pain. Dan Heng, the Nameless and the Chrysos Heir who guards the Earth's Coreflame, steadies the world before it falls and guides all life across the land to a new home beyond. Rivers flow to the sea, mountains echo in harmony, and the eternal path stretches ten thousand miles.",
    path: paths.Preservation,
    faction: factions.Astral_Express,
    rarity: rarities.Five_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 143,
        base_atk: 79,
        base_def: 105,
        base_speed: 97,
      },
      level80: {
        base_hp: 1048,
        base_atk: 582,
        base_def: 776,
        base_speed: 97,
      },
    },
    release_date: new Date('2025-10-15'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/1/1f/Character_Dan_Heng_%E2%80%A2_Permansor_Terrae_Splash_Art.png/revision/latest?cb=20250912143415',
  },
  Cyrene: {
    id: 4003,
    name: 'Cyrene',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/7fdefde286a19197f3260ba1813230cc.png',
    desc: 'A meteor streaks across the night sky, stirring ripples in the river of life, shimmering with thirteen hues. Daughter of Aedes Elysiae, nurturer of the Chrysos Heir of "███," plants the Seed of Memory, letting yesterday\'s flowers bloom in tomorrow —"Now, let\'s write a different kind of poem together♪"',
    path: paths.Remembrance,
    faction: factions.Amphoreus,
    rarity: rarities.Five_Star,
    type: types.Ice,
    stats: {
      level1: {
        base_hp: 190,
        base_atk: 60,
        base_def: 79,
        base_speed: 101,
      },
      level80: {
        base_hp: 1397,
        base_atk: 446,
        base_def: 582,
        base_speed: 101,
      },
    },
    release_date: new Date('2025-11-05'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/8/8b/Character_Cyrene_Splash_Art.png/revision/latest?cb=20251105032126',
  },
  The_Dahlia: {
    id: 4060,
    name: 'The Dahlia',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/dd2c1d94ef5fc0f21c7e9b28c15a7866.png',
    desc: 'The sweet dream burned down the Ever-Flame Mansion, taking with it every trace of "her." Destruction, Remembrance... flowers of betrayal bloomed wherever they passed. To return to the dreamscape no one remembers, who will be the one to set her aflame again?',
    path: paths.Nihility,
    faction: factions.The_Cremators,
    rarity: rarities.Five_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 147,
        base_atk: 92,
        base_def: 82,
        base_speed: 96,
      },
      level80: {
        base_hp: 1086,
        base_atk: 679,
        base_def: 606,
        base_speed: 96,
      },
    },
    release_date: new Date('2025-12-17'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/9/92/Character_The_Dahlia_Splash_Art.png/revision/latest?cb=20251205121609',
  },
  Yao_Guang: {
    id: 4736,
    name: 'Yao Guang',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/24a8a666a67fb7c587839602e41df09e.png',
    desc: '"I am General Yao Guang, Seer Strategist aboard the Xianzhou Yuque. Like everyone else, you may simply call me Madam Yao. It\'s true, I could have divined the finer details of this encounter, but where\'s the fun in that? Being here in person has turned up some rather pleasant surprises". Her mysterious, bold, and radical actions were so revolutionary that they left everyone stunned. She saw all fortune, good and ill, through the "eye" of The Hunt. Yet, knowing that fate is not to be defied, the Seer Strategist still faced the danger alone.To be dealt such a cursed fortune... How can one ever hope to alter their fate?',
    path: paths.Elation,
    faction: factions.The_Xianzhou_Yuque,
    rarity: rarities.Five_Star,
    type: types.Physical,
    stats: {
      level1: {
        base_hp: 169,
        base_atk: 63,
        base_def: 89,
        base_speed: 101,
      },
      level80: {
        base_hp: 1242,
        base_atk: 466,
        base_def: 655,
        base_speed: 101,
      },
    },
    release_date: new Date('2026-02-13'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/e/e1/Character_Yao_Guang_Splash_Art.png/revision/latest?cb=20260213053032',
  },
  Sparxie: {
    id: 4737,
    name: 'Sparxie',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u0250d/48599b938bfa1cd6864294dba504d2da.png',
    desc: 'Like! Follow! Stream! Views! Party till the world ends! Sparxie and Sparkle, the Mask and the Fool are fundamentally the same. Whoever is seen, whoever is liked, is the correct answer!',
    path: paths.Elation,
    faction: factions.Masked_Fool,
    rarity: rarities.Five_Star,
    type: types.Fire,
    stats: {
      level1: {
        base_hp: 143,
        base_atk: 87,
        base_def: 62,
        base_speed: 107,
      },
      level80: {
        base_hp: 1047,
        base_atk: 640,
        base_def: 460,
        base_speed: 107,
      },
    },
    release_date: new Date('2026-03-03'),
    splash_art_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u42a2d/5fe657d4780648e9c9c9762a43e9ca50.png',
  },
  Ashveil: {
    id: 4781,
    name: 'Ashveil',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/pre_webtool_cn/item_icon_u32bac/150f71d6810c55b42b6fb75500d6d893.png',
    desc: '<p>He takes cases on a whim, cracks them with hard-core logic, and solves the strangest crimes on sheer instinct.</p><p>With a monkey for an assistant and his heart set on retirement, the detective sleeps in a refrigerator, waiting for the bait to catch its willing prey.</p><p>Under the light of the Phantasmoon, the vile beast howls. How will he draw the net on this hunt?</p>',
    path: paths.Hunt,
    faction: factions.Planarcadia,
    rarity: rarities.Five_Star,
    type: types.Lightning,
    stats: {
      level1: {
        base_hp: 116,
        base_atk: 105,
        base_def: 52,
        base_speed: 106,
      },
      level80: {
        base_hp: 776,
        base_atk: 853,
        base_def: 388,
        base_speed: 106,
      },
    },
    release_date: new Date('2026-03-25'),
    splash_art_url:
      'https://static.wikia.nocookie.net/houkai-star-rail/images/d/d4/Character_Ashveil_Splash_Art.png/revision/latest?cb=20260313174406',
  },
} as const satisfies Record<string, Character>;
