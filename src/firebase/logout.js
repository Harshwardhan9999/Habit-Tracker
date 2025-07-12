import { signOut } from "firebase/auth";
import { auth } from "../firebase";


export const logout = async () => {
    try {
        await signOut(auth);
        console.log("User signed out.");
    }
    catch (error) {
        console.log("error signing out: " + error.message)
    }
};