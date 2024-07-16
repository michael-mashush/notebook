import {
  useEffect
} from 'react';

import {
  useNavigate
} from 'react-router-dom';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  type Note
} from '../model';

export type UseNavigateToNoteParams = Partial<Pick<Note, 'id'>> & {
  isEnabled?: boolean;
};

export function useNavigateToNote(params: UseNavigateToNoteParams) {

  const {
    id,
    isEnabled
  } = params;

  const navigate = useNavigate();

  useEffect(() => {
    if (isEnabled && id) {
      navigate(ROUTER_CONFIG.NOTE_PAGE.PATH.replace(ROUTER_CONFIG.NOTE_PAGE.DYNAMIC_PARAMS.NOTE_ID, id));
    }
  }, [ isEnabled, id, navigate ]);

}