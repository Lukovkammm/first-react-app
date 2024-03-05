import { ReactNode } from 'react';
import { SWPerson } from '../../api/data';
import './Sidebar.css';
import SearchBar from '../search-bar/SearchBar';
import Navbar from '../navbar/Navbar';
import Loader from '../loader/Loader';

interface SidebarProps {
  data?: SWPerson[];
  handleBtnClick(): void;
  children: ReactNode;
  isLoading: boolean;
}

function Sidebar(props: SidebarProps) {
  return (
    <div id="sidebar">
      <div className="container">
        <SearchBar handleBtnClick={props.handleBtnClick} />
      </div>
      {props.isLoading ? (
        <Loader />
      ) : (
        <>
          {' '}
          <Navbar data={props.data} />
          {props.children}{' '}
        </>
      )}
    </div>
  );
}

export default Sidebar;
