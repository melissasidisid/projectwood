import React from 'react'

function Sample() {
  return (
    <>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          textAlign: 'center',

          backgroundColor: '#BA8C63',
        }}
      >
        <img src="/unsalon.png" style={{ width: '25%' }} alt="no picture" />
        <img src="/livingroom.png" style={{ width: '25%' }} alt="no picture" />
        <img src="/kitchen2.png" style={{ width: '25%' }} alt="no picture" />
      </div>
      <button type="button" className="btn btn-secondary">
        see more
      </button>
    </>
  )
}

export default Sample
