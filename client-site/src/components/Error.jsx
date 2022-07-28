import React from 'react'
import Alert from 'react-bootstrap/Alert';
const Error = ({ error }) => {
    return <Alert variant="warning">Error by Fatching All items {error} </Alert>
}

export default Error