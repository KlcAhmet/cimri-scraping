class UserInfo {
    constructor(userID, name, surname, gender, birth, city, address) {
        this.userID = String(userID)
        this.name = String(name)
        this.surname = String(surname)
        this.gender = String(gender)
        this.birth = Date(birth)
        this.city = String(city)
        this.address = String(address)
    }
}

export default UserInfo