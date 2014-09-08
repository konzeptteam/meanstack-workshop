# MEAN-Stack Workshop @ jambit
==================

A trend in the development of modern web applications is full-stack JavaScript development via the MEAN Stack.
The acronym stands for:
(M)ongoDB - a NoSQL document datastore which uses JSON-style documents to represent data
(E)xpress - a HTTP server framework on top of Node
(A)ngular - the JS framework offering declarative, two-way databinding for webapps
(N)ode – the platform built on V8’s runtime for easily building fast, scalable network applications

In the workshop we will build a simple web application, incl. frontend and backend with persistence, from scratch and attempt to demonstrate why supporters of the stack claim increased productivity.

## Prerequisites
---------------
(0. Install Git)
1.	Install [node.js](http://nodejs.org/download/ "node.js")
2.	Install [MongoDB](http://docs.mongodb.org/manual/installation/ "MongoDB")
3.	Check your successful installation:
	*	node --version
	*	mongo --version
4.	Install Bower: Execute npm install bower -g

All sources used in the workshop will be provided in this repository.
All further dependencies will be installed during the workshop.

## Initial Database Setup
---------------
1. Create a folder for MongoDB to store its data. Default is /data/db. If you choose to save your data elsewhere, create that directory and start execute mongod --dbpath=<your path>. Otherwise just execute mongod to start the MongoDB daemon after you created /data/db
2. Start the mongo shell by executing mongo
3. Execute the following commands in the mongo shell
    * use coffeeshop
    * db.coffee.insert([{"name": "Americana", "price": 1.79}, {"name": "Cappuccino", "price": 2.49}, {"name": "Latte Macchiato", "price": 2.99}, {"name": "Espresso", "price": 1.50}]);
    * db.flavors.insert([{"name": "Vanilla", "price": 0.54}, {"name": "Chocolate", "price": 0.65}, {"name": "Caramel", "price": 0.77}, {"name": "Cinnamon", "price": 0.40}]);