import { useState } from 'react'

const Button = ({ handleClick, text}) => {
  console.log('clicked in', text)
  return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({text, count}) => {
  if (text == 'positive'){
    return (
      <tr>
      <td>{text}</td>
      <td>{count}</td>
      <td>%</td>
    </tr>
    )
  } 
  return (
    <tr>
      <td>{text}</td>
      <td>{count}</td>
    </tr>  
  )
}

const Statistics = ({good, neutral, bad}) => {
  const allCount = good + neutral + bad
  const averageStat = (good - bad) / allCount
  const goodPercent = (good / allCount) * 100

  if (allCount == 0) return <p>No feedback given</p>

  return (
    <table>
      <tbody>
        <StatisticLine text='good' count={good}/>
        <StatisticLine text='neutral' count={neutral}/>
        <StatisticLine text='bad' count={bad}/>
        <StatisticLine text='all' count={allCount}/>
        <StatisticLine text='average' count={averageStat}/>
        <StatisticLine text='positive' count={goodPercent}/>
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log('good count', good + 1)
    return setGood(good + 1)
  }

  const handleNeutralClick = () => {
    console.log('neutral count', neutral + 1)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    console.log('bad count', bad + 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
      </div>
      <div>
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
      
    </div>
  )
}

export default App