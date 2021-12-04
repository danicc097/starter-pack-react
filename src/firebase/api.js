import { firebase, googleAuthProvider } from './firebase'
import moment from 'moment'
import Err from '../utils/humanResp'

export const SignupWithMailAndPassword = async ({ firstname, lastname, email, password, confirm_password, birthday, phone, signup }) => {
    const body = {
        firstname,
        lastname,
        email,
        password,
        confirm_password,
        phone,
        birthday: birthday ? moment(birthday).format('DD-MM-YYYY') : null,
    }
    await signup(body)
        .then(res => {
            if (res?.success) console.log("Connected")
            else { throw Err(res) }
        })
}

export const SigninWithMailAndPassword = async ({email, password, login}) => {
    await login(email, password)
        .then(res => {
            if (res?.success) console.log("connected!")
             else { throw Err(res) }
        })
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
                        .catch(err => { throw Err(err) })
                }
            }
        })
}