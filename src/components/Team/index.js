import Associate from "../Associate";
import "./Team.css";

const Team = (props) => {
  return (
    <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      {props.associates.map((associate) => (
        <Associate
          key={associate.name}
          name={associate.name}
          jobTitle={associate.jobTitle}
          image={associate.image}
        />
      ))}
    </section>
  );
};

export default Team;
