import "../css/Contact.css";

function Contact() {
  // function handleMessage(){

  // }

  return (
    <>
      <div className="contact-all">
        <div className="form">
          <fieldset>
            <h4>Contact Form</h4>
            <label>Full Name</label>
            <br />
            <input placeholder="Your Name" />
            <br />
            <label>Email</label>
            <br />
            <input placeholder="Your Email" />
            <br />
            <label>Subject</label>
            <br />
            <input placeholder="Subject" />
            <br />
            <label>Message</label>
            <br />
            <textarea></textarea>
            <br />
            <button>Send Message</button>
          </fieldset>
        </div>
        <div className="contact-info">
          <h4>Contact Details</h4>
          <ul>
            <li>
              <img src="map-pin.png" />
              <span>Your Adress, Your city, Country</span>
            </li>
            <li>
              <img src="mail.png" />
              <span>email@gmail.com</span>
            </li>
            <li>
              <img src="phone.png" />
               <span>000-2222-222</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Contact;
