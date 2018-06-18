import React, { Component } from 'react'
import { Gem } from './Gem'
import { Slot } from './Slot'
import {GemPreview} from './GemPreview'

function generateSlots(size) {
  let slots = []
  for (let i = 0; i < size; i++) {
    slots.push({ size: 1, type: 'Round' })
  }
  return slots
}

export class App extends Component {
  state = {
    slots: generateSlots(12)
  }
  updateSlot = (pos, content) => {
    const slots = this.state.slots
    const newContent = { size: content.size, type: content.type }
    const oldPos = content.pos
    if (oldPos != null) {
      if (oldPos === pos) return null
      const filteredSlots = [
        ...slots.slice(0, oldPos),
        ...slots.slice(oldPos + 1)
      ]
      this.setState({
        slots: [
          ...filteredSlots.slice(0, pos),
          newContent,
          ...filteredSlots.slice(pos)
        ]
      })
    } else {
      const dropSlot = slots[pos]
      const dropSize = dropSlot.size || 0
      if (dropSize === content.size) {
        this.setState({
          slots: [...slots.slice(0, pos), content, ...slots.slice(pos + 1)]
        })
      } else {
        if (dropSize < content.size) {
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
          const newLen = Math.floor(dropSize / content.size)
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
  }
  setRingSize(size) {
    this.setState({ slots: generateSlots(size) })
  }
  render() {
    const slots = this.state.slots
    return (
      <div>
        <h1>Ring Visualiser</h1>
        <div style={{ display: 'flex' }}>
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
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <Gem size={2} type="Baguette" updateSlot={this.updateSlot} />
              Baguette Style
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <Gem size={1} type="Round" updateSlot={this.updateSlot} />
              Round Style
            </li>
          </ul>
        </div>
        <GemPreview key="__preview" name="Gem"/>
      </div>
    )
  }
}
