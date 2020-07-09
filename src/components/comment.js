import React from "react"
import HyvorTalk from "hyvor-talk-react"

export default class CommentSection extends React.Component {
    state = {
        clicked: false,
    }
    handleClick = event => {
        this.setState({
            clicked: true,
        })
    }

    render() {
        let hideButton
        let hyvorPlatform
        if (this.state.clicked === true){
            hyvorPlatform = (
                <HyvorTalk.Embed
                    websiteId={321}
                    loadMode="scroll"
                    id={this.props.slug.data.currentBlog.slug}
                />
            )
            hideButton = { visibility: 'hidden', height: '0px', marginTop: '0px'}
        }
        
        return (
            <> 
                <button className="btn__med__outline" style={hideButton} onClick={this.handleClick}> Read Responses (
                    <HyvorTalk.CommentCount
                        data-talk-mode="number"
                        id={this.props.slug.data.currentBlog.slug}
                        websiteId={321}
                    />
                )</button>
                <div className="comment__section" id="commentSection">
                
                    {hyvorPlatform}
                </div>
            </>
        )
    }
}
