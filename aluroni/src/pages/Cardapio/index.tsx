import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import styles from "./Cardapio.module.scss";
import Buscador from "./Buscador";
import Filtros from "./Filtros";

const Cardapio = () => {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Buscador search={search} setSearch={setSearch} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
        </div>
      </section>
    </main>
  );
};

export default Cardapio;