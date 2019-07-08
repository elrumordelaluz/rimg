import React from 'react'
import Image from 'rimg'

const style = {
  height: '101vh',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#2d1176',
  color: '#fff',
}

export default function App() {
  return (
    <div>
      <section style={{ ...style }}>
        <h1>⬇ Scroll Down ⬇</h1>
      </section>
      <div className="wrapper">
        <div className="grid">
          {Array.from(new Array(12), (v, index) => index + 1).map(index => (
            <div
              style={{
                textAlign: 'center',
                textDecoration: 'none',
                position: 'relative',
              }}
              key={index}
            >
              <Image
                src={`https://picsum.photos/id/${index + 70}/960/836`}
                width="960"
                height="836"
                wrapperClassName="imgWrapper"
              />
            </div>
          ))}
        </div>
      </div>
      <section style={{ ...style }}>
        <h1>⬆︎ Scroll up ⬆︎</h1>
      </section>
    </div>
  )
}
