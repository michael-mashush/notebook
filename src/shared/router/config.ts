export const ROUTER_CONFIG = {
  HOME_PAGE: {
    NAME: 'HOME',
    PATH: import.meta.env.BASE_URL
  },
  NOTE_PAGE: {
    NAME:           'NOTE',
    PATH:           `${import.meta.env.BASE_URL}/notes/:noteId`,
    DYNAMIC_PARAMS: { NOTE_ID: ':noteId' }
  },
  SEARCH_PAGE: {
    NAME:          'SEARCH',
    PATH:          `${import.meta.env.BASE_URL}/search`,
    SEARCH_PARAMS: { PAGE: 'page', NAME: 'name' }
  },
  TRASH_PAGE: {
    NAME:          'TRASH',
    PATH:          `${import.meta.env.BASE_URL}/trash`,
    SEARCH_PARAMS: { PAGE: 'page', NAME: 'name' }
  },
  SETTINGS_PAGE: {
    NAME: 'SETTINGS',
    PATH: `${import.meta.env.BASE_URL}/settings`
  },
  SIGN_IN_PAGE: {
    NAME: 'SIGN IN',
    PATH: `${import.meta.env.BASE_URL}/sign-in`
  },
  SIGN_UP_PAGE: {
    NAME: 'SIGN UP',
    PATH: `${import.meta.env.BASE_URL}/sign-up`
  },
  RESET_PASSWORD_PAGE: {
    NAME: 'RESET PASSWORD',
    PATH: `${import.meta.env.BASE_URL}/reset-password`
  },
  UPDATE_PASSWORD_PAGE: {
    NAME: 'UPDATE PASSWORD',
    PATH: `${import.meta.env.BASE_URL}/update-password`
  },
  GITHUB_PROFILE_PAGE: {
    NAME: 'GITHUB PROFILE',
    PATH: 'https://github.com/michael-mashush'
  }
} as const;