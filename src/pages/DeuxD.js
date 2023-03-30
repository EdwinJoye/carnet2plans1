import Header from "../components/Header";
import { deuxD } from "../data/deuxD";

const DeuxD = ({ onOff, setOnOff }) => {
  return (
    <div className="container">
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      {deuxD.map((data, key) => {
        return (
          <div key={key}>
            <div>{data.title}</div>
            <img src={data.mainUrl} alt="" />
            <div>{data.texte}</div>
          </div>
        );
      })}
    </div>
  );
};

export default DeuxD;
