//Import des dependances et du style
import './Home.css';
import { getPosts , createPost } from "../../lib/social-network-library-master";
import { useEffect, useState } from 'react';
//Import des composants enfants
import Post from '../Post/Post';

function Home({isLog}) {
    //State global
    //La Liste des posts dans un array
    const [postsList, setPostsList] = useState([]);
    //Les inputs de la creation de post
    const [title, setTitle] = useState();
    const [content, setContent ] = useState();
    ////Recup des post
        //Fonction de guillaume qui recupere les posts
    const findPost = async () => {
        let result = await getPosts();
        return result
    }
    // au chargement de la page execute la fonction de guillaume
    useEffect(()=>{
        findPost().then((rep) => {setPostsList(rep.posts)})
    },[])

    function refresh() {
        findPost().then((rep) => {setPostsList(rep.posts)})
    }

    ////Pour poster
    //La fonction générique pour les input de creation de post
    function handleInput(e, setter) {
        setter(e.target.value)
    }
    //Fonction de guillaume pour poster
    const handlePost = async () => {
        let result = await createPost(title, content);
        console.log(result.success);
        /* document.location.replace('/'); */
        findPost().then((rep) => {setPostsList(rep.posts)})
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";
        setTitle("");
        setContent("");
    }

    return (
        <div className="Home">
            {/* Affiche conditionnel des input pour poster, si log affiché, sinon pas affiché*/}
            {isLog ? 
            <div className="add-post-container">
                <label htmlFor="title">Trouve un titre :</label>
                <input type="text" name="title" id="title" onInput={(e) => handleInput(e, setTitle)} />
                <label htmlFor="content">Lache ton post :</label>
                <input type="text" name="content" id="content" onInput={(e) => handleInput(e, setContent)} />
                <button onClick={() => handlePost()} >Poster</button>
            </div> : 
            <div></div>
            }
            {/* Boucle sur le tableau qui contient les posts, et crée un composant Post de Lois */}
            {postsList.map((post, key)=> {
                return(
                    <Post key={key} post={post} refresh={refresh} isLog={isLog}/>
                )
            })}
        </div>
    )
}

export default Home;