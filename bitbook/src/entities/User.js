
class User {
    constructor(user){
        this.name = user.name;
        this.id = user.id;
        this.description = user.aboutShort;
        this.upDate = user.lastPostDate;
        this.address = user.avatarUrl;
    }
}

export default User;