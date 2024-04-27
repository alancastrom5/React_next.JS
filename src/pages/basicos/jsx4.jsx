export default function jsx4(){
    const subtitulo = "Estou no JS"

    return(
        <div>
            <h1>Jsx #04</h1>
            <h2>{subtitulo}</h2>
            <h3>{Math.max(9, 39)}</h3>
            <h4>{calculo(30, 1, 10)}</h4>
        </div>
    )
}

function calculo(valor, min, max) {
    if (valor >= min && valor <= max) {
        return 'Sim';
    } else {
        return 'Não';
    }
}
