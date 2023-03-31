import cardapio from "./itens.json";
import Item from "./Item/Item";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";

interface Props {
  search: string;
  filtro: number | null;
  ordenador: string;
}

const Itens = (props: Props) => {
  const [lista, setLista] = useState(cardapio);
  const { search, filtro, ordenador } = props;

  useEffect(() => {
    const testaBusca = (title: string) => new RegExp(search, "i").test(title);
    const testaFiltro = (id: number) => {
      if (filtro !== null) return filtro === id;
      return true;
    };

    const ordenar = (lista: typeof cardapio) => {
      switch (ordenador) {
        case "porcao":
          return lista.sort((a, b) => (a.size > b.size ? 1 : -1));
        case "qtd_pessoas":
          return lista.sort((a, b) => (a.serving > b.serving ? 1 : -1));
        case "preco":
          return lista.sort((a, b) => (a.price > b.price ? 1 : -1));
        default:
          return lista;
      }
    };
    const novaLista = cardapio.filter(
      (item) => testaBusca(item.title) && testaFiltro(item.category.id)
    );
    setLista(ordenar(novaLista));
  }, [search, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Itens;
