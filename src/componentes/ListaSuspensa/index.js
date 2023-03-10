import './ListaSuspensa.css'
// o map serve para a intereção de uma lista. ele vai mostrar os itens e ao clicar pegará um item selecionado
const ListaSuspensa = (props) =>{
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                <option value=''></option>
                {props.itens.map(item => {
                    // Sem a key o react perderá o controle da renderização(se tiver muitos itens)
                    return <option key={item}> {item}</option>
                })}
                
            </select>
        </div>
    )
}

export default ListaSuspensa