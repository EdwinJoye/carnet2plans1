import Header from "../components/Header";
import { deuxD } from "../data/deuxD";
import Categorie1 from "../components/Categorie1";
import Categorie2 from "../components/Categorie2";
import "../css/deuxD.css";

const DeuxD = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container fadeIn">
        {deuxD.map((data, key) => {
          if (data.categorie === "1") {
            return <Categorie1 data={data} key={key}></Categorie1>;
          } else {
            return <Categorie2 data={data} key={key}></Categorie2>;
          }
        })}
      </div>
    </div>
  );
};

export default DeuxD;
