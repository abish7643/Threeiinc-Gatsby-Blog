/* eslint-disable */
import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Layout from "../components/layout"
import NavBlackText from "../components/navBlackText"
import SEO from "../components/seo"
import "./blog.css"
import "./author.css"
import Footer from "../components/footer"
import Img from "gatsby-image"
import "./prismokaidia.css"
import CommentSection from "../components/comment"
import { usePalette } from "react-palette"
import Searchcard from "../components/atoms/search/searchcard"

import {
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
} from "react-share"

const BlogTemplate = (props) => {
    const shareMedia = `https:${props.data.currentBlog.featuredImage.fluid.src}`
    const { data, loading, error } = usePalette(shareMedia)

    const date = {
        createdat: props.data.currentBlog.createdAt,
    }

    const shareUrl = `https://3iinc.xyz/blog/${props.data.currentBlog.slug}/`
    const keywordsArray = props.data.currentBlog.seoKeywords
    const shareTitle = `${props.data.currentBlog.title} | 3i INC | 3 Idiots Incorporated.`
    //const propDescription = `${shareTitle} | ${shareUrl}`
    //const shareTitleLink = `${shareTitle} | ${shareUrl}`

    const iconProp = {
        size: 38,
        round: false,
        bgStyle: { opacity: "0.25" },
        iconFillColor: "#323232",
    }
    const socialIconcss = {
        marginRight: "32px",
        marginTop: "-4px",
    }

    const multipleState = props.data.currentBlog.multipleChapters
    let multipleChapterPresentTop
    let multipleChapterPresentBottom
    let multipleChapterContainer
    if (multipleState === 1) {
        multipleChapterContainer = props.data.currentBlog.chapters.map(
            (chapters) => (
                <div
                    onClick={() => navigate(`/blog/${chapters.chapterSlug}/`)}
                    class="search__entries"
                    data-sal="fade"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                >
                    <Img
                        className="search__entries__img"
                        sizes={props.data.currentBlog.featuredImage.fluid}
                    />
                    <div className="search__entries__details">
                        {props.data.currentBlog.category.map((category) => (
                            <span
                                className="search__entries__details__category"
                                key={category.id}
                            >
                                {category.title}
                            </span>
                        ))}
                        <p className="search__entries__details__title">
                            {chapters.chapterTitle}
                        </p>
                        <p className="search__entries__details__author">
                            <span className="text-left">
                                {"By "}
                                <span className="text-opacity-low">
                                    {
                                        props.data.currentBlog.authorData
                                            .authorName
                                    }
                                </span>{" "}
                            </span>
                            {"on "}
                            <span className="text-opacity-low">
                                {date.createdat}
                            </span>
                        </p>
                    </div>
                </div>
            )
        )
        multipleChapterPresentTop = (
            <div className="search__inner__blog__top">
                {multipleChapterContainer}
            </div>
        )
        multipleChapterPresentBottom = (
            <div className="search__inner__blog__bottom">
                {multipleChapterContainer}
            </div>
        )
    }

    return (
        <Layout>
            <NavBlackText />
            <div className="blog__initialmodel">
                <SEO
                    title={props.data.currentBlog.seoTitle}
                    description={props.data.currentBlog.seoDescription}
                    keywords={props.data.currentBlog.seoKeywords}
                    url={`https://3iinc.xyz/blog/${props.data.currentBlog.slug}/`}
                    image={`https:${props.data.currentBlog.seoImage.fluid.src}`}
                    author={props.data.currentBlog.authorData.seoAuthorName}
                />
                <div
                    style={{ background: data.muted, opacity: "0.16" }}
                    className="blog__color__header"
                ></div>
                <div className="blog__info">
                    <div className="blog__hero__typography">
                        <div
                            className="blog__info__title"
                            data-sal="fade"
                            data-sal-delay="20"
                            data-sal-easing="ease"
                        >
                            <h1>{props.data.currentBlog.title}</h1>

                            <br />
                        </div>
                        <div
                            className="blog__info__author"
                            data-sal="fade"
                            data-sal-delay="100"
                            data-sal-easing="ease"
                        >
                            <Link
                                to={`/idiots/${props.data.currentBlog.authorData.authorSlug}/`}
                            >
                                <p
                                    className="blog__extratitleone"
                                    style={{
                                        textDecoration: "none",
                                    }}
                                >
                                    By{" "}
                                    <strong>
                                        {
                                            props.data.currentBlog.authorData
                                                .authorName
                                        }
                                    </strong>{" "}
                                    On {date.createdat}
                                </p>
                            </Link>
                        </div>
                        <div className="blog__extratitletwo">
                            {props.data.currentBlog.category.map((category) => (
                                <strong
                                    className="blog__categories"
                                    data-sal="fade"
                                    data-sal-delay="200"
                                    data-sal-easing="ease"
                                    key={category.title}
                                >
                                    {category.title}
                                </strong>
                            ))}
                            <p
                                className="blog__extratitletwo"
                                data-sal="fade"
                                data-sal-delay="150"
                                data-sal-easing="ease"
                            >
                                {props.data.currentBlog.readDuration}
                            </p>
                        </div>

                        {multipleChapterPresentTop}
                    </div>
                </div>
                <Img
                    className="blog__hero"
                    data-sal="fade"
                    data-sal-delay="50"
                    data-sal-easing="ease"
                    alt={`${props.data.currentBlog.featuredImage.description}`}
                    sizes={props.data.currentBlog.featuredImage.fluid}
                />
                <p className="blog__hero__alt">
                    {props.data.currentBlog.featuredImage.description}
                </p>
                <div className="blog__wrapper">
                    <div className="blog__content">
                        <div
                            className="blog__content__inner"
                            dangerouslySetInnerHTML={{
                                __html: `${props.data.currentBlog.content.childMarkdownRemark.html}`,
                            }}
                        />
                    </div>

                    <div
                        className="share__buttons"
                        data-sal="fade"
                        data-sal-delay="50"
                        data-sal-easing="ease"
                    >
                        <WhatsappShareButton
                            url={shareUrl}
                            title={shareTitle}
                            separator=" "
                            style={socialIconcss}
                        >
                            <WhatsappIcon {...iconProp} />
                        </WhatsappShareButton>
                        <FacebookShareButton
                            url={shareUrl}
                            quote={shareTitle}
                            style={socialIconcss}
                        >
                            <FacebookIcon {...iconProp} />
                        </FacebookShareButton>
                        <TelegramShareButton
                            url={shareUrl}
                            title={shareTitle}
                            style={socialIconcss}
                        >
                            <TelegramIcon {...iconProp} />
                        </TelegramShareButton>
                        <TwitterShareButton
                            url={shareUrl}
                            title={shareTitle}
                            style={socialIconcss}
                            hashtags={keywordsArray}
                        >
                            <TwitterIcon {...iconProp} />
                        </TwitterShareButton>
                    </div>
                    <div className="chapters__blog">
                        {multipleChapterPresentBottom}
                    </div>
                    <Link
                        data-sal="fade"
                        data-sal-delay="50"
                        data-sal-easing="ease-in-out"
                        className="about__author__blog"
                        to={`/idiots/${props.data.currentBlog.authorData.authorSlug}/`}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <Img
                            className="author__img"
                            data-sal="fade"
                            data-sal-delay="100"
                            data-sal-easing="ease-in-out"
                            fluid={
                                props.data.currentBlog.authorData.authorPhoto
                                    .fluid
                            }
                        />
                        <div className="author__typography">
                            <p
                                data-sal="fade"
                                data-sal-delay="100"
                                data-sal-easing="ease-in-out"
                                className="author__label"
                            >
                                About Author
                            </p>
                            <h4
                                data-sal="fade"
                                data-sal-delay="150"
                                data-sal-easing="ease-in-out"
                                className="author__name"
                            >
                                {props.data.currentBlog.authorData.authorName}
                            </h4>

                            <p
                                data-sal="fade"
                                data-sal-delay="200"
                                data-sal-easing="ease-in-out"
                                className="author__description"
                            >
                                {
                                    props.data.currentBlog.authorData
                                        .authorDescription
                                }
                            </p>
                        </div>
                    </Link>

                    <CommentSection slug={props} />

                    <div className="chapters__blog">
                        <p className="latestposts__blogpost">Latest Posts</p>
                        <div className="search__inner__blog__bottom">
                            {props.data.nextBlog.edges.map((edges) => (
                                <Searchcard postdata={edges} />
                            ))}
                        </div>
                        <div className="viewmore_container__blog">
                            <Link
                                className="viewmore_wrapper__link"
                                to={`/blog/`}
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
                                data-sal-delay="50"
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

                    <div className="footer__div">
                        <Footer />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default BlogTemplate
export const query = graphql`
    query BlogTemplate($id: String!) {
        currentBlog: contentfulBlog(id: { eq: $id }) {
            title
            id
            slug
            authorData {
                authorName
                id
                authorSlug
                seoAuthorName
                authorDescription
                authorPhoto {
                    fluid(maxWidth: 300, quality: 70, toFormat: WEBP) {
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
                    id
                }
            }
            seoTitle
            seoDescription
            seoKeywords
            seoUrl
            seoImage {
                fluid(maxWidth: 920, quality: 70, toFormat: WEBP) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
            featuredImage {
                description
                fluid(maxWidth: 920, quality: 70, toFormat: WEBP) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
        }
        nextBlog: allContentfulBlog(
            limit: 4
            sort: { fields: [createdAt], order: DESC }
            filter: { node_locale: { eq: "en-US" }, id: { ne: $id } }
        ) {
            edges {
                node {
                    title
                    id
                    slug
                    category {
                        title
                        id
                    }
                    authorData {
                        authorName
                        authorSlug
                    }
                    createdAt(formatString: "MMMM DD, YYYY")
                    featuredImage {
                        fluid(maxWidth: 300, quality: 70, toFormat: WEBP) {
                            ...GatsbyContentfulFluid
                            src
                        }
                    }
                }
            }
        }
    }
`
