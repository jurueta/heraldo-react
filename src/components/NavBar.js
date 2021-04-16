import React from 'react';
import {Link} from 'react-router-dom'
import imgNoticia from '../images/newspaper.png'
import imgJudiciales from '../images/court-hammer.png'
import imgDeportes from '../images/sport.png'
import imgClasificados from '../images/classified.png'
import imgPolitica from '../images/capitol.png'

class NavBar extends React.Component{

    render() {
        
        const listMenu = [
            {
                'id': 1,
                'name': 'Noticias',
                'image': imgNoticia,
                'habilitado': true
            },
            {
                'id': 2,
                'name': 'Judiciales',
                'image': imgJudiciales,
                'habilitado': true
            },
            {
                'id': 3,
                'name': 'Deportes',
                'image': imgDeportes,
                'habilitado': true
            },
            {
                'id': 4,
                'name': 'Clasificados',
                'image': imgClasificados,
                'habilitado': true
            },
            {
                'id': 5,
                'name': 'Política',
                'image': imgPolitica,
                'habilitado': false
            }
        ];

        return (
            <ul className="nav justify-content-center">
                {listMenu.map((item) => {
                    return (
                        <React.Fragment>
                            <li key={item.id}>
                                <Link className={`nav-link plink d-flex py-0 align-items-center ${item.habilitado ? '' : 'disabled'}`} to='/' >
                                    <img src={item.image} width="15" height="15" className="align-middle" alt={item.name}/>
                                    <p className="ml-2">{item.name} {item.id == 4 && <span className="badge badge-pill badge-success">new</span>} </p>
                                </Link>
                            </li>
                        </React.Fragment>
                    );
                })}
            </ul>
        )
    }

}

export default NavBar;