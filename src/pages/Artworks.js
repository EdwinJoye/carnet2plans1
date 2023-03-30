import Header from "../components/Header";
import { arts } from "../data/arts";

const Artworks = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container fadeIn">
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
    </div>
  );
};

export default Artworks;
