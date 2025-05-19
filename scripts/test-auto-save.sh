#!/bin/bash

echo "Démarrage de la surveillance des fichiers..."
watch -n 1 'git add . && git commit -m "Auto-save: $(date)"' .
