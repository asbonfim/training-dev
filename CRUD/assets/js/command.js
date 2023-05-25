console.log ('Construindo um CRUD')//

// [CRUD] // Dados utilizados para criação dos post's
var data = {
  user: {
    userName: ['Alan','Silva','Bonfim','Maria','José']
  },
  text: {
    textPost: ['Bom dia!', 'Boa tarde!']
  },
  text2: {
    textPost: ['Tudo bem?', 'Tenha um ótimo dia', 'Queria um sorvete', 'Preciso ir a farmacia', 'Que dia é hoje?', 'Amanhã é sexta-feira']
  }
};

// Comando para selecionar um valor aleatório nos arrays acima:
function randomPost(){
  var indexUser = Math.floor(Math.random() * data.user.userName.length);
  var indexText = Math.floor(Math.random() * data.text.textPost.length);
  var indexText2 = Math.floor(Math.random() * data.text2.textPost.length);

  return {
    user: data.user.userName[indexUser],
    text: `${data.text.textPost[indexText]} ${data.text2.textPost[indexText]}`,
  };
}

console.log(randomPost)

// Primeiro post que exemplifica o que estamos realizando
const miniTwitter = {
    posts: [
      {
        id: 1,
        content: 'Meu primeiro tweet'
      }
    ],
  };
  
  // CREAT - Função para criação do post
   function newPost(dados) {
    var randomValues = randomPost();
    var newPost = {
        id: miniTwitter.posts.length + 1,
        user: randomValues.user,
        post: randomValues.text
    };
    miniTwitter.posts.push(newPost)
  }

  newPost()
  newPost()
  newPost()
  
  console.log(miniTwitter.posts)

  // READ - Função para ler os posts
  function readerPosts() {
    return miniTwitter.posts;
  }
  
console.log(readerPosts())

  //UPDATE - Função para atualizar o content de um post
  function newContentPost(id, newContentPost) {
    const postUpdated = readerPosts().find((post) => {
        return post.id === id;
    })
    console.log(postUpdated)
    postUpdated.post = newContentPost
  }
  newContentPost(2,'Nova informação')

  console.log(readerPosts())

  // DELETE
  function delPost(id) {
    const listPostUpdate = readerPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listPostUpdate
  }
delPost(1);
delPost(2);
delPost(3);

console.log(readerPosts());
