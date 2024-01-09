import { useState, useEffect } from 'react'
import { PersonForm } from './components/PersonForm'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personsService.getAll().then(response => {
      setPersons(response)
    })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    personsService.create({name: newName, number: newNumber}).then(response => {
      setPersons(persons.concat(response))
      setNewName('')
      setNewNumber('')
    })
  }

  const removePerson = (person) => {
    console.log(person)
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.remove(person.id).then(response => {
        setPersons(persons.filter(p => p.id !== person.id))
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} handleChange={(event) => setFilter(event.target.value)}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} handleRemove={removePerson}/>
    </div>
  )

}

export default App