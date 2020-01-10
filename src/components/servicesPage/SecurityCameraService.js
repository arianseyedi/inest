import React from 'react'
import ServicePresentation from './ServicePresentation'
import SecurityIcon from '../../resource/SecurityIcon'

export default function SecurityCameraService(props) {
  const content =
    'Check-in on things at home from wherever you are and secure your family and property with iNest Security Camera systems. Integrate your security system with your home automation system to enjoy the extra level of security and convenience. Choose between a variety of cameras, including but not limited to Dome Cameras, Bullet Cameras, CCTV Cameras, and C-Mount Cameras.'
  return (
    <ServicePresentation
      content={content}
      title="Security System"
      image="gallery/wardrobe.jpg"
      icon={SecurityIcon}
      {...props}
      anchortag="security"
    />
  )
}
