import {
  useEffect
}   from 'react';

import {
  useLocation
} from 'react-router-dom';

import {
  useMenuStore
} from '../model';

export function useAutoCloseMenu(): void {

  const isOpened = useMenuStore((store) => store.isOpened);
  const close    = useMenuStore((store) => store.close);

  const {
    pathname
  } = useLocation();

  useEffect(() => {
    if (isOpened) {
      close();
    }
  }, [ pathname ]);

}