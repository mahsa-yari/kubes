#!/bin/sh

# Replace env vars in JavaScript files
echo "Replacing env vars in JS"
for file in /usr/share/nginx/html/config.js;
do
  echo "Processing $file ...";

  # Use the existing JS file as template
  if [ ! -f $file.tmpl ]; then
    cp $file $file.tmpl
  fi

  envsubst '$API_BASE_URL' < $file.tmpl > $file
done

echo "Starting Nginx"
nginx -g 'daemon off;'
