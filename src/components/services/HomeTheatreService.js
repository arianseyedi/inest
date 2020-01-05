import React from 'react'
import ServicePresentation from './ServicePresentation'
import HomeTheatreIcon from '../../resource/HomeTheatreIcon'

export default function HomeTheatreService(props) {
  const content =
    'The latest Technology of home theatre experience is more than just a nice TV with surround sound. With a home theatre system of all exclusive brands, you can control your theatre lighting, sound, and Vision with the touch of a button. '
  return (
    <ServicePresentation
      content={content}
      title="Home Theatre"
      image="gallery/wardrobe.jpg"
      icon={HomeTheatreIcon}
      {...props}
    />
  )
}
