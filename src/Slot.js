import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'

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
export class Slot extends Component {
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
