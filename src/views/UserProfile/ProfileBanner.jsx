import React from 'react'

function ProfileBanner({userProfile}) {

  console.log(userProfile,"user")
  return (
    <>
    <div className="col-lg-12">
        <div className="card card-profile">
          <div className="admin-user">
            <div className="img-wrraper">                              
              <div className>
                <img src="images/avatar.png" className="rounded-circle" alt="" /></div>
              {/* <a className="icon-wrapper" href="edit-profile.html"><i className="fa-solid fa-pencil" /></a> */}
            </div>
            <div className="user-details">
              <div className="title capitalize"><a target="_blank" href="#"> 
                  <h4>{userProfile.firstName}  {userProfile?.lastName}</h4></a>
                {/* <h6 className="capitalize">{userProfile && (userProfile.role).title}</h6> */}
              </div>
                <ul className="user-social-links">
                  <li><a href="javascript:void(0);"><i className="fa-brands fa-facebook-f" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa-brands fa-skype" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa-brands fa-linkedin-in" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa-brands fa-instagram" /></a></li>
                  <li><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                </ul>
              {/* <ul className="follow-list">
                <li>
                  <div className="follow-num ">325</div><span>Follower</span>
                </li>
                <li>
                  <div className="follow-num ">450</div><span>Following</span>
                </li>
                <li>
                  <div className="follow-num ">500</div><span>Likes</span>
                </li>
              </ul> */}
            </div>
          </div>	
        </div>
      </div>
    </>
  )
}

export default ProfileBanner