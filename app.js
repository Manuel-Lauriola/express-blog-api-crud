console.log(`hello world`)
//importo express
const express = require(`express`)
//assegno una variabile al risultato
const app = express()
//definisco la porta
const port = 3000
//importo le rotte 
const postsRouter = require(`./routers/routerPosts`)
//inserisco il middleware per i file statici
app.use(express.static(`./imgs`))
//il middleware per permettere l'interpretazione del body
app.use(express.json())
//utilizzo il file routers per definire le rotte
app.use(`/posts`, postsRouter)
//dico al server di rimanere in ascolto
app.listen(port, () => {
  console.log(`server in ascolto sulla porta ${port}`)
})


