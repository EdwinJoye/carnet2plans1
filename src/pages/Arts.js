import Header from "../components/Header";
import { arts } from "../data/arts";

const Arts = ({ onOff, setOnOff }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      {arts.map((data, key) => {
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

export default Arts;
