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
            input: " ",
            selectedPosts: []

        }
    }

  

    componentDidMount() {
        dataServices.getPosts()
            .then((myPosts) => {
                this.setState({
                    textPosts: myPosts.textPosts,
                    videoPosts: myPosts.videoPosts,
                    imagePosts: myPosts.imagePosts,
                    selectedPosts:  myPosts.textPosts.concat(myPosts.videoPosts, myPosts.imagePosts)
                })
            });
    }


    handleInputChange = event => {
        this.setState ({
            input: event.target.value
        })
    }

    checkTextInput= () => {
        if(this.state.input.length > 5 ){
            return(
                console.log('Text is too long')
            )
        } else {
            dataServices.addNewTextPost({newTextPost : this.state.input})
        }
    }

    



    sortPosts = () => {
        let allPosts = this.state.textPosts.concat(this.state.videoPosts, this.state.imagePosts)
        let sortPosts = allPosts.sort(function (a, b) {
            let keyA = new Date(a.dateCreated);
            let keyB = new Date(b.dateCreated);
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            return 0;
        })
        return sortPosts;
    }

    handleChange = (event, data) => {
     if(data.value === "text"){
         this.setState({
             selectedPosts : this.state.textPosts
         })
     } else if(data.value === "images"){
         this.setState({
             selectedPosts : this.state.imagePosts
         })
     } else {
         this.setState({
             selectedPosts : this.state.videoPosts
         })
     }

    }

    openModal = (event, data) => {
        const modalName = data.value;

        this.setState({ modalIsOpen: true, currentModal: modalName });
    }

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    renderTextModal =() => {
            return (
                <div>
                    <h2 ref={subtitle => this.subtitle = subtitle}>New text post</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>Text content</div>
                    <form>
                        <input type='text' value={this.state.input} onChange={this.handleInputChange}/>
                        <button onClick={this.checkTextInput()}>POST</button>
                    </form>
                </div>
            )
        
    }




    renderImageModal =() =>{


        return (
            <div>
                <h2 ref={subtitle => this.subtitle = subtitle}>New image post</h2>
                <button onClick={this.closeModal}>close</button>
                <div>Image source</div>
                <form>
                    <input type ='url'/>

                    <button>POST</button>
                </form>
            </div>
        )
    }


    renderVideoModal =()=> {
        return (
            <div>
                <h2 ref={subtitle => this.subtitle = subtitle}>New video post</h2>
                <button onClick={this.closeModal}>close</button>
                <div>YouTube video link</div>
                <form>
                    <input type='url'/>
                    <button>POST</button>
                </form>
            </div>
        )
    }

    renderModalComponent = () => {
        switch (this.state.currentModal) {
            case "text" : return this.renderTextModal()
            case "image": return this.renderImageModal()
            case "video" : return this.renderVideoModal()
        }
    }

    render() {
        console.log(this.state.input)
        return (
            <div className="ui three column grid">
                <div className="row">
                    <div className='four wide column'></div>
                    <div className='eight wide column'><PostList posts={this.state.selectedPosts} />
                    </div>
                    <div className='four wide column'>

 
                        <NewPostButton openPost={this.openModal} />

                        <MenuAllPosts handleChange={this.handleChange}/>
               

                    </div>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    // style={customStyles}
                    contentLabel="Example Modal"
                >

                    {this.renderModalComponent()}

                </Modal>
            </div>
        )
    }


}

export default Home;