import React from 'react'

const UserProfile = ({ name, url }) => {





  return (
    <div className='user'>
      <h1>{name}</h1>
      <img src={url} alt="User"/>
    </div>
  )
}

export default UserProfile