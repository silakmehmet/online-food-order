import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 10;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    phoneNumber: true,
  });

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredAddressIsValid = !isEmpty(enteredAddress);
    const enteredPhoneNumberIsValid = isFiveChars(enteredPhoneNumber);

    setFormInputsValidity({
      name: enteredNameIsValid,
      address: enteredAddressIsValid,
      phoneNumber: enteredPhoneNumberIsValid,
    });

    const formIsValid =
      enteredNameIsValid && enteredAddressIsValid && enteredPhoneNumberIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      phoneNumber: enteredPhoneNumber,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    formInputsValidity.address ? '' : classes.invalid
  }`;
  const phoneNumberControlClasses = `${classes.control} ${
    formInputsValidity.phoneNumber ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={addressControlClasses}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressInputRef} />
        {!formInputsValidity.address && <p>Please enter a valid address!</p>}
      </div>
      <div className={phoneNumberControlClasses}>
        <label htmlFor="phone">Phone Number</label>
        <input type="text" id="phone" ref={phoneNumberInputRef} />
        {!formInputsValidity.phoneNumber && (
          <p>Please enter a valid phone number (10 characters long)!</p>
        )}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
