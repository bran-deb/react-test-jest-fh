import React from 'react'
import { render } from "@testing-library/react"
import Saludo from "../../components/Saludo"


describe('Pruebas en el componente <Saludo />', () => {

    test('debe de mostrar el mensaje "hola soy goku"', () => {

        const mensaje = 'hola soy goku'

        //render es una funcion que recibe un componente a renderizar
        const { getByText } = render(<Saludo mensaje={mensaje} />)
        //usamos destructuring para obtener el getbytext
        expect(getByText(mensaje)).toBeInTheDocument()
    })

})
