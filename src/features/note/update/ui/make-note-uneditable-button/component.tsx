import {
  Fragment,
  memo,
  type FunctionComponent,
  type MouseEvent
} from 'react';

import {
  PenOffIcon
} from 'lucide-react';

import {
  useMakeNoteUneditable,
  useRefetchNestedNotes,
  useRefetchNote,
  useResearchNotes
} from 'entities/note';

import {
  useImmutableCallback,
  useVisibility
} from 'shared/lib';

import {
  Button,
  Tooltip,
  WarningDialog
} from 'shared/ui';

import Props from './component.props';

const MakeNoteUneditableButton: FunctionComponent<Props> = (props) => {

  const {
    noteId,
    noteParentId,
    startIcon = PenOffIcon,
    variant   = 'outlined',
    justify   = 'center',
    loading   = false,
    fullWidth = false,
    onClick,
    title     = 'Set uneditable',
    'aria-label': ariaLabel = 'Set uneditable',
    ...otherProps
  } = props;

  const makeNoteUneditable = useMakeNoteUneditable();
  const warningDialog      = useVisibility(makeNoteUneditable.isError);

  useRefetchNestedNotes({
    parentId:  noteParentId,
    isEnabled: makeNoteUneditable.isSuccess
  });

  useRefetchNote({
    note:      makeNoteUneditable.data,
    isEnabled: makeNoteUneditable.isSuccess
  });

  useResearchNotes({
    isEnabled: makeNoteUneditable.isSuccess
  });

  const handleClick = useImmutableCallback((event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    makeNoteUneditable.mutate({ id: noteId });
  });

  return (
    <Fragment>
      <Tooltip title={title}>
        <Button
          startIcon={startIcon}
          variant={variant}
          justify={justify}
          loading={loading || makeNoteUneditable.isPending}
          fullWidth={fullWidth}
          onClick={handleClick}
          aria-label={ariaLabel}
          {...otherProps}
        />
      </Tooltip>
      <WarningDialog
        title="Something went wrong"
        text={makeNoteUneditable.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(MakeNoteUneditableButton);