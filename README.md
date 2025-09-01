# Personal Profile Site - Kishan.Site

This is a modern, responsive personal profile website for a Software Engineer, built with Next.js, Tailwind CSS, and Framer Motion. It is designed to be easily deployed on Firebase Hosting or GitHub Pages.

## Features

- **Modern & Minimal Design**: A clean, futuristic aesthetic inspired by LinkedIn but more elegant.
- **Light/Dark Mode**: Toggle between light and dark themes.
- **Responsive**: Fully responsive for mobile, tablet, and desktop.
- **Interactive Sections**: Animated sections for skills, experience, projects, and more.
- **SEO Optimized**: Includes meta tags for better search engine visibility.
- **CI/CD Ready**: Pre-configured for continuous deployment with GitHub Actions to Firebase Hosting and GitHub Pages.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **Deployment**: [Firebase Hosting](https://firebase.google.com/docs/hosting), [GitHub Pages](https://pages.github.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or later)
- [Firebase CLI](https://firebase.google.com/docs/cli) (for Firebase deployment)
- A Firebase project (for Firebase deployment)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

### Profile Customization

All personal data is located in `src/lib/profile-data.ts`. You can edit this file to update your information.

## Deployment

This project is configured for deployment to both Firebase Hosting and GitHub Pages.

### Deployment with GitHub Pages (Recommended)

This project is set up for automated deployments to GitHub Pages when you push to the `main` branch.

1.  **GitHub Repository Setup**:
    - Navigate to your repository's **Settings** tab.
    - In the left sidebar, click on **Pages**.
    - Under "Build and deployment", select **GitHub Actions** as the source.

2.  **Deployment**:
    - The workflow is defined in `.github/workflows/gh-pages.yml`.
    - Every push to the `main` branch will automatically trigger the workflow, which builds and deploys your site.
    - Your site will be available at `https://<your-username>.github.io/<your-repository-name>/`.

### Deployment with Firebase and GitHub Actions

This project is also configured for automated deployments to Firebase Hosting when you push to the `main` branch.

1.  **Firebase Setup**:
    - Make sure you have a Firebase project. If not, create one in the [Firebase Console](https://console.firebase.google.com/).
    - Set the project ID in `firebase.json`.
    - Authenticate with Firebase: `firebase login`
    - Initialize App Hosting: `firebase apphosting:backends:create`
    - Follow the prompts, connecting it to your GitHub repository. This will set up the necessary service accounts and secrets in your repository.

2.  **GitHub Setup**:
    - The deployment workflow is defined in `.github/workflows/deploy.yml`. The `firebase apphosting:backends:create` command should automatically create the necessary secrets in your GitHub repository.
    - Every push to the `main` branch will trigger the GitHub Action, deploying your site to Firebase Hosting.
