import React from 'react';
import { shallow } from 'enzyme'
import CounterApp from '../../components/CounterApp'


describe('Pruebas del componente CounterApp', () => {

    test('Debe de mostrar <CounterApp/> correctamente', () => {

        const value = 20
        const wrapper = shallow(<CounterApp value={value} />)
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

})
