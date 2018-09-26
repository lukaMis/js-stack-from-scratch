# 0.1

Adding Babel with env preset

Adding ESLint to project and VS Code
Adding ESlint plugin compat to check for browser unsupported features.

Adding Flow to project and VS Code
Adding flow-typed to project and running it locally with ./node_modules/.bin/flow-typed install
Adding flow-typed under [libs] in flowconfig

Adding Jest to project
Adding ._/coverage/._ under [ignore] in flowconfig

---

# 0.2

Added husy to project to manage git hooks
Run ./node_modules/.bin/flow-typed install to get flow definitions
Added changelog to project.
Added spellchecker to vs studio code.

---

# 0.3

Added express for server and compression to enable Gzip compression on server
Created basic express server.
Added nodemon to project to automatically restart
server on filechanges.
Added PM2 node process manager.
Added rimraf to project for cross platfrom deleting of generated assets.
Added cross-env to project to be able to pass NODE_ENV to PM2 cross platform.
Added postinstall hook to automatically run flow-typed for newly installed packages

---

# 0.4

Added browser to env prop in eslintrc to prevent document is undefined flow error.
Added babel polyfill for promises and async and such.
Added some config options for frontend.
Added webpack and babel to project.
