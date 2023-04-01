import cardapio from 'data/cardapio.json';
import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';

import casa from 'assets/sobre/casa.png';
import massa1 from 'assets/sobre/massa1.png';
import massa2 from 'assets/sobre/massa2.png';

const imagens = [massa1, massa2];

const Sobre = () => {
  return (
    <section>
      <h3 className={stylesTema.titulo}>Sobre</h3>
      <div className={styles.sobreNos}>
        <img src={casa} alt="Sobre nós" />
        <div className={styles.sobreNos__texto}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            venenatis tortor placerat nunc consectetur, eget imperdiet mi
            eleifend. Nam odio urna, molestie ut orci rutrum, imperdiet pretium
            ipsum. Proin eu pretium ante. Phasellus et ligula lacus.
          </p>
          <p>
            Nulla semper nibh id ex mollis dictum vitae in risus. Praesent
            venenatis elementum magna nec dictum. Nunc lorem elit, ultricies
            dignissim elit ac, porttitor euismod mi. Fusce bibendum lacinia
            scelerisque.
          </p>
          <p>
            Vivamus dictum arcu et ante semper, eget suscipit erat condimentum.
            Donec felis ex, rhoncus mollis odio vel, cursus fermentum nunc.
            Etiam porta orci eu justo molestie porttitor. Morbi at metus lorem.
            Aliquam tempor volutpat ex at vehicula.
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagem}>
            <img src={imagem} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sobre;
