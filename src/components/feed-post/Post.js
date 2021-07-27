import React from 'react'
import './Post.scss'

// icons imports
import More from '../../assets/outline/More.svg'
import HeartSmall from '../../assets/filled/HeartSmall.svg'
import ChatSmall from '../../assets/filled/ChatSmall.svg'
import SendSmall from '../../assets/filled/SendSmall.svg'
import BookmarkSmall from '../../assets/outline/BookmarkSmall.svg'


function Post() {
  return (
    <div className="post">
      <div className="postInfo">
        <div className="postInfo__left">
          <div className="postInfo__left--avatar">
            <img src="https://www.worldphoto.org/sites/default/files/139813_158163_0_%20%C2%A9%20Noel%20Guevara%2C%20Philippines%2C%20Commended%2C%20Open%20Competition%2C%20Portraits%2C%202017%20Sony%20World%20Photography%20Awards.jpg" alt="user avatar" />
          </div>
          <div className="postInfo__left--userInfo">
            <h6>Ken Myers</h6>
            <p>Brooklyn</p>
          </div>
        </div>
        <div className="postInfo__right">
          <div className="tripledotIcon">
            <img src={More} alt="tripledot" />
          </div>
        </div>
      </div>
      <div className="feedPost">
        <img src="https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWJzdHJhY3R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="feed post" />
      </div>
      <div className="engagementInfo">
        <div className="engagementInfo__left">
          <div className="engagementInfo__left--likes">
            <div className="heartIcon">
              <img src={HeartSmall} alt="heart" />
            </div>
            <p>1.7k</p>
          </div>
          <div className="chatIcon">
            <img src={ChatSmall} alt="" />
          </div>
          <div className="sendIcon">
            <img src={SendSmall} alt="" />
          </div>
        </div>
        <div className="engagementInfo__right">
          <div className="bookmarkIcon">
            <img src={BookmarkSmall} alt="bookmark" />
          </div>
        </div>
      </div>
      <div className="commentInfo">
        <div className="commentInfo__left">
          <div className="commentInfo__left--avatar overlap">
            <img src="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="comment avatar" />
          </div>
          <div className="commentInfo__left--avatar overlap1">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0be35084690711.5d6528c057b18.jpg" alt="comment avatar" />
          </div>
          <div className="commentInfo__left--avatar overlap2">
            <img src="https://i1.adis.ws/i/canon/get-inspired-home-studio-portraits-1-hub_0259e4eec3a54ed6bc6e310ff403fb9d?w=550&qlt=100" alt="comment avatar" />
          </div>
          <p>Hey Ken, nice shot hope you're having a great day</p>
        </div>
        <div className="commentInfo__right">
          <button className="commentInfo__right--more">more</button>
        </div>
      </div>
    </div>
  )
}

export default Post
