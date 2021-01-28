import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-text-title">
                Desafio do Capítulo 3, <br/> Bootcamp DevSuperior
            </h1>
            
            <p className="home-text-subtitle">
                    Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br/> Favor observar as instruções passadas no capítulo sobre a elaboração <br/> deste projeto. <br/> Este design foi adaptado a partir de Ant Design System for Figma, de <br/> Mateusz Wierzbicki: antforfigma@gmail.com
            </p>
            <Link to ='/before'>

                <Button text = 'Começar'/>
                
            </Link>
        </div>
    );
}

export default Home;