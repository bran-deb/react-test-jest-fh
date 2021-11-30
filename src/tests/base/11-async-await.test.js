import { getImagen } from "../../base/11-async-await"

//TEST ASYNC para funciones ASYNC
describe('Pruebas con async-await y fetch', () => {

    test('debe de retornar el url de la img', async () => {
        const url = await getImagen()
        console.log(url)

        //es espera una url con la img
        expect(typeof url).toBe('string')
    })

    //casi no se presentan
    test('debe de retornar un error al pedir la url', async () => {
        const url = await getImagen()
        console.log(url)

        //es espera que la url tenga un https://
        expect(url.includes('http://')).toBe(false)//true
    })
})
