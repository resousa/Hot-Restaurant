'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 2424;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let waitingCustomer = [
    {
        customerName: 'Kate Lane',
        phoneNumber: '923-123-3434',
        customerEmail: 'kate@gmail.com',
        customerID: 9
      }
];

let customers = [
  {
    customerName: 'Yoda Green',
    phoneNumber: '109-767-2312',
    customerEmail: 'yoda@aol.com',
    customerID: 3
  },
  {
    customerName: 'Jon Fink',
    phoneNumber: '892-123-0021',
    customerEmail: 'jon@hotmail.com',
    customerID: 7
  },
  {
    customerName: 'Kate Lane',
    phoneNumber: '923-123-3434',
    customerEmail: 'kate@gmail.com',
    customerID: 9
  }
];

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/api/waitList', (req, res) => res.json(waitingCustomer));

app.get('/api/tables', (req, res) => res.json(customers));



app.post('/api/tables', (req, res) => {

    const newCustomer = req.body;

    if (customers.length < 5) {
        customers.push(newCustomer);
        res.json(true);
    }
    else {
        waitingCustomer.push(newCustomer)
        res.json(false);
    };
  });



  app.listen(PORT, () => console.log('App listening on PORT ' + PORT));