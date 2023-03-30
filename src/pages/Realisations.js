import Header from "../components/Header";
import { realisations } from "../data/realisations";

const Realisation = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container fadeIn">
        {realisations.map((data, key) => {
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

export default Realisation;
