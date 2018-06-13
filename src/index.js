import React, { Component, createContext, Fragment } from 'react'
import { render } from 'react-dom'
import { DragDropContextProvider, DropTarget, DragSource } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

@DropTarget(
  'GEM',
  {
    drop({ pos }) {
      return { pos }
    },
    canDrop({ pos, slots, content }, monitor) {
      const item = monitor.getItem()
      const contentSize = content.size || 1
      if (contentSize === item.size) return true
      if (contentSize > item.size) return true
      if (contentSize < item.size) {
        if (pos === slots.length - 1) return false
        if (slots[pos + 1].size === 2) return false
      }
      return true
    }
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  })
)
class Slot extends Component {
  static defaultProps = {
    content: {},
    pos: 0,
    slotLength: 1,
    updateSlot: () => {}
  }
  render() {
    const { content, connectDropTarget, isOver, canDrop } = this.props
    const validDrop = isOver && canDrop
    const backgroundColor = validDrop ? 'green' : 'gray'
    return connectDropTarget(
      <pre style={{ backgroundColor }}>
        <code>{JSON.stringify({ ...content }, null, 2)}</code>
      </pre>
    )
  }
}

@DragSource(
  'GEM',
  {
    beginDrag({ type, size }) {
      return { type, size }
    },
    endDrag(props, monitor) {
      const item = monitor.getItem()
      const dropResult = monitor.getDropResult()
      if (dropResult) {
        console.log(item, dropResult)
        props.updateSlot(dropResult.pos, item)
      }
    }
  },
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })
)
class Gem extends Component {
  static defaultProps = {
    size: 1,
    type: 'round',
    updateSlot: () => {}
  }
  render() {
    const { connectDragSource, size, type } = this.props
    return connectDragSource(
      <pre>
        <code>{JSON.stringify({ size, type }, null, 2)}</code>
      </pre>
    )
  }
}

class App extends Component {
  state = {
    slots: [
      { size: 1, type: 'Round' },
      { size: 1, type: 'Round' },
      { size: 1, type: 'Round' },
      { size: 1, type: 'Round' },
      { size: 1, type: 'Round' },
      { size: 1, type: 'Round' }
    ]
  }
  updateSlot = (pos, content) => {
    const slots = this.state.slots
    const current = slots[pos]
    const currentSize = current.size || 0
    if (currentSize === content.size) {
      this.setState({
        slots: [...slots.slice(0, pos), content, ...slots.slice(pos + 1)]
      })
    } else {
      if (currentSize < content.size) {
        const newSlots = [
          ...slots.slice(0, pos),
          content,
          ...slots.slice(pos + content.size)
        ]
        this.setState({
          slots: newSlots
        })
      } else {
        let newContent = []
        const newLen = Math.floor(currentSize / content.size)
        for (let i = 0; i < newLen; i++) {
          newContent.push({ ...content })
        }
        const newSlots = [
          ...slots.slice(0, pos),
          ...newContent,
          ...slots.slice(pos + 1)
        ]
        this.setState({
          slots: newSlots
        })
      }
    }
  }
  render() {
    const slots = this.state.slots
    return (
      <div>
        <h1>Ring Visualiser</h1>
        <div>
          {slots.map((content, i) => (
            <Slot
              key={i}
              pos={i}
              slots={slots}
              content={content}
              updateSlot={this.updateSlot}
            />
          ))}
        </div>
        <div>
          <h2>Gems</h2>
          <ul>
            <li>
              <Gem size={2} type="Baguette" updateSlot={this.updateSlot} />
            </li>
            <li>
              <Gem size={1} type="Round" updateSlot={this.updateSlot} />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
render(
  <DragDropContextProvider backend={HTML5Backend}>
    <App />
  </DragDropContextProvider>,
  document.getElementById('app')
)
