console.log(`hello world`)
//importo express
const express = require(`express`)
//assegno una variabile al risultato
const app = express()
//definisco la porta
const port = 3000
//importo le rotte 
const postsRouter = require(`./routers/routerPosts`)
//importo il file posts
const posts = require(`./posts`)
//inserisco il middleware per i file statici
app.use(express.static(`./imgs`))
//dico al server di rimanere in ascolto
app.listen(port, () => {
  console.log(`server in ascolto sulla porta ${port}`)
})
//utilizzo il file routers per definire le rotte
app.use(`/posts`, postsRouter)


