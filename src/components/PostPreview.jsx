//Componente di presentazione che mostra l'anteprima del post 
function PostPreview({ post }) {


    return (
        <>
            {/* Visualizzazione anteprima del post */}
            <div className="card mt-3">
                <div className="card-body">
                    <h2 className="card-title">
                        Titolo: {post.title}
                    </h2>

                    <h6 className="card-subtitle mb-2 text-muted">
                        Autore: {post.author}
                    </h6>

                    <p className="card-text">
                        {post.body}
                    </p>

                    <span
                        className={`badge ${post.public ? "bg-success" : "bg-secondary"}`}>

                        {post.public ? "Pubblico" : "Bozza"}
                    </span>
                </div>
            </div>

        </>
    )
}

export default PostPreview
