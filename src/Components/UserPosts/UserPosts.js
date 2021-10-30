import './UserPosts.css';
import { getPosts, getCurrentUserProfile } from "../../lib/social-network-library-master";
import { useState, useEffect } from 'react';
import Post from '../Post/Post';

function UserPosts() {

    // constantes d'état
    const [postsList, setPostsList] = useState([]);
    const [user, setUser] = useState({});

    // fonction de guillaume pour récuperer les id (ici le nom parce que les Id elles changent)
    const recupId = async () => {
        let result = await getCurrentUserProfile();
        setUser(result.firstname);
    }

    // fonction de guillaume pour récuperer tous les posts
    const recupPosts = async () => {
        let results = await getPosts();
        setPostsList(results.posts);
    }

    // Lancement au chargment (parce qu'entre [])
    // si pas de crochets, il le fera tout le temps
    useEffect(() => {
        recupPosts();
        recupId();

    }, [])

    // fonction pour récuprer les post en fonction de l'user (trouvés plus haut)
    const change = () => {
     return postsList.map((post, index) => {
        if (post.firstname === user) {
            return (
                <div>
                
                <div className="newDiv" key={index} >  {post.content} + {post.title} </div> 
                </div>
            )
        }
    })}

    // pour ne pas que le filtre tourne en boucle

    // content && title
    return (
        <div className="UserPosts">
           <h3 className="titrePosts"> Nos anciens post, qui sont trop beau !</h3>
        {change()}
           
        </div>
    )
}


export default UserPosts;