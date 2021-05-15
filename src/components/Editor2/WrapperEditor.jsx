//path: components/WrappedEditor.jsx
import React from 'react'
import PropTypes from 'prop-types'
import { Editor } from '@toast-ui/react-editor'

// @ts-ignore
const WrappedEditor = (props) => {
    const { forwardedRef } = props
    return <Editor {...props} ref={forwardedRef} />
}

WrappedEditor.propTypes = {
    forwardedRef: PropTypes.shape({
        current: PropTypes.instanceOf(Element)
    }).isRequired
}

export default WrappedEditor