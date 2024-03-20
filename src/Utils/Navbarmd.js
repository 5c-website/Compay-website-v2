import React from 'react'
import '../styles/nav.css'
import { Link} from 'gatsby'
import logo from '../Assets/Homepage/2-01.png'

function Navbarmd() {
  return (
    <div className=' bg-transparent p-[15px] flex justify-between items-center absolute z-[1]   w-[65%] navbar-mb sm:z-[99] '>
      {/* <nav role="navigation" className='mobile-nav'>
        <div id="menuToggle" className='absolute m-[1rem] z-[99]'>
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li><Link to="/solutions" className='font-use'>Solutions</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>

            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/newsroom">Newsroom</Link></li>
            <li><Link to="/newsroom">Case Study</Link></li>

            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact" >Contact</Link></li>
          </ul>
        </div>
      </nav> */}
      <div class="wrapper   mobile-nav">
  <nav className='hamburger justify-between'>
    <input type="checkbox" id="menu" name="menu" class="m-menu__checkbox"/>
    <label class="m-menu__toggle" for="menu">
      <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
        <line x1="3" y1="12" x2="21" y2="12">
            </line><line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </label>
    <label class="m-menu__overlay" for="menu"></label>

    <div class="m-menu">
      <div class="m-menu__header">
        <label class="m-menu__toggle" for="menu">
          <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </label>
        <span className='flex justify-center'> <img src={logo} alt='5C Network' className='w-[40%]'></img></span>
        {/* <img src={logo} alt='5C Network' className='w-[50%]'></img> */}
      </div>
      <ul>
        <li><Link to='/solutions' className='pl-0'><label>Solutions</label></Link></li>
        <li>
          <label class="a-label__chevron" for="item-2" style={{paddingLeft:'18px'}}>AI Tools</label>
          <input type="checkbox" id="item-2" name="item-2" class="m-menu__checkbox"/>
          <div class="m-menu">
            <div class="m-menu__header">
              <label class="m-menu__toggle" for="item-2">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                  <path d="M19 12H6M12 5l-7 7 7 7"/>
                </svg>
              </label>
              <span>AI Tools</span>
            </div>
            <ul>
              <li><Link to='/rxpert'><label>Rxpert</label></Link></li>
              <li><Link to='/osteocheck'><label>Osteocheck</label></Link></li>
              <li><Link to='/protocall'><label>Protocall</label></Link></li>
              </ul>
          </div>
        </li>
        <li>
          <label class="a-label__chevron" for="item-3" style={{paddingLeft:'18px'}}>Features</label>
          <input type="checkbox" id="item-3" name="item-3" class="m-menu__checkbox"/>
          <div class="m-menu">
            <div class="m-menu__header">
              <label class="m-menu__toggle" for="item-3">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                  <path d="M19 12H6M12 5l-7 7 7 7"/>
                </svg>
              </label>
              <span>Features</span>
            </div>
            <ul>
              <li><Link to='/urgentflow'><label>Urgent Flow</label></Link></li>
              <li><Link to='/comparativestudy'><label>Comparative Study</label></Link></li>
              <li><Link to='/mergestudy'><label>Merge Study</label></Link></li>
              </ul>
          </div>
        </li>
        <li><Link to='/technology'><label>Technology</label></Link></li>
        <li><Link to='/about'><label>About</label></Link></li>
        <li><Link to='/'><label>Home</label></Link></li>
        <li><Link to='/careers'><label>Careers</label></Link></li>
        <li>
          <label class="a-label__chevron" for="item-3" style={{paddingLeft:'18px'}}>Resources</label>
          <input type="checkbox" id="item-3" name="item-3" class="m-menu__checkbox"/>
          <div class="m-menu">
            <div class="m-menu__header">
              <label class="m-menu__toggle" for="item-3">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                  <path d="M19 12H6M12 5l-7 7 7 7"/>
                </svg>
              </label>
              <span>Resources</span>
            </div>
            <ul>
              <li><Link to='/blogs'><label>Blogs</label></Link></li>
              <li><Link to='/newsroom'><label>Newsroom</label></Link></li>
              <li><Link to='/casestudies'><label>Case Study</label></Link></li>
              </ul>
          </div>
        </li>
        <li><Link to='/contact'><label>Contact</label></Link></li>
      </ul>
    </div>
    <Link to='/' className='w-[50%]'><img src={logo} alt='5C Network'></img></Link>
    {/* <img src={logo} alt='5C Network' className='w-[50%]'></img> */}
  </nav>

</div>



  </div>
  )
}

export default Navbarmd
