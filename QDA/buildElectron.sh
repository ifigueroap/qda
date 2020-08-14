#!/bin/bash

OPT=$1

npm run build
npx cap sync @capacitor-community/electron
cd electron

if [ "all" == $OPT ]
   then
	npm run electron:build-mac
	npm run electron:build-linux
	npm run electron:build-windows
fi

if [ "mac" == $OPT ]
   then
	npm run electron:build-mac
fi

if [ "linux" == $OPT ]
   then
	npm run electron:build-linux
fi

if [ "win" == $OPT ]
   then
	npm run electron:build-windows
fi










