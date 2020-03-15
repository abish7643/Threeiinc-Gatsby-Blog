import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Layout from '../components/layout'
import NavBlackText from '../components/navBlackText'
import SEO from '../components/seo'
import '../components/home/home.css'
import './archive.css'
import Footer from '../components/footer'



const Archive = (props) => {
    const blogContent = props.data.allContentfulBlog
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`
    const nextPage = `/blog/${currentPage + 1}`

    return (
        <Layout>
            <SEO title='Blog' keywords={['3i INC', 'Idiots by Choice', 'Idiotism', '3i INC Blog']} /> 
            <NavBlackText/>

            <header>
                <div className='archive__section'>
                <div className='archive__nav'>
                    <Link to='/blog'>
                        
                    </Link>
                </div>
                </div>
            </header>
            <div className='Author__Info__Container'>
                <h1>
                   Blog Posts
                </h1>
            </div>
            <div className='feed__initial__authorposts'>
                <div className='feed'>
                    {blogContent.edges.map(edge => (
                    <div key={edge.node.id} className='card'
                    style={{
                        backgroundImage: `linear-gradient(
                            to bottom,
                            rgba(10, 10, 10, 0) 0%,
                            rgba(10, 10, 10, 0.5) 50%,
                            rgba(10, 10, 10, 0.7) 100%),
                            url(${edge.node.featuredImage.fluid.src})`
                            }}
                            onClick={() => navigate(`/blog/${edge.node.slug}`)}>
                            {edge.node.category.map(category => (
                            <p className="card__category">{category.title}</p>
                            ))}
                        <p className="card__title">{edge.node.title}</p>
                    </div>
                ))}
                </div>
                <div className='pagination'>
                    <button className='pagination__item'>
                            {!isLast && (
                                <Link to={nextPage} rel='next' style={{ color: "white", textDecoration: 'none'}}>
                                    <div className='arrow__next'>Next</div>
                                </Link>
                            )}
                            {isLast && (
                                    <div className='arrow__next' style={{opacity: '0', textDecoration: 'none'}}>Next</div>
                            )}
                    </button>
                    <button className='pagination__item'>
                            {!isFirst && (
                                <Link to={prevPage} rel='prev' style={{ color: "white", textDecoration: 'none' }}>
                                    <div className='arrow__back'>Back</div>
                                </Link>
                            )}
                            {isFirst && (
                                    <div className='arrow__back' style={{opacity: '0', textDecoration: 'none'}}>Back</div>
                            )}
                    </button>
                </div>
            </div>
            <Footer/>
        </Layout>
    )
}

export default Archive


export const pageQuery = graphql`
    query ArchiveQuery($skip: Int!, $limit: Int!) {
        allContentfulBlog(
            sort: { fields: [createdAt], order: DESC}
            filter: {
                node_locale: {eq: "en-US",}}
                skip: $skip
                limit: $limit
            ) {
            edges {
                node {
                    id
                    slug
                    title
                    category {
                        title
                        id
                    }
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
`