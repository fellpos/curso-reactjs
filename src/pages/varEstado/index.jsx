import './index.scss'
import { useState } from 'react'

export default function VarEstado() {
    
    const [contador, Setcontador] = useState(0);
    const [tituloS2, SettituloS2] = useState('Oie');
    const [tituloS3, SettituloS3] = useState('Escolha um item');
    const [marcouOpcaoS4, SetmarcouOpcaoS4] = useState(false);
    const [tituloS5, SettituloS5] = useState('Oie');
    const [descricaoS5, SetdescricaoS5] = useState('Oie');
    

    return (
        <div className='pagina-varestado pagina'>
            <header className='cabecalho'>
                <h1>ReactJS | Variável de Estado</h1>
            </header>

            <div className='secao'>
                <h1>Contador</h1>

                <div className='cont'>
                    <button onClick={() => Setcontador(contador + 1)}> + </button>
                    {contador}
                    <button onClick={() => Setcontador(contador - 1)}> - </button>

                </div>
            </div>

            <div className='secao'>
                <h1>{tituloS2}</h1>
                <input type="text" value={tituloS2} onChange={e => SettituloS2(e.target.value)} />
            </div>

            <div className='secao'>
                <h1>{tituloS3}</h1>
                <select onChange={e => SettituloS3(e.target.value)}>
                    <option>Selecione</option>
                    <option>Javascript</option>
                    <option>Html/Css</option>
                    <option>ReactJS</option>
                </select>

            </div>

            <div className='secao'>
                <h1> Programar é lindezinha? {marcouOpcaoS4 ? 'Sim' : 'Não'}</h1>
                <input type="checkbox" onChange={e => SetmarcouOpcaoS4(e.target.checked)} /> Sim

            </div>

            <div className='secao'>
                <h1>{tituloS5} </h1>
                
                <input type="text" value={descricaoS5} onChange={e => SetdescricaoS5(e.target.value)}/>
                
                <button onClick={( ) => SettituloS5(descricaoS5)}>Alterar</button>

            </div>

        </div>
    )
}