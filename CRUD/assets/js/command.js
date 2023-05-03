console.log ('Construindo um CRUD')

// [CRUD] JavaScript Básico
var user = {
  userName: ['Alan','Silva','Bonfim']
}

var indexUser = Math.floor(Math.random() * user.userName.length);

const miniTwitter = {
    posts: [
      {
        id: 1,
        ower: 'omariosouto',
        content: 'Meu primeiro tweet'
      }
    ],
  };
  
  // CREAT
   function newPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        username: (user.userName[indexUser]),
        ower: dados.ower,
        content: dados.content
    });
  }
  newPost({ower: 'omariosouto', content: 'Segundo tweet'})
  newPost({ower: 'Maria', content: 'Acho que estou entendento'})
  newPost({ower:'Sabrina', content: 'Oi pessoal!'})
  
  console.log(miniTwitter.posts)

  // READ
  function readerPosts() {
    return miniTwitter.posts;
  }
  
console.log(readerPosts())

  //UPDATE
  function newContentPost(id, novoConteudo) {
    const postUpdated = readerPosts().find((post) => {
        return post.id === id;
    })
    console.log(postUpdated)
    postUpdated.content = novoConteudo
  }
  newContentPost(1,'Nova informação')

  console.log(readerPosts())

  // DELETE
  function apagaPost(id) {
    const listaDePostsAtualizada = readerPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaDePostsAtualizada
  }
apagaPost(1);
apagaPost(2);
apagaPost(3);

console.log(readerPosts());