import { useState, useEffect } from 'react'
import { PersonForm } from './components/PersonForm'
import { Filter } from './components/Filter'
import { Persons } from './components/Persons'
import personsService from './services/persons'
import { Notification } from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  const setErrorMessage = (message) => setNotificationMessage({text: message, isError: true})
  const setSuccessMessage = (message) => setNotificationMessage({text: message, isError: false})

  useEffect(() => {
    personsService.getAll().then(response => {
      setPersons(response)
    })
  }, [])

  const addOrUpdatePerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      if(!window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) return;
    
      const person = persons.find(p => p.name === newName)
      const changedPerson = {...person, number: newNumber}
      personsService.update(person.id, changedPerson).then(response => {
        setSuccessMessage(`Updated ${person.name}`)
        setPersons(persons.map(p => p.id !== person.id ? p : response))
        setNewName('')
        setNewNumber('')
      }).catch(error => {
        setErrorMessage(`Information of ${person.name} has already been removed from server`)
        setPersons(persons.filter(p => p.id !== person.id))
      })
      return
    }

    personsService.create({name: newName, number: newNumber}).then(response => {
      setSuccessMessage(`Added ${response.name}`)
      setPersons(persons.concat(response))
      setNewName('')
      setNewNumber('')
    }).catch(error => {
      setErrorMessage(`Failed to add person ${name}: ${error.response.data.error}`)
    })
  }

  const removePerson = (person) => {
    console.log(person)
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService.remove(person.id).then(response => {
        setSuccessMessage(`Deleted ${person.name}`)
        setPersons(persons.filter(p => p.id !== person.id))
      }).catch(error => {
        setErrorMessage(`Information of ${person.name} has already been removed from server`)
        setPersons(persons.filter(p => p.id !== person.id))
      })
    }
  }

  return (
    <div>
      <Notification message={notificationMessage} />
      <h2>Phonebook</h2>
      <Filter value={filter} handleChange={(event) => setFilter(event.target.value)}/>
      <h2>Add a new</h2>
      <PersonForm addPerson={addOrUpdatePerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter} handleRemove={removePerson}/>
    </div>
  )

}

export default App