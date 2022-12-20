import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import axios from 'axios'

const checkName = (persons, name) => persons.find(person => person.name.toLowerCase() === name.toLowerCase())

const App = () => {
  const [persons, setPersons] = useState([]) 
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

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])

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
