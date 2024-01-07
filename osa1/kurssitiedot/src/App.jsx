const Header = (props) => (
  <div>
    <h1>{props.course}</h1>
  </div>
)

const Part = (props) => (
  <div>
    <p>
      {props.part} {props.exercises}
    </p>
  </div>
)

const Content = (props) => (
  <div>
    {
      props.parts.map(part => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))
    }
  </div>
)

const Total = (props) => (
  <div>
    <p>Number of exercises {props.exercises.reduce((total, current) => total + current)}</p>
  </div>
)

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      }, 
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts}
      />
      <Total exercises={course.parts.map(part => part.exercises)}/>
    </div>
  )
}

export default App
