import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth, GoogleProvider } from './config';

interface credentials {
    email: string;
    password: string;
}


export const signInGoogle = async () => {

    try {

        const result = await signInWithPopup(FirebaseAuth, GoogleProvider)

        const credentials = GoogleAuthProvider.credentialFromResult(result)


        const token = credentials?.accessToken
        const user = result.user


    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    }

}

export const loginWithEmailAndPassword = async ({ email, password }: credentials) => {
    try {

        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { photoURL, uid, displayName } = resp.user;

        return {
            ok: true,
            photoURL, uid, displayName, errorMsg: null
        }

    } catch (error) {
        return {
            ok: false,
            photoURL: null, uid: null, displayName: null, errorMsg: 'Credenciales Incorrectas'
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}