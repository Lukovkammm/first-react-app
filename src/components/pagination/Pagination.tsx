import { useSearchParams } from 'react-router-dom';
import './Pagination.css';

interface PaginationProps {
  count: number | undefined;
  handlePageChange: (page: number) => void;
}

function Pagination({ count = 0, handlePageChange }: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });

  const pageCount = Math.ceil(count / 10);
  const activePage = Number(searchParams.get('page'));

  const handleClick = (value: number) => {
    setSearchParams({ page: value.toString() });
    handlePageChange(value);
  };

  return (
    <ul id="pagination">
      {pageCount
        ? Array.from({ length: pageCount }, (_, index) => index + 1).map(
            (item) => {
              return (
                <li
                  key={item}
                  className={item === activePage ? 'active' : undefined}
                  onClick={() => handleClick(item)}
                >
                  {item}
                </li>
              );
            }
          )
        : undefined}
    </ul>
  );
}
export default Pagination;
