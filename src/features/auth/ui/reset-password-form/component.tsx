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
  EMAIL_PATTERN_ERROR_MESSAGE,
  EMAIL_PATTERN_VALUE,
  EMAIL_REQUIRED_ERROR_MESSAGE,
  EMAIL_REQUIRED_VALUE,
  useVisibility
} from 'shared/lib';

import {
  Form,
  FormField,
  FormActions,
  FormMessage,
  Button,
  Textbox,
  SuccessDialog,
  WarningDialog
} from 'shared/ui';

import {
  useResetPassword,
  type ResetPasswordParams
} from '../../api';

import classes from './component.module.scss';

const ResetPasswordForm: FunctionComponent = () => {

  const resetPassword = useResetPassword();
  const successDialog = useVisibility(resetPassword.isSuccess);
  const warningDialog = useVisibility(resetPassword.isError);

  const form = useForm<ResetPasswordParams>({ mode: 'all' });

  const emailControlId = useId();
  const emailMessageId = useId();

  const emailOptions = form.register('email', {
    required: {
      value:   EMAIL_REQUIRED_VALUE,
      message: EMAIL_REQUIRED_ERROR_MESSAGE
    },
    pattern: {
      value:   EMAIL_PATTERN_VALUE,
      message: EMAIL_PATTERN_ERROR_MESSAGE
    },
    disabled: resetPassword.isPending
  });

  return (
    <Fragment>
      <Form className={classes['form']} onSubmit={form.handleSubmit((data) => resetPassword.mutate(data))}>
        <FormField>
          <Textbox
            id={emailControlId}
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="user@example.com"
            invalid={!!form.formState.errors.email?.message}
            aria-label="email address associated with your account"
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
        <FormActions>
          <Button type="submit" loading={resetPassword.isPending} fullWidth>
            Reset
          </Button>
        </FormActions>
      </Form>
      <SuccessDialog
        title="Great"
        text={`
          Your account password has been successfully reset.
          Please check your email address to which the email
          with the link to the password update page was sent.
        `}
        opened={successDialog.isVisible}
        onClose={successDialog.hide}
      />
      <WarningDialog
        title="Something went wrong"
        text={resetPassword.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(ResetPasswordForm);