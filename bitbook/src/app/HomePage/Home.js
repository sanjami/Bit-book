import React, { Component } from 'react';
import PostList from './PostList';
import MenuAllPosts from './MenuAllPosts';
import NewPostButton from './NewPostButton';
import { dataServices } from '../../service/dataService';
import Modal from 'react-modal';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textPosts: [],
            videoPosts: [],
            imagePosts: [],
            modalIsOpen: false,
            input: "",
            feedPosts: [],
            selectedPosts: [],
            message: ''
        }
    }

    /* Getting all text posts, image posts, video posts from API response */ 


    getAllPosts = () => {
        dataServices.getPosts()
            .then(myPosts => {
                var { textPosts } = myPosts;
                var { videoPosts } = myPosts;
                var { imagePosts } = myPosts;
                var feedPosts = [...textPosts, ...videoPosts, ...imagePosts]
                this.setState({
                    textPosts: textPosts,
                    videoPosts: videoPosts,
                    imagePosts: imagePosts,
                    feedPosts: feedPosts,
                    selectedPosts: feedPosts
                })
            });
    }

    componentDidMount() {
        this.getAllPosts()
    }

     /* Changing state of input for all new posts */ 

    handleInputChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

   /* Validation of text posts */ 

    checkTextInput = () => {
        if (this.state.input.length > 1000) {
            this.setState({
                message: 'Text is too long'
            });
        } else if (this.state.input == '') {
            this.setState({
                message: 'Text is missing'
            });
        }
        else {
            dataServices.addNewTextPost(this.state.input)
                .then((response) => {
                    this.getAllPosts();
                    this.closeModal();
                }
                )
        }
    }

    /* Validation of image posts */ 

    checkImageInput = () => {
        const myUrlLength = this.state.input.length;
        const cutUrl = this.state.input.slice(myUrlLength - 3);
        const cutUrlJpeg = this.state.input.slice(myUrlLength - 4);

        if (cutUrl != 'jpg' && cutUrl != 'png' && cutUrl != 'gif' && cutUrlJpeg != 'jpeg') {
            this.setState({
                message: 'Post is not image'
            });
        } else {
            dataServices.addNewImagePost(this.state.input)
                .then((response) => {
                    this.getAllPosts();
                    this.closeModal();
                }
                )
        }
    }

    /* Validation of video posts */ 

    createLink = (link) => {
        return link.replace("watch?v=", "embed/");
    }

    checkVideoInput = () => {

        if (this.state.input.includes("watch?v=")) {
            let data = this.createLink(this.state.input);
            dataServices.addNewVideoPost(data)
                .then((response) => {
                    this.getAllPosts();
                    this.closeModal();
                })

        } else {
            this.setState({
                message: 'Post is not video'
            })
        }
    }

    /* Selected type of posts */ 


    handleChange = (event, data) => {
        console.log(data.value)
        if (data.value === "text") {
            this.setState({
                selectedPosts: this.state.textPosts
            })
        } else if (data.value === "images") {
            this.setState({
                selectedPosts: this.state.imagePosts
            })
        } else if (data.value === "video") {
            this.setState({
                selectedPosts: this.state.videoPosts
            })
        } else {
            this.setState({
                selectedPosts: this.state.feedPosts
            })
        }

    }

    /* React Modals for new posts */ 


    openModal = (event, data) => {
        const modalName = data.value;

        this.setState({ modalIsOpen: true, currentModal: modalName });
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
            input: '',
            message: ''
        });
    }

    renderTextModal = () => {
        return (
            <div className='input-field'>
                <h2 ref={subtitle => this.subtitle = subtitle} className='headline'>New text post</h2>
                <button onClick={this.closeModal} className='close-btn'>CLOSE</button>
                <div className='input-text'>Text content</div>
                <form>
                    <input type='text' value={this.state.input} onChange={this.handleInputChange} className='input-item' />
                    <button onClick={this.checkTextInput} className='post-btn'>POST</button>
                </form>
                <div>{this.state.message}</div>
            </div>
        )

    }

    renderImageModal = () => {
        return (
            <div className='input-field'>
                <h2 ref={subtitle => this.subtitle = subtitle} className='headline'>New image post</h2>
                <button onClick={this.closeModal} className='close-btn'>CLOSE</button>
                <div className='input-text'>Image source</div>
                <form>
                    <input type='url' onChange={this.handleInputChange} className='input-item' />
                    <button onClick={this.checkImageInput} className='post-btn'>POST</button>
                </form>
                <div>{this.state.message}</div>
            </div>
        )
    }


    renderVideoModal = () => {
        return (
            <div className='input-field'>
                <h2 ref={subtitle => this.subtitle = subtitle} className='headline'>New video post</h2>
                <button onClick={this.closeModal} className='close-btn'>CLOSE</button>
                <div className='input-text'>YouTube video link</div>
                <form>
                    <input type='url' onChange={this.handleInputChange} className='input-item' />
                    <button onClick={this.checkVideoInput} className='post-btn'>POST</button>
                </form>
                <div>{this.state.message}</div>
            </div>
        )
    }

    renderModalComponent = () => {
        switch (this.state.currentModal) {
            case "text": return this.renderTextModal()
            case "image": return this.renderImageModal()
            case "video": return this.renderVideoModal()
        }
    }

    render() {
        return <div className="ui three column grid">
            <div className="row">
              <div className="four wide column">
              <NewPostButton className="dropdown" openPost={this.openModal} />
              </div>
              <div className="eight wide column">
                <PostList posts={this.state.selectedPosts} />
              </div>
              <div className="four wide column">
                <MenuAllPosts handleChange={this.handleChange} />
              </div>
            </div>
            <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} className="Modal" contentLabel="Example Modal">
              {this.renderModalComponent()}
            </Modal>
          </div>;
    }
}

export default Home;