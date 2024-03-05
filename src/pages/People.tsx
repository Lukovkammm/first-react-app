import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SWData, getMainData } from '../api/data';
import { getSearchData } from '../common/utils';
import ErrorBoundary from '../components/error/Error';
import Pagination from '../components/pagination/Pagination';
import Sidebar from '../components/sidebar/Sidebar';

function People() {
  const [swData, setSWData] = useState<SWData | null>(null);
  const [search, setSearch] = useState(getSearchData() ?? '');
  const [page, setPage] = useState<number | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetching() {
      const result = await getMainData(search, page);
      setIsLoading(false);
      setSWData(result);
    }

    setIsLoading(true);
    fetching();
  }, [search, page]);

  const handleBtnClick = () => {
    const newData = getSearchData();
    if (newData === undefined) return;
    setSearch(newData);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <ErrorBoundary>
      <Sidebar
        data={swData?.results}
        isLoading={isLoading}
        handleBtnClick={handleBtnClick}
      >
        <Pagination count={swData?.count} handlePageChange={handlePageChange} />
      </Sidebar>
      <Outlet />
    </ErrorBoundary>
  );
}

export default People;
