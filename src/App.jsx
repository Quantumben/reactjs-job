import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  return (
    <>
      <Navbar />

      {/* <!-- Hero --> */}
      <Hero title="Become a React Dev"  subtitle="Find the React job that fits your skills and needs" />

      {/* <!-- Developers and Employers --> */}
      <HomeCards />

      {/* <!-- Browse Jobs --> */}
      <JobListings />

      {/* <!-- View All Jobs --> */}
      <ViewAllJobs />
    </>
  )
}

export default App