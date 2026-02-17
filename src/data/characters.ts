import { factions, paths, rarities, types } from '../data';
import { Character } from '../types';

export const characters = {
  //TODO: check descriptios
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
  },
  March_7th: {
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
  },
  Fu_Xuan: {
    id: 804,
    name: 'Fu Xuan',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/5344c4bce6cbd77b61913833fb0f8b69.png',
    desc: "The head of the Xianzhou Luofu's Divination Commission. A confident and blunt sage. Using her third eye and the Matrix of Prescience, Fu Xuan calculates the Xianzhou's route and predicts the fortune of future events.",
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
  },
  Dan_Heng_Imbibitor_Lunae: {
    id: 1226,
    name: 'Dan Heng • Imbibitor Lunae',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/e360708232477489d36c145fe4e389fc.png',
    desc: 'Dan Heng\'s true Vidyadhara form, revealed after accepting residual powers from the previous reincarnation of "Imbibitor Lunae." Upon accepting the majestic horns atop his crown, he must accept all the merits and faults attributed to that person.',
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
  },
  Topaz_and_Numby: {
    id: 1389,
    name: 'Topaz & Numby',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/1a258d2a1076ea4516cf5764e8392856.png',
    desc: "Topaz is the Leader of the Special Debts Picket Team and high-level manager of the Strategic Investment Department under the IPC. Alongside her Warp Trotter partner Numby, she travels the cosmos seeking liability disputes that affect the IPC's business progression.",
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
  },
  Huohuo: {
    id: 1533,
    name: 'Huohuo',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/052b3effab13b7b4ebb84b0973556497.png',
    desc: 'A Foxian girl who is a Ten-Lords Commission Judge-in-training. Due to having a heliobus named Tail sealed in her tail, she became a "cursed one" who attracts inhuman beings. Though she is fearful, she is tasked with eradicating vile spirits.',
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
  },
  Hanya: {
    id: 1537,
    name: 'Hanya',
    icon_url:
      'https://act-webstatic.hoyoverse.com/darkmatter/hkrpg/prod_gf_cn/item_icon_u65dyd/3790326c5acd456a7cd29cf6335aaf51.png',
    desc: "One of the judges of the Xianzhou Luofu's Ten-Lords Commission. Ordained by the Ten-Lords and wielding the authority of the Oracle Brush, she reads the multitudes of human sins and transgressions.",
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
  },
} as const satisfies Record<string, Character>;
