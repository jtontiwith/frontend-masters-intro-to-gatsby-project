import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout.js'

const IndexPage = () => {
  return (
    <>
      <Layout>
        <h1>Yo, Gatsby here.</h1>
        <Link to="/about">about page</Link>
      </Layout>
    </>
  )
}

export default IndexPage
