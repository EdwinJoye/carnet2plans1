import Header from "../components/Header";
import { animations } from "../data/animations";

const Animations = ({ onOff, setOnOff }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>

      {animations.map((data, key) => {
        return (
          <div>
            <div>{data.title}</div>
            <img src={data.mainUrl} alt="" />
            <div>{data.texte}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Animations;
