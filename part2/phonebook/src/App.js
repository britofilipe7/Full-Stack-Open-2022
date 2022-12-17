import { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

const checkName = (persons, name) => persons.find(person => person.name.toLowerCase() === name.toLowerCase())

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '39-44-5323523', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObj = {
      name: newName,
      number: newNumber}
    if (typeof checkName(persons, newName) === "undefined") {
      setPersons(persons.concat(nameObj))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    console.log("name change -", event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log("number change -", event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearchChange = (event) => {
    console.log("search change to -", event.target.value)
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />
      
      <h3>add a new</h3>

      <Form newName={newName} handleNameChange={handleNameChange} addName={addName}
      newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      
      <Persons persons={persons} newSearch={newSearch} />
    </div>
  )
}

export default App
