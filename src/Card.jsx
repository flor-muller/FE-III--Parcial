import React, {Fragment} from 'react'
import { Image, Container } from './styles/StyledComponents'
import Aquelarroz from './assets/img/aquelarroz_1.jpg'
import Matanga from './assets/img/matanga.jpg'

const styles = {
    headers: {
        margin: 0,
        color: "#935e8d"
    },
    text: {
        fontSize: "20px",
        color: "#443C68"
    }
}

const Card = ({nombre, email, equipo, lesion}) => {
    const messagePlayer = lesion === "No" ? "Te esperamos en el partido!" : "Qué pena que tengas lesiones! Te esperamos la próxima fecha";
    const messageEmail = lesion === "No" ? "Te enviaremos la confirmación a:" : "Te enviaremos recomendaciones de médicos a:";
    const source = equipo === "Akelarroz" ? Aquelarroz : Matanga;
    return (
        <Fragment>

            <Image src={source} from = 'card'/>
            
            <Container>
                <h2 style={styles.headers}>{nombre}</h2>
                <p style={styles.text}>{messagePlayer}</p>
                <p style={styles.text}>{messageEmail}</p>
                <p style={styles.text}>{email}</p>
            </Container>

        </Fragment>
    )
}

export default Card