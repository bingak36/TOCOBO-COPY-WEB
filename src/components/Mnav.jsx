import React from 'react'
import Util from './Util'
import { headerData } from '../util/header'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './style/Mnav.scss'

const Mnav = ({ onNavClose }) => {
  const navLink = headerData.menus
  const scrollTo = useSmoothScroll()

  return (
    <div className='m-nav-wrap'>
      <div className="m-top">
        <Util />
        <a
          href="#"
          className='m-close-btn'
          onClick={(e) => {
            e.preventDefault()
            onNavClose()
          }}
        >
          <img src="/img/icon_search_close.png" alt="menu close" />
        </a>
      </div>
      <ul className="m-nav-list">
        {navLink.map((nav) => (
          <li key={nav.id}>
            <a
              href={nav.href}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(nav.id)
                onNavClose()
              }}
            >
              {nav.label}
            </a>
          </li>
        ))}
      </ul>
      <ul className="btm-list">
        <li><a href="#">Login</a></li>
        <li><a href="#">Join</a></li>
        <li><a href="#">Notice</a></li>
      </ul>
    </div>
  )
}

export default Mnav
