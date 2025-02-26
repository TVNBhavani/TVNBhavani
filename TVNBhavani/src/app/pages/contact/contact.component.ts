import { Component } from '@angular/core';
import { EmailJSService } from '../../services/emailjs.service'

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };
  to_name: string = "Samuel Sudeep Ayyala";

  constructor(private emailService: EmailJSService) { }

  onSubmit(): void {
    console.log('Form submitted!', this.contactForm);
    const formData = {
      to_name: this.to_name,
      from_name: this.contactForm.name,
      from_email: this.contactForm.email,
      message: this.contactForm.message,
    };


    this.emailService.sendEmail(formData)
      .then(response => {
        console.log('Email sent successfully:', response);
        alert("Email Sent Successfully!");
        this.contactForm = { name: '', email: '', message: '' };
      })
      .catch(error => {
        console.error('Error sending email:', error);
        alert('Sorry, something went wrong.');
      });
  }
}


