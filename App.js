import './App.css'

function App() {
  return (
    <div className="App">
      
      <Dados 
        nome="joão" 
        idade="17" 
        curso="Desenvolvimento" 
        src=''
      />

      <Dados
        nome="kaike"
        idade="17"
        curso="Desenvolvimento"
        src=''
        />

      <Dados
        nome="kaike"
        idade="17"
        curso="Desenvolvimento"
        src=''
        />

      <Dados
        nome="kaike"
        idade="17"
        curso="Desenvolvimento"
        src=''
        />
      <Dados
        nome="kaike"
        idade="17"
        curso="Desenvolvimento"
        src=''
        />

      <Dados
        nome="kaike"
        idade="17"
        curso="Desenvolvimento"
        src=''
        />

    </div>
  );
}

function Dados(props){
  return(
    <div className='dados'>
        <img src={props.src} />
        <h1>Nome: {props.nome}</h1>
        <p>Idade: {props.idade}</p>
        <p>Curso: {props.curso}</p>       
    </div>
  )
}


export default App;
