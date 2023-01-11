const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://britofilipe7:${password}@fullstackopen-part3.yv23pwe.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(url)
  .then(() => {
    console.log('connected to db')
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const personName = process.argv[3]
const personNumber = process.argv[4]

if (process.argv.length === 3) {
    Person.find({}).then((persons) => {
        console.log('Phonebook:')
        persons.forEach((person) => {
            console.log(`${person.name} ${person.number}`)
        })
        mongoose.connection.close()
        })
}

else if (process.argv.length === 5) {
    const person = new Person({
        name: personName,
        number: personNumber
    })
    console.log(`${personName} ${personNumber}`)
    person.save().then(() => {
        console.log(`Added ${personName} ${personNumber} to phonebook`)
        mongoose.connection.close()
    })
}

else {
    console.log(
        'Wrong number of arguments.',
      )
      mongoose.connection.close()
}