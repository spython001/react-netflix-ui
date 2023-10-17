import { ArrowBackOutlined } from '@mui/icons-material'
import './watch.scss'

export default function Watch() {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video 
          className='video' 
          autoPlay 
          progress 
          controls 
          src='/assets/netVid3.mp4'
        />
    </div>
  )
}
