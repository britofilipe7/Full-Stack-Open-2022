import React from "react";

const Header = ({course}) => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }
  
  const Part = ({part, exercise}) => {
    return (
      <div>
        <p>{part} {exercise}</p>
      </div>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <div>
        {parts.map((part) => (
          <Part key={part.id} part={part.name} exercise={part.exercises} />
        ))}
        </div>
    )
  }

  
  const Total = ({parts}) => {
    return (
      <div>
        <p>Number of exercises {parts.reduce((sum, num) => sum + num.exercises, 0)}</p>
      </div>
    )
  }

  const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </div>

    )
    
  };
    
  
  export default Course;