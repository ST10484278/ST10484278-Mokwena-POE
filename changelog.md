## CSS Development, Layout, and Visual Design Improvements

## 1 PART_1 Improvements and changes

   The original content in HTML pages was significantly expanded with:

    Detailed product descriptions
    Structured paragraphs for better readability
    Bullet lists for easy scanning
    Additional explanatory text to enhance user understanding
    Improved headings and subheadings for better content hierarchy


## 2 Creation of the Main External Stylesheet

    Developed a dedicated style.css file and linked it to all pages.

    Applied global CSS resets to eliminate browser inconsistencies.

    Introduced reusable CSS variables for:

    Primary and secondary colours

    Font sizes

    Spacing units

## 3 Layout System & Utility Classes

    Implemented a robust utility system to ensure consistent layout behaviour:

    Utility Classes Added

    .container — standard content width with centered alignment

    .flex — for vertically or horizontally aligned elements

    .grid, .grid-2, .grid-3 — for grid-based content sections

    These were used extensively across all pages for clean, scalable layouts.

## 4 Navigation Bar Styling

    Styled the horizontal nav bar with spacing, alignment, and modern UI elements.

    Added hover animations for improved interactivity.

    Ensured the nav bar adapts correctly across different screen sizes.

## 5 Hero Section Development

    Built a hero banner with background image, overlay tint, and centered text.

    Added large typography that communicates the brand identity.

## 6 Card Component Design

    Designed reusable "cards" for showcasing services or products.

    Added hover animation using box-shadow and scale effects.

    Ensured the cards remained responsive on all screen sizes.

## 7 Buttons & Call-to-Action

    Styled site-wide buttons with:

    Rounded corners

    Hover transitions

    Smooth colour fades

    Ensured consistent button behaviour across pages.

## 8 Footer Design

    Built a responsive footer containing:

    Contact details

    Copyright notice

    Consistent colour scheme

## 9 Responsive Design Implementation

    Added responsive rules using media queries for:

    Extra-large screens

    Desktop monitors

    Tablets

    Mobile devices

    This included:

    Resized text

    Stacked flex items

    Adjusted grids

    Optimised spacing for smaller displays

## 10 Gallery Page Styling

    Implemented CSS Grid for arranging gallery images.

    Ensured the images resize appropriately depending on the device.

    Styled captions for professionalism and clarity.

## 11 Contact Page Styling

    Improved form fields, labels, input spacing, and layout structure.

    Ensured usability on both mobile and desktop.

## JavaScript Integration, Interactivity, and Dynamic Features
## 1 JavaScript File Setup

    Created an external file script.js and linked it to all HTML pages using:

    <script defer src="js/script.js"></script>

## 2 Dynamic Content Section Implementation

    Added a <section id="dynamicContent"></section> to every page.

    Prepared the DOM for future dynamic or programmatically injected content.

    Ensured this section is easily accessible from JavaScript.

## 3 Accordion Component for Products Page

    Developed a functional accordion on the products.html page.

    Features Implemented

    Click-to-toggle behaviour for each FAQ item.

    Expansion and collapse animation logic.

    Ability to support unlimited accordion items in the future.

    Cleaner user experience for viewing product and service details.

## 4 DOM Structure Optimization

    Adjusted HTML elements to make JavaScript functionality easier to attach.

    Added descriptive class names and IDs for better JS maintainability.

    Organized content blocks to ensure interactive components behave consistently.

## 5 Multi-Page JavaScript Compatibility

    Tested and confirmed that the JavaScript file loads correctly on every HTML page.

    Ensured dynamic content is accessible from any page that requires it.

    Prepared the site for future enhancements such as:

    Modals

    Form validation

    Interactive galleries

    Dynamic product listings