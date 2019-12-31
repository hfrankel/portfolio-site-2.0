import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello, my name is Harry -</h1>
            <h1>I'm a Font End Developer</h1>
            <Link to='/projects'>Projects</Link>
            <h2>Contact</h2>
            <a href='https://github.com/hfrankel' target='_blank' rel='noopener noreferrer'>GitHub</a>
        </Layout>
    );
}

export default IndexPage