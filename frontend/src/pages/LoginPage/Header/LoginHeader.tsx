import { Link } from "react-router-dom";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import './LoginHeader.css';

export function LoginHeader() {
    return (
        <div className="loginHeader">

            <div className="loginHeader___title">
                <Link to="/" className="loginHeader___title___content">
                    <i><LocalHospitalIcon /></i>
                    <h1>HealthCare</h1>
                </Link>
            </div>


            <div className="loginHeader___link">
                <p className="loginHeader___link___p">Already have an account?</p>
                <Link to="/login">
                    <button className="loginHeader___link___button"><p className="p">Log In</p></button>
                </Link>
            </div>
        </div>
    )
}
