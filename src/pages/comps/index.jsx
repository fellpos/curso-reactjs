import './index.scss';
import { useState } from 'react';

import Cabecalho from '../../components/cabecalho';
import Contador from '../../components/contador';
import ItemMeta from '../../components/itemMeta';
import ItemPlano from '../../components/itemPlano';
import CartaoFilme from '../../components/cartaoFilme';
import userEvent from '@testing-library/user-event';


export default function Comps() {

    const [novaMeta, SetNovaMeta] = useState('');
    const [listaMetas, SetListaMetas] = useState([]);
    const [editando, SetEditando] = useState(-1);

    const [plano, SetPlano] = useState('');
    const [situacao, SetSituacao] = useState('');
    const [cor, SetCor] = useState('');
    const [listaPlanos, SetListaPlanos] = useState([]);

    const [nomeFilme, SetNomeFilme] = useState('')
    const [classificacaoFilme, SetClassificacaoFilme] = useState('')
    const [urlFilme, SetUrlFilme] = useState('')
    const [listaFilmes, SetListaFilmes] = useState([])


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

    function adcionarFilme() {
        if (nomeFilme == '' || classificacaoFilme == '' || urlFilme == '') {
            alert('preencha todos os campos')
            return;
        }

        let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: urlFilme
        }

        SetListaFilmes([...listaFilmes, novoFilme])
        SetNomeFilme('')
        SetClassificacaoFilme('')
        SetUrlFilme('')
    }

    return (
        <div className='pagina-comps pagina'>
            <Cabecalho titulo="ReactJS | Componentes" />

            <div className='secao filmes'>
                <h1>Catálogo de Filmes</h1>

                <div className='entradas'>
                    <input type="text" placeholder='Nome Filme' value={nomeFilme} onChange={e => SetNomeFilme(e.target.value)} />
                    <input type="text" placeholder='Classificação' value={classificacaoFilme} onChange={e => SetClassificacaoFilme(e.target.value)} />
                    <input type="text" placeholder='URL da capa' value={urlFilme} onChange={e => SetUrlFilme(e.target.value)} />

                    <button onClick={adcionarFilme}> Adcionar </button>
                </div>

                <div className='lista'>
                    {listaFilmes.map(item =>
                        <CartaoFilme />
                    )}
                </div>
            </div>

            <div className='secao planos'>
                <h1>Meus planos atuais</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Meu plano aqui' value={plano} onChange={e => SetPlano(e.target.value)} />
                    <input type="text" placeholder='Situação do plano aqui' value={situacao} onChange={e => SetSituacao(e.target.value)} />
                    <input type="text" placeholder='Cor de identificação' value={cor} onChange={e => SetCor(e.target.value)} />
                    <button onClick={adcionarPlano}> Adcionar Plano</button>

                </div>

                <div className='lista'>
                    <ItemPlano
                        item={{
                            titulo: 'Titulo',
                            tempo: '2 semanas',
                            tema: 'red'
                        }}
                    />

                    {listaPlanos.map((item, pos) =>
                        <ItemPlano item={item} />
                    )}

                </div>
            </div>

            <div className='secao'>
                <h1>Transformando o Contador em Componente</h1>
                <Contador titulo='Passos' min={0} max={20} />
                <Contador titulo='Erros' />
            </div>


            <div className='secao metas'>
                <h1>Transformando os Itens da Lista de Meta em Componentes</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Digite sua meta aqui' value={novaMeta} onChange={e => SetNovaMeta(e.target.value)} onKeyUp={teclaApertada} />
                    <button onClick={adcionarMeta}> Adcionar</button>
                </div>

                <ul>
                    {listaMetas.map((item, pos) =>
                        <ItemMeta
                            item={item}
                            pos={pos}
                            alterarMeta={alterarMeta}
                            removerMeta={removerMeta}
                        />
                    )}
                </ul>
            </div>


        </div>
    )
}