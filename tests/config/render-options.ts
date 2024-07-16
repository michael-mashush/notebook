import {
  RenderOptions
} from '@testing-library/react';

import {
  Wrapper
} from '../ui';

const primaryRoot = document.createElement('div');
const rootContent = document.createElement('div');
const rootOverlay = document.createElement('div');

primaryRoot.setAttribute('id', 'primary-root');
rootContent.setAttribute('id', 'root-content');
rootOverlay.setAttribute('id', 'root-overlay');

primaryRoot.appendChild(rootContent);
primaryRoot.appendChild(rootOverlay);

export const RENDER_OPTIONS: RenderOptions = {
  wrapper:     Wrapper,
  container:   rootContent,
  baseElement: document.body.appendChild(primaryRoot)
};