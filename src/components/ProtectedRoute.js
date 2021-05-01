/* import { useSelector } from "react-redux" */

const ProtectedRoute = (props) => {
    /*  const Token = useSelector(state => state.Token) */
    try {
        if (true) {
            return (
                // <UserLoggin />
                <p>bbb</p>
            )
        }
        else {
            return (
                <p>aaaa</p>
                //  <GuestLoggin />
            )
        }
    } catch (error) {

    }

}

export default ProtectedRoute;