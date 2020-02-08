'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = 2424;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let customers = [
  {
    routeName: 'yodagreen',
    customerName: 'Yoda Green',
    phoneNumber: '109-767-2312',
    customerEmail: 'yoda@aol.com',
    customerID: 3
  },
  {
    routeName: 'jonfink',
    customerName: 'Jon Fink',
    phoneNumber: '892-123-0021',
    customerEmail: 'jon@hotmail.com',
    customerID: 7
  },
  {
    routeName: 'katelane',
    customerName: 'Kate Lane',
    phoneNumber: '923-123-3434',
    customerEmail: 'kate@gmail.com',
    customerID: 9
  }
];

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/api/tables', (req, res) => res.json(customers));

app.get('/api/tables/:customer', (req, res) => {
  const chosen = req.params.customer;

  console.log(chosen);

  for (let customer of customers) {
    if (customer.routeName === chosen) {
      return res.json(customer);
    }
  }

  return res.json(false);
});

app.post('/api/tables', (req, res) => {

    const newCustomer = req.body;
  
    newCustomer.routeName = newCustomer.name.replace(/\s+/g, '').toLowerCase();
  
    console.log(newCustomer);
  
    characters.push(newCustomer);
  
    res.json(newCustomer);
  });
  
  
  app.listen(PORT, () => console.log('App listening on PORT ' + PORT));