import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    currentPage, setCurrentPage
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <header className="flex-row px-1 space">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"></span>BRIDGED INC
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className={currentPage === "Item1" ? "currentPage" : ""}>
            <a data-testid="Item1" href="#Item1" onClick={() => setCurrentPage("Item1")}>
              T.E.G.
            </a>
          </li>
          <li className={currentPage === "Item2" ? "currentPage" : ""}>
            <a data-testid="Item2" href="#Item2" onClick={() => setCurrentPage("Item2")}>
              Glass
            </a>
          </li>
          <li className={currentPage === "Item3" ? "currentPage" : ""}>
            <a data-testid="Item3" href="#Item3" onClick={() => setCurrentPage("Item3")}>
              O.T.W.D.S.
            </a>
          </li>
          <li className={currentPage === "Item4" ? "currentPage" : ""}>
            <a data-testid="Item4" href="#Item4" onClick={() => setCurrentPage("Item4")}>
              DG Coin
            </a>
          </li>          
          {/* <li className={currentPage === "Item5" ? "currentPage" : ""}>
            <a data-testid="Item5" href="#Item5" onClick={() => setCurrentPage("Item5")}>
              Item5
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
