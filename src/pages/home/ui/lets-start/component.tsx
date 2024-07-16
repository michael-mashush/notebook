import {
  memo,
  type FunctionComponent
} from 'react';

import {
  InsertNoteButton
} from 'features/note/insert';

import {
  Heading
} from 'shared/ui';

import Image   from './component.image.svg?react';
import classes from './component.module.scss';

const LetsStart: FunctionComponent = () => {

  return (
    <div className={classes['lets-start']}>
      <div className={classes['lets-start-image']}>
        <Image />
      </div>
      <Heading align="center">
        Hey, should we create another note?
      </Heading>
      <InsertNoteButton noteParentId={null} />
    </div>
  );

};

export default memo(LetsStart);