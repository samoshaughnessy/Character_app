const jwt = require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const morgan = require('morgan')

const knexfile = require('./knexfile.js').development
const knex = require('knex')(knexfile)

const auth = require('./auth/auth.js')(knex)
const config = require('./auth/config')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(morgan('combined'))

const AuthService = require('./services/AuthService')
const authService = new AuthService(knex, jwt, config)

const AuthRouter = require('./routers/AuthRouter')
const authRouter = new AuthRouter(express, axios, authService)

const CharacterService = require('./services/CharacterService')
const characterService = new CharacterService(knex)

const CharacterRouter = require('./routers/CharacterRouter')
const characterRouter = new CharacterRouter(express, characterService, auth)

const WeaponArmourService = require('./services/WeaponArmourService.js')
const weaponArmourService = new WeaponArmourService(knex)

const WeaponArmourRouter = require('./routers/WeaponArmourRouter')
const weaponArmourRouter = new WeaponArmourRouter(
  express,
  weaponArmourService,
  auth
)

app.use('/api/auth', authRouter.router())
app.use('/api/character', characterRouter.router())
app.use('/api/weaponsarmour', weaponArmourRouter.router())

app.listen(8080, () => {
  console.log('Listening to port 8080')
})
