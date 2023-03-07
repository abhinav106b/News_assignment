import React from 'react';
import {Card,Navbar,Nav,NavItem,NavLink,Jumbotron} from 'reactstrap';



function Header(){
    return(
        <div className='row-header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-6 text-center'>
                        <p className='nav-txt'>News</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;