import React from 'react';
import {Link} from 'react-router-dom'

class Noticias extends React.Component{

    render(){
        console.log(this.props);
        return (
            <React.Fragment> 

                       <div className="col-md-6">
                            <h5 className="card-title mb-2 fw-bold fz-25">{this.props.titulo}</h5>
                                <div className="thumbnail">
                                    <img src={this.props.imagen} className="img-fluid img-thumbnail" alt="example" />
                                    {<div className="caption">
                                        <p className="text-justify mb-0 lheight-1-2 fz-12 gray"> {this.props.preInfo} </p>
                                    </div>}
                                </div>
                            <h6 className="card-subtitle mb-2 text-muted mb-3">{}</h6>
                            <a href="#">Ver mas →</a>
                       </div>
                       
                       <div className="col-md-6 h-522 overflow-auto">
                            <ul className="list-group list-group-flush">
                                { this.props.subNoticias ? this.props.subNoticias.map((noticia) => {
                                    return(
                                        <li key={noticia.id} className="list-group-item">
                                        <h3 className="fw-bold" >{noticia.titulo}</h3>
                                        <p className="gray fz-12">{noticia.preInfo}</p>
                                        <a href="#">Ver mas →</a>
                                    </li>
                                    )
                                }) : "" }

                            </ul>
                       </div>

            </React.Fragment>
            );
    }
}

export default Noticias;