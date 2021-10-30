import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {

    return (
            <footer className="box">
                <div className="copy">
                    &copy; Jeremy, le Bon,  &copy; Loïs-Ronan, la brute  &copy; Jeff et le truant pour le Bocal Accademy, mais l'Aquarium Instute &trade; &reg;
                </div>
                <div className="general">
                    <Link className="texte" to="/RGPD">RGPD</Link> <Link className="texte" to="/Contact">Contact</Link>
                </div>
            </footer>
    );
}

export default Footer;