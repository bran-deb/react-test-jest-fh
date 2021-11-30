import React from 'react';
import PropTypes from 'prop-types'

const Saludo = ({ mensaje, subtitulo = 'soy un default prop' }) => {

    return (
        <>
            <h1>{mensaje}</h1>
            <p>{subtitulo}</p>
        </>
    )
}

//el saludo es de tipo string
Saludo.propTypes = {
    mensaje: PropTypes.string.isRequired
}

// es un props por default
Saludo.defaultProps = {
    subtitulo: 'soy un default prop'
}


export default Saludo;