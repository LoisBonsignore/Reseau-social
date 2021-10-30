import './Navbar.css';
import { Link } from "react-router-dom";
import { isUserLoggedIn } from '../../lib/social-network-library-master';
import { useEffect } from 'react';
import Logo from '../../img/logo2.png';

function Navbar({ isLog , setIsLog }) {

    const checkLog = async () => {
        let result = await isUserLoggedIn(); 
        return result
    }
    useEffect(() => {
        checkLog().then((rep) => {
            setIsLog(rep)
        })
    }, [isLog, setIsLog])

    //Fonction de logout a la mano
    function handleLogout() {
        //suppression du token
        localStorage.removeItem('@social-network:token');
        //relance de la fonction de check login
        checkLog().then((rep) => {
            //Une fois la reponse obtenu change le state global de loggin
            setIsLog(rep)
            //redirection ves la page d'accueil
            document.location.replace('/');
        })
    }
    
    return (

        <div className="navbar">
            <Link id="logo" to="/"><img className="logo" src={Logo}  alt="logo" /></Link>
            {/* Affiche conditionnel du menu */}
            {/* si oui affiche ca */}
            {isLog ? 
                <div className="menu">
                    <button onClick={() => handleLogout()}>Log Out</button>
                    <Link to="/"><button>Accueil</button></Link>
                    <Link to="/userposts"><button>Mes Posts</button></Link>
                    <Link to="/userpage"><button>Mon Profil</button></Link>
                </div> : 
                //* sinon affiche ca *//
                <div className="menu">
                    <Link to="/createaccount"><button>Créer Compte</button></Link>
                    <Link to="/login"><button>Se Connecter</button></Link>
                </div>
            }          
        </div>
    )
}

export default Navbar;