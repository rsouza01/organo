import { useState } from "react";
import Banner from "./components/Banner";
import InputForm from "./components/InputForm";
import Team from "./components/Team";

function App() {
  const [associates, setAssociates] = useState([]);

  const teams = [
    { name: "Front End", primaryColor: "#82CFFA", secondaryColor: "#E8F8FF" },
    { name: "Back End", primaryColor: "#A6D157", secondaryColor: "#F0F8E2" },
    { name: "Fullstack", primaryColor: "#E06B69", secondaryColor: "#FDE7E8" },
  ];

  const onAddAssociate = (associate) => {
    console.log(associate);
    setAssociates([...associates, associate]);
  };

  return (
    <div className="App">
      <Banner />
      <InputForm
        teams={teams.map((team) => team.name)}
        onAddAssociate={onAddAssociate}
      />
      {teams.map((team) => (
        <Team
          key={team.name}
          name={team.name}
          primaryColor={team.primaryColor}
          secondaryColor={team.secondaryColor}
          associates={associates}
        />
      ))}
    </div>
  );
}

export default App;
