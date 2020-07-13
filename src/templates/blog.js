import React from "react"
import { graphql, Link, navigate } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"
import "./blog.css"
import Footer from "../components/footer"
import Img from "gatsby-image"
import "./prismokaidia.css"
import CommentSection from "../components/comment"
import {
    FacebookShareButton,
    FacebookIcon,
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
} from "react-share"

const BlogTemplate = (props) => {
    const shareUrl = `https://3iinc.xyz/blog/${props.data.currentBlog.slug}/`

    const date = {
        createdat: props.data.currentBlog.createdAt,
    }
    const keywordsArray = props.data.currentBlog.seoKeywords
    const shareMedia = props.data.currentBlog.featuredImage.fluid.src
    const shareTitle = `'${props.data.currentBlog.title}' | 3i INC | 3 Idiots Incorporated.`
    const propDescription = `${shareTitle} | ${shareUrl}`
    const shareTitleLink = `${shareTitle} | ${shareUrl}`
    const iconProp = {
        size: 36,
        round: false,
        bgStyle: { opacity: "0.25" },
        iconFillColor: "black",
    }
    const socialIconcss = {
        marginRight: "8px",
        marginTop: "-3px",
    }
    const multipleState = props.data.currentBlog.multipleChapters
    let multipleChapterPresent
    if (multipleState === 1) {
        multipleChapterPresent = props.data.currentBlog.chapters.map(
            (chapters) => (
                <Link
                    to={`/blog/${chapters.chapterSlug}/`}
                    class="blog__categories__chapter"
                >
                    {chapters.chapterTitle}
                </Link>
            )
        )
    }

    return (
        <Layout>
            <Nav />
            <div className="blog__initialmodel">
                <SEO
                    title={props.data.currentBlog.seoTitle}
                    description={props.data.currentBlog.seoDescription}
                    keywords={props.data.currentBlog.seoKeywords}
                    url={`https://3iinc.xyz/blog/${props.data.currentBlog.slug}/`}
                    image={props.data.currentBlog.seoImage.fluid.src}
                    author={props.data.currentBlog.authorData.seoAuthorName}
                />

                <div className="blog__header">
                    <div
                        className="blog__hero"
                        data-sal="slide-up"
                        data-sal-delay="20"
                        data-sal-easing="ease"
                        style={{
                            backgroundImage: `url(${props.data.currentBlog.featuredImage.fluid.src})`,
                        }}
                    ></div>
                </div>
                <div className="blog__info">
                    <div
                        className="blog__info__title"
                        data-sal="slide-up"
                        data-sal-delay="20"
                        data-sal-easing="ease"
                    >
                        <h1>{props.data.currentBlog.title}</h1>
                        <br />
                    </div>
                    <div
                        className="blog__info__author"
                        data-sal="slide-up"
                        data-sal-delay="100"
                        data-sal-easing="ease"
                    >
                        <Link
                            to={`/idiots/${props.data.currentBlog.authorData.authorSlug}/`}
                        >
                            <p
                                className="blog__extratitleone"
                                style={{ textDecoration: "none" }}
                            >
                                {props.data.currentBlog.authorData.authorName} |{" "}
                                {date.createdat}
                            </p>
                        </Link>
                    </div>
                    <div className="blog__extratitletwo">
                        {props.data.currentBlog.category.map((category) => (
                            <strong
                                className="blog__categories"
                                data-sal="slide-up"
                                data-sal-delay="200"
                                data-sal-easing="ease"
                                key={category.title}
                            >
                                {category.title}
                            </strong>
                        ))}
                        <p
                            className="blog__extratitletwo"
                            data-sal="slide-up"
                            data-sal-delay="150"
                            data-sal-easing="ease"
                        >
                            {props.data.currentBlog.readDuration}
                        </p>
                    </div>

                    <div
                        className="blog__categories__chapters"
                        data-sal="slide-up"
                        data-sal-delay="200"
                        data-sal-easing="ease"
                    >
                        {multipleChapterPresent}
                    </div>
                </div>
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
                        data-sal="slide-up"
                        data-sal-delay="200"
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
                        <RedditShareButton
                            url={shareUrl}
                            title={shareTitle}
                            style={socialIconcss}
                        >
                            <RedditIcon {...iconProp} />
                        </RedditShareButton>
                        <TumblrShareButton
                            url={shareUrl}
                            title={shareTitle}
                            style={socialIconcss}
                            tags={keywordsArray}
                        >
                            <TumblrIcon {...iconProp} />
                        </TumblrShareButton>
                        <PinterestShareButton
                            url={shareUrl}
                            title={shareTitleLink}
                            description={propDescription}
                            media={shareMedia}
                            style={socialIconcss}
                        >
                            <PinterestIcon {...iconProp} />
                        </PinterestShareButton>
                    </div>

                    <Link
                        className="about__author"
                        to={`/idiots/${props.data.currentBlog.authorData.authorSlug}/`}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <div className="author__image">
                            <Img
                                style={{ minHeight: "170px" }}
                                sizes={
                                    props.data.currentBlog.authorData
                                        .authorPhoto.fluid
                                }
                            />
                        </div>
                        <div className="author__details">
                            <div className="author__name">
                                <h6>About Author</h6>
                                <h4>
                                    {
                                        props.data.currentBlog.authorData
                                            .authorName
                                    }
                                </h4>
                            </div>
                            <div className="author__description">
                                <h5>
                                    {
                                        props.data.currentBlog.authorData
                                            .authorDescription
                                    }
                                </h5>
                            </div>
                        </div>
                    </Link>

                    <CommentSection slug={props} />

                    <p className="latestposts__blogpost">Latest Posts</p>
                    <div className="feed__initial__blogpost">
                        <div className="feed__blogpost">
                            {props.data.nextBlog.edges.map((edge) => (
                                <div
                                    key={edge.node.id}
                                    className="card__blogpost"
                                    data-sal="slide-up"
                                    data-sal-delay="50"
                                    data-sal-easing="ease"
                                    style={{
                                        backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(10, 10, 10, 0) 0%,
                    rgba(10, 10, 10, 0.5) 50%,
                    rgba(10, 10, 10, 0.7) 100%),
                    url(${edge.node.featuredImage.fluid.src})`,
                                    }}
                                    onClick={() =>
                                        navigate(`/blog/${edge.node.slug}/`)
                                    }
                                >
                                    {edge.node.category.map((category) => (
                                        <p
                                            className="card__category"
                                            data-sal="slide-up"
                                            data-sal-delay="60"
                                            data-sal-easing="ease"
                                            key={category.id}
                                        >
                                            {category.title}
                                        </p>
                                    ))}
                                    <p
                                        className="card__title"
                                        data-sal="slide-up"
                                        data-sal-delay="70"
                                        data-sal-easing="ease"
                                    >
                                        {edge.node.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div
                            className="viewmore_container"
                            style={{
                                marginTop: "-48px",
                                marginBottom: "120px",
                            }}
                        >
                            <Link
                                className="viewmore_wrapper__link"
                                to={`/blog/2/`}
                            >
                                <button className="viewmore_wrapper">
                                    More Posts
                                </button>
                            </Link>
                            <Link
                                className="viewmore_wrapper__link"
                                to={`/search/`}
                            >
                                <button className="viewmore_wrapper__outline">
                                    Search
                                    <svg
                                        className="search-svg-btn"
                                        id="Layer_1"
                                        enable-background="new 0 0 512.002 512.002"
                                        height="512"
                                        viewBox="0 0 512.002 512.002"
                                        width="512"
                                        xmlns="http://www.w3.org/2000/svg"
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
                fluid(maxWidth: 1200, quality: 70, toFormat: WEBP) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
            featuredImage {
                fluid(maxWidth: 1200, quality: 70, toFormat: WEBP) {
                    ...GatsbyContentfulFluid
                    src
                }
            }
        }
        nextBlog: allContentfulBlog(
            limit: 2
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
                        fluid(maxWidth: 1200, quality: 70, toFormat: WEBP) {
                            ...GatsbyContentfulFluid
                            src
                        }
                    }
                }
            }
        }
    }
`
