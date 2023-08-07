#!/bin/bash -e

which -s brew
if [[ $? != 0 ]] ; then
  # Homebrew is not installed
  echo "Please install Homebrew first, or manually setup a current OpenJDK & Maven... Exiting."
  exit -1
else
  echo "Installing OpenJDK & Maven via Homebrew..."
  brew install openjdk maven
fi

which -s git
if [[ $? != 0 ]] ; then
  # git is not installed
  echo "Please install git first... Exiting."
  exit -1
fi
