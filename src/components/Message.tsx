import React from 'react'
import { Alert } from 'react-bootstrap'
interface MessageProps  {
    variant : string ;
    children : any

}
const Message : React.FC<MessageProps> = ({variant , children }) => {
    return (
       <Alert variant = {variant}>
                {children }
           </Alert>
    )
}
Message.defaultProps = {
    variant : 'info'
}
export default Message