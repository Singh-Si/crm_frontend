import React, { useEffect, useState } from 'react'
import TitleBreadCrumb from '../../components/TitleBreadCrumb'
import ProfileBanner from './ProfileBanner'
import UserDetails from './UserDetails'
import config from '../../config';
import axios from 'axios';

function UserProfile() {
  const [userProfile, setUserProfile] = useState([]);
  const token = localStorage.getItem("token")

  const usersDetails = async () => {
    try {
      const response = await axios.post(`${config.API_URL}/verify`, { token: token });
      setUserProfile(response?.data?.body?.payload)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    usersDetails()
  }, [])
  return (
    <>
      <div className='page-titles'>
        <TitleBreadCrumb title="User Profile" />
      </div>
      <div className='container-fluid'>
        <div className='row'>
          <ProfileBanner  userProfile = {userProfile}/>
          <UserDetails userProfile = {userProfile} />
        </div>
      </div>
    </>
  )
}

export default UserProfile