import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Times';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
  },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
  },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
  },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
  },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
  },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
  }
]

  // Lista
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) =>{
    setColaboradores([...colaboradores, colaborador])
  }
  // Key Controla a reinderização (É Especifico do react)
  return (
    <div className="App">
      <Banner></Banner>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}>
      </Formulario>
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
     <Rodape/>
    </div>
  );
}

export default App;
