import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../../components/CounterApp'


describe('Pruebas del componente CounterApp', () => {
    //declaramos wrapper como variable local para los test btn
    let wrapper = shallow(<CounterApp />)
    //el before se ejecuta antes de cada test
    beforeEach(() => {
        //ponemos 2 veces para no perder el autocompletado
        wrapper = shallow(<CounterApp />)
    })

    test('Debe de mostrar <CounterApp/> correctamente', () => {
        //saca un snapshot del componente
        expect(wrapper).toMatchSnapshot()
    })

    test('debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(<CounterApp value={100} />)

        //trim para borrar los espacios en ambos lados
        const counterText = wrapper.find('h2').text().trim()
        console.log(counterText)

        expect(counterText).toBe('100')
    })

    test('debe de incrementar con el boton +1', () => {
        //en el boton de la posicion 0 simulamos un click
        wrapper.find('button').at(0).simulate('click', {})
        //seleccionamos el h2 sin espacios
        const counterText = wrapper.find('h2').text().trim()

        expect(counterText).toBe('11')
    })

    test('debe de decrementar con el boton -1', () => {
        //en el boton de la posicion 2 simulamos un click
        wrapper.find('button').at(2).simulate('click', {})
        //seleccionamos el h2 sin espacios
        const counterText = wrapper.find('h2').text().trim()

        expect(counterText).toBe('9')
    })

    test('debe de poner el valor por deecto con el boton reset', () => {

        const wrapper = shallow(<CounterApp value={105} />)
        //usamos la referencia del boton +1 para aumentar el value y despuesresetear con nuestro btn de reset para notar los cambios
        wrapper.find('button').at(0).simulate('click', {})
        wrapper.find('button').at(0).simulate('click', {})
        wrapper.find('button').at(1).simulate('click', {})
        //seleccionamos el h2 sin espacios
        const counterText = wrapper.find('h2').text().trim()
        console.log(counterText)

        expect(counterText).toBe('105')
    })
})
