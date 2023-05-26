import fs from 'node:fs'

export const routes = [
  {
    method: 'POST',
    path: '/tasks',
    handler: (req, res) => {
     const {body} = req
     console.log('body: ', body);
      return res.writeHead(201).end()
    }
  },
  {
    method: 'GET',
    path: '/tasks',
    handler: (req, res) => {
      res.end('Metodo GET TESTE')
    }
  },
  {
    method: 'PUT',
    path: '/tasks',
    handler: (req, res) => {
      console.log('req: ', req.body);
      return res.writeHead(204).end()
    }
  },
  {
    method: 'DELETE',
    path: '/tasks/:id',
    handler: (req, res) => {
      const {id} = req.params
      console.log('id: ', id);
    }
  },
  {
    method: 'PATCH',
    path: '/tasks/:id/complete',
    handler: (req, res) => {
      const {id} = req.params
      console.log('id: ', id);
    }
  }
]