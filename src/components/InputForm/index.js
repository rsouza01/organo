import "./InputForm.css";
import TextField from "../TextField";
import DropdownList from "../DropdownList";
import Button from "../Button";
import { useState } from "react";

const InputForm = (props) => {
  const teams = ["Team 1", "Team 2", "Team 3"];

  const onSave = (event) => {
    event.preventDefault();
    props.onAddAssociate({ name, jobTitle, imageAddress, team });
  };

  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [imageAddress, setImageAddress] = useState("");
  const [team, setTeam] = useState("");

  return (
    <section className="input-form">
      <form onSubmit={onSave}>
        <h2>Fill in the colaborator's data:</h2>
        <TextField
          required={true}
          label="Name"
          placeholder="Type your name"
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextField
          required={true}
          label="Job Title"
          placeholder="Type your Job Title"
          value={jobTitle}
          onChange={(value) => setJobTitle(value)}
        />
        <TextField
          required={true}
          label="Image"
          placeholder="Type the image address"
          value={imageAddress}
          onChange={(value) => setImageAddress(value)}
        />
        <DropdownList
          label="Teams"
          items={teams}
          value={team}
          onChange={(value) => setTeam(value)}
        />
        <Button>Create card</Button>
      </form>
    </section>
  );
};

export default InputForm;
