import * as React from "react";

interface EmailTemplateProps {
  lastName: string;
  firstName: string;
  subject: string;
  message: string;
  email: string;
}

interface ResEmailTemplateProps {
  lastName: string;
  firstName: string;
  message: string;
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

export const ResEmailTemplate: React.FC<Readonly<ResEmailTemplateProps>> = ({
  lastName,
  firstName,
  message,
}) => (
  <div>
    <h1>
      Merci pour votre message {firstName} {lastName}
    </h1>
    <p>{message}</p>
  </div>
);
