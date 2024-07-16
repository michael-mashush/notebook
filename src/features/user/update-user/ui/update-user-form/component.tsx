import {
  Fragment,
  memo,
  useId,
  type FunctionComponent
} from 'react';

import {
  useForm
} from 'react-hook-form';

import {
  useUpdateUser,
  useUserStore,
  type UpdateUserParams
} from 'entities/user';

import {
  USERNAME_PATTERN_VALUE,
  USERNAME_PATTERN_ERROR_MESSAGE,
  USERNAME_MIN_LENGTH_VALUE,
  USERNAME_MIN_LENGTH_ERROR_MESSAGE,
  USERNAME_MAX_LENGTH_VALUE,
  USERNAME_MAX_LENGTH_ERROR_MESSAGE,
  EMAIL_PATTERN_VALUE,
  EMAIL_PATTERN_ERROR_MESSAGE,
  EMAIL_REQUIRED_VALUE,
  EMAIL_REQUIRED_ERROR_MESSAGE,
  useVisibility
} from 'shared/lib';

import {
  AvatarFilebox,
  Button,
  Form,
  FormActions,
  FormField,
  FormMessage,
  SuccessDialog,
  Textbox,
  Tooltip,
  WarningDialog
} from 'shared/ui';

import classes from './component.module.scss';

const UpdateUserForm: FunctionComponent = () => {

  const updateUser    = useUpdateUser();
  const warningDialog = useVisibility(updateUser.isError);
  const successDialog = useVisibility(updateUser.isSuccess);

  const userName   = useUserStore((store) => store.user?.user_metadata.user_name);
  const userEmail  = useUserStore((store) => store.user?.email ?? '');
  const userAvatar = useUserStore((store) => store.user?.user_metadata.avatar_url);

  const form = useForm<Omit<UpdateUserParams, 'avatar'> & { avatar: FileList; }>({
    mode:          'all',
    defaultValues: {
      name:  userName,
      email: userEmail
    }
  });

  const nameControlId = useId();
  const nameMessageId = useId();

  const emailControlId = useId();
  const emailMessageId = useId();

  const avatarOptions = form.register('avatar', {
    disabled: updateUser.isPending
  });

  const nameOptions = form.register('name', {
    pattern: {
      value:   USERNAME_PATTERN_VALUE,
      message: USERNAME_PATTERN_ERROR_MESSAGE
    },
    minLength: {
      value:   USERNAME_MIN_LENGTH_VALUE,
      message: USERNAME_MIN_LENGTH_ERROR_MESSAGE
    },
    maxLength: {
      value:   USERNAME_MAX_LENGTH_VALUE,
      message: USERNAME_MAX_LENGTH_ERROR_MESSAGE
    },
    disabled: updateUser.isPending
  });

  const emailOptions = form.register('email', {
    required: {
      value:   EMAIL_REQUIRED_VALUE,
      message: EMAIL_REQUIRED_ERROR_MESSAGE
    },
    pattern: {
      value:   EMAIL_PATTERN_VALUE,
      message: EMAIL_PATTERN_ERROR_MESSAGE
    },
    disabled: updateUser.isPending
  });

  const handleSubmit = form.handleSubmit((data) => {
    updateUser.mutate({
      ...data,
      avatar: data.avatar[0]
    });
  });

  return (
    <Fragment>
      <Form className={classes['form']} onSubmit={handleSubmit}>
        <div className={classes['form-columns']}>
          <div className={classes['form-avatar']}>
            <Tooltip title="Upload avatar">
              <AvatarFilebox
                preview={userAvatar}
                aria-label="upload personal avatar"
                aria-invalid={!!form.formState.errors.avatar?.message}
                aria-disabled={avatarOptions.disabled}
                aria-required={avatarOptions.required}
                {...avatarOptions}
              />
            </Tooltip>
          </div>
          <div className={classes['form-fields']}>
            <FormField>
              <Textbox
                id={nameControlId}
                variant="secondary"
                type="text"
                inputMode="text"
                autoComplete="name"
                placeholder="John Smith"
                invalid={!!form.formState.errors.name?.message}
                aria-label="display name from your account"
                aria-invalid={!!form.formState.errors.name?.message}
                aria-disabled={nameOptions.disabled}
                aria-required={nameOptions.required}
                aria-autocomplete="list"
                aria-errormessage={form.formState.errors.name?.message ? nameMessageId : undefined}
                {...nameOptions}
              />
              <FormMessage visible={!!form.formState.errors.name?.message} id={nameMessageId}>
                {form.formState.errors.name?.message}
              </FormMessage>
            </FormField>
            <FormField>
              <Textbox
                id={emailControlId}
                variant="secondary"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="user@example.com"
                invalid={!!form.formState.errors.email?.message}
                aria-label="email address from your account"
                aria-invalid={!!form.formState.errors.email?.message}
                aria-disabled={emailOptions.disabled}
                aria-required={emailOptions.required}
                aria-autocomplete="list"
                aria-errormessage={form.formState.errors.email?.message ? emailMessageId : undefined}
                {...emailOptions}
              />
              <FormMessage visible={!!form.formState.errors.email?.message} id={emailMessageId}>
                {form.formState.errors.email?.message}
              </FormMessage>
            </FormField>
          </div>
        </div>
        <FormActions>
          <Button
            type="submit"
            disabled={!form.formState.dirtyFields.name && !form.formState.dirtyFields.email && !form.formState.dirtyFields.avatar}
            loading={updateUser.isPending}
          >
            Save
          </Button>
        </FormActions>
      </Form>
      <SuccessDialog
        title="Great"
        text="User data has been successfully changed."
        opened={successDialog.isVisible}
        onClose={successDialog.hide}
      />
      <WarningDialog
        title="Something went wrong"
        text={updateUser.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(UpdateUserForm);