import { useState } from "react"

export default function mouse(){

    const arrayx = useState(0)
    let x = arrayx[0]
    const alterarX = arrayx[1]

    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]

  const estilo ={
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"
    }

    function quandoMover(ev){
        alterarX(ev.clientX)
        alterarY(ev.clientY)

    }

    return(
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: ? {x}</span>
            <span>Eixo Y: ? {y}</span>
        </div>
    )
}