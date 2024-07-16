import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  EditorContent as TiptapEditorContent
} from '@tiptap/react';

import Props   from './component.props';
import classes from './component.module.scss';

const EditorContent: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    editor
  } = props;

  return (
    <TiptapEditorContent
      ref={ref}
      editor={editor}
      className={classes['editor-content']}
    />
  );

};

export default forwardRef(EditorContent);