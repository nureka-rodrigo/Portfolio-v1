# Portfolio-v1

This project is a personal portfolio website developed using React.js.
It showcases the developer's skills, experience, education, and projects.
The website also includes a contact form for visitors to send messages.

## Pages

The website consists of the following pages:

1. **Landing**: The initial page of the website, which redirects to the Home page after a short delay.

2. **Home**: The landing page of the website, introducing the developer.

3. **About**: This page provides detailed information about the developer's skills, experience, education, and
   certifications.

4. **Projects**: Showcases the developer's projects.
   Each project card includes a brief description and tags related to the technologies used.
   There is also a link to view the project on GitHub.

5. **Contact**: A form for visitors to send messages to the developer.
   It includes validation for each field and sends the form data using the EmailJS service.

6. **Resume**: Displays the developer's résumé in PDF format.

7. **404**: A custom error page displayed when the requested page is not found.

## Components

The website uses several reusable components, including:

- `Header`: The website's header, which includes navigation links to the different pages.
- `Footer`: The website's footer.
- `PageTransition`: A component that adds transition animations when navigating between pages.
- `ThemeButton`: A button that allows users to toggle between light and dark themes.

## Environment Variables

The project uses the following environment variables, which are stored in a `.env` file:

- `VITE_SERVICE_ID`: The service ID for the EmailJS service.
- `VITE_TEMPLATE_ID`: The template ID for the EmailJS service.
- `VITE_PUBLIC_KEY`: The public key for the EmailJS service.

## Installation

This project was bootstrapped with [Vite](https://vitejs.dev/).
To set up and run this project locally,
you'll need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
Follow these steps:

1. Clone the repository: `git clone https://github.com/nureka-rodrigo/Portfolio.git`
2. Navigate into the project directory: `cd Portfolio`
3. Install the dependencies: `npm install`
4. Start the application: `npm run dev`

The application will start running on `http://localhost:3000`.

## Contributing

As this is a personal portfolio website, contributions are not currently being accepted.
However, you're welcome to fork the repository and use the code as a starting point for your own portfolio.

## License

This project is licensed under the terms of
the [MIT license](https://github.com/nureka-rodrigo/Portfolio/blob/main/LICENSE).
