import React from "react";
import { Container } from "react-bootstrap";
import { isAuthenticated } from "../auth/index";

export default function Profile() {
  const {
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    role,
  } = isAuthenticated();
  return (
    <Container className="mt-5">
      <div className="card mb-5">
        <h3 className="card-header">User Information</h3>
        <ul className="list-group">
          <li className="list-group-item"># {id}</li>
          <li className="list-group-item">Firstname: {firstName}</li>
          <li className="list-group-item">Lastname: {lastName}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone Number: {phoneNumber}</li>
          <li className="list-group-item">Role: {role}</li>
        </ul>
      </div>
      <div className="card">
        <h3 className="card-header">Ticket history</h3>
        <ul className="list-group">
          <li className="list-group-item">...</li>
        </ul>
      </div>
    </Container>
  );
}
