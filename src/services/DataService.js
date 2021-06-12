import { db } from '../configure/db';
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';


export const addDonation =  (amount, Organisation, PaymentMethod,Date,DonationID) => {
    let user=firebase.auth().currentUser;
    var userid=user.uid;
    db.ref('/Donation'+userid).child(DonationID).set({
        amount: amount,
        Organisation: Organisation,
        PaymentMethod: PaymentMethod,
        Date: Date,
        DonationID:DonationID
    }, () => Actions.PaymentHistory());
}

export const addUser =  (name, gender, icno,dob,address) => {
    let user=firebase.auth().currentUser;
    var userid=user.uid;
    db.ref('/Users'+userid).child(name).set({
        userid:userid,
        name: name,
        gender: gender,
        icno: icno,
        dob: dob,
        address:address
    }, () => Actions.payment());
}

export const removeDonation =  (DonationID) => {
    let user=firebase.auth().currentUser;
    var userid=user.uid;
    db.ref('/Donation'+userid).child(DonationID).remove();
    Actions.PaymentHistory();
}

export const addStudent =  (name, matricno, major, year, status) => {
    db.ref('/students').child(matricno).child(name).set({
        name: name,
        matricno: matricno,
        major: major,
        year: year,
        status: status
    }, () => Actions.ListScreen());
}

export const updateStudent =  (name, matricno, major, year, status) => {
    db.ref('/students').child(matricno).child(name).update({
        name: name,
        matricno: matricno,
        major: major,
        year: year,
        status: status
    }, () => Actions.ListScreen());
}

export const removeStudent =  (matricno) => {
    db.ref('/students').child(matricno).child(name).remove();
    Actions.ListScreen();
}

