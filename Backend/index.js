//  const express = require("express");
//  const { Configuration,OpenAIApi } = require("openai");
//  const cors=require("cors")
//  const bodyParser=require("body-parser")
//  require('dotenv').config();


//  const token = process.env.API_TOKEN;
//  const configuration= new Configuration({apiKey: token})
//  const openai=new OpenAIApi(configuration) 

//  const app=express();
//  app.use(bodyParser.json())
//  app.use(cors());

//  app.get('/', (req, res) => {
//      res.send('Welcome to the Coding Nexus API')
   
//  })


//  app.post('/message',(req,res)=>{

    
//      const response=openai.createCompletion({
//          engine: "text-davinci-002",
//          prompt: req.body.prompt,
//          max_tokens: 1024,
//          n: 1,
//          temperature: 0,
//          top_p:1,
//          frequency_penalty:0,
//          presence_penalty:0

//      })
   
    
//      response.then((data)=>{
//          res.send({ message:data.data.choices[0].text });
       

//      }).catch((err) => {
//          res.send(err);
//      });
//  });
//  app.listen(3000,()=>{
//      console.log('listening on port 3000')
//  })


  
//  const express = require("express");
//  const { Configuration,OpenAIApi } = require("openai");
//  const cors = require("cors");
//  const bodyParser = require("body-parser");
//  const dotenv = require('dotenv');
//  const app = express();

//  dotenv.config();

//  const token = process.env.API_TOKEN;
//  const configuration = new Configuration({apiKey: token});
//  const openai = new OpenAIApi(configuration);

//  app.use(bodyParser.json());
//  app.use(cors());

//  app.get('/', (req, res) => {
//      res.send('Welcome to the Coding Nexus API');
//  });

//  app.route('/message')
//     .get((req, res) => {
//         res.json({ message: 'Welcome to the Coding Nexus API' });
//     })
//     .post((req, res) => {
//         if (!req.body.prompt) {
//             res.status(400).json({error: 'Missing prompt in request body'});
//             return;
//         }else{
    
//         openai.createCompletion({
//             engine: "text-davinci-002",
//             prompt: req.body.prompt,
//             max_tokens: 1024,
//             n: 1,
//             temperature: 0,
//             top_p: 1,
//             frequency_penalty: 0,
//             presence_penalty: 0
//         }).then((data) => {
//             res.send({ message:data.data.choices[0].text });
//             res.send(data);
//         }).catch((error) => {
//             console.error(error);
//             res.status(500).json({ error: 'Failed to complete request' });
//         });
//     }});


//  app.listen(3002, () => {
//      console.log('Server running on port 3000');
//  });
// const {Configuration, OpenAIApi} = require('openai');
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// require('dotenv').config();

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// const config = new Configuration({
//     apiKey: process.env.API_TOKEN
// });

// const openai = new OpenAIApi(config);

// app.get('/', (req, res) => {
//     res.send('Welcome to the Coding Nexus API')
// })

// app.post('/message', (req, res) => {
//     const response = openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: req.body.message,
//         temperature: 0,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//         max_tokens: 256
//     });

//     response.then((data) => {
//         const message = {message: data.data.choices[0].text};
//         res.send(message);
//     }).catch((err) => {
//         res.send(err);
//     });
// });

// app.listen(3002, () => console.log('Listening on port 3000'));

//fullcopypaste

const {Configuration, OpenAIApi} = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const config = new Configuration({
    apiKey: process.env.API_TOKEN
});

const openai = new OpenAIApi(config);

app.get('/', (req, res) => {
    res.send('Welcome to the Coding Nexus API')
})



app.post('/message', (req, res) => {
    const response = openai.createCompletion({
        model: 'text-davinci-003',
        prompt: req.body.message,
        temperature: 0,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        max_tokens: 256
    });

    response.then((data) => {
        const message = {message: data.data.choices[0].text};
        res.send(message);
    }).catch((err) => {
        res.send(err);
    });
});

app.listen(3002, () => console.log('Listening on port 3000'));