import TextPost from '../entities/TextPost';
import ImagePost from '../entities/ImagePost';
import VideoPost from '../entities/VideoPost';

class DataServices {

    getPosts = () => {
        return fetch('http://bitbookapi.azurewebsites.net/api/Posts', {
            headers:{
                'Content-Type': 'application/json',
                'Key': 'bitbook' ,
                'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response) => {
            return response.json()})
        .then((postList)=> {
            console.log(postList);
            let textPosts = postList.filter((post) => post.type === "text");
            let videoPosts = postList.filter((post) => post.type === "video");
            let imagePosts = postList.filter((post) => post.type === "image")
            let objectPosts = {
                textPosts : textPosts.map((post) => new TextPost(post)),
                videoPosts : videoPosts.map((post) => new VideoPost(post)),
                imagePosts : imagePosts.map((post) => new ImagePost(post))
        }
    
    return objectPosts})
        
    }

    // getImagePosts = () => {
    //     return fetch('http://bitbookapi.azurewebsites.net/api/ImagePosts/1', {
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Key': 'bitbook' ,
    //             'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
    //         },
    //         method: 'GET'
    //     })
    //     .then((response) => response.json())
    //     .then((postList)=> postList.map((post)=> new ImagePost(post)))

    // }
    // getVideoPosts = () => {
    //     return fetch('http://bitbookapi.azurewebsites.net/api/VideoPosts', {
    //         headers:{
    //             'Content-Type': 'application/json',
    //             'Key': 'bitbook' ,
    //             'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
    //         },
    //         method: 'GET'
    //     })
    //     .then((response) => response.json())
    //     .then((postList)=> postList.map((post)=> new VideoPost(post)))
    // }
}

export const dataServices = new DataServices();