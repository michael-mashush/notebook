import {
  memo,
  forwardRef,
  type ForwardRefRenderFunction
} from 'react';

import {
  CheckSquareIcon,
  SquareIcon
} from 'lucide-react';

import {
  clsx
} from 'clsx';

import {
  Icon
} from '..';

import Props   from './component.props';
import classes from './component.module.scss';

const Checkbox: ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref) => {

  const {
    className,
    defaultIcon = SquareIcon,
    checkedIcon = CheckSquareIcon,
    role = 'checkbox',
    ...otherProps
  } = props;

  return (
    <div className={classes['wrapper']}>
      <input
        ref={ref}
        className={clsx(className, classes['default-checkbox'])}
        role={role}
        type="checkbox"
        {...otherProps}
      />
      <div className={classes['custom-checkbox']}>
        <Icon
          className={classes['default-icon']}
          src={defaultIcon}
          size="large"
        />
        <Icon
          className={classes['checked-icon']}
          src={checkedIcon}
          size="large"
        />
      </div>
    </div>
  );

};

export default memo(forwardRef(Checkbox));