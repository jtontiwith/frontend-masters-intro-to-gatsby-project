import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const about = () => {
  return (
    <>
      <Layout title="about this site" description="more site info">
        <h1>About here</h1>
        <Link to="/">Back to home </Link>
      </Layout>
    </>
  )
}

export default about
