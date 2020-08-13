#!/bin/bash

npm run build
npx cap sync @capacitor-community/electron
cd electron
npm run electron:build-mac
npm run electron:build-linux
npm run electron:build-windows
