import "./Associate.css";

const Associate = ({ name, jobTitle, image }) => {
  return (
    <div className="associate">
      <div className="header">
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{jobTitle}</h5>
      </div>
    </div>
  );
};

export default Associate;
