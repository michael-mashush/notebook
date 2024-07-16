import {
  memo,
  type FunctionComponent
} from 'react';

import {
  Link
} from 'react-router-dom';

import {
  ROUTER_CONFIG
} from 'shared/router';

import classes from './component.module.scss';

const Logotype: FunctionComponent = () => {

  return (
    <Link className={classes['logotype']} to={ROUTER_CONFIG.HOME_PAGE.PATH}>
      Notebook
    </Link>
  );

};

export default memo(Logotype);