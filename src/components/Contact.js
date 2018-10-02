import React from "react";
import Headings from "./Headings";
import { Consumer } from "../context";
import ContactBox from "./ContactBox";
const Contact = () => {
  return (
    <Consumer>
      {value => {
        const { details, contact } = value;
        return (
          <main id="contact">
            {details.map(detail => (
              <Headings
                key={detail.id}
                contact={detail.contact}
                me={detail.me}
              />
            ))}

            <div className="boxes">
              {contact.map(contact => (
                <ContactBox
                  key={contact.id}
                  email={contact.email}
                  phone={contact.phone}
                  name={contact.name}
                  mobile={contact.mobile}
                />
              ))}
            </div>
          </main>
        );
      }}
    </Consumer>
  );
};
export default Contact;
