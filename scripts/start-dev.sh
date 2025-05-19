#!/bin/bash

echo "Démarrage du serveur de développement..."
bun run dev &

sleep 2  # Attendre que le serveur démarre

echo "Démarrage de la sauvegarde automatique..."
bun run auto-save
