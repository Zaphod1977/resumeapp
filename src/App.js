import React, { useState } from 'react';
import Nav from './components/Nav';
import Item1 from './components/Item1';
import Item2 from './components/Item2';
import Item3 from './components/Item3';
import Item4 from './components/Item4';
import Item5 from './components/Item5';
import Footer from './components/Footer';

import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState(
    "Item1"
  );

  const switchPage = (page) => {
    switch (page) {
      case "Item1":
        return <Item1></Item1>;
      case "Item2":
        return <Item2 currentPage={currentPage}></Item2>;
      case "Item3":
        return <Item3></Item3>;
      case "Item4":
        return <Item4></Item4>;
              case "Item5":
        return <Item5></Item5>;
      default:
        return <Item1></Item1>;
    };
  }

  return (
    <div className='wrapper'>
      <Nav
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></Nav>
      <div className="space">
      </div>
      <main>{switchPage(currentPage)}</main>
      <Footer></Footer>
    </div>
  );
}

export default App;
