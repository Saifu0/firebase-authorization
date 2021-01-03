import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const  firebaseConfig = {
    apiKey: "AIzaSyC5lEIjPlYKmqZ6QZSx0jt4FE0TdbBUDHQ",
    authDomain: "auth-development-de936.firebaseapp.com",
    projectId: "auth-development-de936",
    storageBucket: "auth-development-de936.appspot.com",
    messagingSenderId: "72468571865",
    appId: "1:72468571865:web:bc97c3e63ffb2997fa80c8",
    measurementId: "G-FRM8D0T96V"
};

export const generateUserDocument = async ( user : any , additionalData? : any  ) => {
    if(!user){
        return;
    }

    const userRef = firestore.doc(`users/${user.uid}`);
    const userDoc = await userRef.get();

    if(!userDoc){
        const { email, username, photoURL } = user;
        try {
            await userRef.set({
                username,
                email,
                photoURL,
                ...additionalData
            })
        }catch(error){
            console.log('Error in creating user document',error);
        }
    }
    const userDocument = getUserDocument(user.uid);
    return userDocument;
}

const getUserDocument = async (uid : any) => {
    if(!uid){
        return null;
    }
    try { 
        const userDocument = await firestore.doc(`$users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        }
    }catch(error){
        console.log('Error in fetching user Document',error);
    }
}

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
