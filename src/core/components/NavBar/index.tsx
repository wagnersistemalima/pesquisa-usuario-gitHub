import React from 'react';
import './styles.scss';
import { Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="row bg-primary main-nav">
            <div className="col-12 ">
                <Link to = '/'className="nav-logo-text">
                    <h2>
                        Bootcamp DevSuperior
                    </h2>                    
                </Link> 
                
            </div>
        </nav>
    );
}

export default NavBar;