import React from 'react'
import ServicePresentation from './ServicePresentation'
import AudioSystemIcon from '../../resource/AudioSystemIcon'

export default function SoundService(props) {
  const content =
    'It’s time for you to stop dragging speakers all over your house! iNest sound system allows you to play music in any room from any source just via your home wifi. Play your favorite song when spending time in the kitchen, the family room, the shower, or in the backyard.'
  return (
    <ServicePresentation
      content={content}
      title="Sound System"
      image="gallery/wardrobe.jpg"
      icon={AudioSystemIcon}
      {...props}
    />
  )
}
