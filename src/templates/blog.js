import React from 'react'
import { graphql } from 'gatsby'
import { DiscussionEmbed, CommentCount } from 'disqus-react' 
import Layout from '../components/layout'
import Nav from '../components/nav'
import SEO from '../components/seo'
import './blog.css'
import Footer from '../components/footer'

import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    TumblrShareButton,
    TumblrIcon,
    PinterestShareButton,
    PinterestIcon,
  } from "react-share";


const BlogTemplate = (props) => {
    const disqusConfig = {
        shortname:  'threeiinc',
        config: {   identifier: props.data.contentfulBlog.id,
                    title: props.data.contentfulBlog.slug,
                }
      };
      const date = {
          createdat: props.data.contentfulBlog.createdAt,
      }
      const shareUrl = 'https://3iinc.xyz/blog/' + props.data.contentfulBlog.slug + '/'
      const shareTitle = "'" + props.data.contentfulBlog.title + "'" + " | 3i INC | 3 Idiots Incorporation"
      const iconProp = {
        size: 34,
        round: true,
        bgStyle: {opacity: '1'},
        iconFillColor: 'white',
      }
      const shareMedia = props.data.contentfulBlog.featuredImage.fluid.src
      const socialIconcss = {
          marginRight: '6px',
          marginTop: '-3px'
      }
    return (
        <Layout>
            <div className="blog__initialmodel">
            <SEO title={props.data.contentfulBlog.seoTitle} description={props.data.contentfulBlog.seoDescription} keywords={props.data.contentfulBlog.seoKeywords} url={props.data.contentfulBlog.seoUrl} image={props.data.contentfulBlog.seoImage} author={props.data.contentfulBlog.seoAuthor} />
            <Nav/>
            <div className='blog__header'>

                <div className='blog__hero' style={{backgroundImage: `url(${props.data.contentfulBlog.featuredImage.fluid.src})`}}>
                </div>
                <div className='blog__content__title'>
                    <h2 className='blog__title'>{props.data.contentfulBlog.title}</h2>
                    <p className='blog__author'>{props.data.contentfulBlog.author} |  {date.createdat} </p>
                    <p className='blog__extratitle'>{props.data.contentfulBlog.readDuration}</p>
                    {props.data.contentfulBlog.category.map(category => (
                    <strong class='blog__categories'>{category.title} | </strong>
                ))}
                </div>
            </div>
            <div className='blog__wrapper'>
                <div className='blog__content'>
                    <div dangerouslySetInnerHTML={
                        {__html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`}
                    }/>
                </div>
                    <div className="share__buttons">
                        <WhatsappShareButton url={shareUrl} title={shareTitle} separator=" " style={socialIconcss}>
                            <WhatsappIcon  {...iconProp} />
                        </WhatsappShareButton>
                        <FacebookShareButton url={shareUrl} quote={shareTitle} style={socialIconcss}>
                            <FacebookIcon  {...iconProp}/>
                        </FacebookShareButton>
                        <EmailShareButton url={shareUrl} subject={shareTitle} style={socialIconcss}>
                            <EmailIcon  {...iconProp}/>
                        </EmailShareButton>
                        <TelegramShareButton url={shareUrl} title={shareTitle} style={socialIconcss}>
                            <TelegramIcon  {...iconProp}/>
                        </TelegramShareButton>
                        <TwitterShareButton url={shareUrl} title={shareTitle} style={socialIconcss}>
                            <TwitterIcon  {...iconProp}/>
                        </TwitterShareButton>
                        <LinkedinShareButton url={shareUrl} title={shareTitle} style={socialIconcss}>
                            <LinkedinIcon  {...iconProp}/>
                        </LinkedinShareButton>
                        <RedditShareButton url={shareUrl} title={shareTitle} style={socialIconcss}>
                            <RedditIcon  {...iconProp}/>
                        </RedditShareButton>
                        <TumblrShareButton url={shareUrl} title={shareTitle} style={socialIconcss}>
                            <TumblrIcon  {...iconProp}/>
                        </TumblrShareButton>
                        <PinterestShareButton url={shareUrl} title={shareTitle} media={shareMedia} style={socialIconcss}>
                            <PinterestIcon  {...iconProp}/>
                        </PinterestShareButton>

                    </div>
                <div className='disqus__section'>
                    <DiscussionEmbed shortname={disqusConfig.shortname} config={disqusConfig.config} />
                </div>
                <div className='footer__div'>
                    <Footer/>
                </div>
            </div>
            </div>
        </Layout>
    )
}

export default BlogTemplate



export const query = graphql`
    query BlogTemplate($id: String!) {
        contentfulBlog(id: {eq: $id}) {
            title
            id
            slug
            author
            readDuration
            shortDescription
            category {
                title
                id
            }
            createdAt(formatString: "MMMM DD, YYYY")
            content {
                childMarkdownRemark {
                    html
                }
            }
            seoTitle
            seoDescription
            seoAuthor
            seoKeywords
            seoUrl
            seoImage {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                    src
                }
            }
            featuredImage {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                    src
                }
            }
        }
    }
`
