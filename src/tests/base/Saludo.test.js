import React from 'react'
import '@testing-library/jest-dom'
// import { render } from "@testing-library/react"
import Saludo from "../../components/Saludo"
import { shallow } from 'enzyme'
// import { getByText } from '@testing-library/react'

describe('Pruebas en el componente <Saludo />', () => {
    // test('debe de mostrar el mensaje "hola soy goku"', () => {
    //     const mensaje = 'hola soy goku'
    //     //render es una funcion que recibe un componente a renderizar
    //     const { getByText } = render(<Saludo mensaje={mensaje} />)
    //     //usamos destructuring para obtener el getbytext
    //     expect(getByText(mensaje)).toBeInTheDocument()//toBeInTheDocument lo usa de setup
    // })

    test('debe de demostrar <Saludo /> correctamente', () => {

        const mensaje = 'Hola, soy Goku'
        const wrapper = shallow(<Saludo mensaje={mensaje} />)

        expect(wrapper).toMatchSnapshot()
    })

    //pruebas para el html
    test('debe de mostrar el subtitulo enviado por props', () => {

        const mensaje = 'Hola, soy Goku'
        const subtitulo = 'soy un subtitulo'
        const wrapper = shallow(
            <Saludo
                mensaje={mensaje}
                subtitulo={subtitulo}
            />
        )
        // FIND funciona como el document.querySelector
        const textoParrafo = wrapper.find('p').text()
        //mostramos el texto del parrafo
        console.log(textoParrafo)

        expect(textoParrafo).toBe(subtitulo)
    })


})
