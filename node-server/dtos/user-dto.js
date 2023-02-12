module.exports = class UserDto {
    email;
    id;
    activated;
    username;
    first_name;
    last_name;

    constructor(model) {
        this.email = model.email;
        this.id = model.id;
        this.activated = model.activated;
        this.username = model.username;
        this.first_name = model.first_name;
        this.last_name = model.last_name;
    }
}
