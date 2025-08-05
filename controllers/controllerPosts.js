//importo l'array
const posts = require('../posts')

//definisco la funzione che prenderà a carico la richiesta
//index
const index = (req, res) => {
   res.json(posts)
 }
//show
const show = (req, res) => {
   //assegno la richiesta ad una variabile
    const id = parseInt(req.params.id)
    //utilizzo find per trovare un post con l'id richiesto
    const post = posts.find(item => item.id === id);
      //se post esiste lo mostro
      if (post) {
        res.json(post);
      } //altrimenti do il messaggio di errore
        else {
            res.status(404).json({ error: "Post non trovato" });
        }
  }

  module.exports = {
    index,
    show
  }