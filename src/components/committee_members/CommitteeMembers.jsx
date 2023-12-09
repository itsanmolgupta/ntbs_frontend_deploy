import React from 'react'
import './committee_members.css'
import TeamCarousel from '../team_carousel/TeamCarousel'

const CommitteeMembers = () => {
  return (
    <div className='container' id='committee_members'>
      <div className="title-container">
        <h1 className='center section-heading'>Committee Members</h1>
        <h3 className='center'>Meet Our Executive Team</h3>
      </div>
      <TeamCarousel />
      <a href='/committee_members'>
      <button className='viewBtn'>
        View All
        <div className="arrow-wrapper">
          <div className="arrow"></div>
        </div>
      </button>
      </a>
    </div>
  )
}

export default CommitteeMembers

