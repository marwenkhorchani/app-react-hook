import React from 'react';
import TextField from './elements/textField'
import RichText from './elements/richText'
import ButtonField from './elements/buttonField'
const Element = ({ field: {_type, _id,_properties,_rowIndex, _label,_mandatory,_editable,_max_value,_value , _name,} }) => {
   switch (_type){
       case 'textField' : 
       return(
       <TextField
        _type={_type}
        _id={_id}
        _label={_label}
        _rowIndex={_rowIndex}
        _properties={_properties}
        _mandatory={_mandatory}
        _editable={_editable}
        _max_value={_max_value}
        _value={_value}
        __name={_name}
        

       />)
       
       case 'richText' : 
       return(<RichText
        _type={_type}
        _id={_id}
        _label={_label}
        _rowIndex={_rowIndex}
        _properties={_properties}
        _mandatory={_mandatory}
        _editable={_editable}
        _max_value={_max_value}
        _value={_value}
        __name={_name}

       />)
       
       case 'buttonField' : 
       return(<ButtonField
        _type={_type}
        _id={_id}
        _label={_label}
        _rowIndex={_rowIndex}
        _properties={_properties}
        _mandatory={_mandatory}
        _editable={_editable}
        _max_value={_max_value}
        _value={_value}
        __name={_name}
       />)
       
       default : 
       return null;
   }
   
}


export default Element