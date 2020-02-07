import React from "react"
import { Helmet } from "react-helmet"
import Nav from '../components/nav'
import Layout from "../components/layout"
import Featured from "../components/featured"
import Home from "../components/home"
import Footer from "../components/footer"
import './index.css'

const IndexPage = () => (
  <Layout>
    <Helmet>
    <meta charSet="utf-8" />
    <title>3i INC</title>
    <meta name="title" content="3i INC | Idiots by Choice" />
    <meta name="description" content="Idiots by Choice" />
  </Helmet>
    <Nav/>
    <Featured/>
    <Home/>
    <Footer/>
  </Layout>
)

export default IndexPage
