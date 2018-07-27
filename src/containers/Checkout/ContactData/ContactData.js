import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipCode: ''
        }
    }

    render () {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data.</h4>
                <form className={classes.Input}>
                    <input type="text" name="name" placeholder="Your Name" autoComplete="name" />
                    <input type="email" name="email" placeholder="Your Email" autoComplete="email" />
                    <input type="text" name="street" placeholder="Street" autoComplete="address-line1" />
                    <input type="text" name="zip" placeholder="Zip Code" autoComplete="postal-code" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;