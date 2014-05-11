ATX SAFER STREETS SITE
----------------------

Welcome to the repository for ATX Safer Streets. Stay a while, stretch your legs and take it all in.

## Development Environment

This site uses some fun new technologies to make it run well. To do this, we use ruby, sass, node.js, grunt.js, and bower as our primary technologies to leverage. If you already have these installed, skip down to the next section-- if not there are some one-time installation steps you need to do to build a local copy of the site. All of the directions are for Max OS X, although there are similar steps for Windows or Linux. Check the Oracle at Google for those directions.

I will be skipping some of the directions, as they can be found on the internet. But the pieces you will need to do before the following commands, is to

1. Install [Homebrew](http://brew.sh/)
2. Install [rbenv](https://github.com/sstephenson/rbenv)
3. Install [node.js](http://nodejs.org/download/)

```bash
# Install the right version of ruby (2.1.0-github)
cd ~
git clone git@github.com:parkr/ruby-build-github.git
cd ruby-build-github
./install.sh support/2.1.0-github
```
Now from the directory the site is installed in:
```bash
# Install grunt.js and bundler
npm install -g grunt-cli
gem install bundler

# Install all dependencies
npm install
bundle install
bower install
```

**Once you are setup and ready to go**

You can run the site locally from the command line by running:
```bash
grunt serve
```

This will open a browser to the right window and start the server. You will need to refresh the browser, as the server takes a few seconds to start up.

If you are editing files, then in another window you also want to run:
```bash
grunt watch
```

This will watch all the sass and markdown files, and if they change will rebuild the site and display it in your window. You can also run ```grunt css``` to rebuild the css, and ```grunt site``` to rebuild the jekyll site.

## Editing files

Most of the files on the site are written in [Markdown](https://help.github.com/articles/github-flavored-markdown). Please take advantage of the power of these


## Building the site for production

To build the site for production, run
```bash
grunt build
```

This will minify all CSS, run the jekyll site creator again, and get everything hunky-dorey for the live site.

## License

Licensed under MIT/GPL.

GPL2 license: http://www.gnu.org/licenses/gpl-2.0.html

MIT license: http://www.opensource.org/licenses/mit-license.php
