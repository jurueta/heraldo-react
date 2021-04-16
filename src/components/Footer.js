import React from 'react';
import {Link} from 'react-router-dom'

class Footer extends React.Component{

    render(){

        return (
            <React.Fragment>
                <hr/>
        <footer>
            <div className="row">
                <div className="col-md-12">
                    <p className="text-justify my-0 fz-10" > <strong> PBX: </strong> (57) (5) 3715000 <strong> Línea de atención: </strong> (57) (5) 313-3400 / 300-910-9968 Calle 53B N° 46 - 25, Barranquilla - Atlántico <strong> Oficina Bogotá: </strong> Dirección Calle 88 No. 13 A 07 <strong> Teléfono: </strong>(1)
                        218 5733 <strong>Link:</strong>
                        <a href="https://www.elheraldo.co" target="_blank">Click acá</a>
                    </p>
                </div>
            </div>
        </footer>

            <hr/>
            </React.Fragment>
            );
    }
}

export default Footer;