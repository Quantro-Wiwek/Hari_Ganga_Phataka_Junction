# Hari Ganga Phataka Junction — Diwali Landing Page

E-commerce landing page for buying and selling crackers (Phataka), built with React, Vite, and Tailwind CSS. Includes a product catalogue, cart, testimonials, and contact form with optional EmailJS integration.

## Getting started

1. Install dependencies

   npm install

2. Run the dev server

   npm run dev

## EmailJS setup (optional)

- Create an EmailJS account and get your `user_id`, `service_id`, and create templates.
- Replace `service_id`, `template_id`, and `user_id` placeholders in `src/components/Cart.jsx` and `src/components/ContactForm.jsx`.

## Deployment

- You can deploy to Vercel or Netlify.

## Notes

- Images are referenced from `/images/...` — add your product images to `public/images` or update paths.
- This project uses AOS for scroll animations.
