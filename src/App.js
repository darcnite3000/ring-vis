import React, { Component } from 'react'
import { Gem } from './Gem'
import { Slot } from './Slot'
import { GemPreview } from './GemPreview'

const gemTypes = [
  {size: 1, type: 'Round'},
  {size: 2, type: 'Baguette'}
]

function getSlotsSize(slots = []) {
  return slots.reduce((l, s) => l + s.size, 0)
}

function generateSlots(size, slots = []) {
  const slotSize = getSlotsSize(slots)
  if (size === slotSize) return slots
  let newSlots = []
  let newSlotSize = 0
  let index = 0
  while (newSlotSize < size) {
    if (slots[index] && size - slots[index].size - newSlotSize >= 0) {
      newSlots.push(slots[index])
      newSlotSize = newSlotSize + slots[index].size
      index = index + 1
    } else {
      newSlots.push({ size: 1, type: 'Round' })
      newSlotSize = newSlotSize + 1
    }
  }
  return newSlots
}

export class App extends Component {
  state = {
    slots: generateSlots(12),
    size: 12
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
            newContent,
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
    this.setState(({ slots }) => ({ size, slots: generateSlots(size, slots) }))
  }
  onChangeRingSize = e => {
    const size = e.target.value
    this.setRingSize(size)
  }
  render() {
    const { size, slots } = this.state
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
          <h2>Band</h2>
          <div>
            <label htmlFor="band-size">Band Size:</label>
            <select id="band-size" value={size} onChange={this.onChangeRingSize}>
              {[12, 14, 16, 18, 20].map((v, i) => (
                <option key={i} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <h2>Gems</h2>
          <ul>
            {gemTypes.map(({size,type})=><li style={{ display: 'flex', alignItems: 'center' }}>
              <Gem key={type} size={size} type={type} updateSlot={this.updateSlot} />
              {type} Style
            </li>)}
          </ul>
        </div>
        <GemPreview key="__preview" name="Gem" />
      </div>
    )
  }
}
