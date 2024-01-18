import React from 'react'

function Sample() {
  return (
    <>
      <div
        style={{
          width: '90%',
          margin:'auto',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          textAlign: 'center',
          backgroundColor: '#BA8C63',
          marginTop:'50px'
         
        }}
      >
        <img src="/unsalon.png" style={{ width: '25%' }} alt="no picture" />
        <img src="/livingroom.png" style={{ width: '25%' }} alt="no picture" />
        <img src="/kitchen2.png" style={{ width: '25%' }} alt="no picture" />
      </div>
      <div style={{textAlign:'center'}}>
      <button type="button" className="btn btn-secondary">
        see more
      </button>
      </div>
    </>
  )
}

export default Sample
