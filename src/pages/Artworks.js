import Header from "../components/Header";
import { artworks } from "../data/artworks";
import Categorie1 from "../components/Categorie1";
import Categorie2 from "../components/Categorie2";

const Artworks = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container fadeIn">
        {artworks.map((data, key) => {
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

export default Artworks;
