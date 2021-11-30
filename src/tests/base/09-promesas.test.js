import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../data/heroes'


//TEST de funciones ASYNC
describe('Pruebas con promesas', () => {

    //usamos el DONE para tareas async
    test('debe de retornar un Heroe async', (done) => {
        const id = 1

        getHeroeByIdAsync(id)
            .then(heroe => {
                //esperamos batman y se obtiene batman
                expect(heroe).toBe(heroes[0])

                //el done marca donde termina el test
                done()
            })
    })

    test('debe de retornar un error si el heroe no existe', (done) => {
        const id = 10

        getHeroeByIdAsync(id)
            .catch(error => {
                //esperamos un error que contiene el mensaje !!!!
                expect(error).toBe('No se pudo encontrar el héroe')

                //el done marca donde termina el test
                done()
            })
    })

})
