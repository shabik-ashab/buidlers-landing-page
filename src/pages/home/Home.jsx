import React from 'react';
import Banner from '../../components/banner/Banner'
import FollowUs from '../../components/followUs/FollowUs';
import Star from '../../components/star/Star';

const Home = () => {
  return (
    <div>
      <Banner />
      <Star />
      <FollowUs />
    </div>
  )
}

export default Home