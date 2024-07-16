import {
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  AnimatePresence,
  motion
} from 'framer-motion';

import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  Code2Icon,
  ItalicIcon,
  Redo2,
  StrikethroughIcon,
  UnderlineIcon,
  Undo2Icon
} from 'lucide-react';

import {
  useImmutableCallback,
  useMediaQuery
} from 'shared/lib';

import {
  Button,
  Select,
  SelectOption,
  Separator,
  Toggle,
  Tooltip
} from 'shared/ui';

import {
  ANIMATION_TRANSITION,
  ANIMATION_INITIAL,
  ANIMATION_ANIMATE,
  ANIMATION_EXIT
} from './constants';

import Props   from './component.props';
import classes from './component.module.scss';

const EditorToolbar: ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => {

  const {
    editor,
    visible
  } = props;

  const getEditorElement = useImmutableCallback(() => {
    if (editor.isActive('heading', { level: 2 })) return 'heading-1';
    if (editor.isActive('heading', { level: 3 })) return 'heading-2';
    if (editor.isActive('heading', { level: 4 })) return 'heading-3';
    if (editor.isActive('orderedList'))           return 'orderedList';
    if (editor.isActive('bulletList'))            return 'bulletList';
    if (editor.isActive('taskList'))              return 'taskList';
    if (editor.isActive('codeBlock'))             return 'codeBlock';
    if (editor.isActive('blockquote'))            return 'blockquote';
    if (editor.isActive('paragraph'))             return 'paragraph';
  });

  const setEditorElement = useImmutableCallback((value) => {
    if (value === 'heading-1') {
      return editor.chain().toggleHeading({ level: 2 }).focus().run();
    }
    if (value === 'heading-2') {
      return editor.chain().toggleHeading({ level: 3 }).focus().run();
    }
    if (value === 'heading-3') {
      return editor.chain().toggleHeading({ level: 4 }).focus().run();
    }
    if (value === 'taskList') {
      return editor.chain().toggleTaskList().focus().run();
    }
    if (value === 'bulletList') {
      return editor.chain().toggleBulletList().focus().run();
    }
    if (value === 'orderedList') {
      return editor.chain().toggleOrderedList().focus().run();
    }
    if (value === 'codeBlock') {
      return editor.chain().toggleCodeBlock().focus().run();
    }
    if (value === 'blockquote') {
      return editor.chain().toggleBlockquote().focus().run();
    }
    if (value === 'paragraph') {
      return editor.chain().setParagraph().focus().run();
    }
  });

  const handleUndo = useImmutableCallback(() => {
    editor.chain().undo().run();
  });

  const handleRedo = useImmutableCallback(() => {
    editor.chain().redo().run();
  });

  const handleBold = useImmutableCallback(() => {
    editor.chain().toggleBold().focus().run();
  });

  const handleItalic = useImmutableCallback(() => {
    editor.chain().toggleItalic().focus().run();
  });

  const handleStrike = useImmutableCallback(() => {
    editor.chain().toggleStrike().focus().run();
  });

  const handleUnderline = useImmutableCallback(() => {
    editor.chain().toggleUnderline().focus().run();
  });

  const handleCode = useImmutableCallback(() => {
    editor.chain().toggleCode().focus().run();
  });

  const handleAlignStart = useImmutableCallback(() => {
    editor.chain().setTextAlign('left').focus().run();
  });

  const handleAlignCenter = useImmutableCallback(() => {
    editor.chain().setTextAlign('center').focus().run();
  });

  const handleAlignEnd = useImmutableCallback(() => {
    editor.chain().setTextAlign('right').focus().run();
  });

  const handleAlignJustify = useImmutableCallback(() => {
    editor.chain().setTextAlign('justify').focus().run();
  });

  const maxWidth768 = useMediaQuery('(width <= 768px)');

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={ref}
          className={classes['editor-toolbar']}
          transition={ANIMATION_TRANSITION}
          initial={ANIMATION_INITIAL}
          animate={ANIMATION_ANIMATE}
          exit={ANIMATION_EXIT}
        >
          <div className={classes['editor-toolbar-row']}>
            <Tooltip title="Undo">
              <Button
                startIcon={Undo2Icon}
                variant="ghost"
                disabled={!editor.can().undo()}
                onClick={handleUndo}
                aria-label="Bold"
              />
            </Tooltip>
            <Tooltip title="Redo">
              <Button
                startIcon={Redo2}
                variant="ghost"
                disabled={!editor.can().redo()}
                onClick={handleRedo}
                aria-label="Italic"
              />
            </Tooltip>
            <Separator
              orientation="vertical"
              padding="sm"
            />
            <Select
              className={classes['editor-toolbar-select']}
              value={getEditorElement()}
              autoClose
              disabled={editor.isActive('heading', { level: 1 })}
              placeholder="Select element"
              onChange={setEditorElement}
              aria-label="Select element"
            >
              <SelectOption value="heading-1" label="Heading 1" />
              <SelectOption value="heading-2" label="Heading 2" />
              <SelectOption value="heading-3" label="Heading 3" />
              <SelectOption value="paragraph" label="Paragraph" />
              <SelectOption value="taskList" label="Task list" />
              <SelectOption value="bulletList" label="Bulleted list" />
              <SelectOption value="orderedList" label="Ordered list" />
              <SelectOption value="codeBlock" label="Code block" />
              <SelectOption value="blockquote" label="Quote block" />
            </Select>
          </div>
          <Separator
            orientation={maxWidth768 ? 'horizontal' : 'vertical'}
            padding="sm"
          />
          <div className={classes['editor-toolbar-row']}>
            <Tooltip title="Bold">
              <Toggle
                startIcon={BoldIcon}
                selected={editor.isActive('bold')}
                disabled={!editor.can().toggleBold()}
                onClick={handleBold}
                aria-label="Bold"
                aria-selected={editor.isActive('bold')}
              />
            </Tooltip>
            <Tooltip title="Italic">
              <Toggle
                startIcon={ItalicIcon}
                selected={editor.isActive('italic')}
                disabled={!editor.can().toggleItalic()}
                onClick={handleItalic}
                aria-label="Italic"
                aria-selected={editor.isActive('italic')}
              />
            </Tooltip>
            <Tooltip title="Strike">
              <Toggle
                startIcon={StrikethroughIcon}
                selected={editor.isActive('strike')}
                disabled={!editor.can().toggleStrike()}
                onClick={handleStrike}
                aria-label="Strike"
                aria-selected={editor.isActive('strike')}
              />
            </Tooltip>
            <Tooltip title="Underline">
              <Toggle
                startIcon={UnderlineIcon}
                selected={editor.isActive('underline')}
                disabled={!editor.can().toggleUnderline()}
                onClick={handleUnderline}
                aria-label="Underline"
                aria-selected={editor.isActive('underline')}
              />
            </Tooltip>
            <Tooltip title="Code">
              <Toggle
                startIcon={Code2Icon}
                selected={editor.isActive('code')}
                disabled={!editor.can().toggleCode()}
                onClick={handleCode}
                aria-label="Code"
                aria-selected={editor.isActive('code')}
              />
            </Tooltip>
            <Separator
              orientation="vertical"
              padding="sm"
            />
            <Tooltip title="Align Start">
              <Toggle
                startIcon={AlignLeftIcon}
                selected={editor.isActive({ textAlign: 'left' })}
                disabled={!editor.can().setTextAlign('left')}
                onClick={handleAlignStart}
                aria-label="Align Start"
                aria-selected={editor.isActive({ textAlign: 'left' })}
              />
            </Tooltip>
            <Tooltip title="Align Center">
              <Toggle
                startIcon={AlignCenterIcon}
                selected={editor.isActive({ textAlign: 'center' })}
                disabled={!editor.can().setTextAlign('center')}
                onClick={handleAlignCenter}
                aria-label="Align Center"
                aria-selected={editor.isActive({ textAlign: 'center' })}
              />
            </Tooltip>
            <Tooltip title="Align End">
              <Toggle
                startIcon={AlignRightIcon}
                selected={editor.isActive({ textAlign: 'right' })}
                disabled={!editor.can().setTextAlign('right')}
                onClick={handleAlignEnd}
                aria-label="Align End"
                aria-selected={editor.isActive({ textAlign: 'right' })}
              />
            </Tooltip>
            <Tooltip title="Align Justify">
              <Toggle
                startIcon={AlignJustifyIcon}
                selected={editor.isActive({ textAlign: 'justify' })}
                disabled={!editor.can().setTextAlign('justify')}
                onClick={handleAlignJustify}
                aria-label="Align Justify"
                aria-selected={editor.isActive({ textAlign: 'justify' })}
              />
            </Tooltip>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

};

export default forwardRef(EditorToolbar);