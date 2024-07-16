import {
  type FunctionComponent
} from 'react';

import {
  Navigate,
  RouterProvider,
  createHashRouter
} from 'react-router-dom';

import {
  RouterErrorFallback
} from 'widgets/router-error-fallback';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  Loader
} from 'shared/ui';

import {
  RouteWithAuth,
  RouteWithoutAuth
} from '../../routes';

import Props from './component.props';

const ReactRouterProvider: FunctionComponent<Props> = (props) => {

  const {
    children
  } = props;

  const router = createHashRouter([
    {
      errorElement: <RouterErrorFallback />,
      element:      children,
      children:     [
        {
          Component: RouteWithAuth,
          children:  [
            {
              path: ROUTER_CONFIG.HOME_PAGE.PATH,
              lazy: async () => {
                const { HomePage } = await import('pages/home');
                return { Component: HomePage };
              }
            },
            {
              path: ROUTER_CONFIG.NOTE_PAGE.PATH,
              lazy: async () => {
                const { NotePage } = await import('pages/note');
                return { Component: NotePage };
              }
            },
            {
              path: ROUTER_CONFIG.SEARCH_PAGE.PATH,
              lazy: async () => {
                const { SearchPage } = await import('pages/search');
                return { Component: SearchPage };
              }
            },
            {
              path: ROUTER_CONFIG.SETTINGS_PAGE.PATH,
              lazy: async () => {
                const { SettingsPage } = await import('pages/settings');
                return { Component: SettingsPage };
              }
            },
            {
              path: ROUTER_CONFIG.TRASH_PAGE.PATH,
              lazy: async () => {
                const { TrashPage } = await import('pages/trash');
                return { Component: TrashPage };
              }
            },
            {
              path: ROUTER_CONFIG.UPDATE_PASSWORD_PAGE.PATH,
              lazy: async () => {
                const { UpdatePasswordPage } = await import('pages/update-password');
                return { Component: UpdatePasswordPage };
              }
            }
          ]
        },
        {
          Component: RouteWithoutAuth,
          children:  [
            {
              path: ROUTER_CONFIG.SIGN_IN_PAGE.PATH,
              lazy: async () => {
                const { SignInPage } = await import('pages/sign-in');
                return { Component: SignInPage };
              }
            },
            {
              path: ROUTER_CONFIG.SIGN_UP_PAGE.PATH,
              lazy: async () => {
                const { SignUpPage } = await import('pages/sign-up');
                return { Component: SignUpPage };
              }
            },
            {
              path: ROUTER_CONFIG.RESET_PASSWORD_PAGE.PATH,
              lazy: async () => {
                const { ResetPasswordPage } = await import('pages/reset-password');
                return { Component: ResetPasswordPage };
              }
            }
          ]
        },
        {
          path:    '*',
          element: <Navigate to={ROUTER_CONFIG.HOME_PAGE.PATH} />
        }
      ]
    }
  ]);

  return (
    <RouterProvider
      router={router}
      fallbackElement={<Loader visible description="Loading page" />}
    />
  );

};

export default ReactRouterProvider;