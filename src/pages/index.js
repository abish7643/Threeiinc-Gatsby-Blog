import React from "react"
import { Link } from "gatsby"
import Nav from '../components/nav'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Featured from "../components/featured"
import Home from "../components/home"
import Footer from "../components/footer"
import './index.css'

const IndexPage = () => (
  <Layout>
    <Nav/>
    <Featured/>
    <Home/>
    <Footer/>
  </Layout>
)

export default IndexPage
