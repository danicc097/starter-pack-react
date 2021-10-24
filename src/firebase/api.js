import firebase from './firebase'

export const SignupWithMailAndPassword = async ({ email, password }) => {
    await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => { console.log(res); })
        .catch(err => {throw new Error(err)})
}