const express = require('express')
const nunjucks = require('nunjucks')
const server = express()


server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function (req, res) {
  return res.render("app")
})

server.listen(5000, function () {
  console.log('Server rodando!')
})

/* Se o get estiver depois do 404 nao pega*/
/*  const curso = dataD.find(function(video){
          if(video.id == id){
              return video.id = id
          }
          if(!video){
            return res.send("video not found")
        }
      })
      return res.render("curso", {cursin:curso}) */