import {
  memo,
  useEffect,
  type FunctionComponent
} from 'react';

import {
  SYSTEM_COLOR_SCHEME,
  LIGHT_COLOR_SCHEME,
  DARK_COLOR_SCHEME,
  useColorSchemeStore
} from '../../model';

const ColorSchemeChangeListener: FunctionComponent = () => {

  const colorScheme = useColorSchemeStore((store) => store.colorScheme);

  useEffect(() => {
    document.body.classList.remove(SYSTEM_COLOR_SCHEME);
    document.body.classList.remove(LIGHT_COLOR_SCHEME);
    document.body.classList.remove(DARK_COLOR_SCHEME);
    document.body.classList.add(colorScheme);
  }, [ colorScheme ]);

  return null;

};

export default memo(ColorSchemeChangeListener);