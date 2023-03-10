/* props é as propriedades - é do react (parameto)

OBS: o props é um nome alternativo, ou seja, voce pode colocar oque vc quiser
exemplo: teste colocando qualquer palavra(vasco)

O props.label vai transformar alterar as label
conforme o nome de cada propriedade
Isso ajuda a reaproveitar algum item no codigo, tipo no css os input
*/

import './CampoTexto.css'

const CampoTexto = (props) =>{
    
    const placeholderModificada = `${props.placeholder}..`


    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
       // setValor(evento.target.value)
       // console.log(valor)
        
    }
    // onChange = a cada letra q o usuario digitar, executarar uma função
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}></input>
        </div>
    )
}

export default CampoTexto