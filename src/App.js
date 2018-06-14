import React, { Component } from 'react'
import { Gem } from './Gem'
import { Slot } from './Slot'

export class App extends Component {
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
