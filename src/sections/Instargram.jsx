import React from 'react'
import Instar from '../util/Instargram'
import './style/Instargram.scss'


const Instagram = () => {
  return (
    <div className='inner instar-inner'>
      <div className="t-wrap">
        <h2 className="tit">Instagram</h2>
        <p className="txt">@tocobo_official</p>
      </div>
      <ul className="instar-list">
        {Instar.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              aria-label={item.alt}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {item.id}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Instagram
