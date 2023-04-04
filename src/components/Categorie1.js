const Categorie1 = ({ data, key }) => {
  return (
    <div key={key} className="flex">
      <div>
        <img className="img" src={data.mainUrl} alt="deuxD-img" />
      </div>
      <div className="box__title-texte">
        <div>{data.title}</div>
        <div>{data.texte}</div>
      </div>
    </div>
  );
};

export default Categorie1;
