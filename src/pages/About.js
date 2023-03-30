import Header from "../components/Header";
import { about } from "../data/about";

const About = ({ onOff, setOnOff }) => {
  return (
    <div>
      <Header onOff={onOff} setOnOff={setOnOff}></Header>
      <div className="container fadeIn">
        <div>
          {about.map((data, key) => {
            return (
              <div className="" key={key}>
                <div>{data.title}</div>
                <img src={data.mainUrl} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
