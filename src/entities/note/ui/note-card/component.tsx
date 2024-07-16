import {
  type FunctionComponent
} from 'react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
  Separator
} from 'shared/ui';

import Props from './component.props';

const NoteCard: FunctionComponent<Props> = (props) => {

  const {
    note,
    actions
  } = props;

  return (
    <Card key={note.id}>
      <CardHeader>
        <CardTitle>
          {note.name || 'Untitled'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardText monospaced size="xs">
          Created at: {new Date(note.createdAt).toLocaleDateString()}
        </CardText>
        <CardText monospaced size="xs">
          Updated at: {new Date(note.updatedAt).toLocaleDateString()}
        </CardText>
      </CardContent>
      <Separator />
      <CardFooter>
        {actions}
      </CardFooter>
    </Card>
  );

};

export default NoteCard;