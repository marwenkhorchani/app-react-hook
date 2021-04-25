import React from  'react';



const  ButtonField = ({_type, _id,_properties,_rowIndex, _label,_mandatory,_editable,_max_value, _name,}) => {


   

    return (
        <div>
           <label>{_label} </label>
           <button type = {_type}  id={_id} name={_name} 
           ></button>
        </div>
    )
}


export default  ButtonField