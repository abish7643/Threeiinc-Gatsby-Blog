/* eslint-disable */
import React from "react"
import { graphql, navigate, Link, StaticQuery } from "gatsby"
import "./home.css"

export default () => (
    <StaticQuery
        query={graphql`
            query HomeQuery {
                allContentfulBlog(
                    limit: 9
                    sort: { fields: [createdAt], order: DESC }
                    filter: { node_locale: { eq: "en-US" }, home: { eq: true } }
                ) {
                    edges {
                        node {
                            id
                            slug
                            title
                            seoUrl
                            authorData {
                                authorName
                                authorSlug
                            }
                            createdAt(formatString: "MMMM DD, YYYY")
                            category {
                                title
                                id
                            }

                            featuredImage {
                                fluid(
                                    maxWidth: 600
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
            <>
                <p
                    className="feed__heading"
                    data-sal="fade"
                    data-sal-delay="50"
                    data-sal-easing="ease-in-out"
                >
                    Latest Posts
                </p>
                <div className="feed__initial">
                    <div className="feed">
                        {data.allContentfulBlog.edges.map((edge) => (
                            <div
                                key={edge.node.id}
                                className="card"
                                data-sal="fade"
                                data-sal-delay="50"
                                data-sal-easing="ease-in-out"
                                style={{
                                    backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(10, 10, 10, 0) 0%,
                    rgba(10, 10, 10, 0.36) 50%,
                    rgba(10, 10, 10, 0.6) 100%),
                    url(${edge.node.featuredImage.fluid.src})`,
                                }}
                                onClick={() =>
                                    navigate(`/blog/${edge.node.slug}/`)
                                }
                            >
                                {edge.node.category.map((category) => (
                                    <p
                                        className="card__category"
                                        data-sal="fade"
                                        data-sal-delay="100"
                                        data-sal-easing="ease-in-out"
                                        key={category.id}
                                    >
                                        {category.title}
                                    </p>
                                ))}
                                <p
                                    className="card__title"
                                    data-sal="fade"
                                    data-sal-delay="150"
                                    data-sal-easing="ease-in-out"
                                >
                                    {edge.node.title}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="viewmore_container">
                        <Link
                            className="viewmore_wrapper__link"
                            to={`/blog/2/`}
                            data-sal="fade"
                            data-sal-delay="50"
                            data-sal-easing="ease-in-out"
                        >
                            <button className="viewmore_wrapper">
                                More Posts
                            </button>
                        </Link>
                        <Link
                            className="viewmore_wrapper__link"
                            to={`/search/`}
                            data-sal="fade"
                            data-sal-delay="100"
                            data-sal-easing="ease-in-out"
                        >
                            <button className="viewmore_wrapper__outline">
                                Search
                                <svg
                                    className="search-svg-btn"
                                    viewBox="0 0 512.002 512.002"
                                >
                                    <g>
                                        <path d="m495.594 416.408-134.086-134.095c14.685-27.49 22.492-58.333 22.492-90.312 0-50.518-19.461-98.217-54.8-134.31-35.283-36.036-82.45-56.505-132.808-57.636-1.46-.033-2.92-.054-4.392-.054-105.869 0-192 86.131-192 192s86.131 192 192 192c1.459 0 2.93-.021 4.377-.054 30.456-.68 59.739-8.444 85.936-22.436l134.085 134.075c10.57 10.584 24.634 16.414 39.601 16.414s29.031-5.83 39.589-16.403c10.584-10.577 16.413-24.639 16.413-39.597s-5.827-29.019-16.407-39.592zm-299.932-64.453c-1.211.027-2.441.046-3.662.046-88.224 0-160-71.776-160-160s71.776-160 160-160c1.229 0 2.449.019 3.671.046 86.2 1.935 156.329 73.69 156.329 159.954 0 86.274-70.133 158.029-156.338 159.954zm277.296 121.02c-4.525 4.531-10.547 7.026-16.958 7.026s-12.434-2.495-16.966-7.034l-129.294-129.284c6.813-5.307 13.319-11.094 19.458-17.365 5.174-5.285 9.998-10.825 14.48-16.58l129.291 129.3c4.535 4.532 7.032 10.556 7.032 16.962s-2.496 12.431-7.043 16.975z" />
                                        <path d="m192 64.001c-70.58 0-128 57.42-128 128s57.42 128 128 128 128-57.42 128-128-57.42-128-128-128zm0 224c-52.935 0-96-43.065-96-96s43.065-96 96-96 96 43.065 96 96-43.065 96-96 96z" />
                                    </g>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </>
        )}
    />
)
