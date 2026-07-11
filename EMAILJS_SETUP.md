# EmailJS Setup Guide

## Overview
The contact form is now integrated with EmailJS to send emails directly to your inbox when users submit messages.

## Setup Instructions

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### 2. Add Email Service
1. Go to **Email Services** section
2. Click **Add New Service**
3. Choose **Gmail** (or your email provider)
4. Click **Connect Account** and authenticate
5. Copy your **Service ID** (looks like: `service_xxxxx`)

### 3. Create Email Template
1. Go to **Email Templates** section
2. Click **Create New Template**
3. Name it (e.g., "Contact Form Template")
4. Use this template content:

```
From: {{from_email}} ({{from_name}})
Subject: {{subject}}
Message: {{message}}
```

5. Copy your **Template ID** (looks like: `template_xxxxx`)

### 4. Get Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (looks like: `6vfL5ZPZK8jvAqmvD`)

### 5. Update Configuration in ContactForm.jsx

Replace the placeholders in `src/components/ContactForm.jsx`:

```javascript
// Line 20: Initialize with your Public Key
emailjs.init('YOUR_PUBLIC_KEY_HERE');

// Line 36: Set your email service ID
'service_YOUR_SERVICE_ID_HERE',

// Line 37: Set your template id
'template_YOUR_TEMPLATE_ID_HERE',
```

## Current Placeholders to Replace

In `src/components/ContactForm.jsx`:

- **Line 20**: `emailjs.init('6vfL5ZPZK8jvAqmvD')` 
  → Replace `6vfL5ZPZK8jvAqmvD` with your **Public Key**

- **Line 36**: `'service_0sjzfwi'`
  → Replace `service_0sjzfwi` with your **Service ID**

- **Line 37**: `'template_5sb0dle'`
  → Replace `template_5sb0dle` with your **Template ID**

- **Line 24**: `'bodysameh877@gmail.com'`
  → Your actual email address (already correct)

## Testing

1. Start the development server: `npm run dev`
2. Go to Contact page
3. Fill out and submit the contact form
4. Check your email inbox for the message
5. Check EmailJS dashboard for delivery status

## Features Implemented

✅ Form validation (all fields required, valid email format)
✅ Loading state with spinner animation
✅ Success message after sending
✅ Error handling and user feedback
✅ Email sent to your configured inbox
✅ Stores sender's email and name for easy replies
✅ Form clears after successful submission

## Troubleshooting

**Message not sending?**
- Verify all IDs are correct in ContactForm.jsx
- Check EmailJS dashboard for error logs
- Ensure email service is properly connected
- Check spam/promotions folder

**Getting CORS errors?**
- This is normal with EmailJS public key
- The library handles it automatically

**Want to modify the email template?**
- Go to EmailJS dashboard → Email Templates
- Edit the template HTML/content
- Variables available: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

## Free Plan Limits

- Up to 200 emails/month on free plan
- Sufficient for a contact form
- Upgrade anytime for more

## Contact Form Variables

The form sends these variables to EmailJS:
- `to_email` - Your email address
- `from_name` - Sender's name
- `from_email` - Sender's email
- `subject` - Message subject
- `message` - Message content
