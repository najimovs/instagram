import { useState, useContext } from "react";
import { LanguageContext } from "../../Contexts/LanguageContext";
export function Footer() {
  const [open, setOpen] = useState(false);
  function handleSelect(e) {
    setLanguage(e.target.getAttribute("value"));
    setOpen(false);
  }
  const [language, setLanguage] = useContext(LanguageContext);
  return (
    <footer>
      <section>
        <ul className="links">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/">Join</a>
          </li>
        </ul>
        <p>Copyright &copy; App 2025. All rights reserved.</p>
      </section>
      <section>
        <div className="tools">
          <div className="dropdown">
            <div className={`dropdown-menu ${open ? "show" : ""}`}>
              <div value="english" onClick={(e) => handleSelect(e)}>
                english
              </div>
              <div value="uzbek" onClick={(e) => handleSelect(e)}>
                uzbek
              </div>
            </div>
            <button onClick={() => setOpen(!open)} id="langBtn">
              {language}
            </button>
          </div>
          <button>Light mode</button>
        </div>
      </section>
    </footer>
  );
}
