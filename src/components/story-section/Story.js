import React from 'react'
import './Story.scss'

// assets imports
import PlusBig from '../../assets/outline/PlusBig.svg'
import AmJD from '../../assets/images/am-jd.jpg'
import Behrouz from '../../assets/images/behrouz-sasani.jpg'
import Carlos from '../../assets/images/carlos-delgado.jpg'
import Dean from '../../assets/images/dean-amir.jpg'
import Fabio from '../../assets/images/fabio-henning.jpg'
import Gunjan from '../../assets/images/gunjan-patel.jpg'
import Hadis from '../../assets/images/hadis-safari.jpg'
import Jackson from '../../assets/images/jackson-david.jpg'
import Juan from '../../assets/images/juan-goyache.jpg'

function Story() {
  
  const StorySection = ({storyAvatar, storyName, borderStyle}) => {
    return (
      <div className="storySection">
        <div className="storySection__container">
          <div className="storyContent">
            <div style={{border: borderStyle}} className="storyContent__avatar">
              <img className="avatar" src={storyAvatar} alt="story avatar" />
            </div>
            <p className="storyContent__name">{storyName}</p>
          </div>
        </div>
      </div>
    )
  }

  return(
  <div className="story">
    <StorySection 
      storyAvatar={PlusBig}
      storyName="My story"
      borderStyle="1px solid #f7f7f7"
    />
    <StorySection 
      storyAvatar={AmJD}
      storyName="Am JD"
      borderStyle="none"
    />
    <StorySection 
      storyAvatar={Behrouz}
      storyName="Behrouz"
      borderStyle="none"
    />
    <StorySection 
      storyAvatar={Carlos}
      storyName="Carlos"
      borderStyle="none"
    />
    <StorySection 
      storyAvatar={Dean}
      storyName="Dean"
      borderStyle="none"
    />
    <StorySection 
      storyAvatar={Fabio}
      storyName="Fabio"
      borderStyle="none"
    />
    <StorySection 
      storyAvatar={Gunjan}
      storyName="Gunjan"
      borderStyle="none"
    />
    <StorySection 
      storyAvatar={Hadis}
      storyName="Hadis"
      borderStyle="none"
    />
    <StorySection 
      storyAvatar={Jackson}
      storyName="Jackson"
      borderStyle="none"
    />
    <StorySection 
      storyAvatar={Juan}
      storyName="Juan"
      borderStyle="none"
    />
  </div>
  )
}

export default Story
