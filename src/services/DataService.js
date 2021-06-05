import { db } from '../config/db';
import { Actions } from 'react-native-router-flux';

export const addUser =  (name,gender,icno,dob,address,email,password) => {
    db.ref('/users').child(icno).set({
        name: name,
        gender: gender,
        icno: icno,
        dob: dob,
        address: address,
        email: email,
        password: password
    }, () => Actions.LoginScreen());
}

export const addDonation =  (amount, Organisation, PaymentMethod,Date,DonationID) => {
    let user=firebase.auth().currentUser;
    var userid=user.uid;
    db.ref('/Donation').child(userid).child(DonationID).set({
        amount: amount,
        Organisation: Organisation,
        PaymentMethod: PaymentMethod,
        Date: Date,
    }, () => Actions.donationHistory());
}
// export const updateStudent =  (name, matricno, major, year, status) => {
//     db.ref('/students').child(matricno).update({
//         name: name,
//         matricno: matricno,
//         major: major,
//         year: year,
//         status: status
//     }, () => Actions.ListScreen());
// }

// export const removeStudent =  (matricno) => {
//     db.ref('/students').child(matricno).remove();
//     Actions.ListScreen();
// }
