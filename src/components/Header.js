import { Link } from "react-router-dom";
import "../css/header.css";
import { logos } from "../data/logos";

const Header = ({ onOff, setOnOff }) => {
  return (
    <div className="header">
      <Link
        to="/"
        onClick={() => {
          setOnOff((onOff = 0));
        }}
      >
        <div>
          <img className="header__logo" src={logos[1].mainUrl} alt="" />
        </div>
      </Link>
      <div className="header__buttons">
        <Link
          to="/2d"
          onClick={() => {
            setOnOff((onOff = 1));
          }}
        >
          <div className={onOff === 1 ? "header__border1" : "header__border"}>
            DESSINS 2D
          </div>
        </Link>
        <Link
          to="/3d"
          onClick={() => {
            setOnOff((onOff = 2));
          }}
        >
          <div className={onOff === 2 ? "header__border2" : "header__border"}>
            DESSINS 3D
          </div>
        </Link>
        <Link
          to="/animations"
          onClick={() => {
            setOnOff((onOff = 3));
          }}
        >
          <div className={onOff === 3 ? "header__border3" : "header__border"}>
            ANIMATIONS
          </div>
        </Link>
        <Link
          to="/artworks"
          onClick={() => {
            setOnOff((onOff = 4));
          }}
        >
          <div className={onOff === 4 ? "header__border4" : "header__border"}>
            ARTWORK
          </div>
        </Link>
        <Link
          to="/realisations"
          onClick={() => {
            setOnOff((onOff = 6));
          }}
        >
          <div className={onOff === 6 ? "header__border6" : "header__border"}>
            REALISATIONS
          </div>
        </Link>
        <Link
          to="/about"
          onClick={() => {
            setOnOff((onOff = 5));
          }}
        >
          <div className={onOff === 5 ? "header__border5" : "header__border"}>
            ABOUT
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
