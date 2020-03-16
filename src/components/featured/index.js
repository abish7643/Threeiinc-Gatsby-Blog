import React from "react"
import { graphql, navigate, StaticQuery } from "gatsby"
import './featured.css'


export default () => (
    <StaticQuery
    query = {graphql`
    query FeaturedQuery {
        allContentfulBlog(
            limit: 1
            sort: { fields: [createdAt], order: DESC}
            filter: {
                node_locale: {eq: "en-US",}
                featured: {eq: true}
            } 
            ) {
            edges {
                node {
                    id
                    slug
                    title
                    authorData{
                        authorName
                        authorSlug
                    }
                    category {
                        title
                        id
                    }
                    readDuration
                    createdAt(formatString: "MMMM DD, YYYY")
                    shortDescription
                    featuredImage {
                        fluid(maxWidth: 1200, quality: 85) {
                            src
                            ...GatsbyContentfulFluid
                        }
                    }
                }
            }
        }

    }
`}

render={data => (
    <header>
        {data.allContentfulBlog.edges.map(edge => (
            <div key={edge.node.id} className='header__section'>
                <div className='header__hero' style={{backgroundImage: `url(${edge.node.featuredImage.fluid.src})`}}></div>
                <div className='header__content'>
                    <div className='header__info'>
                        <h2 className='banner___title'>{edge.node.title}</h2>
                        <p className='header__subtitle'>{edge.node.shortDescription}</p>
                        <p className='header__author'>
                        <a style={{textDecoration:'none', color: 'white'}} onClick={() => navigate(`/idiots/${edge.node.authorData.authorSlug}`)}> {edge.node.authorData.authorName} | {edge.node.createdAt}</a>
                        </p>
                        <button style={{marginTop: '5px'}} onClick={() => navigate(`/blog/${edge.node.slug}`)} className='btn__med'>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </header>
    )}
    />
)