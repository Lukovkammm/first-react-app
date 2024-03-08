import { FormEvent, useContext, useState } from 'react';
import './SearchBar.css';
import { ProductContext } from '../../context/ProductContext';

function SearchBar({ handleSearch }: { handleSearch: () => void }) {
  const { search } = useContext(ProductContext);
  const [formData, setFormData] = useState({ search });

  const setValue = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('form', JSON.stringify(formData));
    handleSearch();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="search"
        defaultValue={formData.search}
        autoComplete="off"
        onChange={(e) => setValue(e.target.name, e.target.value)}
      />

      <button>Search</button>
    </form>
  );
}

export default SearchBar;
