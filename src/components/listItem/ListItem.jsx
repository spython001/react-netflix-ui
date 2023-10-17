/* eslint-disable react/prop-types */
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import { useState } from 'react'
import './listItem.scss'

export default function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className='listItem'
      style={{left: isHovered && index * 225 - 50 + index * 2.5 }} 
      onMouseEnter={()=>setIsHovered(true)} 
      onMouseLeave={()=>setIsHovered(false)}
    >
        <img src="/assets/netItem1.png" alt="" />

        <div className='itemInfo'>
          <div className="icons">
            <PlayArrow/>
            <Add/>
            <ThumbUpAltOutlined/>
            <ThumbDownOutlined/>
          </div>
          
          <div className="itemInfoTop">
            <span>1 hour 14 minutes</span>
            <span className='limit'>+16</span>
            <span>1999</span>
          </div>

          <div className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vitae ducimus sit ad temporibus illo non magni laudantium, dolorem perspiciatis iste.
          </div>

          <div className="genre">Action</div>
        </div>
    </div>
  )
}
