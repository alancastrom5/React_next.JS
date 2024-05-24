import React, { useState } from 'react';
import ContadorDisplay from '../../../components/ContadorDisplay';


export default function Contador() {
    const [valor, setValor] = useState(0);

    function incrementar() {
        setValor(valor + 1);
    }

    function decrementar() {
        setValor(valor - 1);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>Contador</h1>
            <ContadorDisplay numero={valor}/>
            <div>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
            </div>
        </div>
    );
}
