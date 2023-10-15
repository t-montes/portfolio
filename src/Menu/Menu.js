import React, { useState } from "react";

function Menu(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        // Close the menu when a link is clicked
        setMenuOpen(false);
    };

    return (
        <div className={`navigation ${menuOpen ? "open" : ""}`}>
            <input type="checkbox" className="navigation__checkbox" id="nav-toggle" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
            <label htmlFor="nav-toggle" className="navigation__button">
                <span className="navigation__icon" aria-label="toggle navigation menu">
                    &nbsp;
                </span>
            </label>
            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav" role="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="#about" className="navigation__link" onClick={handleLinkClick}>
                            <span>01</span>About Me
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#skill" className="navigation__link" onClick={handleLinkClick}>
                            <span>02</span>Skills
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#footer" className="navigation__link" onClick={handleLinkClick}>
                            <span>03</span>Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;
