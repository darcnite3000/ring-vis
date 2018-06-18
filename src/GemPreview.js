import react, {Component} from 'react'
import { DragLayer } from 'react-dnd'
import {Gem} from './Gem'

function getItemStyles(currentOffset) {
  if (!currentOffset) {
    return {
      display: 'none'
    }
  }

  const { x, y } = currentOffset
  const transform = `translate(${x}px, ${y}px)`
  return {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    pointerEvents: 'none',
    transform: transform,
    WebkitTransform: transform
  }
}

@DragLayer((monitor) => {
  var item = monitor.getItem()
  return {
    item,
    currentOffset: monitor.getSourceClientOffset(),
    isDraging: monitor.isDragging()
  }
})
export class GemPreview extends Component{
  render() {
    const { isDraging, currentOffset, item } = this.props
    if (!isDraging) return <div/>
    return <Gem style={getItemStyles(currentOffset)} {...item}/>
  }
}
