import React, { Component } from 'react'
import { DragSource } from 'react-dnd'

@DragSource(
  'GEM',
  {
    beginDrag({ type, size, pos }) {
      return { type, size, pos }
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
    pos: null,
    style: {},
    updateSlot: () => {}
  }
  render() {
    const { connectDragSource, size, type, isDragging, style } = this.props
    const gemStyle = {
      opacity: isDragging ? 0.5 : 1,
      width: size * 10,
      height: 10,
      backgroundColor: type == 'Round' ? 'blue' : 'brown',
      ...style
    }
    return connectDragSource(<div style={gemStyle} />)
  }
}
