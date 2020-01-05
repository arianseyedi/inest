import React from 'react'
import ServicePresentation from './ServicePresentation'
import SmartHouseIcon from '../../resource/SmartHouseIcon'

export default function NetworkService(props) {
  const content =
    'There’s no need for separate applications to control the thermostat, the shades, the music, and the lighting. Replace them all with iNest full home automation system that manages and controls all these devices at once. Smart homes provide high levels of convenience, safety, and energy savings!'
  return (
    <ServicePresentation
      content={content}
      title="Smart Home"
      image="gallery/wardrobe.jpg"
      icon={SmartHouseIcon}
      {...props}
    />
  )
}
