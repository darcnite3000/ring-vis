import React, { Component, createContext, Fragment } from 'react'
import { render } from 'react-dom'
import { DragDropContextProvider } from 'react-dnd'
import { default as TouchBackend } from 'react-dnd-touch-backend'
import { App } from './App'

render(
  <DragDropContextProvider backend={TouchBackend({ enableMouseEvents: true })}>
    <App />
  </DragDropContextProvider>,
  document.getElementById('app')
)
