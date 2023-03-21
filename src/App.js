import { useState } from "react";
import Banner from "./components/Banner";
import InputForm from "./components/InputForm";

function App() {
  const [associates, setAssociates] = useState([]);

  const onAddAssociate = (associate) => {
    console.log(associate);
    setAssociates([...associates, associate]);
  };

  return (
    <div className="App">
      <Banner />
      <InputForm onAddAssociate={onAddAssociate} />
    </div>
  );
}

export default App;
