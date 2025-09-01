# Personal Profile Site - Kishan.Site

This is a modern, responsive personal profile website for a Software Engineer, built with Next.js, Tailwind CSS, and Framer Motion. It is designed to be easily deployed on Firebase Hosting.

## Features

- **Modern & Minimal Design**: A clean, futuristic aesthetic inspired by LinkedIn but more elegant.
- **Light/Dark Mode**: Toggle between light and dark themes.
- **Responsive**: Fully responsive for mobile, tablet, and desktop.
- **AI-Powered 'About' Section**: An integrated AI tool to tailor the professional summary for different audiences.
- **Interactive Sections**: Animated sections for skills, experience, projects, and more.
- **SEO Optimized**: Includes meta tags for better search engine visibility.
- **CI/CD Ready**: Pre-configured for continuous deployment with GitHub Actions to Firebase Hosting.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **AI**: [Genkit](https://firebase.google.com/docs/genkit)
- **Deployment**: [Firebase Hosting](https://firebase.google.com/docs/hosting)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or later)
- [Firebase CLI](https://firebase.google.com/docs/cli)
- A Firebase project

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd personal-profile-site
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

## Deployment with Firebase and GitHub Actions

This project is set up for automated deployments to Firebase Hosting when you push to the `main` branch.

### 1. Firebase Setup

1.  Make sure you have a Firebase project. If not, create one in the [Firebase Console](https://console.firebase.google.com/).
2.  Set the project ID in `firebase.json`.
3.  Authenticate with Firebase:
    ```bash
    firebase login
    ```
4.  Initialize App Hosting:
    ```bash
    firebase apphosting:backends:create
    ```
    Follow the prompts, connecting it to your GitHub repository. This will set up the necessary service accounts and secrets in your repository.

### 2. GitHub Setup

The deployment workflow is defined in `.github/workflows/deploy.yml`.

1.  **Firebase Service Account Secret**:
    The `firebase apphosting:backends:create` command should automatically create a `FIREBASE_SERVICE_ACCOUNT_<your_project_id>` secret in your GitHub repository. The workflow file `.github/workflows/deploy.yml` uses this secret. Ensure the secret name in the workflow file matches the one in your repository settings.

2.  **Push to `main`**:
    Once the secrets are in place, every push to the `main` branch will trigger the GitHub Action workflow, which will build and deploy your site to Firebase Hosting.
