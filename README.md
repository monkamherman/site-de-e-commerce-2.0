# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/d01d98f7-f9e8-4874-ac44-8e384428e18f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/d01d98f7-f9e8-4874-ac44-8e384428e18f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Structure des dépôts Git

Ce projet utilise deux dépôts Git distincts :

1. **Dépôt principal (origin)**
   - URL: `git@github.com:monkamherman/site-de-e-commerce-2.0.git`
   - Utilisé pour les modifications et le développement
   - Commandes principales :
     ```bash
     git push origin main    # Envoyer les modifications
     git pull origin main    # Récupérer les modifications
     ```

2. **Dépôt de données (upstream)**
   - URL: `git@github.com:monkamherman/reveur-mecanique-secret.git`
   - Utilisé pour les données et le fetch
   - Commandes principales :
     ```bash
     git fetch upstream      # Récupérer les données
     git pull upstream main  # Fusionner les données
     ```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d01d98f7-f9e8-4874-ac44-8e384428e18f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
