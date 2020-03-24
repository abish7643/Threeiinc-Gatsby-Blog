import React from "react"
import { graphql, navigate, StaticQuery, Link } from "gatsby"
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
                        fluid(maxWidth: 1200, quality: 70, toFormat: WEBP) {
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
    <header >
        {data.allContentfulBlog.edges.map(edge => (
            <div key={edge.node.id} className='header__section'>
                <div className='header__hero' data-sal="fade"
                    data-sal-delay="10"
                    data-sal-easing="ease"
                 style={{backgroundImage: `url(${edge.node.featuredImage.fluid.src})`}} ></div>
                <div className='header__content'>
                    <div className='header__info'>
                        <h2 className='banner___title' 
                            data-sal="fade"
                            data-sal-delay="20"
                            data-sal-easing="ease">{edge.node.title}</h2>
                        <p className='header__subtitle' data-sal="slide-down"
                            data-sal-delay="100"
                            data-sal-easing="ease">{edge.node.shortDescription}</p>
                        <p className='header__author' data-sal="slide-down"
                            data-sal-delay="160"
                            data-sal-easing="ease">
                        <a style={{textDecoration:'none', color: 'white'}}
                            onClick={() => navigate(`/idiots/${edge.node.authorData.authorSlug}`)}>
                            {edge.node.authorData.authorName} | {edge.node.createdAt}
                        </a>
                        </p>
                        <div data-sal="slide-down"
                            data-sal-delay="400"
                            data-sal-easing="ease">
                            <Link to={`/blog/${edge.node.slug}`}>
                                <button style={{marginTop: '5px'}} className='btn__med'>
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </header>
    )}
    />
)