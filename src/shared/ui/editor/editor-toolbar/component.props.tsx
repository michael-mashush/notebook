import {
  type Editor
} from '@tiptap/react';

interface Props {

  /**
   * The editor instance.
   *
   * @example
   *  <EditorToolbar editor={editor} />
   */
  editor: Editor;

  /**
   * If true, then the editor-toolbar will be displayed.
   *
   * @default
   *  false
   *
   * @example
   *  <EditorToolbar visible />
   */
  visible?: boolean;

}

export default Props;