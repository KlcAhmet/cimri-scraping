export const UserInfo = {
    userID: String,
    name: String,
    surname: String,
    gender: String,
    birth: Date,
    city: String,
    address: String
}

export const UserInfoUpdate = {
    name: String,
    surname: String,
    gender: String,
    birth: String,
    city: String,
    address: String
}
// eslint-disable-next-line
export default { UserInfo, UserInfoUpdate }