import { getAuth, signInWithCustomToken } from "firebase/auth";

const FirebaseAuth = async () => {
    const auth = getAuth();
    const signIn = (token: string) => {
        return signInWithCustomToken(auth, token);
    }
    return await signIn;
}
 
export default FirebaseAuth;