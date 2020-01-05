import React from 'react'
import ServicePresentation from './ServicePresentation'
import ElectricalIcon from '../../resource/ElectricalIcon'

export default function ElectricalService(props) {
  const content = [
    'iNest provides a variety of electrical services for homes and offices, including but not limited to:',
    'Residential and commercial wiring',
    'Renovations',
    'Knob and Tube Removals',
    'Electrical Repairs and troubleshooting',
  ]
  return (
    <ServicePresentation
      content={content}
      title="Electrical"
      image="gallery/wardrobe.jpg"
      icon={ElectricalIcon}
      {...props}
    />
  )
}
