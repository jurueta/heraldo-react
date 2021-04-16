import React from 'react';
import {Link} from 'react-router-dom'
import Noticias from './Noticias'

class ListNoticias extends React.Component{

    render(){

        return (
            <React.Fragment>    
                {this.props.listaNoticias.map((noticia) => {
                    return (
                        <React.Fragment>
                            <li key={noticia.id} className={`list-style-none card-body py-2`}>
                                <div className={`row ${ (((noticia.id % 2) == 0) && " flex-row-reverse") || "" }`}>
                                    <Noticias 
                                    titulo={noticia.titulo}
                                    preInfo={noticia.preInfo} 
                                    informacion={noticia.informacion} 
                                    imagen={noticia.imagen || ""}
                                    subNoticias={noticia.subNoticias} />
                                </div>
                            </li>
                            <hr className="my-2" />
                        </React.Fragment>
                    );
                })}
               
            </React.Fragment>
            );
    }
}

export default ListNoticias;