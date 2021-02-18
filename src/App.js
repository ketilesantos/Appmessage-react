import './App.css';
import Comentario from './components/Comentario'

function App() {
  return (
    <div className="App">
      <h1>Meu primeiro app react</h1>
      <Comentario name="João" email="joao@gmail.com" data={new Date('2020, 3, 19')}>
        Olá, tudo bem?
      </Comentario>
      <Comentario name="Maria" email="maria@gmail.com" data={new Date('2020, 5, 09')}>
        Olá, estou bem e você?
      </Comentario>
      
    </div>
  );
}

export default App;
