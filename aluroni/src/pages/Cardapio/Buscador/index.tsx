import React from "react";
import styles from "./Buscador.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Buscador = ({ search, setSearch }: Props) => {
  return (
    <div className={styles.buscador}>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <CgSearch size={20} color="#4c4d5E" />
    </div>
  );
};

export default Buscador;
