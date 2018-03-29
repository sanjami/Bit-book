
class User {
    constructor(user){
        this.name = user.name;
        this.id = user.id;
        this.shortAbout = user.aboutShort;
        this.upDate = user.lastPostDate;
        this.avatarUrl = user.avatarUrl;
        this.postsCount = user.postsCount;
        this.commentsCount = user.commentsCount;
        this.email = user.email;
        this.about = user.about
    }
}

export default User;