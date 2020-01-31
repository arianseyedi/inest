import React from 'react'
import './FancyQuotation.scss'

export default function FancyQuotation(props) {
  return (
    <div style={{ width: '100%', maxHeight: '100px' }}>
      <div className="testimonial-quote group right">
        <div className="quote-container">
          <div>
            <blockquote>
              <p>{props.text}”</p>
            </blockquote>
            <cite>
              <span>{props.by}</span>
              <br />
              {props.byTitle}
            </cite>
          </div>
        </div>
      </div>
    </div>
  )
}
