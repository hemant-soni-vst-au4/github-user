import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div>
            <h1>Error</h1>
            <h3>sorry, the page you tried cannot be found</h3>
             <Link to="/" className="btn">Back home</Link>
        </div>
    )
}

export default Error
