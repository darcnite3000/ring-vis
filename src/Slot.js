import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { Gem } from './Gem'

@DropTarget(
  'GEM',
  {
    drop({ pos }) {
      return { pos }
    },
    canDrop({ pos, slots, content }, monitor) {
      const item = monitor.getItem()
      if (item.pos) return true
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
export class Slot extends Component {
  static defaultProps = {
    content: {},
    pos: 0,
    slotLength: 1,
    updateSlot: () => {}
  }
  render() {
    const {
      content,
      connectDropTarget,
      isOver,
      canDrop,
      pos,
      updateSlot
    } = this.props
    const validDrop = isOver && canDrop
    const slotStyle = {
      backgroundColor: validDrop ? 'green' : 'gray',
      border: '1px solid black'
    }
    const gemStyle = {
      opacity: isOver ? 0.5 : 1
    }
    return connectDropTarget(
      <pre style={slotStyle}>
        <Gem {...content} pos={pos} updateSlot={updateSlot} style={gemStyle} />
      </pre>
    )
  }
}
