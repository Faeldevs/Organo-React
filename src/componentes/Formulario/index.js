import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) =>{

        // Hooks (set - setNome()...)
        const [nome, setNome] = useState('Fael')
        const [cargo, setCargo] = useState('Desenvolvedor')
        const [imagem, setImagem] = useState('')
        const [time, setTime] = useState('')

        const aoSalvar = (evento) =>{
            // esse evento tira o compartamento padrão de relogar a pagina ao clicar no botao
            evento.preventDefault()
            props.aoColaboradorCadastrado({
                nome,
                cargo,
                imagem,
                time
            })
            // Limpa cada item abaixo do formulario caso n tenha colaborador
            setNome('')
            setCargo('')
            setImagem('')
            setTime('')
        }

    return (
        // O form - onSubmit = Ao ser submetido ao clique, eu quero executar a função aoSalvar
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card da pessoa</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite o seu nome."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    />
                <CampoTexto
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o seu cargo."
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                <CampoTexto
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem."
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                <ListaSuspensa
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                    >
                 </ListaSuspensa>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario