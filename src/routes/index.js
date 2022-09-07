import express from 'express';
import router from './userRoutes.js';



const routes = (app) => {
  app.route('/api/v1/').get((req, res) => {
    res.status(200).send({titulo: "Backend Project"})
  })

  app.use(
    express.json(),
    router
  )
}

export default routes
