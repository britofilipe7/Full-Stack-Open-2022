const Language = ({languages}) => {
    return(
        languages.map(language => <li>{language}</li>)
    )   
}

export default Language