import "./Post.css";
import { addLike, addComment } from '../../lib/social-network-library-master';
import { useState } from 'react';
//Recuperation de props venant du parent dont une fonction qui refais une demande au serveur pour recup les posts
function Post({ post, refresh , isLog}) {
    //constant d'état pour les commentaires
    const [comment, setComment] = useState();


    //fonction de Guillaume pour ajouter les likes (par ID) dans le back
    const handleLikes = async () => {
        let result = await addLike(post._id);
        console.log(result.success);
        refresh();
    }


    function handleComment(e, setter) {
        setter(e.target.value);

    }
    //fonction de Guillaume 
    const handleClickComment = async () => {
        let result = await addComment(post._id, comment);
        //un log pour pas que la console me gave
        console.log(result.success);
        //mise sous variable du input commentaire
        let inputValue = document.getElementById("comment-input");
        //reset du champ
        inputValue.value = "";
        //et set du state
        setComment(inputValue.value);
        //appel de la fonction venant du parent
        refresh();

    }

    
    return (
        <div className="post-container">
            <div className="post-card">
                <div className="title-post">
                    <h3>{post.title}</h3>
                </div>
                <div className="body-post">
                    <p>{post.content}</p>
                </div>
                <div className="like-line">
                    <button className="boutton-like" onClick={() => handleLikes()}>J'aime</button>
                    <p>{post.likes.length} likes</p>
                    <p className="user">De {post.firstname} {post.lastname}</p>
                </div>
            </div>
            <div className="commentaire-box">
                {/* affichage conditionnel de la bar de commentaire */}
                {isLog ? 
                <div className="comment-add">
                    <input id="comment-input" type="text" placeholder="ajouter votre commentaire" onInput={(e) => handleComment(e, setComment)} />
                    <button onClick={() => handleClickComment()}>Commenter</button>
                </div>
                     : <div></div>
                }
                <div className="comment-list"> 
                    {post.comments.map((value, key)=>{
                        return(
                            <div className="comment-content" key={key}>
                                <p>{value.content}</p>
                                <p>De {value.firstname} {value.lastname}</p>
                            </div>
                    )})}
                </div>
            </div>
        </div>
    )


};

export default Post;

