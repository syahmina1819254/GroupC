import React, { Component } from 'react';
import { Body,Text, ListItem } from 'native-base';
import PropTypes from 'prop-types';


export default class PaymentList extends Component {

  static propTypes = {
    Donation: PropTypes.array.isRequired
  
  };

  onLongPress = (DonationID) => {
    this.props.onLongPress(DonationID);
  }

  render() {
    return(
      this.props.Donation.map((data, index) => {
        return(
          
          <ListItem key={index} onLongPress={() => this.onLongPress(data.DonationID)}>
            <Body>
              <Text>Date : {data.Date} </Text>
              <Text>Amount (RM) : {data.amount} </Text>
              <Text>Organisation {data.Organisation} </Text>
            </Body>
          </ListItem>
          
        )
      })
    )
  }
}