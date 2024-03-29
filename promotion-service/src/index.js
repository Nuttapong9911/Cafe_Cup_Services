const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const cors = require('cors')
require('./connection/mongo').connect()
const routes = require('./routes/index')

const PORT = process.env.APP_PORT

const app = express()
app.use(express.json())
app.use(routes)
app.use(cors())
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'cafe promotion-service API documentation'
     },
     servers: [
      {
        url: `http://localhost:${PORT}`,
      }
    ]
  },
  apis: ['src/routes/index.js']
}

const swaggerSpec = swaggerJsDoc(swaggerOptions)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.listen(PORT, (err) => {
  if (err) console.log('Error on server setup')
  console.log(`Serverz is listening on port ${PORT}`)
})