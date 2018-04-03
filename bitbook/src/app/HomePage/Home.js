import React, { Component } from 'react';
import PostList from './PostList';
import MenuAllPosts from './MenuAllPosts';
import NewPostButton from './NewPostButton';
import { dataServices } from '../../service/dataService';
import Modal from 'react-modal';
import { Label, Form, Image, Input, Button, Message, Container, Icon, Pagination } from 'semantic-ui-react';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textPosts: [],
            videoPosts: [],
            imagePosts: [],
            modalIsOpen: false,
            currentModal: '',
            input: "",
            feedPosts: [],
            selectedPosts: [],
            message: '',
            buttonDisabled: true,
            selectedPhoto: '',
            activePage: 1,
            numberOfAllPosts:0
        }
    }

    /* Getting all text posts, image posts, video posts from API response */


    getAllPosts = (activePage, m) => {
        dataServices.getPosts(activePage,m)
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
                    selectedPosts: feedPosts,
                    buttonDisabled: true
                })
            });
    }

    componentDidMount() {
        dataServices.getPostsCount()
                .then(countPosts=>{
                    this.setState({
                        numberOfAllPosts: countPosts
                    })
                });
        this.getAllPosts(this.state.activePage,Math.ceil(this.state.numberOfAllPosts/10));
    }

    /* Changing state of input for all new posts */

    textValidation = () => {
        if (this.state.input.length > 100) {
            this.setState({
                message: 'Text is too long',
                buttonDisabled: true
            });
        } else if (this.state.input == '') {
            this.setState({
                message: 'Text is missing',
                buttonDisabled: true
            });
        } else {
            this.setState({
                message: '',
                buttonDisabled: false
            })
            return true;
        }
    }

    handleInputTextChange = (event) => {
        this.setState({
            input: event.target.value
        })
        this.textValidation()

    }

    /* Validation of text posts */

    checkTextInput = () => {
        if (this.textValidation()) {
            dataServices.addNewTextPost(this.state.input)
                .then((response) => {
                    this.setState({
                        activePage: 0
                    })
                    this.getAllPosts(0, Math.ceil(this.state.numberOfAllPosts/10));
                    this.closeModal();
                }
                )
        }
    }

    imageValidation = () => {
        const myUrlLength = this.state.input.length;
        const cutUrl = this.state.input.slice(myUrlLength - 3);
        const cutUrlJpeg = this.state.input.slice(myUrlLength - 4);

        if (cutUrl != 'jpg' && cutUrl != 'png' && cutUrl != 'gif' && cutUrlJpeg != 'jpeg') {
            this.setState({
                message: 'Post is not image'
            });
        } else {
            this.setState({
                message: ''
            })
            return true;
        }
    }

    handleInputImageChange = (event) => {
        this.setState({
            input: event.target.value
        })
        this.imageValidation()
    }

    /* Validation of image posts */

    checkImageInput = () => {
        if (this.imageValidation()) {
            dataServices.addNewImagePost(this.state.input)
                .then((response) => {
                    this.getAllPosts(0, Math.ceil(this.state.numberOfAllPosts/10));
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
                    this.getAllPosts(0, Math.ceil(this.state.numberOfAllPosts/10));
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

    handleBigPhoto = (photo) => {
        this.setState({
            selectedPhoto: photo
        })
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
            <Container >
                <Form>
                    <h2 ref={subtitle => this.subtitle = subtitle} className='headline'>New text post</h2>
                    <Form.Group>
                        <Form.Field control={Input} label='Text content' width={14} type='text' value={this.state.input} onChange={this.handleInputTextChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field control={Button} onClick={this.checkTextInput} disabled={this.state.buttonDisabled} className='post-btn'>POST</Form.Field>
                        <Form.Field control={Button} onClick={this.closeModal} className='close-btn'>CLOSE</Form.Field>
                    </Form.Group>
                    <div id='warning' className={this.state.message ? 'visible' : 'invisible'}>{this.state.message}</div>
                </Form>
            </Container>
        )

    }

    renderImageModal = () => {
        return (
            <Container >
                <Form>
                    <h2 ref={subtitle => this.subtitle = subtitle} className='headline'>New image post</h2>
                    <Form.Group>
                        <Form.Field control={Input} label='Image source' width={14} type='url' onChange={this.handleInputImageChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field control={Button} onClick={this.checkImageInput} disabled={this.state.buttonDisabled} className='post-btn'>POST</Form.Field>
                        <Form.Field control={Button} onClick={this.closeModal} className='close-btn'>CLOSE</Form.Field>
                    </Form.Group>
                    <div id='warning' className={this.state.message ? 'visible' : 'invisible'}>{this.state.message}</div>
                </Form>
            </Container>


        )
    }


    renderVideoModal = () => {
        return (

            <Container >
                <Form>
                    <h2 ref={subtitle => this.subtitle = subtitle} className='headline'>New video post</h2>
                    <Form.Group>
                        <Form.Field control={Input} label='YouTube video link' width={14} type='url' onChange={this.handleInputChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Field control={Button} onClick={this.checkVideoInput} className='post-btn'>POST</Form.Field>
                        <Form.Field control={Button} onClick={this.closeModal} className='close-btn'>CLOSE</Form.Field>
                    </Form.Group>
                    <div id='warning' className={this.state.message ? 'visibleDiv' : 'invisible'}>{this.state.message}</div>
                </Form>
            </Container>
        )
    }

    renderModalComponent = () => {
        switch (this.state.currentModal) {
            case "text": return this.renderTextModal()
            case "image": return this.renderImageModal()
            case "video": return this.renderVideoModal()
        }
    }
    closeBigPhoto = () => {
        this.setState({
            selectedPhoto: ''
        })
    }

    handlePageChange = (e, { activePage }) => {
        this.setState({
            activePage: activePage
        })
       
        this.getAllPosts(activePage, Math.ceil(this.state.numberOfAllPosts/10))
    }

    render() {
     console.log(this.state.numberOfAllPosts);
        return <div className="ui three column grid">
            <div id='theaterMode' className={this.state.selectedPhoto ? 'visible' : 'invisible'}>
                <Button onClick={this.closeBigPhoto}>
                    <Icon name='close' />
                </Button>
                <img src={this.state.selectedPhoto} />
            </div>
            <div className="row">

                <div className="four wide column">
                    <NewPostButton className="dropdown" openPost={this.openModal} />
                </div>
                <div className="eight wide column">
                    <PostList posts={this.state.selectedPosts} handleBigPhoto={this.handleBigPhoto} />
                    <Pagination
                        defaultActivePage={1}
                        activePage={this.state.activePage}
                        firstItem={null}
                        lastItem={null}
                        pointing
                        secondary
                        totalPages={Math.ceil(this.state.numberOfAllPosts/10)}
                        onPageChange={this.handlePageChange}
                    />
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