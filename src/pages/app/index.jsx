import './index.scss';

import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';

export default function App() {
  return (
    <div className="pagina-app pagina">
      <Cabecalho titulo='Estudando ReactJS !!!'/>

      <section className='secao'>
        <h1>Temas</h1>

        {/* <input type="text" placeholder='Digite aqui' />
        <br /><br />
        <select>
          <option >item 1</option>
          <option >item 2</option>

        </select>
        <br /><br />
        <button> Clique aqui</button> */}

        <ul>
          <li>
            <Link to='/contato'>Ir para Contato</Link>
          </li>
          <li>
            <Link to='/eventos'>Ir para Eventos</Link>
          </li>
          <li>
            <Link to='/varestado'>Ir para Variáveis de estado</Link>
          </li>
          <li>
            <Link to='/componentes'>Ir para Componentes</Link>
          </li>
        </ul>
      </section>



    </div>
  );
}