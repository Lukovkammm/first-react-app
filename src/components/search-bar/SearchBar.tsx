import { FormEvent, useState } from 'react';
import Button from '../button/Button';
import './SearchBar.css';

export interface SearchBarProps {
  handleBtnClick(): void;
}
function SearchBar(props: SearchBarProps) {
  const cachedForm = localStorage.getItem('form');
  const search = cachedForm ? JSON.parse(cachedForm).search : '';

  const [formData, setFormData] = useState({ search });

  const setValue = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('form', JSON.stringify(formData));
    props.handleBtnClick();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="search"
        defaultValue={formData.search}
        onChange={(e) => setValue(e.target.name, e.target.value)}
      />

      <Button content="Search"></Button>
    </form>
  );
}

export default SearchBar;
