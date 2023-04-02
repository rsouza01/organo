import styles from './Item.module.scss';
import TagsPrato from 'components/TagsPrato';
import { Prato } from 'types/Prato';
import { useNavigate } from 'react-router-dom';

type Props = Prato;

const Item = (props: Props) => {
  const { id, title, description, photo } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title}></img>
      </div>
      <div className={styles.item__descricao}>
        <div className={styles.item__titulo}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props} />
      </div>
    </div>
  );
};

export default Item;
