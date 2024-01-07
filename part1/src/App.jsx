
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello, {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const ika = 10;
  const nimi = 'Puma';

  return (
  <div>
    <h1>Greetings</h1>
    <Hello name="Iisakki" age={26 + 10}/>
    <Hello name="Kaisa" age={ika}/>
    <Hello name={nimi} age={5} />
  </div>
  )
}

export default App
