import React from 'react'
import ServicePresentation from './ServicePresentation'
import ClimateIcon from '../../resource/ClimateIcon'

export default function ClimateControlService(props) {
  const content =
    'Control your home’s heating and/or air conditioning throughout a smart system using your laptop or phone. Integrate climate control with the rest of your home for intelligent temperature control, personalized just as you wish for, making your home more comfortable and more “green” at the same time.'
  return (
    <ServicePresentation
      content={content}
      title="Climate Control"
      image="gallery/wardrobe.jpg"
      icon={ClimateIcon}
      {...props}
      anchortag="climatecontrol"
      style={{paddingBottom: 24}}
    />
  )
}
