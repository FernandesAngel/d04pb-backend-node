import express from 'express';
import validateUser from '../middlewares/user.middleware.js';
import router from './userRoutes.js';



const routes = (app) => {
  // app.route('/api/v1/').get((req, res) => {
  //   res.status(200).send({titulo: "Backend Project"})
  // })

  app.use("/api/v1/user", validateUser)
  app.use("/api/v1/users/:id", validateUser)

  app.use(
    express.json(),
    router
  )
}

export default routes
