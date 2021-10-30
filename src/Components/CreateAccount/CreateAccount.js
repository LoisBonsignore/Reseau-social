import './CreateAccount.css';
// import de la fonction de guillaume pour la creation de compte
import { register } from "../../lib/social-network-library-master";
import { useState } from 'react';

function CreateAccount() {
    //Creation de 1 state par input
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    // Fonction Callback sur event au click du bouton "Créer Compte"
    // return "true" ou "false"
    const handleRegister = async () => {
        let result = await register(firstname, lastname, email, password);
        if (result.success) {
            console.log("Compte crée");
            document.location.replace('/login');
        } else {
            console.log("Erreur compte pas crée");
        }
    }
    //Fonction callback sur event des input
    function handleInput(e, setter){
        setter(e.target.value)
    }
/***A FAIRE Clean des inputs apres l'envoie au serveur***/
    
    return (
        <div className="formulaire-container">
            <h2>Inscrit toi : </h2>
            <div className="formulaire">
                <div className="form-line">
                    <label htmlFor="lastname">Ton Nom : </label>
                    <input type="text" name="lastname" id="lastname" placeholder="Votre nom" onInput={(e) => handleInput(e,setLastname)} />
                </div>
                <div className="form-line">
                    <label htmlFor="firstname">Ton prénom : </label>
                    <input type="text" name="firstname" id="firstname" placeholder="Votre prénom" onInput={(e) => handleInput(e,setFirstname)} />
                </div>
                <div className="form-line">
                    <label htmlFor="email">Ton adresse Email : </label>
                    <input type="text" name="email" id="email" placeholder="Votre mail" onInput={(e) => handleInput(e,setEmail)} />
                </div>
                <div className="form-line">
                    <label htmlFor="password">Ton mot de passe :</label>
                    <input type="password" name="password" id="password" placeholder="Votre mot de passe" onInput={(e) => handleInput(e,setPassword)} />
                </div>
                <button onClick={() => handleRegister()} >Créer Compte</button>
            </div>
        </div>
    )
}

export default CreateAccount;