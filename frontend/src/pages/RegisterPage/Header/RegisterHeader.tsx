import { Link } from "react-router-dom";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

import './RegisterHeader.css';

export function RegisterHeader() {
    return (
        <div className="registerHeader">

            <div className="registerHeader___title">
                <Link to="/" className="registerHeader___title___content">
                    <i><LocalHospitalIcon /></i>
                    <h1>HealthCare</h1>
                </Link>
            </div>


            <div className="registerHeader___link">
                <p className="registerHeader___link___p">Already have an account?</p>
                <Link to="/login">
                    <button className="registerHeader___link___button"><p className="p">Log In</p></button>
                </Link>
            </div>
        </div>
    )
}
