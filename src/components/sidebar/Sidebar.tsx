import { ReactNode } from 'react';
import './Sidebar.css';
import Loader from '../loader/Loader';
import Navbar from '../navbar/Navbar';

interface SidebarProps {
  searchBar: ReactNode;
  pagination: ReactNode;
  isLoading: boolean;
}

function Sidebar(props: SidebarProps) {
  return (
    <div id="sidebar">
      <div>{props.searchBar}</div>
      {props.isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          {props.pagination}
        </>
      )}
    </div>
  );
  // return (
  //   <div id="sidebar">
  //     <div className="container">
  //       {/* <SearchBar /> */}
  //       {props.children}
  //     </div>
  //     {props.isLoading ? (
  //       <Loader />
  //     ) : (
  //       <>
  //         {' '}
  //         <Navbar />
  //         {props.children}{' '}
  //       </>
  //     )}
  //   </div>
  // );
}

export default Sidebar;
