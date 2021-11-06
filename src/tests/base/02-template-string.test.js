
import { getSaludo } from "../../base/02-template-string"

describe('pruebas en 02-template-string,', () => {

    test('debe retornar hola fernando', () => {

        const nombre = 'jairo'
        const saludo = getSaludo(nombre)
        expect(saludo).toBe('Hola ' + nombre)
    })

    test('mostrar por default hola carlos', () => {

        const saludo = getSaludo()
        expect(saludo).toBe('Hola carlos')
    })

})
