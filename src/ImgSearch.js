import React from 'react'
import { Image } from 'react-bootstrap'

function ImgSearch(props) {
  const image = `https://joeschmoe.io/api/v1/${props.name}`
  const altimage =
    'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'
  return (
    <div>
      <div>
        <Image
          src={image}
          alt='PLEASE INPUT YOUR NAME AND PUT IMAGES ON YOUR WHATSAPP STATUS!'
          fluid
        />
        {/* <img
          src={image}
          alt='PLEASE INPUT YOUR NAME'
          style={{ width: '100%', height: 'auto' }}
        /> */}
      </div>
    </div>
  )
}

export default ImgSearch
