#!/bin/bash
echo "update start"

script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

cd $script_dir/wedding-invitation/
git pull
npm ci
npm run build
cd dist
cp -r * /var/www/html/

echo "update end"
