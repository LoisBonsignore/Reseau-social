import './UserPage.css';
import { getCurrentUserProfile, updateCurrentUserProfile } from "../../lib/social-network-library-master";
import { useEffect, useState } from 'react';


function UserPage() {
    //state pour l'envie de modifier
    const [ wantModify, setWantModify] = useState(false);
    // constante d'état pour récupérer les données de getInfo
    const [infoUser, setInfoUser] = useState({})

    // Constantes d'état pour la modification du profil
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const [occupation, setOccupation] = useState();

    // fonction de guillaume pour la récuperation de données
    const getInfo = async () => {
        let result = await getCurrentUserProfile();
        //set des infos utilisateur quand la reponse du serveur arrive
        setInfoUser(result);
    }

        // formule de guillaume
    const handleRegister = async () =>  {
        let result = await updateCurrentUserProfile(firstname, lastname, email, age, occupation); 
       console.log(result)
       getInfo();
       //set du state en false pous ne pas afficher le form de modification
       setWantModify(false);
       
    }

    // pour que getInfo ne tourne pas dans le vide
    //Execution du la fonction pour recup les infos du user, a l'affichage de la page (merci useeffect, avec dependance vide)
    useEffect(() => {
        getInfo();
    },[])


    //La SEXY FUNCTION ! de thomas
    function handleInput(e, setter) {
        setter(e.target.value)
    }
    //La fonction sur le click pour changer le state et donc re rendre le composant
    function wantToModify() {
        //set du state de modification , pour afficher le form de modification
        setWantModify(true);
    }

    return (
        <div className="UserPage">
            <div className="userProfile">
                <h3 className="titreModif"> Votre profil : </h3>
                <div className="profil-line">
                    <p>Nom : </p>
                    <p className="info-user" >{infoUser.lastname}</p>
                </div>
                <div className="profil-line">
                    <p>Prénom : </p>
                    <p className="info-user" >{infoUser.firstname}</p>
                </div>
                <div className="profil-line">
                    <p>Email : </p>
                    <p className="info-user" >{infoUser.email}</p>
                </div>
                <div className="profil-line">
                    <p>Age : </p>
                    <p className="info-user" >{infoUser.age}</p>
                </div>
                <div className="profil-line">
                    <p>Occupation : </p>
                    <p className="info-user" >{infoUser.occupation}</p>
                </div>
                <button onClick={() => wantToModify()} >Modifier Profil</button>
            </div>
            {/* Affichage conditionnel de form de modification, grace au state lié a l'envie de modifier */}
            {wantModify ? 
            <div className="userModif">
                <h3 className="titreModif"> Votre futur profil : </h3>
                <div className="modif-line" >
                    <label className="elem" htmlFor="lastname">Nom : </label>
                    <input type="text" name="lastname" id="lastname" placeholder={infoUser.firstname} onInput={(e) => handleInput(e, setLastname)} />
                </div>
                <div className="modif-line" >
                    <label className="elem" htmlFor="firstname">Prénom : </label>
                    <input type="text" name="firstname" id="firstname" placeholder={infoUser.lastname} onInput={(e) => handleInput(e, setFirstname)} />
                </div>
                <div className="modif-line" >
                    <label className="elem" htmlFor="email">Email : </label>
                    <input type="text" name="email" id="email" placeholder={infoUser.email} onInput={(e) => handleInput(e, setEmail)} />
                </div>
                <div className="modif-line" >
                    <label className="elem" htmlFor="password">Âge : </label>
                    <input type="number" name="age" id="age" placeholder={infoUser.age} onInput={(e) => handleInput(e, setAge)} />
                </div>
                <div className="modif-line" >
                    <label className="elem" htmlFor="password">Poste : </label>
                    <input type="text" name="password" id="password" placeholder={infoUser.occupation} onInput={(e) => handleInput(e, setOccupation)} />
                </div>
                <button onClick={() => handleRegister()} >Valider Modification</button>
            </div>  : 
            <div></div>}
            


        </div>
    )
}


export default UserPage;