import React from 'react'
import { Link } from 'gatsby'
import Layout from './../components/layout'

const ProjectPage = () => {
    return (
        <Layout>
            <h1>This is my projects page.</h1>
            <Link to='/'>Home</Link>
        </Layout>
    );
}

export default ProjectPage