import { firebase, googleAuthProvider, facebookAuthProvider } from './firebase'

export const SignupWithMailAndPassword = async ({ email, password }) => {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => console.log(res))
        .catch(err => {throw new Error(err)})
}

export const SigninWithMailAndPassword = async ({email, password}) => {
    await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => console.log(res))
        .catch(err => {throw new Error(err)})
}

export const SignWithGoogle = async () => {
    await firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(res => console.log(res))
        .catch(err => {throw new Error(err)})
}

export const SignWithFacebook = async () => {
    await firebase
        .auth()
        .signInWithPopup(facebookAuthProvider)
        .then(res => console.log(res))
        .catch(err => {throw new Error(err)})
}