import {
  StrictMode
} from 'react';

import {
  createRoot
} from 'react-dom/client';

import {
  App
} from 'app';

import {
  GlobalErrorFallback
} from 'widgets/global-error-fallback';

import {
  ErrorBoundary
} from 'shared/ui';

createRoot(document.getElementById('root-content')!).render((
  <StrictMode>
    <ErrorBoundary fallback={<GlobalErrorFallback />}>
      <App />
    </ErrorBoundary>
  </StrictMode>
));