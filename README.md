# Dark Forest Client For Windows

## Usage

### Installing Core Dependencies

- Node (v16.x)
- Yarn (Javascript Package Manager)

#### Installing The Correct Node Version

Download the 16.x version of nodejs from [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

After the installation is finished, you can run `node --version` in `powershell` to verify that you are running v16

#### Installing Yarn

Refer to [Yarn's official documentation](https://classic.yarnpkg.com/en/docs/install) for the installation guide.

After you have Yarn installed, run `yarn` to install the dependencies.

### Download and run the client

To connecting to the mainnet client, simply run following commands in `powershell`:

```sh
git clone https://github.com/darkforest-archon/df-client-win.git
cd df-client-win
yarn
yarn start:prod
```

## Modification Description

This is a fork of official [darkforest-eth/client](https://github.com/darkforest-eth/client) (commit 3d216fa88eba07cafcc083b15401e5662e04bf98), with some modifications made to adapt to the Windows environment:

```diff
diff --git a/package.json b/package.json
index 0d80e88..3d5afc7 100644
--- a/package.json
+++ b/package.json
@@ -60,9 +60,9 @@
     "test": "exit 0",
     "lint": "eslint .",
     "format": "prettier --write .",
-    "start:dev": "webpack-dev-server --mode development --open --hot",
-    "start:prod": "NODE_ENV=production webpack-dev-server --mode development --open --hot",
-    "build": "NODE_ENV=production webpack --mode production",
+    "start:dev": "node --inspect ./node_modules/webpack/bin/webpack.js",
+    "start:prod": "set NODE_ENV=production&&webpack-dev-server --mode development --open --hot",
+    "build": "set NODE_ENV=production&&webpack --mode production",
     "clean": "rm -rf node_modules",
     "docs": "typedoc && yarn format",
     "deploy": "netlify build && netlify deploy",
```
