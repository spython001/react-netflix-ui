import { Notifications, Search } from '@mui/icons-material'
import './navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <img src="/assets/netflix.png" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search/>
                <span>KID</span>
                <Notifications/>
            </div>
        </div>
    </div>
  )
}
