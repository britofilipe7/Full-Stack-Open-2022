import { useState } from 'react'

const Display = ({anecdote}) => <p>{anecdote}</p>

const Votes = ({selected, points}) => <p>has {points[selected]} votes</p>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)

  const GetRandom = () => Math.round(Math.random() * anecdotes.length)
  const handleNextClick = () => setSelected(GetRandom)
  console.log("next is", selected)

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  const handleVoteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const maxVoted = points.indexOf(Math.max(...points))
  
  console.log("most voted is", maxVoted)

  console.log("current voting", points)
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display anecdote={anecdotes[selected]}/>
      <Votes selected={selected} points={points}/>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleNextClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <Display anecdote={anecdotes[maxVoted]}/>
      <Votes selected={maxVoted} points={points} />
    </div>
  )
}

export default App