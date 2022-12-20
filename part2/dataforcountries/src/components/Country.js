import React, { useState } from 'react'
import CountryComplete from './CountryComplete'



const Country = ({country}) => {

    const [state, setState] = useState(false)

    const handleClick = () => {
        setState(!state)
    }

    if (state === true) {
        return (
            <>
            <p>{country.name.common} <button onClick={handleClick}>show</button></p>
            <CountryComplete country={country} />
            </>
        )
    } else {
        return (
            <p>{country.name.common} <button onClick={handleClick}>show</button></p>
            )
    }
}

export default Country