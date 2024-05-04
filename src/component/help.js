// Help.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import logo1 from './medisync.png';
import Logout from './shutdown.png';

const Help = () => {
  return (
    <div>
      <header>
        <img src={logo1} alt="MEDIsync Logo" />
        <h1>MEDIsync</h1>
        <Link to="/"><p><img className='logout' src={Logout} alt="" />logout</p></Link>
      </header>
      <div className="help-container">
        <h1>Help Section</h1>
        <p>
          Welcome to the Help Section of MEDIsync patient portal. Here, you can find useful information
          and resources to assist you with using our platform.
        </p>
        <h2>Frequently Asked Questions (FAQs)</h2>
        <p>
        How do I sign up for the patient portal?
  <br />
To sign up for the patient portal, click on the "Sign Up" or "Register" button on the login page. You'll be prompted to provide some basic information such as your name, date of birth, email address, and a unique password. Follow the on-screen instructions to complete the registration process.
<br />
<br />
Is my information secure on the patient portal?
<br />
Yes, protecting your privacy and security is our top priority. We utilize industry-standard encryption and security measures to ensure that your personal health information remains confidential and secure.
<br />
<br />
How do I reset my password if I forget it?
<br />
If you forget your password, you can easily reset it by clicking on the "Forgot Password" link on the login page. You'll be asked to provide your email address associated with your account, and instructions to reset your password will be sent to that email.
<br />
<br />
How can I access my medical records on the portal?
<br />
Once you've logged into the patient portal, you can navigate to the "Medical Records" or "Health Information" section. From there, you'll be able to view and download your medical records, including lab results, medications, allergies, and more.
<br />
<br />
Can I schedule appointments through the portal?
<br />
Yes, you can schedule appointments through the patient portal. Simply navigate to the "Appointments" or "Schedule Appointment" section and follow the prompts to select a date and time that works for you. You may also be able to choose your preferred healthcare provider and specify the reason for your visit.
<br />
<br />
How do I communicate with my healthcare provider through the portal?
<br />
You can securely message your healthcare provider through the patient portal's messaging system. Look for the "Messages" or "Communicate" section and compose a new message. You can use this feature to ask questions, request prescription refills, or discuss any concerns you may have.
<br />
<br />
What should I do if I notice incorrect information in my medical records?
<br />
If you notice any inaccuracies or discrepancies in your medical records, please contact our support team immediately. We'll work with you to correct the information and ensure that your records are up-to-date and accurate.
<br />
<br />
Can I pay my bills or view my billing statements on the portal?
<br />
Yes, you can conveniently view and pay your bills directly through the patient portal. Navigate to the "Billing" or "Financial" section to access your billing statements, make payments, and view your transaction history.
<br />
<br />
Is there a mobile app available for the patient portal?
<br />
Yes, we offer a mobile app for both iOS and Android devices, providing convenient access to the patient portal's features on the go. You can download the app from the App Store or Google Play Store and log in using your existing credentials.
<br />
<br />
How do I log out of the patient portal securely?
<br />
To log out of the patient portal, simply click on the "Log Out" or "Sign Out" button located in the menu or navigation bar. It's important to log out after each session, especially if you're accessing the portal from a shared or public device, to ensure the security of your information.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you need further assistance or have any questions, feel free to contact our support team
          at support@medisync.com.
        </p>
      </div>
    </div>
  );
};

export default Help;
