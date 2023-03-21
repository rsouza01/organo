import "./InputForm.css";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import Button from "../Button";

const InputForm = () => {
  const teams = ["Team 1", "Team 2", "Team 3"];

  const onSave = (event) => {
    event.preventDefault();
    console.log("Form submited");
  };

  return (
    <section className="input-form">
      <form onSubmit={onSave}>
        <h2>Fill in the colaborator's data:</h2>
        <TextField required={true} label="Name" placeholder="Type your name" />
        <TextField
          required={true}
          label="Job Title"
          placeholder="Type your Job Title"
        />
        <TextField
          required={true}
          label="Image"
          placeholder="Type the image address"
        />
        <DropdownList label="Teams" items={teams} />
        <Button>Create card</Button>
      </form>
    </section>
  );
};

export default InputForm;
