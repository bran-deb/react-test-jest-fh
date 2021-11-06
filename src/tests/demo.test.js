describe('Pruebas en el archivodemo.js', () => {

    test('debe de ser iguales los strings', () => {

        //1. inicializacion
        const mensaje = 'hola mundo'
        // 2. estimulo
        const mensaje2 = `hola mundo`
        //3. Obseervar el comportamiento
        expect(mensaje).toBe(mensaje2)
    })
})