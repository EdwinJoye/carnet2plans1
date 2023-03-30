import Header from "../components/Header";
import { troisD } from "../data/troisD";

const TroisD = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container fadeIn">
        {troisD.map((data, key) => {
          return (
            <div>
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

export default TroisD;
