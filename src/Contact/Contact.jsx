import React from "react";
import ContactForm from './ContactForm';
import MyMap from "./Map";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
        <h1 style={{color: '#4E2B72'}}>Contact</h1>
        <div className="container" style={{display: 'flex', padding: '2%'}}>
          <div style={{flex: '1'}}>
            <MyMap />
          </div>
          <div style={{flex: '1'}}>
            <ContactForm />
          </div>
        </div>
    </main>
  );
}
