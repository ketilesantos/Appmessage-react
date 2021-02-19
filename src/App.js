import './App.css';
import Comentario from './components/Comentario'
import React, { Component} from 'react'

class App extends Component {
  state = {
    comentarios: [
      {name: 'João', email: 'joao@gmail.com', data:new Date('2020, 3, 19'), message: 'Olá, tudo bem?'},
      {name: 'Pedro', email: 'pedro@gmail.com', data:new Date('2020, 3, 30'), message: 'Olá, estou bem e você?'}
    ],
    newComments: {
      name: '',
      email: '',
      message: ''
    }
  }

  addComments = event =>{
    event.preventDefault()

    const newComments = {...this.state.newComments, data:new Date()}
    this.setState({
      comentarios:[...this.state.comentarios, newComments],
      newComments: {name:"", email: "", message: ""}
    })
   
  }

  handlerCamp = event => {
    const {name, value} = event.target
    this.setState({newComments:{...this.state.newComments, [name]: value}})
  }

  deleteComment = comentario => {
    let list = this.state.comentarios
    list = list.filter(c => c !== comentario)
    this.setState({comentarios: list})
  }
  
  render(){
    return (
      <div className="App">
        <h1>Message Project</h1>

        {this.state.comentarios.map((comentario, indice) =>(
           <Comentario key={indice} 
            name={comentario.name}
            email={comentario.email} 
            data={comentario.data} remove={this.deleteComment.bind(this, comentario)}>
            {comentario.message}
           </Comentario>
        ))}


        <form method="POST" className="form"> 
          <h2> Novo Comentário </h2>

          <label htmlFor="name"> Nome </label>
          <input 
          type="text" 
          placeholder="Digite seu nome" 
          name="name" id="name" 
          value= {this.state.newComments.name} 
          onChange={this.handlerCamp} />

          <label htmlFor="email"> Email </label>
          <input 
          type="email"
           name="email" 
           placeholder="Digite seu email" 
           id="email" 
           value= {this.state.newComments.email}
           onChange={this.handlerCamp}/>

          <label htmlFor="message"> 
          Mensagem </label>
          <textarea
           type="text" 
           placeholder="Digite sua mensagem" 
           name="message" 
           id="message" 
           value= {this.state.newComments.message}
           onChange={this.handlerCamp}/>

         
          <button onClick={this.addComments}>
            Enviar
          </button>

        </form>

      </div>
    );
  }
}

export default App;
