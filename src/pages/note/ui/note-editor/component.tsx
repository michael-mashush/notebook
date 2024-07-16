import {
  Fragment,
  memo,
  type FunctionComponent
} from 'react';

import {
  type EditorEvents
} from '@tiptap/react';

import {
  useRefetchNestedNotes,
  useRefetchNote,
  useUpdateNote
} from 'entities/note';

import {
  useDebounceCallback,
  useImmutableCallback,
  useVisibility
} from 'shared/lib';

import {
  Editor,
  EditorContent,
  EditorToolbar,
  WarningDialog
} from 'shared/ui';

import {
  useNoteEditor
} from './hooks';

import Props from './component.props';

const NoteEditor: FunctionComponent<Props> = (props) => {

  const {
    id,
    json,
    isEditable,
    isDeleted
  } = props;

  const updateNote    = useUpdateNote();
  const warningDialog = useVisibility(updateNote.isError);

  useRefetchNote({
    note:      updateNote.data,
    isEnabled: updateNote.isSuccess
  });

  useRefetchNestedNotes({
    parentId:  updateNote.data?.parentId,
    isEnabled: updateNote.isSuccess
  });

  const debounceUpdateNote = useDebounceCallback((newJSON: string) => {
    updateNote.mutate({ json: newJSON, id });
  }, 1000);

  const handleEditorUpdate = useImmutableCallback((params: EditorEvents['update']) => {
    const noteContent = params.editor.getJSON();
    const JSONString  = JSON.stringify(noteContent);
    debounceUpdateNote(JSONString);
  });

  const editor = useNoteEditor({
    noteId:   id,
    content:  JSON.parse(json),
    editable: isEditable && !isDeleted,
    onUpdate: handleEditorUpdate
  });

  return (
    <Fragment>
      {editor && (
        <Editor>
          <EditorToolbar editor={editor} visible={isEditable && !isDeleted} />
          <EditorContent editor={editor} />
        </Editor>
      )}
      <WarningDialog
        title="Something went wrong"
        text={updateNote.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(NoteEditor);