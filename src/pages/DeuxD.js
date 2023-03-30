import Header from "../components/Header";
import { deuxD } from "../data/deuxD";

import "../css/deuxD.css";

const DeuxD = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container fadeIn">
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
    </div>
  );
};

export default DeuxD;
