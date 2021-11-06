import { retornaArreglo } from "../../base/07-deses-arr"

describe('Pruebas de desestructuracion', () => {
    test('debe de retornar un string y un numero', () => {
        // const arr = retornaArreglo()
        const [letras, numeros] = retornaArreglo()

        console.log(typeof letras)
        console.log(typeof numeros)

        // expect(arr).toEqual(['ABC', 123])
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')

        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')
    })

})
