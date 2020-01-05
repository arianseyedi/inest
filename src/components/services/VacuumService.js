import React from 'react'
import ServicePresentation from './ServicePresentation'
import VacuumIcon from '../../resource/VacuumIcon'

export default function VacuumService(props) {
  const content =
    'The Central Vacuum system is designed to be more powerful than the traditional portable vacuum while it produces less noise and reduces the recirculation of dust and dirt into your home. A central vacuum system eliminates the hassle of storing and schlepping heavy equipment, it’s cleaner and quieter than a portable unit, and it just works better! '
  return (
    <ServicePresentation
      content={content}
      title="Central Vacuum"
      image="gallery/wardrobe.jpg"
      icon={VacuumIcon}
      {...props}
    />
  )
}
