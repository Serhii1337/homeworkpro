import { Link } from "react-router-dom";

export default function Header({
  theme,
  onToggleTheme,
  language,
  onToggleLanguage,
  text,
}) {
  return (
    <div className="header">
      <nav className="nav">
        <Link to="/">{text.contacts}</Link>
        <Link to="/add">{text.add}</Link>
      </nav>

      <div className="settings">
        <button onClick={onToggleTheme}>
          {theme === "light" ? "🌞" : "🌙"}
        </button>

        <button onClick={onToggleLanguage}>
          {language === "ua" ? "EN" : "UA"}
        </button>
      </div>
    </div>
  );
}
