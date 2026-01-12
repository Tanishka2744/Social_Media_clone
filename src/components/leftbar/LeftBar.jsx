import { Link } from 'react-router-dom'
import './leftBar.css'
import CurrentUser from '../../FackApis/CurrentUserData'
import Firend from '../../assets/icon/icon1.png'
import Groups from '../../assets/icon/icon2.png'
import Market from '../../assets/icon/icon3.png'
import Watch from '../../assets/icon/icon4.png'
import Gallery from '../../assets/icon/icon5.png'
import Videos from '../../assets/icon/icon6.png'
import Message from '../../assets/icon/icon7.png'

export default function LeftBar() {
  return (
    <div className='leftBar'>
      <div className="left-container">
        <div className="menu">

          <Link to='/profile/id'>
            <div className="user">
              <img src={CurrentUser.map(user => (user.ProfieImage))} alt="" />
              <h4>Tanishka Khandelwal</h4>
            </div>
          </Link>

          <Link to='/'>
            <div className="item">
              <img src={Firend} alt="" />
              <h4>Friends</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className="item">
              <img src={Groups} alt="" />
              <h4>Groups</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className="item">
              <img src={Market} alt="" />
              <h4>Market</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className="item">
              <img src={Watch} alt="" />
              <h4>Watch</h4>
            </div>
          </Link>
        </div>

        <hr />

        <div className="menu">
          <h4 className="others">Your Shortcuts</h4>
           <Link to='/'>
            <div className="item">
              <img src={Gallery} alt="" />
              <h4>Gallery</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className="item">
              <img src={Videos} alt="" />
              <h4>Videos</h4>
            </div>
          </Link>
          <Link to='/chatbox/id'>
            <div className="item">
              <img src={Message} alt="" />
              <h4>Message</h4>
            </div>
          </Link>
        </div>
      </div>

    </div>
  )
}
