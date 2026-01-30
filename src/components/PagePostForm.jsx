import { useState } from "react";


function PagePostForm() {
  // Stato del form : rappresenta il post in fase di compilazione
  const [post, setPost] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })
  // Gestisce il cambiamento di tutti i campi del form (input, textarea, checkbox)
  const handlePostChange = (e) => {
    const { name, type, value, checked } = e.target

    setPost(prev => ({
      ...prev,
      // Aggiorna dinamicamente la proprietà corretta del post
      [name]: type === "checkbox" ? checked : value
    }))
    console.log("stiamo esseguendo la funzione");
    console.log("name: ", name, "type: ", type, "value: ", value, "check: ", checked);

  }
  //Gestiamo L'invio del form con React

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("vediamo", post);

  }


  return (
//Intercettiamo l'invio del form evitando il comportamento di default del browser
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        {/* Form controllato: i valori degli input riflettono lo stato React */}
        <label htmlFor="exampleInputEmail1" className="form-label">Autore</label>
        <input onChange={handlePostChange} name="author" value={post.author} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlfFor="exampleInputPassword1" className="form-label">Titolo</label>
        <input onChange={handlePostChange} name="title" value={post.title} type="text" className="form-control" id="exampleInputPassword1" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Descrizione</label>
        <textarea onChange={handlePostChange} name="body" value={post.body} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="mb-3 form-check">
        <input onChange={handlePostChange} name="public" type="checkbox" checked={post.public} className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Public</label>
      </div>
      <button className="btn btn-primary" type="submit">Invia</button>


    </form>


  )
}


export default PagePostForm
