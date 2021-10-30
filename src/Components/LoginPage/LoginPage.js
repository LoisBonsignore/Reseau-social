import './LoginPage.css';
// import de la fonction de guillaume pour le login
import { login } from "../../lib/social-network-library-master";
import { useState } from 'react';


function LoginPage({ isLog , setIsLog }) {
    // Creation de 1 state par input
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    //Fonction callback sur event des input
    function handleInput(e, setter){
        setter(e.target.value)
    }
    //Fonction callback du click sur le bouton "Se Connecter" 
    //Elle check si le compte existe et return "true" ou "false"
    // et créer un token dans localStorage.getItem("@social-network:token")
    const handleLogin = async () => {
        let result = await login(email, password);
        if (result.success) {
            setIsLog(true)
            document.location.replace('/');
        } else {
            console.log("connection echoué");
        }
    }

    
    
/***A FAIRE Clean des inputs apres l'envoie au serveur***/

    return (
        <div className="LoginPage">
            <div className="login-container">
                <h2>Connecte toi :</h2>
                <div className="login-box">
                    <div className="login-line">
                        <label htmlFor="email">Ton adresse mail : </label>
                        <input type="text" name="email" id="email" placeholder="Votre adresse mail" onInput={(e) => handleInput(e,setEmail)}/>
                    </div>
                    <div className="login-line">
                        <label htmlFor="password">Ton mot de passe : </label>
                        <input type="password" name="password" id="password" placeholder="Votre mot de passe" onInput={(e) => handleInput(e,setPassword)}/>
                    </div>
                    <button onClick={() => handleLogin()} >Se Connecter</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;