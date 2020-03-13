import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import fakeData from '../../fakeData';
import User from './User';
import './Users.css';

const Users = () => {
    const dataCollection = fakeData;
    //console.log(dataCollection);
    const [member, setMember] = useState([]);

    //button click add user
    const addButtonHan = (user) => {
        // console.log("button is add", product);

        const newAdd = [...member, user];
        const removeDuplicate = newAdd.filter(function (item, index) {
            return newAdd.indexOf(item) === index;
        });
        setMember(removeDuplicate);

    };

    const mebsalary = member.reduce((salary, meb) => salary + meb.income, 0);
    return (
        <div className="row">
            <div className="col-md-9 row ml-2 mt-4 parentMem">
                {
                    dataCollection.map(usr => <User
                        addButtonHan={addButtonHan}
                        user={usr}>
                    </User>)
                }
            </div>

            <div className="col-md-3 mt-4 memberConec">
                <h5>Connected users</h5>
                <p>Person:{member.length}</p>
                <FontAwesomeIcon icon={faBoxOpen} className="box-icon" />

                {
                    member.map(meb =>
                        <div className="collectionImg">
                            <img src={meb.picture} alt="" />
                            <h5>{meb.name}</h5>
                        </div>
                    )
                }

                <p>Total salary : {mebsalary}</p>
            </div>
        </div>
    );
};

export default Users;