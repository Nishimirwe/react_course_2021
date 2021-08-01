import React from 'react'
import ReactDOM from 'react-dom'

const myBio = React.createElement('div', null , 'My name is Jean Paul, and I love Rwanda.');
const element=React.createElement('div',null,'Hello world')

ReactDOM.render(
    element,
    document.getElementById('root')
)