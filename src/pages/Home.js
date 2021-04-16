import React from 'react';
import ListNoticias from '../components/ListNoticias';

class Home extends React.Component{
    render() {

        
        const listaNoticias = [
            {
                id: 1,
                titulo: "Duque anticipa crisis de deuda si no pasa la reforma tributaria",
                tipoNoticia: 1,
                imagen: "https://www.elheraldo.co/sites/default/files/styles/820x461/public/articulo/2021/04/16/duque.jpg?itok=ZZLjlJOc",
                preInfo: " \"Quienes se dejen llevar por la demagogia y la postergación de enfrentar el problema, van a detonar quizás una crisis de la deuda\", dijo.",
                informacion: `El presidente Iván Duque anticipó este viernes una crisis de deuda si no se aplica la reforma tributaria en el país.
                "La política pública fiscal, de la cual dependen todas las demás políticas públicas, va a estar en el reto más grande desde la posguerra de la Segunda Guerra Mundial", afirmó el jefe de Estado en el lanzamiento de la Red Latinoamericana de Exalumnos de la Escuela de Políticas Públicas McCourt de la Universidad de Georgetown.`,
                subNoticias:[
                    {
                        id: 1,
                        titulo: "Piden que uniformados no sean los jueces de la justicia militar",
                        preInfo: "Organizaciones de derechos humanos piden que en la jurisdicción que juzga a policías y militares por delitos del servicio se garantice imparcialidad.",
                    },
                    {
                        id: 2,
                        titulo: "‘Bolillo’ explota, arremete contra juveniles, pero cree la clasificación",
                        preInfo: "El técnico del DIM aseguró que los contagios por covid debilitaron el plantel este semestre y por eso buscarán en la última fecha la clasificación. ",
                    },
                    {
                        id: 3,
                        titulo: "Agreden a operario de Air-e en el barrio El Pueblito",
                        preInfo: "La empresa rechazó el hecho, donde un hombre golpeó al operario mientras este hacía unos arreglos en un poste.",
                    },
                ]

            },
            {
                id: 2,
                titulo: "Falleció de covid Luis Carlos Gutiérrez, docente investigador de Uniatlántico",
                tipoNoticia: 1,
                imagen: "https://www.elheraldo.co/sites/default/files/styles/820x461/public/articulo/2021/04/16/mueredocenteuniatlantico.jpg?itok=tihCtzU8",
                preInfo: "Lideró la creación y puesta en marcha del Laboratorio de Investigación en Biología Molecular de la Universidad del Atlántico.",
                informacion: `La comunidad universitaria en Barranquilla se encuentra de luto tras el fallecimiento del docente investigador Luis Carlos Gutiérrez, quien además lideró la creación y puesta en marcha del Laboratorio de covid en la Universidad del Atlántico.
                Gutiérrez Moreno falleció tras complicaciones derivadas del virus. Era biólogo, con 15 años aportando conocimientos y experiencias a dicha universidad.`,
                subNoticias:[
                    {
                        id: 1,
                        titulo: "Raúl Castro renuncia a la jefatura del Partido Comunista de Cuba",
                        preInfo: "Castro deploró durante su intervención en la apertura del VIII Congreso del PCC el endurecimiento de las sanciones de Washington.",
                    },
                    {
                        id: 2,
                        titulo: "El coronavirus no infecta el cerebro, pero puede causarle importantes daños",
                        preInfo: "Expertos de la Universidad de Columbia examinaron los cerebros de 41 fallecidos con covid-19.",
                    },
                    {
                        id: 3,
                        titulo: "Vacunan por equivocación a 46 personas contra la covid en lugar de la gripe",
                        preInfo: "Los inmunizantes fueron confundidos, tras el envio de un lote de antídotos contra la covid a un puesto de vacunación contra la influenza en Brasil.",
                    },
                ]

            }
        ];

        return (
            <ListNoticias listaNoticias={listaNoticias} />
        )
    }
}

export default Home 