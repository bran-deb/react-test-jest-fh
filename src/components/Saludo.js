import React from 'react';
import PropTypes from 'prop-types'

const Saludo = ({ mensaje, subtitulo = 'soy un default prop' }) => {

    return (
        <>
            <h1>{mensaje}</h1>
            <h1>{subtitulo}</h1>
        </>
    )
}

Saludo.propTypes = {
    mensaje: PropTypes.string.isRequired
}
Saludo.defaultProps = {
    subtitulo: 'soy un default prop'
}


export default Saludo;