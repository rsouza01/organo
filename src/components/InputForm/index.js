import "./InputForm.css";
import TextField from "../TextField";
import DropdownList from "../DropdownList";

const InputForm = () => {
  const teams = ["Team 1", "Team 2", "Team 3"];

  return (
    <section className="input-form">
      <form>
        <h2>Fill the data</h2>
        <TextField label="Name" placeholder="Type your name" />
        <TextField label="Job Title" placeholder="Type your Job Title" />
        <TextField label="Image" placeholder="Type the image address" />
        <DropdownList items={teams} />
      </form>
    </section>
  );
};

export default InputForm;
