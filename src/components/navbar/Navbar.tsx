import './Navbar.css';

import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

function Navbar() {
  const { data } = useContext(ProductContext);
  return (
    <nav>
      <ul>
        {data?.data?.map((item) => (
          <li key={item.id}>
            <NavLink to={`${item.id}${location.search}`}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
