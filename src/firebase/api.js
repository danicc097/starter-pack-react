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

export const SignWithGoogle = async (signWithProvider) => {
    await firebase
        .auth()
        .signInWithPopup(googleAuthProvider)
        .then(async res => {
            if (res && res.additionalUserInfo && res.user) {
                if (res.user.multiFactor.user) {
                    const payload = {
                        firstname: res.additionalUserInfo.profile.given_name,
                        lastname: res.additionalUserInfo.profile.family_name,
                        email: res.additionalUserInfo.profile.email,
                        firebase_provider: res.additionalUserInfo.providerId,
                        firebase_uid: res.user.multiFactor.user.uid,
                        firebase_id_token: res.user.multiFactor.user.accessToken,
                    }
                    await signWithProvider(payload)
                        .then(res => console.log(res))
                        .catch(err => {throw new Error(err)})
                }
            }
        })
        .catch(err => {throw new Error(err)})
}

export const SignWithFacebook = async () => {
    await firebase
        .auth()
        .signInWithPopup(facebookAuthProvider)
        .then(res => console.log(res))
        .catch(err => {throw new Error(err)})
}