import React, {useState} from 'react'
import Card from './Card'
import Form from './Form'
import { Container } from './styles/StyledComponents'



const App = () => {
  const [view, setView] = useState("form");
  const [values, setValues] = useState(null);

  const handleView = (page) => {
    setView(page);
  }
  
  const handleFetchValues = (cardInformation) => {
    setValues(cardInformation);
    setView("card")
  }

  return (
    
    <Container content = "center"> 
      
      {
        view === "form" ? (<Form handleFetchValues = {handleFetchValues}/>) : (<Card {...values}/>)
      }
    </Container>
  )
};

export default App