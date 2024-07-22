import './index.scss';

export default function Eventos() {

    function clicou() {
        alert('Oie, o usuario acabou de clicar')
    }

    function movimentoMouse() {
        alert('Oie, o usuario acabou de mover o mouse')
    }

    function alterouValor(e) {
        let novoValor = e.target.value; // string
        alert('Oie, o usuario acabou de alterar o valor para ' + novoValor)
    }

    function alterouCheck(e) {
        let novoValor = e.target.checked; // boolean
        alert('Oie, o usuario acabou de alterar o valor do input[radio/checkbox] para: ' + novoValor)
    }
    return (
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1>ReactJS | Eventos</h1>
            </header>
            <section className='secao'>
                <h1>Entendendo eventos</h1>

                <p onClick={clicou}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, hic. Magnam sed, voluptatem sit quis rem soluta reiciendis ea consequuntur et nobis alias neque animi voluptate vero, debitis illo deleniti.</p>

                <input onChange={alterouValor} type="text" placeholder='Digite aqui alguma coisa' />

                <textarea onChange={alterouValor} placeholder='Digite aqui'>

                </textarea>
                <select>
                    <option>selecione</option>
                    <option>Item A</option>
                    <option>Item B</option>
                </select>

                <div className='grupo'>
                    <input type="checkbox" onChange={alterouCheck} /> Opção 1
                    <input type="checkbox" /> Opção 2
                </div>

                <div className='grupo'>
                    <div>
                        <input type="radio" name='gpo' onChange={alterouCheck} /> Opção 1
                    </div>

                    <div>
                        <input type="radio" name='gpo' /> Opção 2
                    </div>
                </div>

                <button onClick={clicou}> Clique aqui</button>
            </section>
        </div>
    )
}