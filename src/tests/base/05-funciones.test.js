import { getUser, getUsuarioActivo } from "../../base/05-funciones"


describe('Pruebas en 05-funciones', () => {

    test('debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()

        expect(user).toEqual(userTest)
    })

    test('debe de retornar otro objeto', () => {

        const nombre = 'pedrales'
        const user = getUsuarioActivo(nombre)
        console.log(user)

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
    })


})
