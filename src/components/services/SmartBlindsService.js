import React from 'react'
import ServicePresentation from './ServicePresentation'
import BlindsIcon from '../../resource/BlindsIcon'

export default function SmartBlindsService(props) {
  const content =
    'Automated Binds provide ideal convenience and comfort for residential homes and offices. Smart blinds are ideal for protecting furniture, floors, carpeting, and artwork from the damaging effects of direct sunlight. They also make it easier to access skylights and other hard-to-reach windows above counters, sinks, and bathtubs. '
  return (
    <ServicePresentation
      content={content}
      title="Smart Blinds"
      image="gallery/wardrobe.jpg"
      icon={BlindsIcon}
      {...props}
    />
  )
}
