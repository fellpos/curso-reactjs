import './index.scss';
import { useState } from 'react';

import Cabecalho from '../../components/cabecalho';
import CartaoFilme from '../../components/cartaoFilme';


export default function RenderizacaoCondicional() {
    const [exibirBiscoitoSorte, SetExibirBiscoitoSorte] = useState(false);

    const [nomeFilme, SetNomeFilme] = useState('');
    const [classificacaoFilme, SetClassificacaoFilme] = useState('');
    const [urlFilme, SetUrlFilme] = useState('');
    const [estreiaFilme, SetEstreiaFilme] = useState('');
    const [destaqueFilme, SetDestaqueFilme] = useState(false);
    const [listaFilmes, SetListaFilmes] = useState([]);

    function abrirFecharBiscoitoSorte() {
        SetExibirBiscoitoSorte(!exibirBiscoitoSorte);
    }

    function adcionarFilme() {
        if (nomeFilme == '' || classificacaoFilme == '' || urlFilme == '') {
            alert('preencha todos os campos')
            return;
        }

        let novoFilme = {
            nome: nomeFilme,
            classificacao: classificacaoFilme,
            url: urlFilme,
            estreia: estreiaFilme,
            destaque: destaqueFilme
        }

        SetListaFilmes([...listaFilmes, novoFilme])
        SetNomeFilme('')
        SetClassificacaoFilme('')
        SetUrlFilme('')
    }

    return (
        <div className="pagina-rend-cond pagina">
            <Cabecalho titulo="ReactJS | Renderização Condicional" />

            <div className='secao filmes'>
                <h1>Catálogo de Filmes</h1>

                <div className='entradas'>
                    <input type="text" placeholder='Nome Filme' value={nomeFilme} onChange={e => SetNomeFilme(e.target.value)} />
                    <input type="text" placeholder='Classificação' value={classificacaoFilme} onChange={e => SetClassificacaoFilme(e.target.value)} />
                    <input type="text" placeholder='URL da capa' value={urlFilme} onChange={e => SetUrlFilme(e.target.value)} />
                    <input type="text" placeholder='Estreia do Filme' value={estreiaFilme} onChange={e => SetEstreiaFilme(e.target.value)} />
                    <div>
                        <input type="checkbox" value={destaqueFilme} onChange={e => SetDestaqueFilme(e.target.checked)} />
                        <label>Destaque</label>
                    </div>


                    <button onClick={adcionarFilme}> Adcionar </button>
                </div>

                <div className='lista'>
                    {listaFilmes.map(item =>
                        <CartaoFilme item={item} />
                    )}
                </div>
            </div>

            <div className="secao">
                <h1>Biscoito da Sorte</h1>
                <button onClick={abrirFecharBiscoitoSorte}>
                    {exibirBiscoitoSorte == true ? 'Fechar' : 'Abrir'}
                </button>


                {exibirBiscoitoSorte == true &&
                    <p className='msg-biscoito'>
                        "Sempre haverá pessoas melhores e piores em
                        habilidades diferentes. Avance ajude."
                    </p>
                }
            </div>
        </div>
    )
}