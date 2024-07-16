export const ROUTER_CONFIG = {
  HOME_PAGE: {
    NAME: 'HOME',
    PATH: '/'
  },
  NOTE_PAGE: {
    NAME:           'NOTE',
    PATH:           `/notes/:noteId`,
    DYNAMIC_PARAMS: { NOTE_ID: ':noteId' }
  },
  SEARCH_PAGE: {
    NAME:          'SEARCH',
    PATH:          `/search`,
    SEARCH_PARAMS: { PAGE: 'page', NAME: 'name' }
  },
  TRASH_PAGE: {
    NAME:          'TRASH',
    PATH:          `/trash`,
    SEARCH_PARAMS: { PAGE: 'page', NAME: 'name' }
  },
  SETTINGS_PAGE: {
    NAME: 'SETTINGS',
    PATH: `/settings`
  },
  SIGN_IN_PAGE: {
    NAME: 'SIGN IN',
    PATH: `/sign-in`
  },
  SIGN_UP_PAGE: {
    NAME: 'SIGN UP',
    PATH: `/sign-up`
  },
  RESET_PASSWORD_PAGE: {
    NAME: 'RESET PASSWORD',
    PATH: `/reset-password`
  },
  UPDATE_PASSWORD_PAGE: {
    NAME: 'UPDATE PASSWORD',
    PATH: `/update-password`
  },
  GITHUB_PROFILE_PAGE: {
    NAME: 'GITHUB PROFILE',
    PATH: 'https://github.com/michael-mashush'
  }
} as const;