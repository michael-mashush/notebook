import {
  useEffect
} from 'react';

import TiptapBlockquote     from '@tiptap/extension-blockquote';
import TiptapBold           from '@tiptap/extension-bold';
import TiptapBulletList     from '@tiptap/extension-bullet-list';
import TiptapCode           from '@tiptap/extension-code';
import TiptapCodeBlock      from '@tiptap/extension-code-block';
import TiptapDocument       from '@tiptap/extension-document';
import TiptapDropcursor     from '@tiptap/extension-dropcursor';
import TiptapGapcursor      from '@tiptap/extension-gapcursor';
import TiptapHardBreak      from '@tiptap/extension-hard-break';
import TiptapHeading        from '@tiptap/extension-heading';
import TiptapHistory        from '@tiptap/extension-history';
import TiptapHorizontalRule from '@tiptap/extension-horizontal-rule';
import TiptapImage          from '@tiptap/extension-image';
import TiptapItalic         from '@tiptap/extension-italic';
import TiptapListItem       from '@tiptap/extension-list-item';
import TiptapOrderedList    from '@tiptap/extension-ordered-list';
import TiptapParagraph      from '@tiptap/extension-paragraph';
import TiptapPlaceholder    from '@tiptap/extension-placeholder';
import TiptapStrike         from '@tiptap/extension-strike';
import TiptapTaskItem       from '@tiptap/extension-task-item';
import TiptapTaskList       from '@tiptap/extension-task-list';
import TiptapText           from '@tiptap/extension-text';
import TiptapTextAlign      from '@tiptap/extension-text-align';
import TiptapTextStyle      from '@tiptap/extension-text-style';
import TiptapTypography     from '@tiptap/extension-typography';
import TiptapUnderline      from '@tiptap/extension-underline';

import {
  useEditor,
  type EditorOptions
} from '@tiptap/react';

export type UseNoteEditorParams = Pick<EditorOptions,
  | 'content'
  | 'editable'
  | 'onUpdate'
> & {
  noteId: string;
};

export function useNoteEditor(params: UseNoteEditorParams) {

  const {
    noteId,
    content,
    editable,
    onUpdate
  } = params;

  const editor = useEditor({
    extensions: [
      TiptapBlockquote,
      TiptapBold,
      TiptapBulletList,
      TiptapCode,
      TiptapCodeBlock,
      TiptapDocument.extend({
        content: 'heading block*'
      }),
      TiptapDropcursor,
      TiptapGapcursor,
      TiptapHardBreak,
      TiptapHeading,
      TiptapHistory,
      TiptapHorizontalRule,
      TiptapImage,
      TiptapItalic,
      TiptapListItem,
      TiptapOrderedList,
      TiptapParagraph,
      TiptapPlaceholder.configure({
        placeholder: (options) => {
          if (options.node.type.name === 'heading') {
            if (options.node.attrs.level === 1) {
              return 'Untitled';
            }
            return 'Heading';
          }
          return 'Write something...';
        },
        showOnlyWhenEditable: false
      }),
      TiptapStrike,
      TiptapTaskItem,
      TiptapTaskList,
      TiptapText,
      TiptapTextAlign.configure({
        types: [ 'heading', 'paragraph' ]
      }),
      TiptapTextStyle,
      TiptapTypography,
      TiptapUnderline
    ],
    content,
    editable,
    onUpdate
  }, [ noteId ]);

  useEffect(() => {
    if (editor) {
      editor.setEditable(editable);
    }
  }, [ editable ]);

  return editor;

}