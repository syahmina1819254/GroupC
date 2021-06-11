import { db } from '../config/db';
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
    }, () => Actions.PaymentHistory());
}

export const removeDonation =  (DonationID) => {
    let user=firebase.auth().currentUser;
    var userid=user.uid;
    db.ref('/Donation'+userid).child().remove();
    Actions.PaymentHistory();
}

