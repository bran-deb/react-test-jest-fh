import getHeroeByIdAsync from "../../base/09-promesas"

describe('Pruebas con promesas', () => {

    test('getHeroeByIdAsync debe de retornar un heroe async', (done) => {
        const id = 1

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroe[1])
                done()
            })
    })

})
