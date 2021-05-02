const UserInfo = {
    userID: String,
    name: String,
    surname: String,
    gender: String,
    birth: Date,
    city: String,
    address: String
}

const UserInfoUpdate = {
    name: String,
    surname: String,
    gender: String,
    birth: Date,
    city: String,
    address: String
}

export default { UserInfo, UserInfoUpdate }