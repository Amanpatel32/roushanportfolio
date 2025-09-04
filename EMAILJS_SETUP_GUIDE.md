# EmailJS Setup and Configuration Guide

This guide will help you set up your EmailJS account and configure your contact form to send emails successfully.

---

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2. Verify your email address and log in to the EmailJS dashboard.

---

## Step 2: Add an Email Service

1. In the EmailJS dashboard, navigate to **Email Services**.
2. Click **Add new service**.
3. Choose your email provider (e.g., Gmail, Outlook).
4. Follow the instructions to connect your email account.

---

## Step 3: Create an Email Template

1. Go to the **Email Templates** section.
2. Click **Create new template**.
3. Define the template with the following variables (or as needed):
   - `name`
   - `email`
   - `subject`
   - `message`
4. Customize the email content as desired.
5. Save the template.

---

## Step 4: Get Your Service ID, Template ID, and User/Public Key

1. In the dashboard, find your **Service ID** under Email Services.
2. Find your **Template ID** under Email Templates.
3. Find your **User ID** or **Public Key** in the **Integration** section.

---

## Step 5: Update Your ContactForm.tsx

1. Replace the following constants in your `ContactForm.tsx` with your actual IDs:

```typescript
const serviceID = 'your_service_id';
const templateID = 'your_template_id';
const userID = 'your_user_id_or_public_key';
```

2. Save the file and restart your development server.

---

## Step 6: Test Your Contact Form

1. Open your website and navigate to the contact page.
2. Fill out the form and submit.
3. Check for success or error messages.
4. If you encounter errors, open your browser console (F12) and look for network or CORS errors.

---

## Troubleshooting CORS and Network Issues

- Ensure your browser or network firewall is not blocking requests to EmailJS.
- If you see CORS errors, try:
  - Using a different browser.
  - Checking EmailJS documentation for CORS configuration.
  - Using a proxy server if necessary.

---

If you need further assistance, feel free to ask!
