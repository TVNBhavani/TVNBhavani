import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailJSService {
  constructor() { }

  sendEmail(formData: any) {
    const serviceID = "service_69o3g7a";
    const templateID = "template_hyov715";
    const userID = "7YNF9yIxHtBgKtVqf";

    return new Promise((resolve, reject) => {
      emailjs.send(serviceID, templateID, formData, userID)
        .then(response => {
          console.log('Email sent successfully:', response);
          resolve(response);
        })
        .catch(error => {
          console.error('Error sending email:', error);
          reject(error);
        });
    });
  }
}
