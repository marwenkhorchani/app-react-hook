
import { useState, useEffect } from 'react';
import Element from './components/Element';
import { FormContext } from './FormContext';
import axios from 'axios'
import {useForm} from "react-hook-form"

function App() {
  const [elements, setElements] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:8000/formulaire', {
    }).then((res)=>{
      setElements(res.data[0])
      
    })
    
  }, [])
  const { _children } = elements ?? {}
  
  const handleChange = (event,id) => {
    console.log("handelcchange")
    const newElements = { ...elements }
    newElements._children.forEach(field => {
      const { _type, _id, _value } = field;
      if (id === _id) {
          field['_properties']['_value'] = event.target.value;
        }
        setElements(newElements)
      });
      console.log(elements) 
    }
    
    
    
    const handleSubmit = (event) => {
      event.preventDefault();
       for(var i=0;i<event.target.length;i++){
     
       }
       axios.post('http://localhost:8000/formulaire', {a:"b"} )
      .then(res => {
      })

     
    };
  return (
    <FormContext.Provider value={{ handleChange }}>
      <div className="App container">
       
        <form onSubmit={handleSubmit}>
          {_children ? _children.map((field, i) => <Element key={i} field={field} />) : null}
        </form>

      </div>
     </FormContext.Provider>
  );
}

export default App;
