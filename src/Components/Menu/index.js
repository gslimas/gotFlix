import React from 'react';
import gotflix from '../../assets/gotflix.png';
import '../Menu/menu.css';
import Button from '../Button';

function Menu(){
    return (
        <nav  className="Menu">            
            <a href="/">
                <img className="Logo" src={gotflix} alt="GOTFLIX"/>
            </a>
            <Button as="a"className="ButtonLink" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}

export default Menu;