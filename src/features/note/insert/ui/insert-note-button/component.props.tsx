import {
  type Note
} from 'entities/note';

import {
  type ButtonProps
} from 'shared/ui';

interface Props extends ButtonProps {
  noteParentId: Note['parentId'];
}

export default Props;