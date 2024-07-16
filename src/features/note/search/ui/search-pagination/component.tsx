import {
  type FunctionComponent
} from 'react';

import {
  useSearchParams
} from 'react-router-dom';

import {
  useImmutableCallback,
  useMediaQuery
} from 'shared/lib';

import {
  ROUTER_CONFIG
} from 'shared/router';

import {
  Pagination,
  PaginationEllipsis,
  PaginationItem,
  PaginationButton,
  PaginationNext,
  PaginationPrev,
  Tooltip,
  PaginationList
} from 'shared/ui';

import Props from './component.props';

const SearchPagination: FunctionComponent<Props> = (props) => {

  const {
    currentPage,
    maximumPage
  } = props;

  const [ , setSearchParams ] = useSearchParams();
  const isSmallMobile         = useMediaQuery('(width <= 375px)');

  const handleNavigate = useImmutableCallback((page: number) => {
    setSearchParams((previousSearchParams) => ({
      ...Object.fromEntries(previousSearchParams),
      [ROUTER_CONFIG.SEARCH_PAGE.SEARCH_PARAMS.PAGE]: page.toString()
    }));
  });

  const renderPageNumbers = () => {
    const pageNumbers = [];

    let startPage: number;
    let endPage: number;

    if (maximumPage <= 7) {
      startPage = 1;
      endPage = maximumPage;
    } else if (currentPage <= 4) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage + 2 >= maximumPage) {
      startPage = maximumPage - 4;
      endPage = maximumPage;
    } else {
      startPage = currentPage - 1;
      endPage = currentPage + 1;
    }

    if (startPage > 1) {
      pageNumbers.push((
        <PaginationItem key="first">
          <PaginationButton disabled={currentPage === 1} onClick={handleNavigate.bind(null, 1)}>
            1
          </PaginationButton>
        </PaginationItem>
      ));
    }

    if (startPage > 2) {
      pageNumbers.push((
        <PaginationItem key="first-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      ));
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push((
        <PaginationItem key={i}>
          <PaginationButton selected={i === currentPage} onClick={handleNavigate.bind(null, i)}>
            {i}
          </PaginationButton>
        </PaginationItem>
      ));
    }

    if (endPage < maximumPage - 1) {
      pageNumbers.push((
        <PaginationItem key="last-ellipsis">
          <PaginationEllipsis />
        </PaginationItem>
      ));
    }

    if (endPage < maximumPage) {
      pageNumbers.push((
        <PaginationItem key="last">
          <PaginationButton disabled={currentPage === maximumPage} onClick={handleNavigate.bind(null, maximumPage)}>
            {maximumPage}
          </PaginationButton>
        </PaginationItem>
      ));
    }

    return pageNumbers;
  };

  return (
    <Pagination>
      <PaginationList>
        {!isSmallMobile && (
          <PaginationItem>
            <Tooltip title="Previous page">
              <PaginationPrev
                disabled={currentPage === 1}
                onClick={handleNavigate.bind(null, currentPage - 1)}
              />
            </Tooltip>
          </PaginationItem>
        )}
        {renderPageNumbers()}
        {!isSmallMobile && (
          <PaginationItem>
            <Tooltip title="Next page">
              <PaginationNext
                disabled={currentPage === maximumPage}
                onClick={handleNavigate.bind(null, currentPage + 1)}
              />
            </Tooltip>
          </PaginationItem>
        )}
      </PaginationList>
    </Pagination>
  );

};

export default SearchPagination;