import React, { useState, Fragment } from 'react'
import { Input } from './Input'
import { FormContainer, Container, Button, Image} from './styles/StyledComponents'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Logo from './assets/img/logo.jpg'

const inputs = [
    {id:1, label: "Nombre y Apellido", placeholder: "Ingresa tu Nombre y Apellido", name: "nombre"},
    {id:2, label: "Email", placeholder: "Ingresa tu Email", name: "email"},
    {id:3, label: "Equipo en el que jugas", placeholder: "Ingresa Akelarroz o Matanga", name: "equipo"},
    {id:4, label: "Tenes lesiones actualmente?", placeholder: "Si / No", name: "lesion"}
]



const Form = ({handleFetchValues}) => {
    
    const initialValues = () => ({
        nombre: "",
        email: "",
        equipo: "",
        lesion: ""
    })

    const validation = () => (
        Yup.lazy(() =>
            Yup.object().shape({
                nombre: Yup.string()
                .required('Campo Obligatorio')
                .min(3, 'Tu nombre debe contener al menos 3 caracteres')
                .trim('Tu nombre no debe comenzar con espacio en blanco').strict(),
                email: Yup.string()
                .email('Debes ingresar un email válido')
                .required('Campo Obligatorio'),
                equipo: Yup.string()
                .min(6, 'El equipo debe contener al menos 6 caracteres')
                .required('Campo Obligatorio')
                //.matches('Akelarroz','El equipo debe ser Matanga o Akelarroz')
                //.matches('Matanga','El equipo debe ser Matanga o Akelarroz')
                ,
                lesion: Yup.string()
                .required("Campo Obligatorio")
                // .matches('Si','Responder Si o No')
                //.matches('No','Responder Si o No')
                ,
            })
        )
    )

    const onSubmit = (values) => {
        console.log(values);
        handleFetchValues(values);
    }

    const {values, setFieldValue, errors, handleSubmit} = useFormik(
        {
            initialValues: initialValues(),
            validationSchema: validation(),
            validateOnChange: false,
            validateOnBlur: false,
            onSubmit
        }
    )

    return (
    <FormContainer>
        <Fragment>

            <Container content="row">
                <Image src={Logo}/>
            </Container>
            <h2 style={{textAlign:"center", color:"#935e8d"}}>Chequeo de titulares Inline Hockey</h2>
            <form id ="sport-form" onSubmit={handleSubmit}>
                {inputs.map(input => (
                    <Container key={input.id}>
                        <label style={{padding:5}}>{input.label}</label>
                        <Input
                            name = {input.name}
                            placeholder = {input.placeholder}
                            value = {values[input.name]}
                            onChange = {(e) => setFieldValue(input.name, e.target.value)}
                        />
                        {
                            errors[input.name] && (
                                <p style={{color: "red", fontSize: "12px", padding: 0, margin: 0 }}>{errors[input.name]}</p>
                            )
                        }
                    </Container>
                ))
                }
            </form>

            <Container content="row">
                <Button form='sport-form' tipo="submit" type='submit'>Enviar</Button>
            </Container>

        </Fragment>
        
    </FormContainer>
    )

}

export default Form