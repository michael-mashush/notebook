import {
  forwardRef,
  useEffect,
  useState,
  type ChangeEvent,
  type ForwardRefRenderFunction
} from 'react';

import {
  EditIcon
} from 'lucide-react';

import {
  clsx
} from 'clsx';

import {
  useImmutableCallback
} from 'shared/lib';

import {
  Icon,
  Paragraph
} from 'shared/ui';

import Props   from './component.props';
import classes from './component.module.scss';

const AvatarFilebox: ForwardRefRenderFunction<HTMLInputElement, Props> = (props, ref) => {

  const {
    className,
    accept = 'image/jpeg',
    preview,
    role = 'button',
    'aria-label': ariaLabel = 'avatar-picker',
    onChange,
    ...otherProps
  } = props;

  const [ innerPreview, setInnerPreview ] = useState<string | ArrayBuffer | undefined>(preview);

  useEffect(() => {
    setInnerPreview(preview);
  }, [ preview ]);

  const getPreviewFromFile = useImmutableCallback((file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      const bytes = event.target?.result;
      if (bytes) setInnerPreview(bytes);
    });
    reader.readAsDataURL(file);
  });

  const handleInputChange = useImmutableCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);
    getPreviewFromFile(event.target.files?.[0]);
  });

  const handleImageError = useImmutableCallback(() => {
    setInnerPreview(undefined);
  });

  return (
    <div className={classes['avatar-filebox']}>
      <input
        ref={ref}
        type="file"
        className={clsx(className, classes['avatar-filebox-input'])}
        accept={accept}
        role={role}
        aria-label={ariaLabel}
        onChange={handleInputChange}
        {...otherProps}
      />
      <div className={classes['avatar-filebox-pseudo-input']}>
        {!innerPreview && (
          <Paragraph align="center" color="muted" size="xs">
            Upload <br />
            avatar
          </Paragraph>
        )}
        {!!innerPreview && (
          <img
            src={String(innerPreview)}
            alt="avatar"
            onError={handleImageError}
          />
        )}
        <div className={classes['avatar-filebox-search']}>
          <Icon src={EditIcon} />
        </div>
      </div>
    </div>
  );

};

export default forwardRef(AvatarFilebox);