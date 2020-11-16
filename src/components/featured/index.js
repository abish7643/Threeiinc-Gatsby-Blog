import React from "react"
import { graphql, StaticQuery, Link, navigate } from "gatsby"
import Img from "gatsby-image"
import "./featured.css"

export default () => (
    <StaticQuery
        query={graphql`
            query FeaturedQuery {
                allContentfulBlog(
                    limit: 1
                    sort: { fields: [createdAt], order: DESC }
                    filter: {
                        node_locale: { eq: "en-US" }
                        featured: { eq: true }
                    }
                ) {
                    edges {
                        node {
                            id
                            slug
                            title
                            authorData {
                                authorName
                                authorSlug
                                authorPhoto {
                                    fluid(
                                        maxWidth: 300
                                        quality: 70
                                        toFormat: WEBP
                                    ) {
                                        ...GatsbyContentfulFluid
                                        src
                                    }
                                }
                            }
                            category {
                                title
                                id
                            }
                            readDuration
                            createdAt(formatString: "MMMM DD, YYYY")
                            shortDescription
                            featuredImage {
                                fluid(
                                    maxWidth: 1200
                                    quality: 70
                                    toFormat: WEBP
                                ) {
                                    src
                                    ...GatsbyContentfulFluid
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={(data) => (
            <header>
                <div className="header__watermark">Featured</div>
                {data.allContentfulBlog.edges.map((edge) => (
                    <div
                        onClick={() => navigate(`/blog/${edge.node.slug}/`)}
                        key={edge.node.id}
                        className="header__section"
                    >
                        <Img
                            className="header__hero"
                            fluid={edge.node.featuredImage.fluid}
                        />
                        <div
                            className="header__content"
                            data-sal="fade"
                            data-sal-delay="50"
                            data-sal-easing="ease-in-out"
                        >
                            <div className="header__info">
                                <Link
                                    to={`/blog/${edge.node.slug}/`}
                                    style={{
                                        textDecoration: "none",
                                        color: "#323232",
                                        zIndex: "150",
                                    }}
                                >
                                    <h1
                                        className="banner___title"
                                        data-sal="fade"
                                        data-sal-delay="100"
                                        data-sal-easing="ease-in-out"
                                    >
                                        {edge.node.title}
                                        <span className="title__fullstop">
                                            .
                                        </span>
                                    </h1>
                                </Link>
                                <p
                                    className="header__subtitle"
                                    data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-easing="ease-in-out"
                                >
                                    {edge.node.shortDescription}
                                </p>
                                <div className="featured__footer">
                                    <div
                                        className="featured__author"
                                        data-sal="fade"
                                        data-sal-delay="200"
                                        data-sal-easing="ease-in-out"
                                    >
                                        <Link
                                            to={`/idiots/${edge.node.authorData.authorSlug}/`}
                                        >
                                            <Img
                                                className="featured__author__photo"
                                                fluid={
                                                    edge.node.authorData
                                                        .authorPhoto.fluid
                                                }
                                            />
                                        </Link>
                                        <div>
                                            <Link
                                                className="no-text-decoration"
                                                to={`/idiots/${edge.node.authorData.authorSlug}/`}
                                            >
                                                <strong>
                                                    {" "}
                                                    {
                                                        edge.node.authorData
                                                            .authorName
                                                    }
                                                </strong>
                                            </Link>
                                            <p className="featured__date">
                                                Published on{" "}
                                                {edge.node.createdAt}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="header__button__div"
                                        data-sal="fade"
                                        data-sal-delay="400"
                                        data-sal-easing="ease-in-out"
                                    >
                                        <Link to={`/blog/${edge.node.slug}/`}>
                                            <button
                                                style={{
                                                    marginTop: "5px",
                                                    outline: "none",
                                                }}
                                                className="btn__med"
                                            >
                                                Read Post
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </header>
        )}
    />
)
