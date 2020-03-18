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
    <title>3i INC | 3 Idiots Incorporated. | Idiots by Choice</title>
    <meta name="title" content="3i INC | Idiots by Choice" />
    <meta name="description" content="
      Who's an Idiot? The one who questions the system,
      The one who doesn't like how the system works or
      The one who doesn't believe in the system.
      We Are The Fucking Idiots! | 3i INC | 3 Idiots Incorporated. | 3iinc.xyz | 3iinc" />
    <meta name="keywords" content="3iinc, idiots, 3i, INC, 3 Idiots Incorporation, 3 Idiots Incorporated, 3 Idiots, Blog, Articles, Rogue, Idiot, Choice" />
  </Helmet>
    <Nav/>
    <Featured/>
    <Home/>
    <Footer/>
  </Layout>
)

export default IndexPage
