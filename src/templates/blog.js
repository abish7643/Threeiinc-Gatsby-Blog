import React from 'react'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react' 
import Layout from '../components/layout'
import Nav from '../components/nav'
import SEO from '../components/seo'
import './blog.css'
import Footer from '../components/footer'



const BlogTemplate = (props) => {
    const disqusConfig = {
        shortname:  'threeiinc',
        config: {   identifier: props.data.contentfulBlog.id,
                    title: props.data.contentfulBlog.slug,
                }
      };
    return (
        <Layout>
            <div className="blog__initialmodel">
            <SEO title={props.data.contentfulBlog.seoTitle} description={props.data.contentfulBlog.seoDescription} keyword={props.data.contentfulBlog.seoKeywords} />
            <Nav/>
            <div className='blog__header'>
                <div className='blog__hero' style={{backgroundImage: `url(${props.data.contentfulBlog.featuredImage.fluid.src})`}}></div>
                <div className='blog-info'>
                    <h1 className='blog__title'>{props.data.contentfulBlog.title}</h1>
                    <h6 className='blog__author'>{props.data.contentfulBlog.author}</h6>
                </div>
            </div>
            <div className='blog__wrapper'>
                <div className='blog__content'>
                    <div dangerouslySetInnerHTML={
                        {__html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`}
                    }/>
                </div>
                <div className='disqus__section'>
                <DiscussionEmbed shortname={disqusConfig.shortname} config={disqusConfig.config} />
                </div>
                <div className='blog__footer'><Footer/></div>
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
            shortDescription
            content {
                childMarkdownRemark {
                    html
                }
            }
            seoTitle
            seoDescription
            seoAuthor
            seoKeywords
            seoImage {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
            featuredImage {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
        }
    }
`