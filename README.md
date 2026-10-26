# Hydraulics Stores Website

## Project Information

**Student Name:** Olwethu Mdima  
**Module:** WEDE5020  
**Project:** Website Development Project  
**Organisation:** Hydraulics Stores  
**Project Part:** Part 1 and Part 2 – HTML Foundation, CSS Styling and Responsive Design

---

## 1. Project Overview

This project involves the development of a website for Hydraulics Stores, a South African luxury fashion retailer. The website provides customers with information about the organisation, its products and brands, as well as a way to make enquiries and find contact information.

The website was developed using HTML5 and CSS3. The website consists of five main pages: Home, About Us, Products, Enquiry and Contact.

The project focuses on creating a clear, accessible and responsive website that provides users with an easy way to navigate and interact with the available information.

---

## 2. Project Goals and Objectives

The main goals of the website are to:

- Provide information about Hydraulics Stores.
- Present the products and brands offered by the organisation.
- Create clear and simple website navigation.
- Provide customers with an enquiry form.
- Provide contact and store information.
- Create a consistent and professional visual design.
- Ensure that the website works across desktop, tablet and mobile screen sizes.
- Apply semantic HTML5 and external CSS styling.

---

## 3. Target Audience

The target audience includes:

- Existing Hydraulics Stores customers.
- Potential customers interested in luxury fashion.
- Customers looking for clothing, footwear and accessories.
- Users who want to learn more about Hydraulics Stores and its concepts.
- Customers who want to make product enquiries or find contact information.

---

## 4. Website Pages

### Home Page – `index.html`

The Home page introduces Hydraulics Stores and provides an overview of the organisation. It includes an introduction, visual content, information about the different concepts and links to other sections of the website.

### About Us Page – `about.html`

The About Us page provides background information about Hydraulics Stores, including its history and concepts. It also provides information about the organisation and links users to the Products page.

### Products Page – `products.html`

The Products page provides information about the different product categories available. These include men's and women's clothing, accessories and footwear. The page also provides information about selected brands.

### Enquiry Page – `enquiry.html`

The Enquiry page contains a form that allows users to submit an enquiry. The form collects information such as the user's name, email address, telephone number, product category, product name, message and preferred contact method.

### Contact Page – `contact.html`

The Contact page provides users with contact information and store location information. It also provides a link to the enquiry page.

---

## 5. Website Features

The website includes the following features:

- Five linked HTML5 pages.
- Semantic HTML structure.
- Consistent navigation across all pages.
- Images and visual assets.
- Product and brand information.
- Enquiry/contact form.
- Contact and store information.
- External CSS stylesheet.
- Responsive navigation.
- Responsive images.
- Hover and focus states for interactive elements.
- Responsive layouts for different screen sizes.
- Footer information across the website.

---

## 6. Part 1 – HTML Foundation

The first part of the project focused on creating the HTML foundation of the website.

The following was completed:

- Created five HTML pages.
- Added semantic HTML5 elements.
- Created a consistent navigation system.
- Added relevant content for Hydraulics Stores.
- Added product categories and brand information.
- Added an enquiry form.
- Added contact information.
- Added images and website assets.
- Created a sitemap.
- Created the project README file.
- Organised the website files into appropriate folders.

---

## 7. Part 2 – CSS Styling and Responsive Design

CSS was added to improve the visual appearance, consistency and usability of the Hydraulics Stores website.

An external stylesheet named `style.css` was created inside the `CSS` folder and linked to all five HTML pages.

The stylesheet includes:

- CSS reset and default styling.
- Consistent typography.
- Consistent spacing and alignment.
- Navigation styling.
- Navigation hover and focus effects.
- Heading and paragraph styling.
- Responsive image sizing.
- Form styling.
- Button styling.
- Footer styling.
- Responsive design using CSS media queries.
- Desktop, tablet and mobile adjustments.

The website was tested using the following viewport sizes:

- **Desktop:** 1920 × 1080
- **Tablet:** 768 × 1024
- **Mobile:** 375 × 667

The responsive design allows the website content and navigation to adjust for different screen sizes. On smaller screens, the navigation changes to a vertical layout and form buttons expand to fit the available width.

---

## 8. File and Folder Structure

The project is organised as follows:

```text
Hydraulics Stores/
│
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── README.md
├── sitemap.png
│
├── CSS/
│   └── style.css
│
└── IMAGES/
    ├── hydraulics-home.png
    ├── hydraulics-brand.png
    ├── hydraulics-about.png
    ├── hydraulics-products.png
    └── hydraulics-fashion.png

## Part 3 – JavaScript, SEO and Form Validation

### JavaScript features
- Added `JS/script.js`, loaded with `defer` on all five pages.
- Added current-page navigation state using `aria-current`.
- Added keyboard-accessible image previews using a native dialog lightbox.
- Added a product/category/brand text filter on `products.html`.
- Added show/hide controls to content sections.
- Added client-side form checks and a telephone-number format check.

### SEO improvements
- Added page-specific titles and meta descriptions.
- Added robots directives and a theme colour.
- Added `robots.txt` and `sitemap.xml` files.
- The domain in both SEO files is a placeholder and must be replaced with the final public deployment URL before launch.

### Form behaviour and limitation
The enquiry and contact forms use HTML constraints and JavaScript validation. Their `action="#"` destinations are intentionally not represented as a live messaging service. Until a server endpoint or trusted form provider is configured, valid submissions display a notice that the message has not been sent. No customer data is transmitted by this static demonstration.

### Part 3 testing checklist
- [ ] Open each HTML page and confirm the stylesheet and JavaScript load.
- [ ] On Products, search for terms such as “sneakers”, “bags” and “Off-White”.
- [ ] Open an image preview with mouse and keyboard; close with the close button or backdrop.
- [ ] Expand/collapse sections and check keyboard focus visibility.
- [ ] Submit forms empty and with invalid email/telephone data.
- [ ] Confirm the demo notice clearly states that messages are not sent.
- [ ] Replace placeholder URLs in `robots.txt` and `sitemap.xml` after deployment.
- [ ] Test desktop, tablet and mobile layouts after all changes.

### Part 3 changelog
- Added JavaScript interactions and accessible image lightbox.
- Added product list search.
- Added show/hide section controls.
- Improved form field constraints and client-side validation.
- Added page-specific SEO metadata and SEO files.
- Added accessibility and reduced-motion CSS support.

