import Person from './Person'

const Persons = ({persons, newSearch}) =>
persons
    .filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
    .map(person => 
    <Person key={persons.indexOf(person)}
    name={person.name} number={person.number} />
    )

export default Persons