import { useState } from 'react';
import styles from './Cardapio.module.scss';
import Buscador from './Buscador';
import Filtros from './Filtros';
import Ordenador from './Ordernador';
import Itens from './Itens';
import stylesTema from 'styles/Tema.module.scss';

const Cardapio = () => {
  const [search, setSearch] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState('');

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>
      <Buscador search={search} setSearch={setSearch} />
      <div className={styles.cardapio__filtros}>
        <Filtros filtro={filtro} setFiltro={setFiltro} />
        <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
      </div>
      <Itens search={search} filtro={filtro} ordenador={ordenador} />
    </section>
  );
};

export default Cardapio;
