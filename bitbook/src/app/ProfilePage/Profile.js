import React, { Component } from 'react';
import { dataServices } from '../../service/dataService';
import UserCard from './UserCard';
import PostAndCommentsCount from './PostAndCommentsCount';
import Modal from 'react-modal';
import Label from 'semantic-ui-react/dist/commonjs/elements/Label/Label';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            modalIsOpen: false,
            selectedFile: '',
            newName: '',
            newAbout: '',
            newPhotoUrl: '',
            errorMessage: '',
            buttonDisabled: true
        }
    }

   /* Getting one user from API response */

    getUserData = () => {
    dataServices.getUser(this.props.match.params.id)
    .then((myUser) => {
        this.setState({
            user: myUser,
            newPhotoUrl: myUser.avatarUrl,
            newAbout: myUser.about,
            newName: myUser.name,
        })
    })
}

    componentDidMount() {
       this.getUserData()
    }

    /* React Modal for updating profile */

    openModal = (event) => {
        this.setState({ modalIsOpen: true });
      
    }

    closeModal = () => {
        this.setState({
            modalIsOpen: false,
        });
    }

    /* Uploading photo */

    fileChangeHandler = (event) => {
        const file = event.target.files[0];
        this.setState({ selectedFile: file })
    }

    addPhoto = () => {
        const formData = new FormData()
        formData.append('file', this.state.selectedFile)

        dataServices.uploadPhoto(formData)
            .then((result) => {
                this.setState({
                    newPhotoUrl: result,
                })
            })
    }

    /* Changing name */

    handleInputNameChange = (event) => {
        this.setState({
            newName : event.target.value
        })
        this.inputValidation();
    }

    /* Changing about */

    handleInputAboutChange = (event) => {
        this.setState({
            newAbout : event.target.value
        })
        this.inputValidation();
    }

    /* Changing URL */

    handleInputUrlChange = (event) => {
        this.setState({
            newPhotoUrl: event.target.value
        })
        this.inputValidation();
    }

     /* Updating user data */

    checkData = () => {
        let data = {
            'email':"email",
            'name': this.state.newName,
            'about': this.state.newAbout,
            "aboutShort": this.state.newAbout.slice(0,50),
            'avatarUrl': this.state.newPhotoUrl
        }
        dataServices.changeProfile(data)
        .then((result) => {
            this.setState({
                modalIsOpen: false
            })
            this.getUserData()
        })
    }

    /* Validation input data */

    inputValidation = () => {
        if(this.state.newName && this.state.newAbout && this.state.newPhotoUrl){
           this.setState({
               buttonDisabled: false
           })
        } 
        if(this.state.newName.length > 40){
            this.setState({
                errorMessage: 'Name is too long',
                buttonDisabled: true               
            });
        }
        if(this.state.newName.length > 400){
            this.setState({
                errorMessage: 'About is too long',
                buttonDisabled: true               
            });
        }
    }

    renderModal = () => {
        return (
            <div className='input-field'>
                <h2 ref={subtitle => this.subtitle = subtitle} className='headline'>Edit profile</h2>
                <button onClick={this.closeModal} className='close-btn'>CLOSE</button>
                <form id="photoForm">
                    <input type="file" accept=".jpg, .jpeg, .png" onChange={this.fileChangeHandler} />
                    <img src={this.state.newPhotoUrl} />
                    <button onClick={this.addPhoto}>SUBMIT</button>
                </form>
                <form id="profileInfoForm">
                <Label>Name
                    <input type='text' value={this.state.newName} onChange={this.handleInputNameChange} className='input-item' />
                    </Label>
                    <Label>Photo Url
                    <input type="url" value={this.state.newPhotoUrl} onChange={this.handleInputUrlChange} className='input-item' />
                    </Label>
                    <Label>About
                    <input type='text' value={this.state.newAbout} onChange={this.handleInputAboutChange} className='input-item' />
                    </Label>
                    <div>{this.state.errorMessage}</div>
                    <button onClick={this.checkData} disabled={this.state.buttonDisabled}  className='post-btn'>UPDATE</button>
                </form>
                <div>{this.state.message}</div>
            </div>
        )
    }

    render() {
        return (
            <div className="ui three column grid">
                <div className="row">
                    <div className='four wide column'></div>
                    <div className='eight wide column'>
                        <UserCard user={this.state.user} handleClick={this.openModal} />
                        <PostAndCommentsCount user={this.state.user} />
                    </div>
                    <div className='four wide column'>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className="Modal"
                    contentLabel="Example Modal">
                    {this.renderModal()}

                </Modal>
            </div>
        )
    }
}

export default Profile;
