import {
  type FunctionComponent
} from 'react';

import {
  clsx
} from 'clsx';

import IMAGE_SM_JPEG from './images/image-sm.jpg';
import IMAGE_SM_WEBP from './images/image-sm.webp';
import IMAGE_MD_JPEG from './images/image-md.jpg';
import IMAGE_MD_WEBP from './images/image-md.webp';
import IMAGE_LG_JPEG from './images/image-lg.jpg';
import IMAGE_LG_WEBP from './images/image-lg.webp';

import Props   from './component.props';
import classes from './component.module.scss';

const AuthLayout: FunctionComponent<Props> = (props) => {

  const {
    children,
    className,
    ...otherProps
  } = props;

  return (
    <div className={clsx(className, classes['auth-layout'])} {...otherProps}>
      <div className={classes['auth-layout-column']}>
        <picture>
          <source
            type="image/webp"
            media="(width > 1680px)"
            srcSet={IMAGE_LG_WEBP}
          />
          <source
            type="image/jpeg"
            media="(width > 1680px)"
            srcSet={IMAGE_LG_JPEG}
          />
          <source
            type="image/webp"
            media="(width > 1200px)"
            srcSet={IMAGE_MD_WEBP}
          />
          <source
            type="image/jpeg"
            media="(width > 1200px)"
            srcSet={IMAGE_MD_JPEG}
          />
          <source
            type="image/webp"
            media="(width > 768px)"
            srcSet={IMAGE_SM_WEBP}
          />
          <source
            type="image/jpeg"
            media="(width > 768px)"
            srcSet={IMAGE_SM_JPEG}
          />
          <img
            className={classes['auth-layout-image']}
            src={IMAGE_SM_JPEG}
            alt="auth-image"
          />
        </picture>
      </div>
      <div className={classes['auth-layout-column']}>
        {children}
      </div>
    </div>
  );

};

export default AuthLayout;