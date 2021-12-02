import React, { useState } from 'react'
import ImgSearch from './ImgSearch'
import '../src/index.css'
import { FormControl, InputGroup } from 'react-bootstrap'

import { Random, Wave } from 'react-animated-text'

function ImageSearch() {
  const [input, output] = useState('')

  const inputEvent = (e) => {
    output(e.target.value)
  }
  return (
    <div className='title'>
      <h3 style={{ color: 'yellowgreen' }}>
        {' '}
        <Random text='WHAT DOES YOUR NAME SAYS ABOUT YOUR PERSONALITY?' />
      </h3>

      <div>
        <InputGroup className='mb-3'>
          <InputGroup.Text id='basic-addon1'>NAME</InputGroup.Text>
          <FormControl
            placeholder='ENTER YOUR NAME'
            aria-label='ENTER YOUR NAME'
            aria-describedby='basic-addon1'
            onChange={inputEvent}
            value={input}
          />
        </InputGroup>
        {/* <input
          type='text'
          name=''
          id=''
          placeholder='Search Anything'
          onChange={inputEvent}
          value={input}
          style={{ width: '100%', margin: '2px' }}
        /> */}
        <ImgSearch name={input} />
      </div>
      {/* <div>
        <ImgSearch name={input} />
      </div> */}
    </div>
  )
}

export default ImageSearch
