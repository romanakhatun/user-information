import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEnvelope, faPhoneAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import './User.css';


const User = (props) => {
    const { picture, name, email, company, income, phone } = props.user;
    return (
        //Users information
        <div className="userContainer container col-md-4">
            <div className="card mb-4">
                <img src={picture} alt="" /><br />

                <div className="col-body">
                    <h4>{name}</h4><br />

                    <p><FontAwesomeIcon icon={faEnvelope} />{email}</p>

                    <p><FontAwesomeIcon icon={faBuilding} />Company:{company} </p>

                    <p>Yearly salary:${income}</p>

                    <p><FontAwesomeIcon icon={faPhoneAlt} />Phone:{phone}</p>

                    <button className="btn btn-danger"
                        onClick={() => props.addButtonHan(props.user)}>
                        <FontAwesomeIcon icon={faPlus} className="plus-icon" />add friend
                    </button>
                </div>

            </div>{/*card */}
        </div> /*user container*/
    );
};

export default User;