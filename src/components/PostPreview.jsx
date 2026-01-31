//Componente di presentazione che mostra l'anteprima del post 
function PostPreview({post}) {


  return (
    <>
    {/* Visualizzazione anteprima del post */}
      <h2>Titolo: {post.title}</h2>
      <h3>Autore: {post.author}</h3>
      <p>Testo: {post.body}</p>
      <span>Stato: {post.public ? "Pubblico" : "Bozza"}</span>
      
    </>
  )
}

export default PostPreview
