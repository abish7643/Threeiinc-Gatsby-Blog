import React from "react"
import HyvorTalk from "hyvor-talk-react"

export default class CommentSection extends React.Component {
    state = {
        // clicked: false,
        clicked: true,
    }
    handleClick = (event) => {
        this.setState({
            clicked: true,
        })
    }

    render() {
        let hideButton
        let hyvorPlatform
        if (this.state.clicked === true) {
            hyvorPlatform = (
                <HyvorTalk.Embed
                    websiteId={321}
                    loadMode="scroll"
                    id={this.props.slug.data.currentBlog.slug}
                />
            )
            hideButton = {
                visibility: "hidden",
                height: "0px",
                marginTop: "0px",
                opacity: "0",
            }
        }

        return (
            <>
                <button
                    className="btn__med__outline blog__comment__btn__margin"
                    style={hideButton}
                    onClick={this.handleClick}
                >
                    {" "}
                    Read Responses (<span> </span>
                    <HyvorTalk.CommentCount
                        data-talk-mode="number"
                        id={this.props.slug.data.currentBlog.slug}
                        websiteId={321}
                    />
                    <span> </span>)
                </button>
                <div className="comment__section" id="commentSection">
                    {hyvorPlatform}
                </div>
            </>
        )
    }
}
