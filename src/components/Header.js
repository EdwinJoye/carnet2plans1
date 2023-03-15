import { Link } from "react-router-dom";
import "../css/header.css";

const Header = ({ onOff, setOnOff }) => {
  return (
    <div className="header">
      <Link
        to="/"
        onClick={() => {
          setOnOff((onOff = 0));
        }}
      >
        <div className={onOff === 0 ? "headerBorder0" : "headerBorder"}>
          HOME
        </div>
      </Link>
      <Link
        to="/2d"
        onClick={() => {
          setOnOff((onOff = 1));
        }}
      >
        <div className={onOff === 1 ? "headerBorder1" : "headerBorder"}>2D</div>
      </Link>
      <Link
        to="/3d"
        onClick={() => {
          setOnOff((onOff = 2));
        }}
      >
        <div className={onOff === 2 ? "headerBorder2" : "headerBorder"}>3D</div>
      </Link>
      <Link
        to="/animations"
        onClick={() => {
          setOnOff((onOff = 3));
        }}
      >
        <div className={onOff === 3 ? "headerBorder3" : "headerBorder"}>
          ANIMATIONS
        </div>
      </Link>
      <Link
        to="/arts"
        onClick={() => {
          setOnOff((onOff = 4));
        }}
      >
        <div className={onOff === 4 ? "headerBorder4" : "headerBorder"}>
          ARTS
        </div>
      </Link>
      <Link
        to="/about"
        onClick={() => {
          setOnOff((onOff = 5));
        }}
      >
        <div className={onOff === 5 ? "headerBorder5" : "headerBorder"}>
          ABOUT
        </div>
      </Link>
    </div>
  );
};

export default Header;
