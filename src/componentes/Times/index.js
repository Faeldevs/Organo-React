/* Style - Quando é fechado com duas chaves {{}} 
a primeira chama seria uma variavel do objeto dentro dela

Caso vc crie uma variavel externa = const css = {backgroundColor:props.corSecundaria}, 
voce só abre uma chave e coloca o nome dessa variavel -- style={css}  */

import Colaborador from '../Colaborador'
import './Times.css'

const Time = (props) =>{

    const corDeFundo = {backgroundColor:props.corSecundaria}
    const corDaBorda = {borderColor: props.corPrimaria}

    // Só irá aparecer a section caso crie um card(true) (props.colaboradores.length > 0) &&<section/>
    return (
        (props.colaboradores.length > 0) &&<section className='time' style={corDeFundo} >
            <h3 style={corDaBorda}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome}  cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time;