import React from 'react'
import ServicePresentation from './ServicePresentation'
import LightingAutomationIcon from '../../resource/LightingAutomationIcon'

export default function LightingService(props) {
  const content =
    'Lighting Automation is the discipline of creating automated changes in lighting levels to affect mood, emphasize architecture, illuminate art, and influence action. Manage the internal and external lighting of your home more efficiently with iNest lighting Automation systems.'
  return (
    <ServicePresentation
      content={content}
      title="Lighting Automation"
      image="gallery/wardrobe.jpg"
      icon={LightingAutomationIcon}
      {...props}
    />
  )
}
