import React, { useState, useEffect } from "react";
import "./HamburgerMenu.css";

function Nav({ currentPage, setCurrentPage }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const links = [
    { page: "Item1", label: "T.E.G." },
    { page: "Item2", label: "GLASS" },
    { page: "Item3", label: "O.T.W.D.S." },
    { page: "Item4", label: "DG COIN" },
  ];

  // Optional: set document title from current page
  useEffect(() => {
    const titles = { Item1: "Item 1", Item2: "Item 2", Item3: "Item 3", Item4: "Item 4" };
    document.title = titles[currentPage] || "BRIDGED INC";
  }, [currentPage]);

  const handleNav = (page) => {
    setCurrentPage(page);
    setMenuOpen(false); // close the drawer
  };

  return (
    <header className="flex-row px-1 space">
      <h2 className="brand">BRIDGED INC</h2>

      {/* Hamburger Icon */}
      <button
        className={`hamburger-icon ${isMenuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-label="Menu"
        aria-expanded={isMenuOpen}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* Slide-out Menu */}
      <aside className={`hamburger-menu ${isMenuOpen ? "open" : ""}`} aria-hidden={!isMenuOpen}>
        <nav className="menu-items">
          <ul>
            {links.map((link) => (
              <li key={link.page} className={currentPage === link.page ? "currentPage" : ""}>
                <button type="button" onClick={() => handleNav(link.page)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </header>
  );
}

export default Nav;
