import "./index.scss";
import { useState } from "react";

export default function Contador(props) {
    const [contador, SetContador] = useState(0);
    
    function aumentar() {
        if( contador < (props.max ?? 10)){
            SetContador(contador + 1)
        }
    }

    function diminuir() {
        if( contador > (props.min ?? 0)){
            SetContador(contador - 1)
        }
    }

    return (
        <div className="comp-contador">
            <h1>{props.titulo}</h1>

            <div className='cont'>
                <button onClick={aumentar}> + </button>
                {contador}
                <button onClick={diminuir}> - </button>

            </div>
        </div>
    )
}