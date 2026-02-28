import { Type } from '../types';

export const types = {
  Quantum: {
    id: 1296,
    name: 'Quantum',
    icon_url:
      'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/03/27/2d33de43649b480e1d6a9fdb6599b2cb_7381386544905042228.png?x-oss-process=image%2Fformat%2Cwebp',
  },
  Physical: {
    id: 1297,
    name: 'Physical',
    icon_url:
      'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/03/27/43a362875c2955a66ef6cd9236dbf57d_7293610557288342137.png?x-oss-process=image%2Fformat%2Cwebp',
  },
  Wind: {
    id: 1298,
    name: 'Wind',
    icon_url:
      'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/03/27/8d2992ae95dfe1469af254b923b1129c_5790926101190505253.png?x-oss-process=image%2Fformat%2Cwebp',
  },
  Fire: {
    id: 1299,
    name: 'Fire',
    icon_url:
      'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/03/27/ade90b393f1dfffe731766ed98c78746_8365675559481569213.png?x-oss-process=image%2Fformat%2Cwebp',
  },
  Imaginary: {
    id: 1300,
    name: 'Imaginary',
    icon_url:
      'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/03/27/9ab11de799de29f5c6abbac0a2b305e1_7514369334565575603.png?x-oss-process=image%2Fformat%2Cwebp',
  },
  Lightning: {
    id: 1301,
    name: 'Lightning',
    icon_url:
      'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/03/27/c3bf245ff0e28fab91b126fa8a24917b_5287731351692004917.png?x-oss-process=image%2Fformat%2Cwebp',
  },
  Ice: {
    id: 1302,
    name: 'Ice',
    icon_url:
      'https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2024/03/27/e7fda5adc3b8ee20cef753b61ff0ed08_8813940564670780996.png?x-oss-process=image%2Fformat%2Cwebp',
  },
} as const satisfies Record<string, Type>;
