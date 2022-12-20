import Country from './Country'
import CountryComplete from './CountryComplete'

const Countries = ({countries, search}) => {
    const filteredCountries = countries
    .filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
    
    if (filteredCountries.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    } else if (filteredCountries.length > 1) {
        return (
            filteredCountries.map(country =>
                <Country key={countries.indexOf(country)} country={country} />
                
                )
        )
    } else if (filteredCountries.length === 1) {
        return (
            filteredCountries.map(country =>
                <CountryComplete key={countries.indexOf(country)} country={country} />
                )
        )
    }
}

export default Countries