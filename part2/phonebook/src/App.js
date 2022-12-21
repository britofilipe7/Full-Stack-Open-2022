import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'
import axios from 'axios'
import personsService from './services/persons'

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
      personsService
      .create(nameObj)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    } else {
      const repeatedPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
      if (newNumber !== repeatedPerson.number) {
        const confirmUpdate = window.confirm(`${repeatedPerson.name} is already added to phonebook, replace the old number with a new one?`);
        if (confirmUpdate) {
          const changedPerson = {...repeatedPerson, number: newNumber}
          personsService.update(repeatedPerson.id, changedPerson).then(() => {
            setPersons(persons.map(person =>
            person.id !== repeatedPerson.id ? person : changedPerson
          ))
            setNewName('')
            setNewNumber('')
          })
          console.log('number updated');
        }
      }
      else {
        alert(`${newName} is already added to phonebook`)
        console.log('number not updated');
      }
      
      
    }
  }

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id)
    const confirmDelete = window.confirm(`Delete ${person.name}?`)
    if (confirmDelete) {
      personsService.deletePerson(id).then(() => {
        const filteredPersons = persons.filter((person) => person.id !== id)
        setPersons(filteredPersons)
        setNewSearch("")
      })
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
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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
      
      <Persons persons={persons} newSearch={newSearch} handleDelete={handleDelete} />
    </div>
  )
}

export default App
