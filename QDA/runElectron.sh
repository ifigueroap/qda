#!/bin/bash

npm run build
npx cap sync @capacitor-community/electron
cd electron
npm run electron:start &
