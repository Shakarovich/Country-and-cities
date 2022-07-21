import React from 'react';
import Navbar from '../components/Navbar';

interface Iprops {
  children: any;
}

const MainLayoutReact: React.FC<Iprops> = ({children}) => {
  return (
    <React.Fragment>
      <Navbar/>
      {children}
    </React.Fragment>
  );
};

export default MainLayoutReact;