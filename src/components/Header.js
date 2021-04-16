import React from 'react';
import NavBar from './NavBar';

class Header extends React.Component{

    render(){

        return (
            <React.Fragment>
                <div className="d-flex align-items-center justify-content-center">
                    <img className="img-fluid" width="500px" src="https://www.elheraldo.co/sites/all/themes/elheraldo/images/el-heraldo-logo.svg" alt="Logo"></img>
                </div>

                <hr className="my-1" />

                    <NavBar />

                <hr className="my-1" />
           
            </React.Fragment>
            );
    }
}

export default Header;