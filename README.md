# Blog Template

Here's a handy template to use Hexo for a blog.

## Installation

### Windows

Install Ubuntu 16.04 :D

### OSX

Install Ubuntu 16.04 :D

### CentOS

Install Ubuntu 16.04 :D

### Ubuntu 16.04

```
# Setup Git
sudo apt-get install git

# Setup NVM
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
source ~/.bashrc
nvm install 7.1.0
nvm use 7.1.0

# Setup Yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

# Setup Blog
git clone https://github.com/Emblem21-OpenSource/blog.git blog
cd blog
yarn install
rm -fr .git source/.gitignore
mv sample._config.yml _config.yml 

# Start the server
npm start
```

Once the server is running, go to [http://localhost:4000/admin/#/auth-setup](http://localhost:4000/admin/#/auth-setup) to setup your admin authorization and follow the instructions.

## Startup

```
npm start
```

Once the server is running, go to [http://localhost:4000](http://localhost:4000) to see the site or [http://localhost:4000/admin](http://localhost:4000/admin) for the simple admin panel.

## Deployment

To publish your new work to your production environment, type the following:

```
npm run deploy
```

## Advanced Commands

* `./node_module/.bin/hexo new "title"` - Make a new article
* `./node_module/.bin/hexo generate` - Generates static files
* `./node_module/.bin/hexo publish filename` - Publish a draft
* `./node_module/.bin/hexo server` - Local server start
* `./node_module/.bin/hexo deploy` - Push static files to production
