import './index.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom';

import { tratarNumero } from '../../utils/conversao';
import { calcularTotalIngresso } from '../../services/ingresso';

export default function VarEstado() {

    const [contador, SetContador] = useState(0);
    const [tituloS2, SetTituloS2] = useState('Oie');
    const [tituloS3, SetTituloS3] = useState('Escolha um item');
    const [marcouOpcaoS4, SetMarcouOpcaoS4] = useState(false);
    const [tituloS5, SetTituloS5] = useState('Oie');
    const [descricaoS5, SetDescricaoS5] = useState('Oie');

    const [num1, SetNum1] = useState(0);
    const [num2, SetNum2] = useState(0);
    const [res, SetRes] = useState(0);

    const [qtdIng, SetQtdIng] = useState(0);
    const [meioIng, SetMeioIng] = useState(0);
    const [cupom, SetCupom] = useState('');
    const [totalIng, SetTotaling] = useState(0);

    const [novaMeta, SetNovaMeta] = useState('');
    const [listaMetas, SetListaMetas] = useState([]);
    const [editando, SetEditando] = useState(-1);

    const [plano, SetPlano] = useState('');
    const [situacao, SetSituacao] = useState('');
    const [cor, SetCor] = useState('');
    const [listaPlanos, SetListaPlanos] = useState([]);

    function somar(e) {
        let soma = tratarNumero(num1) + tratarNumero(num2);
        SetRes(soma);
    }

    function calcularIngresso() {
        let tot = calcularTotalIngresso(qtdIng, meioIng, cupom)
        SetTotaling(tot)
    }

    function adcionarMeta() {

        if (novaMeta != '') {


            if (editando == -1) {
                SetListaMetas([...listaMetas, novaMeta]);
                SetNovaMeta('');
            }
            else {
                listaMetas[editando] = novaMeta;
                SetListaMetas([...listaMetas]);
                SetNovaMeta('');
                SetEditando(-1);
                // pq n ta mais editando
            }
        }
    }

    function teclaApertada(e) {
        if (e.key == 'Enter') {
            adcionarMeta()
        }
    }

    function removerMeta(pos) {
        listaMetas.splice(pos, 1);
        SetListaMetas([...listaMetas]);
    }

    function alterarMeta(pos) {
        SetNovaMeta(listaMetas[pos]);
        SetEditando(pos);
    }

    function adcionarPlano() {
        let novoPlano = {
            titulo: plano,
            tempo: situacao,
            tema: cor
        }

        SetListaPlanos([...listaPlanos, novoPlano])

        SetPlano('')
        SetSituacao('')
        SetCor('')
    }

    return (
        <div className='pagina-varestado pagina'>
            <header className='cabecalho'>
                <Link to='/'>
                    <i className='fa fa-arrow-left voltar'></i>
                </Link>
                <h1>ReactJS | Variável de Estado</h1>
            </header>

            <div className='secao planos'>
                <h1>Meus planos atuais</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Meu plano aqui' value={plano} onChange={e => SetPlano(e.target.value)} />
                    <input type="text" placeholder='Situação do plano aqui' value={situacao} onChange={e => SetSituacao(e.target.value)} />
                    <input type="text" placeholder='Cor de identificação' value={cor} onChange={e => SetCor(e.target.value)} />
                    <button onClick={adcionarPlano}> Adcionar Plano</button>

                </div>

                <div className='lista'>
                    {listaPlanos.map((item, pos) =>

                        <div className='plano' key={pos}>
                            <div className='cor' style={{ backgroundColor: item.tema}}> &nbsp; </div>
                            <div>
                                <h1> {item.titulo} </h1>
                                <h2> {item.tempo}</h2>  
                            </div>
                        </div>

                    )}

                </div>
            </div>

            <div className='secao metas'>
                <h1>Metas para os próximos 5 anos</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' value={novaMeta} onChange={e => SetNovaMeta(e.target.value)} onKeyUp={teclaApertada} />
                    <button onClick={adcionarMeta}> Adcionar</button>
                </div>

                <ul>
                    {listaMetas.map((item, pos) =>
                        <li key={pos}>
                            <i className='fa fa-pen-to-square' onClick={() => alterarMeta(pos)}></i> &nbsp;
                            <i className='fa fa-trash-can' onClick={() => removerMeta(pos)}></i> &nbsp;
                            {item}
                        </li>
                    )}
                </ul>
            </div>

            <div className='secao ingresso'>
                <h1>Venda de Ingressos</h1>
                <div className='entrada'>
                    <div>
                        <label>Quantidade:  </label>
                        <input type="text" value={qtdIng} onChange={e => SetQtdIng(e.target.value)} />
                    </div>
                    <div>
                        <label>Meia Entrada: </label>
                        <input type="checkbox" checked={meioIng} onChange={e => SetMeioIng(e.target.checked)} />
                    </div>
                    <div>
                        <label>Cupom: </label>
                        <input type="text" value={cupom} onChange={e => SetCupom(e.target.value)} />
                    </div>
                    <div>
                        <label> &nbsp; </label>
                        <button onClick={calcularIngresso}> Calcular </button>

                    </div>
                    <hr />
                    <div>
                        O total é R$ {totalIng}
                    </div>
                </div>

            </div>

            <div className='secao calculadora'>
                <h1>Calculadora</h1>
                <div className='entrada'>
                    <input type="text" value={num1} onChange={e => SetNum1(e.target.value)} />
                    <input type="text" value={num2} onChange={e => SetNum2(e.target.value)} />
                    <div> = </div>
                    <div className='res'> {res} </div>
                </div>
                <button onClick={somar}>Somar</button>
            </div>
            <div className='secao'>
                <h1>Contador</h1>

                <div className='cont'>
                    <button onClick={() => SetContador(contador + 1)}> + </button>
                    {contador}
                    <button onClick={() => SetContador(contador - 1)}> - </button>

                </div>
            </div>

            <div className='secao'>
                <h1>{tituloS2}</h1>
                <input type="text" value={tituloS2} onChange={e => SetTituloS2(e.target.value)} />
            </div>

            <div className='secao'>
                <h1>{tituloS3}</h1>
                <select onChange={e => SetTituloS3(e.target.value)}>
                    <option>Selecione</option>
                    <option>Javascript</option>
                    <option>Html/Css</option>
                    <option>ReactJS</option>
                </select>
            </div>

            <div className='secao'>
                <h1> Programar é lindezinha? {marcouOpcaoS4 ? 'Sim' : 'Não'}</h1>
                <input type="checkbox" onChange={e => SetMarcouOpcaoS4(e.target.checked)} /> Sim

            </div>

            <div className='secao'>
                <h1>{tituloS5} </h1>

                <input type="text" value={descricaoS5} onChange={e => SetDescricaoS5(e.target.value)} />

                <button onClick={() => SetTituloS5(descricaoS5)}>Alterar</button>

            </div>

        </div>
    )
}