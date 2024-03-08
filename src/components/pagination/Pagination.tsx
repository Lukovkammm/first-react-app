import { useSearchParams } from 'react-router-dom';
import './Pagination.css';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

interface PaginationProps {
  handlePageChange: (page: string) => void;
}

function Pagination({ handlePageChange }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const { data } = useContext(ProductContext);

  const activePage = searchParams.get('page');

  const handleClick = (value: string) => {
    setSearchParams({ page: value });
    handlePageChange(value);
  };

  return (
    <ul id="pagination">
      {Array.from(
        { length: data?.total_pages ?? 0 },
        (_, index) => `${index + 1}`
      ).map((item) => {
        return (
          <li
            key={item}
            className={item === activePage ? 'active' : undefined}
            onClick={() => handleClick(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}
export default Pagination;
