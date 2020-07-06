import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/seo"
import "./blog.css"
import Footer from "../components/footer"
import HyvorTalk from "hyvor-talk-react"
import Img from "gatsby-image"
import './prismokaidia.css'
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

const BlogTemplate = props => {
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
        round: true,
        bgStyle: { opacity: "1" },
        iconFillColor: "white",
    }
    const socialIconcss = {
        marginRight: "10px",
        marginTop: "-3px",
    }
    const multipleState = props.data.currentBlog.multipleChapters
    let multipleChapterPresent
    if (multipleState === 1) {
        multipleChapterPresent = props.data.currentBlog.chapters.map(
            chapters => (
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
                        {props.data.currentBlog.category.map(category => (
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
                        <div className="blog__content__inner"
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
                    <div
                        style={{
                            textTransform: "uppercase",
                            fontFamily: "montserrat",
                            letterSpacing: "0.8",
                            backgroundColor: "#323232",
                            color: "#eeeeee",
                            fontWeight: "500",
                            fontSize: "12px",
                            padding: "0px 4px",
                            marginTop: '0px'
                        }}
                    >
                        <span >⬐ </span>
                        <HyvorTalk.CommentCount
                            data-talk-mode="number"
                            id={props.data.currentBlog.slug}
                            websiteId={321}
                        /><span style={{fontWeight: "900"}}> ⬎</span>
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
                    <h5 className="Heading__latestposts">LATEST POSTS</h5>
                    <div
                        className="nextPost__Container"
                        style={{ marginBottom: "10px" }}
                    >
                        {props.data.nextBlog.edges.map(edge => (
                            <Link
                                className="nextPosts"
                                to={`/blog/${edge.node.slug}/`}
                                key = {edge.node.id}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                    backgroundColor: "#fafafa",
                                }}
                            >
                                <h4 style={{}}>{edge.node.title}</h4>
                                <h5
                                    style={{
                                        textTransform: "uppercase",
                                    }}
                                >
                                    {edge.node.authorData.authorName}
                                </h5>
                                <h6 style={{ textTransform: "uppercase" }}>
                                    {edge.node.createdAt}
                                </h6>
                            </Link>
                        ))}
                    </div>


                    <div className="comment__section" id="commentSection">
                        <HyvorTalk.Embed
                            websiteId={321}
                            loadMode="scroll"
                            id={props.data.currentBlog.slug}
                        />
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
                    authorData {
                        authorName
                        authorSlug
                    }
                    createdAt(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`
