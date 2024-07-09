import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareInstagram, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import { login, signup } from '../services/user'


const Login = () => {

    const [isMember, setIsMember] = useState(false)
    const onSubmit = async (event) => {


        event.preventDefault();

        const formData = new FormData(event.target)
        const dataObject = Object.fromEntries(formData)

     

        if (isMember) {
            const userData = await login(dataObject);
            
        } else {
            const userData = await signup(dataObject);
            
        }

    }

    return (
        <div>
            <div className="container-div-contacto">

                <div className="box-info">
                    <div>
                        <h1>Únete al Club</h1>
                    </div>
                    <div className="links">
                        <a href='#'><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faSquareInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faSquareWhatsapp} /></a>
                    </div>
                </div>
                <form onSubmit={onSubmit}>
                    <h3>{isMember ? "Login" : "Registrate"}</h3>
                    {!isMember && (
                        <>
                            <div className="input-box">
                                <input id='firstname' type="text" required placeholder="Nombre" name='firstname' />
                            </div>
                            <div className="input-box">
                                <input id='lastname' type="text" required placeholder="Apellido" name='lastname' />
                            </div>
                        </>
                    )}
                    <div className="input-box">
                        <input id='email' type="email" required placeholder="Correo Electrónico" name='email' />
                    </div>
                    <div className="input-box">
                        <input id='password' type="password" required placeholder="Contraseña" name='password' />
                    </div>
                    <button type="submit">Enviar</button>
                    <h1>
                        { isMember ? "No estas registrado" : "Si estas Registrado"}
                    </h1>
                        <button onClick={() => setIsMember(!isMember)}>{isMember ? "Register" : "Login"}</button>

                </form>
            </div>
        </div>
    )
}

export default Login