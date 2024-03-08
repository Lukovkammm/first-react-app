import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { getAllProducts, searchProduct } from '../api/data';
import { ResponseData } from '../common/models';
import { getSearchData } from '../common/utils';
import { ProductContext } from '../context/ProductContext';

import ErrorBoundary from '../components/error/Error';
import Sidebar from '../components/sidebar/Sidebar';
import SearchBar from '../components/search-bar/SearchBar';
import Pagination from '../components/pagination/Pagination';

function Products() {
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState<string | undefined>(
    getSearchData() ?? ''
  );
  const [data, setData] = useState<ResponseData | undefined>();
  const [page, setPage] = useState<string>();

  useEffect(() => {
    const getData = async () => {
      const data = await getAllProducts(page);
      setData(data);
      setIsLoading(false);
    };

    getData();
    setIsLoading(true);
  }, [page]);

  useEffect(() => {
    const getData = async () => {
      const data = await searchProduct(search);
      setData(data);
      setIsLoading(false);
    };

    getData();
    setIsLoading(true);
  }, [search]);

  return (
    <ErrorBoundary>
      <ProductContext.Provider value={{ search, data }}>
        <Sidebar
          isLoading={isLoading}
          searchBar={
            <SearchBar handleSearch={() => setSearch(getSearchData())} />
          }
          pagination={
            <Pagination handlePageChange={(page: string) => setPage(page)} />
          }
        />
        <Outlet />
      </ProductContext.Provider>
    </ErrorBoundary>
  );
}
export default Products;
