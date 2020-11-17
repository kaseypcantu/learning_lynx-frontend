#!/usr/bin/env bash

# Convert all files from .js to .tsx extension.
for file in *.js;
do
    mv "$file" "${file%.js}.tsx"
    echo "${file} converted to ${file}.tsx"
done
