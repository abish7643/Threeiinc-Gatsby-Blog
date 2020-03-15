import React from 'react'
import { graphql, navigate, Link } from 'gatsby'
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
    const shareUrl = 'https://3iinc.xyz/blog/' + props.data.currentBlog.slug + '/'
    const disqusConfig = {
        url: shareUrl,
        shortname:  'threeiinc',
        config: {   identifier: props.data.currentBlog.id,
                    title: props.data.currentBlog.slug,
                }
      };
      const date = {
          createdat: props.data.currentBlog.createdAt,
      }
      const shareMedia = props.data.currentBlog.featuredImage.fluid.src
      const shareTitle = "'" + props.data.currentBlog.title + "'" + " | 3i INC | 3 Idiots Incorporation"
      const propDescription = shareTitle + " | " + shareUrl
      const shareTitleLink = shareTitle + " | " + shareUrl
      const iconProp = {
        size: 34,
        round: true,
        bgStyle: {opacity: '1'},
        iconFillColor: 'white',
      }
      const socialIconcss = {
          marginRight: '6px',
          marginTop: '-3px'
      }
    return (
        <Layout>
            <div className="blog__initialmodel">
            <SEO title={props.data.currentBlog.seoTitle} description={props.data.currentBlog.seoDescription}
                keywords={props.data.currentBlog.seoKeywords} url={props.data.currentBlog.seoUrl} 
                image={props.data.currentBlog.seoImage} author={props.data.currentBlog.seoAuthor} 
            />
            <Nav/>
            <div className='blog__header'>

                <div className='blog__hero' style={{backgroundImage: `url(${props.data.currentBlog.featuredImage.fluid.src})`}}>
                </div>
                <div className='blog__content__title'>
                    <h2 className='blog__title'>{props.data.currentBlog.title}</h2><br/>
                    <a className='blog__author' onClick={() => navigate(`/idiots/${props.data.currentBlog.authorSlug}`)}>
                        <p className='blog__extratitleone' style={{textDecoration: 'none'}}>{props.data.currentBlog.author} | {date.createdat} </p>
                    </a>
                    <p className='blog__extratitletwo'>{props.data.currentBlog.readDuration}</p>
                    {props.data.currentBlog.category.map(category => (
                    <strong class='blog__categories'>{category.title} | </strong>
                ))}
                </div>
            </div>
            <div className='blog__wrapper'>
                <div className='blog__content'>
                    <div dangerouslySetInnerHTML={
                        {__html: `${props.data.currentBlog.content.childMarkdownRemark.html}`}
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
                        <PinterestShareButton url={shareUrl} title={shareTitleLink} description={propDescription} media={shareMedia} style={socialIconcss}>
                            <PinterestIcon  {...iconProp}/>
                        </PinterestShareButton>
                        <CommentCount config={disqusConfig} placeholder={'...'}/>
                    </div>
                    <h5 className='Heading__latestposts'>Latest Posts:</h5>
                    <div className='nextPost__Container'>
                    
                        {props.data.nextBlog.edges.map(edge => (
                        <Link className='nextPosts' to={`/blog/${edge.node.slug}/`} style={{textDecoration: 'none', color: 'black'}}>
                            <h4>{edge.node.title}</h4>
                            <h5>{edge.node.author}</h5>
                            <h6>{edge.node.createdAt}</h6>
                        </Link>
                    ))}
                    </div>

                <div className='disqus__section' >
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
    currentBlog: contentfulBlog(id: {eq: $id}) {
            title
            id
            slug
            author
            authorSlug
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
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                    src
                }
            }
            featuredImage {
                fluid(maxWidth: 800, quality: 100) {
                    ...GatsbyContentfulFluid_withWebp
                    src
                }
            }
        }
        nextBlog: allContentfulBlog(
            limit: 2
            sort: { fields: [createdAt], order: DESC}
            filter: {
                node_locale: {eq: "en-US",}
                id: {ne: $id}
            }
        ){ edges {
            node {
                title
                id
                slug
                author
                createdAt(formatString: "MMMM DD, YYYY")
        
            }
        }
    }
    }
`
