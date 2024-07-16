import {
  type ComponentPropsWithoutRef
} from 'react';

import {
  type PopoverProps,
  type PopoverTriggerProps
} from '..';

type AllowedPopoverProps = Pick<PopoverProps, 'position'>;
type AllowedDivAttributes = Omit<ComponentPropsWithoutRef<'div'>,
  | 'onAbort'
  | 'onAbortCapture'
  | 'onAnimationEnd'
  | 'onAnimationEndCapture'
  | 'onAnimationIteration'
  | 'onAnimationIterationCapture'
  | 'onAnimationStart'
  | 'onAnimationStartCapture'
  | 'onAuxClick'
  | 'onAuxClickCapture'
  | 'onBeforeInput'
  | 'onBeforeInputCapture'
  | 'onBlur'
  | 'onBlurCapture'
  | 'onCanPlay'
  | 'onCanPlayCapture'
  | 'onCanPlayThrough'
  | 'onCanPlayThroughCapture'
  | 'onChange'
  | 'onChangeCapture'
  | 'onClick'
  | 'onClickCapture'
  | 'onCompositionEnd'
  | 'onCompositionEndCapture'
  | 'onCompositionStart'
  | 'onCompositionStartCapture'
  | 'onCompositionUpdate'
  | 'onCompositionUpdateCapture'
  | 'onContextMenu'
  | 'onContextMenuCapture'
  | 'onCopy'
  | 'onCopyCapture'
  | 'onCut'
  | 'onCutCapture'
  | 'onDoubleClick'
  | 'onDoubleClickCapture'
  | 'onDrag'
  | 'onDragCapture'
  | 'onDragEnd'
  | 'onDragEndCapture'
  | 'onDragEnter'
  | 'onDragEnterCapture'
  | 'onDragExit'
  | 'onDragExitCapture'
  | 'onDragLeave'
  | 'onDragLeaveCapture'
  | 'onDragOver'
  | 'onDragOverCapture'
  | 'onDragStart'
  | 'onDragStartCapture'
  | 'onDrop'
  | 'onDropCapture'
  | 'onDurationChange'
  | 'onDurationChangeCapture'
  | 'onEmptied'
  | 'onEmptiedCapture'
  | 'onEncrypted'
  | 'onEncryptedCapture'
  | 'onEnded'
  | 'onEndedCapture'
  | 'onError'
  | 'onErrorCapture'
  | 'onFocus'
  | 'onFocusCapture'
  | 'onGotPointerCapture'
  | 'onGotPointerCaptureCapture'
  | 'onInput'
  | 'onInputCapture'
  | 'onInvalid'
  | 'onInvalidCapture'
  | 'onKeyDown'
  | 'onKeyDownCapture'
  | 'onKeyPress'
  | 'onKeyPressCapture'
  | 'onKeyUp'
  | 'onKeyUpCapture'
  | 'onLoad'
  | 'onLoadCapture'
  | 'onLoadStart'
  | 'onLoadStartCapture'
  | 'onLoadedData'
  | 'onLoadedDataCapture'
  | 'onLoadedMetadata'
  | 'onLoadedMetadataCapture'
  | 'onLostPointerCapture'
  | 'onLostPointerCaptureCapture'
  | 'onMouseDown'
  | 'onMouseDownCapture'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onMouseMove'
  | 'onMouseMoveCapture'
  | 'onMouseOut'
  | 'onMouseOutCapture'
  | 'onMouseOver'
  | 'onMouseOverCapture'
  | 'onMouseUp'
  | 'onMouseUpCapture'
  | 'onPaste'
  | 'onPasteCapture'
  | 'onPause'
  | 'onPauseCapture'
  | 'onPlay'
  | 'onPlayCapture'
  | 'onPlaying'
  | 'onPlayingCapture'
  | 'onPointerCancel'
  | 'onPointerCancelCapture'
  | 'onPointerDown'
  | 'onPointerDownCapture'
  | 'onPointerEnter'
  | 'onPointerLeave'
  | 'onPointerMove'
  | 'onPointerMoveCapture'
  | 'onPointerOut'
  | 'onPointerOutCapture'
  | 'onPointerOver'
  | 'onPointerOverCapture'
  | 'onPointerUp'
  | 'onPointerUpCapture'
  | 'onProgress'
  | 'onProgressCapture'
  | 'onRateChange'
  | 'onRateChangeCapture'
  | 'onReset'
  | 'onResetCapture'
  | 'onResize'
  | 'onResizeCapture'
  | 'onScroll'
  | 'onScrollCapture'
  | 'onSeeked'
  | 'onSeekedCapture'
  | 'onSeeking'
  | 'onSeekingCapture'
  | 'onSelect'
  | 'onSelectCapture'
  | 'onStalled'
  | 'onStalledCapture'
  | 'onSubmit'
  | 'onSubmitCapture'
  | 'onSuspend'
  | 'onSuspendCapture'
  | 'onTimeUpdate'
  | 'onTimeUpdateCapture'
  | 'onTouchCancel'
  | 'onTouchCancelCapture'
  | 'onTouchEnd'
  | 'onTouchEndCapture'
  | 'onTouchMove'
  | 'onTouchMoveCapture'
  | 'onTouchStart'
  | 'onTouchStartCapture'
  | 'onTransitionEnd'
  | 'onTransitionEndCapture'
  | 'onVolumeChange'
  | 'onVolumeChangeCapture'
  | 'onWaiting'
  | 'onWaitingCapture'
  | 'onWheel'
  | 'onWheelCapture'
>;

interface Props extends AllowedDivAttributes, AllowedPopoverProps {

  /**
   * The trigger of the tooltip.
   *
   * @example
   * <Tooltip title="...">
   *   Lorem ipsum dolor sit amet
   * </Tooltip>
   */
  children: PopoverTriggerProps['children'];

  /**
   * If true, then the tooltip will be displayed.
   *
   * @default
   *  false
   *
   * @example
   *  <Popover opened>
   *    ...
   *  </Popover>
   */
  opened?: boolean;

  /**
   * The text content of the tooltip.
   *
   * @example
   *  <Tooltip title="...">
   *    ...
   *  </Tooltip>
   */
  title: string;

}

export default Props;