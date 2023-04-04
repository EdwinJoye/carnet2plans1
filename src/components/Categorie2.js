const Categorie2 = ({ data, key }) => {
  return (
    <div key={key} className="flex">
      <div className="box__title-texte">
        <div>{data.title}</div>
        <div>{data.texte}</div>
      </div>
      <div>
        <img className="img" src={data.mainUrl} alt="deuxD-img" />
      </div>
    </div>
  );
};

export default Categorie2;
