import Person from './Person'

const Persons = ({persons, newSearch, handleDelete}) =>
persons
    .filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))
    .map(person => 
    <Person key={persons.indexOf(person)}
    person={person} handleDelete={handleDelete}/>
    )

export default Persons