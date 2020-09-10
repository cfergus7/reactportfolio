import React, { Component } from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default class Contact extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <section className="contact">
        <div className="contact_container">
          <div className="contact_formcontainer">
            <h3> Let's Collaborate</h3>
            <ContactForm />
          </div>
        </div>
      </section>
    );
  }
}