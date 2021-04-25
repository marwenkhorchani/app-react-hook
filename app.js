const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const cors = require('cors')


app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/formulaire',(req,res)=>{

    res.send([{

  "_id": "00005fd7f1fa00000000000001aa",
  "_name": "Test technique ",
  "_type": "form",
  "_children": [
    {
      "_id": "1",
      "_rowIndex": "0",
      "_name": "name",
      "_type": "textField",
      "_label": "Name",
      "_properties": {
        "_mandatory": true,
        "_editable": true,
        "_max_value": 10,
        "_value": ""
      }
    },
    {
      "_id": "2",
       "_rowIndex": "0",
      "_name": "lastname",
      "_type": "textField",
      "_label": "LastName",
      "_properties": {
        "_mandatory": true,
        "_editable": true,
        "_max_value": 10,
         "_value": ""
      }
    },
     {
      "_id": "3",
       "_rowIndex": "2",
      "_name": "description",
      "_type": "richText",
      "_label": "Description",
      "_properties": {
        "_mandatory": true,
        "_editable": true,
        "_max_value": 40,
         "_value": ""
      }
    },
     {
      "_id": "4",
       "_rowIndex": "1",
      "_name": "group",
      "_type": "textField",
      "_label": "LastName",
      "_properties": {
        "_mandatory": true,
        "_editable": false,
        "_max_value": null,
         "_value": "groupA"
      }
    },
     {
      "_id": "5",
       "_rowIndex": "4",
      "_name": "valider",
      "_type": "buttonField",
      "_label": "Valider",
      "_properties": {
        "_mandatory": null,
        "_editable": null,
        "_max_value": null,
         "_value": "http://bachatec.com/"
      }
    }
  ],
  "_form_id": "form",
  "_created_by": "bachatec",
  "_updated_at": "2021-03-24 16:03",
  "_updated_by": "karim"
}
    ])
})

app.post('/formulaire'),(req,res)=>{
 res.send('POST request to the homepage');
  var obj = req.body;
  for(var key in obj){
    
  }
}


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})