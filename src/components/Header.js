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
          <img className="header-logo" src={logos[1].mainUrl} alt="" />
        </div>
      </Link>
      <Link
        to="/2d"
        onClick={() => {
          setOnOff((onOff = 1));
        }}
      >
        <div className={onOff === 1 ? "header-border1" : "header-border"}>
          DESSINS 2D
        </div>
      </Link>
      <Link
        to="/3d"
        onClick={() => {
          setOnOff((onOff = 2));
        }}
      >
        <div className={onOff === 2 ? "header-border2" : "header-border"}>
          DESSINS 3D
        </div>
      </Link>
      <Link
        to="/animations"
        onClick={() => {
          setOnOff((onOff = 3));
        }}
      >
        <div className={onOff === 3 ? "header-border3" : "header-border"}>
          ANIMATIONS
        </div>
      </Link>
      <Link
        to="/arts"
        onClick={() => {
          setOnOff((onOff = 4));
        }}
      >
        <div className={onOff === 4 ? "header-border4" : "header-border"}>
          CREATIONS
        </div>
      </Link>
      <Link
        to="/about"
        onClick={() => {
          setOnOff((onOff = 5));
        }}
      >
        <div className={onOff === 5 ? "header-border5" : "header-border"}>
          ABOUT
        </div>
      </Link>
    </div>
  );
};

export default Header;
