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
  EMAIL_PATTERN_VALUE,
  EMAIL_PATTERN_ERROR_MESSAGE,
  EMAIL_REQUIRED_VALUE,
  EMAIL_REQUIRED_ERROR_MESSAGE,
  PASSWORD_PATTERN_VALUE,
  PASSWORD_PATTERN_ERROR_MESSAGE,
  PASSWORD_REQUIRED_VALUE,
  PASSWORD_REQUIRED_ERROR_MESSAGE,
  PASSWORD_MIN_LENGTH_VALUE,
  PASSWORD_MIN_LENGTH_ERROR_MESSAGE,
  PASSWORD_MAX_LENGTH_VALUE,
  PASSWORD_MAX_LENGTH_ERROR_MESSAGE,
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
  useSignUpWithEmail,
  type SignUpWithEmailParams
} from '../../api';

import classes from './component.module.scss';

const SignUpForm: FunctionComponent = () => {

  const signUpWithEmail = useSignUpWithEmail();
  const successDialog   = useVisibility(signUpWithEmail.isSuccess);
  const warningDialog   = useVisibility(signUpWithEmail.isError);

  const form = useForm<SignUpWithEmailParams>({ mode: 'all' });

  const emailControlId = useId();
  const emailMessageId = useId();

  const passwordControlId = useId();
  const passwordMessageId = useId();

  const emailOptions = form.register('email', {
    required: {
      value:   EMAIL_REQUIRED_VALUE,
      message: EMAIL_REQUIRED_ERROR_MESSAGE
    },
    pattern: {
      value:   EMAIL_PATTERN_VALUE,
      message: EMAIL_PATTERN_ERROR_MESSAGE
    },
    disabled: signUpWithEmail.isPending
  });

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
    disabled: signUpWithEmail.isPending
  });

  const handleSubmit = form.handleSubmit((data) => {
    signUpWithEmail.mutate(data);
  });

  return (
    <Fragment>
      <Form className={classes['form']} onSubmit={handleSubmit}>
        <FormField>
          <Textbox
            id={emailControlId}
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
        <FormField>
          <Textbox
            id={passwordControlId}
            type="password"
            inputMode="text"
            autoComplete="new-password"
            placeholder="********"
            invalid={!!form.formState.errors.password?.message}
            aria-label="password for your account"
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
        <FormActions>
          <Button type="submit" loading={signUpWithEmail.isPending} fullWidth>
            Continue
          </Button>
        </FormActions>
      </Form>
      <SuccessDialog
        title="Great"
        text={`
          Your account has been successfully created.
          Please check your email address where your
          registration confirmation email was sent.
        `}
        opened={successDialog.isVisible}
        onClose={successDialog.hide}
      />
      <WarningDialog
        title="Something went wrong"
        text={signUpWithEmail.error?.message ?? ''}
        opened={warningDialog.isVisible}
        onClose={warningDialog.hide}
      />
    </Fragment>
  );

};

export default memo(SignUpForm);