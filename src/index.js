import React, { Component, createContext, Fragment } from 'react'
import { render } from 'react-dom'
import { DragDropContextProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { App } from './App'

render(
  <DragDropContextProvider backend={HTML5Backend}>
    <App />
  </DragDropContextProvider>,
  document.getElementById('app')
)
