import {
  memo,
  useEffect,
  type FunctionComponent
} from 'react';

import {
  SearchIcon
} from 'lucide-react';

import {
  useSearchParams
} from 'react-router-dom';

import {
  useController,
  useForm
} from 'react-hook-form';

import {
  type Note
} from 'entities/note';

import {
  useMountEffect
} from 'shared/lib';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  Form,
  FormField,
  Textbox
} from 'shared/ui';

import classes from './component.module.scss';

const SearchForm: FunctionComponent = () => {

  const [ searchParams, setSearchParams ] = useSearchParams();

  const form = useForm<Pick<Note, 'name'>>({ mode: 'all' });

  const nameControl = useController({
    control:      form.control,
    defaultValue: searchParams.get(ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.NAME) ?? '',
    name:         'name'
  });

  useMountEffect(() => {
    setSearchParams({
      [ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.PAGE]: searchParams.get(ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.PAGE) ?? '1',
      [ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.NAME]: searchParams.get(ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.NAME) ?? ''
    });
  });

  useEffect(() => {
    form.setValue('name', searchParams.get(ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.NAME) ?? '');
  }, [ searchParams.get(ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.NAME) ]);

  const handleChange = form.handleSubmit((data) => {
    setSearchParams((previousSearchParams) => ({
      ...Object.entries(previousSearchParams),
      [ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.PAGE]: '1',
      [ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.NAME]: data.name
    }));
  });

  return (
    <Form className={classes['search-form']} onSubmit={handleChange} onChange={handleChange}>
      <FormField className={classes['search-select-field']}>
        <Textbox
          type="text"
          inputMode="text"
          placeholder="Type something"
          startIcon={SearchIcon}
          invalid={nameControl.fieldState.invalid}
          aria-label="note name"
          aria-invalid={nameControl.fieldState.invalid}
          aria-disabled={nameControl.field.disabled}
          aria-autocomplete="list"
          {...nameControl.field}
        />
      </FormField>
    </Form>
  );

};

export default memo(SearchForm);