import React, {useContext} from 'react';
import {FormContext} from '../../FormContext'
const  RichText = ({_type, _id,_properties,_rowIndex, _label,_mandatory,_editable,_max_value,_value , _name,}) => {
    const {handleChange} = useContext(FormContext)
 
    return (
        <div>
         <label> {_label}</label>
           <input type = {_type} id={_id} name={_name}  
           value={_properties._value}
           onChange={event=>handleChange(event,_id)}
           ></input>
     </div>
    )
}


export default  RichText