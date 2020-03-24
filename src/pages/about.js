import React from "react"
import { Helmet } from "react-helmet"
import NavBlackText from '../components/navBlackText'
import Layout from "../components/layout"
import './index.css'


export default class IndexPage extends React.Component{
  render() {
      return (
      <Layout>
        <Helmet>
        <meta charSet="utf-8" />
        <title>3i INC | 3 Idiots Incorporated. | Idiots by Choice</title>
        <meta name="title" content="About | 3i INC | Idiots by Choice" />
        <meta name="description" content="
          Who's an Idiot? The one who questions the system,
          The one who doesn't like how the system works or
          The one who doesn't believe in the system.
          We Are The Fucking Idiots! | 3i INC | 3 Idiots Incorporated. | 3iinc.xyz | 3iinc" />
        <meta name="keywords"
        content="3iinc, idiots, 3i, INC, 3 Idiots Incorporation, 3 Idiots Incorporated, 3 Idiots, Blog, Articles, Rogue, Idiot, Choice" />
      </Helmet>
        <NavBlackText/>

        <div className='about__hero__div'>
            <div className='about__hero__div__inner'>
                <div className='about__hero__text'>
                    <h2 className='about__hero__heading2' 
                        data-sal="slide-up"
                        data-sal-delay="300"
                        data-sal-easing="ease">
                            An About Page, Eh?
                    </h2>
                </div>
                <div className='about__hero__text'>
                    <div className='about__hero__text__half'>
                        
                    </div>
                </div>
            </div>
        </div>

      </Layout>    
      )
  }
}
