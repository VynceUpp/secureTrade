import { useContext, useState, useEffect, createContext } from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)

    useEffect(() => {
        checkUserStatus()
    }, [])

    const loginUser = async (userInfo) => {
        setLoading(true)
        try{
            let response = await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password
            )

            let accountDetails = await account.get()
            setUser(accountDetails)
        }catch(error){
            console.error(error)
        }
        setLoading(false)
    }

    const loginWithGoogle = async ( ) => {
        account.createOAuth2Session(
            'google',
            'http://localhost:5173/',
            'http://localhost:5173/fail'

        )
    }

    const logoutUser = () => {
        account.deleteSession('current')
        setUser(null)
    }

    const registerUser = async (userInfo) => {
        setLoading(true)

        try{
            let response = await account.create(
                ID.unique(),
                userInfo.email,
                userInfo.password,
                userInfo.name,
                userInfo.phone
            )

            await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password
            )

            let accountDetails = await account.get()
            setUser(accountDetails)
        }catch(error){
            console.error(error)
        }
        setLoading(false)
    }

    const checkUserStatus = async () => {
        try{
            let accountDetails = await account.get()
            setUser(accountDetails)
        }catch(error){}
        setLoading(false)
    }

    const contextData = {
        user,
        loginUser,
        loginWithGoogle,
        logoutUser,
        registerUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {return useContext(AuthContext)}

export default AuthContext;