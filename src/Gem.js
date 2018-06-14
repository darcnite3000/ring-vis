import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

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
export class Gem extends Component {
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
