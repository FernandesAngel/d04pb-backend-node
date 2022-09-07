import express from 'express';


const routes = (app) => {
  app.route('/api/v1/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"})
  })

  app.use(
    express.json(),
    // router
  )
}

export default routes
