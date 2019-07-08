import React, { useRef, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'

function Image({ wrapperClassName, alt, width, height, src, ...rest }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const imgStyles = {
    display: 'block',
    height: 'auto',
    width: '100%',
    position: 'relative',
    transition: `2s opacity`,
    opacity: inView ? 1 : 0,
  }

  return (
    <div ref={ref} className={wrapperClassName}>
      <noscript>
        <img src={src} alt={alt} style={imgStyles} />
      </noscript>
      <img {...rest} src={src} alt={alt} style={imgStyles} />
    </div>
  )
}

export default Image
