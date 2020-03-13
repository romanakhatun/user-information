import React, { Component } from "react";
import './Form.css'

class Form extends Component {
    constructor() {
        super();
        this.state = {
            fname: " ",
            lname: "",
            email: "",
            mobile: ""
        };
    }
    // click pass value
    onChangeHandler = event => {
        var newProperty = event.target.name;
        var nawValue = event.target.value;
        this.setState({ [newProperty]: nawValue });
    };
    // submit handler
    onSubmithandelar = () => {
        alert(this.state.fname)
    }
    render() {
        return (
            <div className="formContainer">
                {/* Form Validation */}
                <p className="signUpP">SING UP</p>
                <form className="formFillup" onSubmit={this.onSubmithandelar}>
                    {/* Frist Name */}
                    <h5>
                        <small style={{ color: "#ffffff" }}>First Name:{this.state.fname}</small>
                    </h5>
                    <input name="fname" onChange={this.onChangeHandler} type="text" placeholder="Your First Name" /><br /><br />

                    {/* Last name */}
                    <h5>
                        <small style={{ color: "#ffffff" }}>Last Name:{this.state.lname}</small>
                    </h5>
                    <input
                        name="lname"
                        onChange={this.onChangeHandler}
                        type="text"
                        placeholder="Your Last Name"
                    /><br /><br />

                    {/* email */}
                    <h5>
                        <small style={{ color: "#ffffff" }}>Email:{this.state.email}</small>
                    </h5>
                    <input
                        name="email"
                        onChange={this.onChangeHandler}
                        type="text"
                        placeholder="Your Email Address"
                    /><br /><br />

                    {/* mobile */}
                    <h5>
                        <small style={{ color: "#ffffff" }}>Mobile:{this.state.mobile}</small>
                    </h5>
                    <input
                        name="mobile"
                        onChange={this.onChangeHandler}
                        type="text"
                        placeholder="Your Mobile No"
                    /> <br /><br />

                    {/* Submit */}
                    <input type="Submit" /><br /><br />
                </form>
            </div>
        );
    }
}

export default Form;

