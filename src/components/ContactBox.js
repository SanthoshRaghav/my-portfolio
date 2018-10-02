import React from "react";

const ContactBox = props => {
  const { email, phone, name, mobile } = props;
  return (
    <div>
      <span className="text-secondary">
        {name} {mobile}
      </span>{" "}
      {email}
      {phone}
    </div>
  );
};
export default ContactBox;
