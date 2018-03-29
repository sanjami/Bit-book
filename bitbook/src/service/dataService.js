import TextPost from '../entities/TextPost';
import ImagePost from '../entities/ImagePost';
import VideoPost from '../entities/VideoPost';
import User from '../entities/User';
import Comment from '../entities/Comment'

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
            return response.json();
        })
        .then((postList)=> {
            let textPosts = postList.filter((post) => post.type === "text");
            let videoPosts = postList.filter((post) => post.type === "video");
            let imagePosts = postList.filter((post) => post.type === "image")
            let objectPosts = {
                textPosts : textPosts.map((post) => new TextPost(post)),
                videoPosts : videoPosts.map((post) => new VideoPost(post)),
                imagePosts : imagePosts.map((post) => new ImagePost(post))
            }
    
            return objectPosts})
            .catch((error) => {
                console.log(error)
            })
    }

    getTextPost = (id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/TextPosts/${id}`, {
            headers:{
                'Content-Type': 'application/json',
                'Key': 'bitbook' ,
                'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response) => response.json())
        .then((postItem)=> new TextPost(postItem))
    }

    getImagePost = (id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/ImagePosts/${id}`, {
            headers:{
                'Content-Type': 'application/json',
                'Key': 'bitbook' ,
                'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response) => response.json())
        .then((postItem)=> new ImagePost(postItem))
    }




    getVideoPost = (id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/VideoPosts/${id}`, {
            headers:{
                'Content-Type': 'application/json',
                'Key': 'bitbook' ,
                'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response) => response.json())
        .then((postItem)=> new VideoPost(postItem))
    }




    getUsers =() => {
        return fetch('http://bitbookapi.azurewebsites.net/api/users', {
            headers:{
                'Content-Type': 'application/json',
                'Key': 'bitbook' ,
                'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response)=> response.json())
        .then((userList)=> userList.map((user)=> new User(user)))
    }

    getUser =(id) => {
        return fetch(`http://bitbookapi.azurewebsites.net/api/users/${id}`, {
            headers:{
                'Content-Type': 'application/json',
                'Key': 'bitbook' ,
                'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'GET'
        })
        .then((response)=> response.json())
        .then((user)=> new User(user));
    }

    addNewTextPost =(newTextPost) => {
        return fetch ('http://bitbookapi.azurewebsites.net/api/TextPosts', {
            // body: JSON.stringify(newTextPost),
            headers:{
                'Content-Type': 'application/json',
                'Key': 'bitbook' ,
                'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
            },
            method: 'POST',
            data : {
                "text": newTextPost
            }

        })
        .then((response)=> response.json());
        
    
    }



addComment = (data) => {
console.log(data);
    return fetch('http://bitbookapi.azurewebsites.net/api/comments', {
        headers:{
            'Content-Type': 'application/json',
            'Key': 'bitbook' ,
            'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
        },
        body: JSON.stringify(data),
        method: 'POST'
    })
    .then((response) => response.json());
}

getComment = (id) => {
    return fetch(`http://bitbookapi.azurewebsites.net/api/comments?postId=${id}` , {
        headers:{
            'Content-Type': 'application/json',
            'Key': 'bitbook' ,
            'SessionId' : '7A5D8FF8-B04D-4C8C-9812-8B44EB7E4C94'
        },
        method: 'GET'       
    })
    .then((response) => (response.json()))
    .then((comments) => comments.map((comment) => new Comment(comment)))
}

}

export const dataServices = new DataServices();