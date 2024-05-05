import React from "react"
export default function Titulo(props){
        return props.pequeno ? (
            <>
                <p>{props.Princial}</p>
                <p>{props.secundario}</p>
            </>
        ) :
            <>
                <h1>{props.Princial}</h1>
                <h2>{props.secundario}</h2>
            </>
}