#!/bin/bash
# mdx-prepare.sh - Utility to prepare content files (separate from deployment)

set -e

# Check if file path is provided
if [ -z "$1" ]; then
  echo "Usage: ./mdx-prepare.sh path/to/content.md"
  exit 1
fi

FILE_PATH="$1"
FILENAME=$(basename "$FILE_PATH")
DIRNAME=$(dirname "$FILE_PATH")

# Convert .md to .mdx if needed
if [[ "$FILENAME" == *.md ]]; then
  NEW_FILENAME="${FILENAME%.md}.mdx"
  echo "Converting $FILENAME to $NEW_FILENAME..."
  mv "$FILE_PATH" "${DIRNAME}/${NEW_FILENAME}"
  echo "File renamed to MDX format: ${DIRNAME}/${NEW_FILENAME}"
  FILE_PATH="${DIRNAME}/${NEW_FILENAME}"
fi

echo "✅ Content prepared successfully!"
echo "Remember to add frontmatter manually if needed."
echo "You can now commit the changes and deploy."
