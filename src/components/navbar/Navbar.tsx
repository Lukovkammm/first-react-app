import { NavLink, useLocation } from 'react-router-dom';
import { SWPerson } from '../../api/data';
import './Navbar.css';

function Navbar({ data }: { data?: SWPerson[] }) {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {data?.map((item) => (
          <li key={item.name}>
            <NavLink to={`${item.id ?? 'not-found'}${location.search}`}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
