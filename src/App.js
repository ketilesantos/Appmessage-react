import './App.css';
import Comentario from './components/Comentario'
import React, { Component} from 'react'

class App extends Component {
  state = {
    comentarios: [
      {name: 'João', email: 'joao@gmail.com', data:new Date('2020, 3, 19'), message: 'Olá, tudo bem?'},
      {name: 'Pedro', email: 'pedro@gmail.com', data:new Date('2020, 3, 30'), message: 'Olá, estou bem e você?'}
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>Message Project</h1>

        {this.state.comentarios.map(comentario =>(
           <Comentario name={comentario.name} email={comentario.email} data={comentario.data}>
            {comentario.message}
           </Comentario>
        ))}
  
      </div>
    );
  }
}

export default App;
