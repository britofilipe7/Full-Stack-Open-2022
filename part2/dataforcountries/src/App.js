import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Countries from './components/Countries'
import axios from 'axios'


const App = () => {

  const [countries, setCountries] = useState([])
  const [newSearch, setNewSearch] = useState('')

  const handleSearchChange = (event) => {
    console.log("search change to -", event.target.value)
    setNewSearch(event.target.value)
  }

  const hook = () => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  return (
    <div>
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <Countries countries={countries} search={newSearch} />
    </div>
  )
}

export default App;
