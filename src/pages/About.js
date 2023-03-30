import Header from "../components/Header";
import { about } from "../data/about";
import Categorie1 from "../components/Categorie1";
import Categorie2 from "../components/Categorie2";

const About = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container fadeIn">
        <div>
          {about.map((data, key) => {
            if (data.categorie === "1") {
              return <Categorie1 data={data} key={key}></Categorie1>;
            } else {
              return <Categorie2 data={data} key={key}></Categorie2>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
