import "./InputForm.css";
import TextField from "../TextField";

const InputForm = () => {
  return (
    <section className="input-form">
      <form>
        <h2>Fill the data</h2>
        <TextField label="Name" placeholder="Type your name" />
        <TextField label="Job Title" placeholder="Type your Job Title" />
        <TextField label="Image" placeholder="Type the image address" />
      </form>
    </section>
  );
};

export default InputForm;
