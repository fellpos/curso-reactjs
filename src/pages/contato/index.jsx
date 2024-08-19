import './index.scss'

import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho';

export default function contato() {


    return (
        <div className='pagina-contato pagina'>
            <Cabecalho titulo='ReactJS | Contato'/>

            <section className='secao'>
                <h1>Entre em contato</h1>
                <img className='icone' src="/assets/images/imagemgato.webp" alt="" />

            </section>

        </div>
    )
}