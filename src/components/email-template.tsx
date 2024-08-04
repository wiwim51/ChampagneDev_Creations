import * as React from "react";

interface EmailTemplateProps {
  lastName: string;
  firstName: string;
  subject: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  lastName,
  firstName,
  subject,
  message,
  email,
}) => (
  <div>
    <h1>
      {firstName} {lastName}
    </h1>
    <p>{email}</p>
    <h2>{subject}</h2>
    <p>{message}</p>
  </div>
);
