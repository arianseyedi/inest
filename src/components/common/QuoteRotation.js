import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FancyQuotation from './FancyQuotation'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import './QuoteRotation.css'

export default function QuoteRotation() {
  const items = [
    {
      text:
        'It was like the staff were installing the systems for themselves, in their own home - wanting everything to be perfect!',
      by: 'M.T.',
      title: 'Toronto',
    },
    // {
    //   text:
    //     'Fair Pricing & Excellent Business record. Our full Home Automation was completed by a punctual, tidy, and knowledgable team with lots of experience. We’re enjoying it now and we know it will be an asset to selling our home when the time comes.',
    //   by: 'K.W.',
    //   title: 'Richmond Hill',
    // },

    {
      text: 'iNest team went above & beyond to make sure we’re happy with the final results.',
      by: 'S.S.',
      title: 'Toronto',
    },

    {
      text:
        'Most importantly, the work was finished on time and on the budget without any hassle.',
      by: 'G.P.',
      title: 'King City',
    },
  ]
  const fancyquotes = items.map((i, index) => (
    <FancyQuotation key={`fancyQuoteTop-${index}`} text={i.text} by={i.by} byTitle={i.title} />
  ))

  return (
    // <Carousel interval={5000} indicators={false}>
    //   {fancyquotes}
    // </Carousel>
    // <React.Fragment>{fancyquotes[0]}</React.Fragment>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={3}
      interval={5000}
      infinite={true}
      isPlaying
      dragEnabled={false}
      playDirection="forward"
    >
      <Slider>
        <Slide index={0}>{fancyquotes[0]}</Slide>
        <Slide index={1}>{fancyquotes[1]}</Slide>
        <Slide index={2}>{fancyquotes[2]}</Slide>
      </Slider>
    </CarouselProvider>
  )
}
