import React from 'react';
import Footer from './Footer';
import Menu from './Menu';
import Router from './Router';
import './../assets/styles/custom.scss';

function App() {
  return (
    <Router menu={<Menu/>} footer={<Footer/>}>
    </Router>
  )
}

export default App;