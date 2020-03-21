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
      const shareTitle = "'" + props.data.currentBlog.title + "'" + " | 3i INC | 3 Idiots Incorporated."
      const propDescription = shareTitle + " | " + shareUrl
      const shareTitleLink = shareTitle + " | " + shareUrl
      const iconProp = {
        size: 34,
        round: true,
        bgStyle: {opacity: '1',
        },
        iconFillColor: 'white',
      }
      const socialIconcss = {
          marginRight: '6px',
          marginTop: '-3px',
      }
      const multipleState = props.data.currentBlog.multipleChapters
      let multipleChapterPresent
      if (multipleState === 1){
          multipleChapterPresent = 
          props.data.currentBlog.chapters.map(chapters => (
              <a onClick={() => navigate(`/blog/${chapters.chapterSlug}/`)}
               class='blog__categories__chapter'>{chapters.chapterTitle}</a> 
          ))
      }

    return (
        <Layout>
            <div className="blog__initialmodel">
            <SEO title={props.data.currentBlog.seoTitle} description={props.data.currentBlog.seoDescription}
                keywords={props.data.currentBlog.seoKeywords} url={props.data.currentBlog.seoUrl} 
                image={props.data.currentBlog.seoImage} author={props.data.currentBlog.authorData.seoAuthorName} 
            />
            
            <Nav/>
            <div className='blog__header'>
                <div className='blog__hero' style={{backgroundImage: `url(${props.data.currentBlog.featuredImage.fluid.src})`}}>
                
                </div>              
            </div>
            <div className='blog__info'>
                <div className='blog__info__title'>
                    <h2>{props.data.currentBlog.title}</h2><br/>
                </div>
                <div className='blog__info__author'>
                    <a onClick={() => navigate(`/idiots/${props.data.currentBlog.authorData.authorSlug}`)}>
                        <p className='blog__extratitleone' style={{textDecoration: 'none'}}>{props.data.currentBlog.authorData.authorName} | {date.createdat} </p>
                    </a>
                </div>
                <div className='blog__extratitletwo'>
                    <p className='blog__extratitletwo'>
                        {props.data.currentBlog.readDuration}
                    </p>
                        {props.data.currentBlog.category.map(category => (
                            <strong class='blog__categories'>{category.title} | </strong> 
                        ))}
                </div>
                <div className='blog__categories__chapters'>
                    {multipleChapterPresent}
                </div>
                <a
                    style={{fontSize: '1px', opacity: '0', marginBottom: '-1px'}}
                    to={`https://3iinc.xyz/idiots/${props.data.currentBlog.authorData.authorSlug}/`}>
                    {`https://3iinc.xyz/idiots/${props.data.currentBlog.authorData.authorSlug}/`}
                </a>
                <a 
                    to={`https://3iinc.xyz/blog/${props.data.currentBlog.slug}/`}
                    style={{opacity: '0', fontSize: '1px', marginBottom:'-1px'}}>
                        {`https://3iinc.xyz/blog/${props.data.currentBlog.slug}/`}
                </a>
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
                    <Link className='about__author' 
                        to={`/idiots/${props.data.currentBlog.authorData.authorSlug}/`}
                        style={{textDecoration: 'none', color: 'black'}}
                        >
                        <div className='author__image' style={{backgroundImage: `url(${props.data.currentBlog.authorData.authorPhoto.fluid.src})`}}></div>
                        <div className='author__details'>
                            
                            <div className='author__name'>
                                <h6>About Author</h6>
                                <h4>{props.data.currentBlog.authorData.authorName}</h4>
                            </div>
                            <div className='author__description'>
                                <h5>{props.data.currentBlog.authorData.authorDescription}</h5>
                            </div>
                        </div>
                    </Link>
                    <h5 className='Heading__latestposts'>LATEST POSTS</h5>
                    <div className='nextPost__Container' style={{marginBottom: '10px'}}>
                    
                        {props.data.nextBlog.edges.map(edge => (
                        <Link className='nextPosts' to={`/blog/${edge.node.slug}/`} style={{textDecoration: 'none',
                            color: 'black',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundImage: `linear-gradient(
                                to bottom,
                                rgba(255, 255, 255, 0.95) 40%,
                                rgba(255, 255, 255, 0.97) 70%,
                                rgba(255, 255, 255, 1) 100%),
                                url(${edge.node.featuredImage.fluid.src})`
                                }}
                                >
                            <h4 style={{}}>{edge.node.title}</h4>
                            <h5 style={{textTransform: 'uppercase', fontWeight: '900'}}>{edge.node.authorData.authorName}</h5>
                            <h6 style={{textTransform: 'uppercase'}}>{edge.node.createdAt}</h6>
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
            authorData{
                authorName
                authorSlug
                seoAuthorName
                authorDescription
                authorPhoto{
                    fluid(maxWidth: 400, quality: 85) {
                        ...GatsbyContentfulFluid
                        src
                    }
                }
            }
            readDuration
            shortDescription
            category {
                title
                id
            }
            multipleChapters
            chapters {
                chapterTitle
                chapterSlug
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
                fluid(maxWidth: 1000, quality: 85) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
            featuredImage {
                fluid(maxWidth: 1000, quality: 85) {
                    ...GatsbyContentfulFluid
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
                authorData{
                    authorName
                    authorSlug
                }
                featuredImage {
                    fluid(maxWidth: 200, quality: 85) {
                        ...GatsbyContentfulFluid
                        src
                    }
                }
                createdAt(formatString: "MMMM DD, YYYY")
        
            }
        }
    }
    }
`
