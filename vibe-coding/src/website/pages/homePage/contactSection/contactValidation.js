export function validateContactForm({ name, companyName, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Name is required.'
  if (!email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = 'Please enter a valid email address.'
  if (!message.trim()) errors.message = 'Message is required.'
  // companyName is optional — no validation needed
  return errors
}
