import {
  memo,
  useId,
  Fragment,
  type FunctionComponent
} from 'react';

import {
  useForm
} from 'react-hook-form';

import {
  PASSWORD_PATTERN_VALUE,
  PASSWORD_PATTERN_ERROR_MESSAGE,
  PASSWORD_REQUIRED_VALUE,
  PASSWORD_REQUIRED_ERROR_MESSAGE,
  PASSWORD_MIN_LENGTH_VALUE,
  PASSWORD_MIN_LENGTH_ERROR_MESSAGE,
  PASSWORD_MAX_LENGTH_VALUE,
  PASSWORD_MAX_LENGTH_ERROR_MESSAGE,
  PASSWORD_MISMATCH_ERROR_MESSAGE,
  useVisibility
} from 'shared/lib';

import {
  Form,
  FormField,
  FormActions,
  FormMessage,
  Button,
  Textbox,
  WarningDialog
} from 'shared/ui';

import {
  useUpdatePassword,
  type UpdatePasswordParams
} from '../../api';

import classes from './component.module.scss';

const UpdatePasswordForm: FunctionComponent = () => {

  const updatePassword = useUpdatePassword();
  const warningDialog  = useVisibility(updatePassword.isError);

  const form = useForm<UpdatePasswordParams & { confirmPassword: string; }>({ mode: 'all' });

  const passwordControlId = `password-control-${useId()}`;
  const passwordMessageId = `password-message-${useId()}`;

  const passwordOptions = form.register('password', {
    required: {
      value:   PASSWORD_REQUIRED_VALUE,
      message: PASSWORD_REQUIRED_ERROR_MESSAGE
    },
    pattern: {
      value:   PASSWORD_PATTERN_VALUE,
      message: PASSWORD_PATTERN_ERROR_MESSAGE
    },
    minLength: {
      value:   PASSWORD_MIN_LENGTH_VALUE,
      message: PASSWORD_MIN_LENGTH_ERROR_MESSAGE
    },
    maxLength: {
      value:   PASSWORD_MAX_LENGTH_VALUE,
      message: PASSWORD_MAX_LENGTH_ERROR_MESSAGE
    },
    disabled: updatePassword.isPending
  });

  const confirmPasswordControlId = `confirm-password-control-${useId()}`;
  const confirmPasswordMessageId = `confirm-password-message-${useId()}`;

  const confirmPasswordOptions = form.register('confirmPassword', {
    required: {
      value:   PASSWORD_REQUIRED_VALUE,
      message: PASSWORD_REQUIRED_ERROR_MESSAGE
    },
    pattern: {
      value:   PASSWORD_PATTERN_VALUE,
      message: PASSWORD_PATTERN_ERROR_MESSAGE
    },
    minLength: {
      value:   PASSWORD_MIN_LENGTH_VALUE,
      message: PASSWORD_MIN_LENGTH_ERROR_MESSAGE
    },
    maxLength: {
      value:   PASSWORD_MAX_LENGTH_VALUE,
      message: PASSWORD_MAX_LENGTH_ERROR_MESSAGE
    },
    disabled: updatePassword.isPending,
    validate: (value, fields) => {
      if (value !== fields.password) {
        return PASSWORD_MISMATCH_ERROR_MESSAGE;
      }
    }
  });

  const handleSubmit = form.handleSubmit((data) => {
    updatePassword.mutate(data);
  });

  return (
    <Fragment>
      <Form className={classes['form']} onSubmit={handleSubmit}>
        <FormField>
          <Textbox
            id={passwordControlId}
            type="password"
            inputMode="text"
            autoComplete="new-password"
            placeholder="********"
            invalid={!!form.formState.errors.password?.message}
            aria-label="create a new password for your account"
            aria-invalid={!!form.formState.errors.password?.message}
            aria-disabled={passwordOptions.disabled}
            aria-required={passwordOptions.required}
            aria-autocomplete="list"
            aria-errormessage={form.formState.errors.password?.message ? passwordMessageId : undefined}
            {...passwordOptions}
          />
          <FormMessage visible={!!form.formState.errors.password?.message} id={passwordMessageId}>
            {form.formState.errors.password?.message}
          </FormMessage>
        </FormField>
        <FormField>
          <Textbox
            id={confirmPasswordControlId}
            type="password"
            inputMode="text"
            autoComplete="new-password"
            placeholder="********"
            invalid={!!form.formState.errors.confirmPassword?.message}
            aria-label="confirm the entered password"
            aria-invalid={!!form.formState.errors.confirmPassword?.message}
            aria-disabled={passwordOptions.disabled}
            aria-required={passwordOptions.required}
            aria-autocomplete="list"
            aria-errormessage={form.formState.errors.confirmPassword?.message ? confirmPasswordMessageId : undefined}
            {...confirmPasswordOptions}
          />
          <FormMessage visible={!!form.formState.errors.confirmPassword?.message} id={confirmPasswordMessageId}>
            {form.formState.errors.confirmPassword?.message}
          </FormMessage>
        </FormField>
        <FormActions>
          <Button type="submit" loading={updatePassword.isPending} fullWidth>
            Continue
          </Button>
        </FormActions>
      </Form>
      <WarningDialog
        title="Something went wrong"
        text={updatePassword.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(UpdatePasswordForm);