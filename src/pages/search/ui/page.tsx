import {
  type FunctionComponent
} from 'react';

import {
  MainHeader
} from 'widgets/main-header';

import {
  MainFooter
} from 'widgets/main-footer';

import {
  SearchForm
} from 'features/note/search';

import {
  MainLayout,
  MainLayoutContent,
  MainLayoutHeader,
  MainLayoutFooter,
  MainLayoutInner,
  MainLayoutIntro,
  MainLayoutTitle
} from 'shared/ui';

import {
  SearchResults
} from './search-results';

const SearchPage: FunctionComponent = () => {

  return (
    <MainLayout>
      <MainLayoutHeader>
        <MainHeader />
      </MainLayoutHeader>
      <MainLayoutContent>
        <MainLayoutIntro>
          <MainLayoutTitle>
            Search
          </MainLayoutTitle>
        </MainLayoutIntro>
        <MainLayoutInner>
          <SearchForm />
          <SearchResults />
        </MainLayoutInner>
      </MainLayoutContent>
      <MainLayoutFooter>
        <MainFooter />
      </MainLayoutFooter>
    </MainLayout>
  );


};

export default SearchPage;