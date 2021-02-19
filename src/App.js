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

  addComments = () =>{
    const newComment = {
      name: 'Maria', 
      email: 'maria@gmail.com',
      data: new Date(),
      message: 'Olá, pessoal!!!'
    }

    this.setState({comentarios:[...this.state.comentarios, newComment]})
  
  }
  
  render(){
    return (
      <div className="App">
        <h1>Message Project</h1>

        {this.state.comentarios.map((comentario, indice) =>(
           <Comentario key={indice} name={comentario.name} email={comentario.email} data={comentario.data}>
            {comentario.message}
           </Comentario>
        ))}

        <button onClick={this.addComments}>Adicionar novo comentário</button>
      </div>
    );
  }
}

export default App;
