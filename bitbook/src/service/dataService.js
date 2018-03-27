import TextPost from '../entities/TextPost';
import ImagePost from '../entities/ImagePost';
import VideoPost from '../entities/VideoPost';

class DataServices {

    getTextPosts = () => {
        return fetch('http://bitbookapi.azurewebsites.net/api/TextPosts', {
            headers:{
                'Content-Type': 'application/json',
                'Key': 'bitbook' ,
                'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response) => response.json())
        .then((postList)=> postList.map((post)=> new TextPost(post)))
    }

    getImagePosts = () => {
        return fetch('http://bitbookapi.azurewebsites.net/api/ImagePosts', {
            headers:{
                'Content-Type': 'application/json',
                'Key': 'bitbook' ,
                'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response) => response.json())
        .then((postList)=> postList.map((post)=> new ImagePost(post)))

    }
    getVideoPosts = () => {
        return fetch('http://bitbookapi.azurewebsites.net/api/VideoPosts', {
            headers:{
                'Content-Type': 'application/json',
                'Key': 'bitbook' ,
                'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response) => response.json())
        .then((postList)=> postList.map((post)=> new VideoPost(post)))
    }
}

export const dataServices = new DataServices();