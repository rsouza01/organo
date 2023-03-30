import cardapio from "./itens.json";
import Item from "./Item/Item";
import styles from "./Itens.module.scss";

const Itens = () => {
  return (
    <div className={styles.itens}>
      {cardapio.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Itens;
