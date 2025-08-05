//importo express
const express = require(`express`)
//assegno a router il risultato della funzione
const router = express.Router()
//importo il file posts
const posts = require(`../posts`)
//faccio restituire alle richieste l'array posts
//index
router.get(`/`, (req, res) => {
  res.json(posts)
})

//show
router.get(`/:id`, (req, res) => {
  const id = req.params.id
  res.json(posts[id])
})
// //definisco le rotte
// //base
// router.get(`/`, (req, res) => {
//   res.send(`benvenuto nel blog`)
// })
// //index
// router.get(`/posts`, (req, res) => {
//   res.send(`elenco dei post`)
// })
// //show
// router.get(`/:id`, (req, res)=> {
//   const id = req.params.id
//   res.send(`dettagli del post ${req.params.id}`)
// })
// //store
// router.post(`/`, (req, res)=> {
//   res.send(`crea una nuova pizza`)
// })
// //update
// router.put(`/:id`, (req, res)=> {
//   const id = req.params.id
//   res.send(`modifica integrale del post ${req.params.id}`)
// })
// //modify
// router.patch(`/:id`, (req, res)=> {
//   const id = req.params.id
//   res.send(`modifica parziale del post ${req.params.id}`)
// })
// //delete
// router.delete(`/:id`, (req, res) =>{
//   const id = req.params.id
//   res.send(`elimina il post ${req.params.id}`)
// })

//esporto il router
module.exports = router