import { useState } from 'react';
import React from 'react'

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

type errorProps ={
    
    message:string,
    show:boolean,
    setShow:React.Dispatch<React.SetStateAction<boolean>>

}

export const Error:React.FC<errorProps> = ({message, show, setShow})=> {

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
       {message}
        </p>
      </Alert>
    );
  }
  return <></>
}
