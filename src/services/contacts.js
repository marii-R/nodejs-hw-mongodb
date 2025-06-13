import { Contact } from '../models/contact.js';

export function getAllContacts() {
  return Contact.find();
}

export function getContactById(id) {
  return Contact.findById(id);
}