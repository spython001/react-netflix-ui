/* eslint-disable react/prop-types */
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import './featured.scss'

export default function Featured({type}) {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span className="">{type === "movie" ? "Movies" : "Series"} </span>
                <select name="genre" id="genre">
                    <option >Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
        <img src="/assets/netImg1.png" alt="" />
        <div className="info">
            <img src="/assets/netFet.png" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Possimus fugit repellendus eum numquam non quidem! 
                Sed amet, voluptate ipsum repellendus, doloremque minus dignissimos 
                perspiciatis excepturi quisquam, eius distinctio rem cupiditate!
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow className='icon'/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined className='icon'/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
