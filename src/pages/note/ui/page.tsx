import {
  Fragment,
  useEffect,
  type FunctionComponent
} from 'react';

import {
  useNavigate,
  useParams
} from 'react-router-dom';

import {
  MainFooter
} from 'widgets/main-footer';

import {
  useSelectNote
} from 'entities/note';

import {
  MainLayout,
  MainLayoutContent,
  MainLayoutHeader,
  MainLayoutFooter,
  Loader
} from 'shared/ui';

import {
  NoteHeader
} from './note-header';

import {
  NoteEditor
} from './note-editor';

const NotePage: FunctionComponent = () => {

  const navigate   = useNavigate();
  const params     = useParams<{ noteId: string; }>();
  const selectNote = useSelectNote({ id: params.noteId });

  useEffect(() => {
    if (selectNote.isError) {
      navigate(-1);
    }
  }, [ selectNote.isError ]);

  return (
    <Fragment>
      <Loader
        visible={selectNote.isLoading}
        description="Loading note"
      />
      <MainLayout>
        <MainLayoutHeader>
          {selectNote.data && (
            <NoteHeader {...selectNote.data} />
          )}
        </MainLayoutHeader>
        <MainLayoutContent>
          {selectNote.data && (
            <NoteEditor {...selectNote.data} />
          )}
        </MainLayoutContent>
        <MainLayoutFooter>
          <MainFooter />
        </MainLayoutFooter>
      </MainLayout>
    </Fragment>
  );

};

export default NotePage;