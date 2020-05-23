const LOCALFORAGE_PREFIX = 'pixels';

export default {
  COLORS: {
    MDC_THEME_PRIMARY: 'black',
    MDC_THEME_SECONDARY_TEXT: 'white',
    MDC_THEME_SECONDARY: 'steelblue',
    STATE_ACTIVE: 'black',
    STATE_PROCESSING: 'orangered',
    STATE_INACTIVE: 'mediumvioletred',
    STATE_DISABLED: 'gainsboro',
  },
  FIREBASE: {
    SDK: '7.14.4',
  },
  LOCALFORAGE: {
    LOGIN_REDIRECT: `${LOCALFORAGE_PREFIX}-login-redirect`,
    OAUTH2: `${LOCALFORAGE_PREFIX}-oauth2`,
    IMGUR: {
      ALBUMS: `${LOCALFORAGE_PREFIX}-imgur-albums`,
      IMAGES: `${LOCALFORAGE_PREFIX}-imgur-images`,
    },
  },
  META: {
    TITLES: {
      DEFAULT: 'Pixels',
    },
    DESCRIPTION: 'Pixels is a collection of tools for your web development workflow.',
    THEME_COLOR: 'black',
    ICON_URLS: {
      LARGE: '/images/icons/icon-512.png',
    },
  },
  OAUTH2: {
    IMGUR: {
      SERVICE_ID: 'imgur',
      EXPIRED_MILLIS: 1000 * 60 * 60 * 24 * 1,
    },
  },
  ROUTES: {
    ROOT: '/',
    LOGIN: '/login',
    DASHBOARD: '/dashboard',
    META: {
      REDIRECT: '/meta/redirect',
      SIGN_OUT: '/meta/sign-out',
    },
    TOOLKIT: {
      IMGUR: {
        ROOT: '/toolkit/imgur',
        AUTHORIZE: ({ clientId, uid }) =>
          `https://api.imgur.com/oauth2/authorize?client_id=${clientId}&response_type=token&state=${uid}`,
        ALBUMS: ({ username, page }) =>
          `https://api.imgur.com/3/account/${username}/albums/${page}`,
        IMAGES: ({ username, page }) =>
          `https://api.imgur.com/3/account/${username}/images/${page}`,
      },
    },
  },
};
