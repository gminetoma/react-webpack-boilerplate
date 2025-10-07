import { Router } from 'express'

const apiRouter = Router()

apiRouter.get('/', (_request, response) => {
  response.json({
    message: 'Hello from API',
  })
})

export default apiRouter
