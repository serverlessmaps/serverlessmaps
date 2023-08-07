#!/bin/bash -e

TEMP_PATH=$PWD/temp
BUILDER_PATH=$PWD/builder

# Create temp folder
mkdir -p $TEMP_PATH

# Create builder folder
mkdir -p $BUILDER_PATH

# Switch directory
cd $TEMP_PATH

# Checkout basemaps repo
git clone https://github.com/protomaps/basemaps.git

# Switch directory to builder
cd basemaps/tiles

# Build basemaps builder
mvn clean package

# Copy builder
cp target/*-with-deps.jar $BUILDER_PATH

# Remove temp folder
rm -rf $TEMP_PATH
