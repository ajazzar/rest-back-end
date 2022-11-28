# Periodic Tables

Final Capstone - Aaron Jazzar

## Links

* Deployed App: [Periodic Tables]( https://restaurant-reservations-qe9a2-hazel.vercel.app/dashboard)
  
## Documentation of API

| Route        | Methods                           |Description   |
|--------------|----------------------------------|------------------------------------------ |
| /reservations   | GET     |            returns a list of reservations for current date|
| /reservations         | POST    |       creates a new reservation|
| /reservations?date=YYYY-MM-DD   | GET     |  returns a list of reservations for a given date|
| /reservations/:reservation_id | GET     |  returns a reservation matching a given id|
| /reservations/:reservation_id   | PUT       | updates a reservation matching a given id|
| /reservations/:reservation_id/status | PUT     | updates the status of a reservation for a given id|
| /tables                 | GET     |      returns a list of tables|
| /tables                | POST    |          creates a new table|
| /tables/:table_id/seat    | PUT     |      moves reservation to a table for a given id|
| /tables/:table_id/seat  | DELETE  |  remove a reservation from a table for a given id|

## Dashboard

![top of dashboard](/images/Dashboard1.png)
![bottom of dashboard](/images/Dashboard2.png)

## New Reservation

![new-reservation](/images/NewReservation.png)

## Search By Phone Number

![search-phone](/images/SearchPhone.png)

## New Table

![new-table](/images/NewTable.png)

## Seat Reservation

![seat-reservation](/images/SeatReservation.png)

## Edit Reservation

![seat-reservation](/images/EditReservation.png)

## Summary

Built a full-stack web app for use as a tool to manage restaurant reservations.
Has the following features:

* Users can create, edit, or cancel a reservation
* Users can create a table in a Restaurant
* Users can seat reservations to a table
* Users can finish a table so other reservations can be added to the table
* Users can search for reservations by entering a phone number

## Stack

* React - front-end JavaScript library for building user interfaces based on UI components
* Bootstrap - CSS framework directed at responsive, mobile-first front-end web development
* Node - back-end JavaScript runtime environment
* Express - back-end web application framework for building RESTful APIs with Node
* PostgreSQL - relational database management system emphasizing extensibility and SQL compliance
* Knex.js - SQL query builder designed to be flexible, portable, and fun to use.

## Other Tools

* Git and GitHub
* Vercel

## Installation

1. Go to the project root after downloading the project
2. Run `npm install` to install dependencies
3. Start up the front end with `npm run start:frontend`
4. Start up the back end with `npm run start:backend`
