#!/bin/bash -e

# Set area
AREA="${1:-hamburg}"

# Run download from OSM mirror, and build pmtiles
java -jar builder/*-with-deps.jar --download --force --area=$AREA

# Move pmtiles file to right folder for S3 sync
mv $PWD/$AREA.pmtiles $PWD/data/tiles

# Set correct path from area
echo "const tilePath = \"$AREA\"" > website/tilePath.js

# Cleanup sources
rm -rf $PWD/data/sources
