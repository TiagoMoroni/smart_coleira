const express = require('express')
const app = express()

const routes = require('./routes')

const cors = require('cors')

app.use(cors())

app.use(routes)

app.listen(3000)

const { Sequelize } = require('sequelize');

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('postgres://dxoardhn:d2tYwBfv48A2P7LkQboCVObh70yEoNs3@tuffi.db.elephantsql.com/dxoardhn');

aaa()

async function aaa(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}