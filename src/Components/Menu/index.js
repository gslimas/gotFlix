import React from 'react';
import logoRoxa from '../../assets/logoRoxa.png';
import '../Menu/menu.css';
import Button from '../Button';

function Menu(){
    return (
        <nav  className="Menu">            
            <a href="/">
                <img className="Logo" src={logoRoxa} alt="GOTFLIX"/>
            </a>
            <Button as="a"className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;