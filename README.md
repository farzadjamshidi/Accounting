# Migrating from an Angular app to Nx monorepo mix of Angular and Nest
1) create a new folder in root for example: "new-approach"
2) a. Install nx globally npm i -g nx (or locally)
   
   b. Initiate a new workspace: https://nx.dev/getting-started/installation. Let's name it accounting. Use this
    options:
    Which stack do you want to use? · none
    Package-based monorepo, integrated monorepo, or standalone project? · integrated
    Enable distributed caching to make your CI faster · No

   c. Navigate inside cd accounting, then install dependencies: npm i -D @nx/angular @nx/nest @nx/js
3) Generate Angular app with nx g @nx/angular:app accounting-ui (https://nx.dev/nx-api/angular)
4) Generate NestJS app with nx g @nx/nest:app accounting-api (https://nx.dev/nx-api/nest)
5) Generate shared library with nx g @nx/js:lib shared-lib (https://nx.dev/nx-api/js/generators/library)
6) Now you can just manually move your code form your external angular and nestjs apps into newly created monorepo projects and move shared code into shared-lib. In this project we just copy app folder and main.ts,styles.scss and index.html file in src folder. Then move all the files and folders in new-approach\accounting folder to the root folder.
7) First add latest angular material by npm i @angular/material. Then run  npx nx g @angular/material:ng-add --project=accounting-ui to update the project.json file.
8) Add concurrently as dependencies npm i concurrently --save-dev
9) Add scripts to package.json file:
    "scripts": {
      "serve:api": "npx nx serve accounting-api",
      "serve:ui": "npx nx serve accounting-ui --open",
      "serve:all": "concurrently \"npm run serve:api\" \"npm run serve:ui\""
    },
10) Use npm run serve:all and enjoy developing.

11) Run npm i convict @nestjs/typeorm typeorm pg
to install TypeORM and postgre db.
12) We can use "executor": "@nx/js:tsc" in project.json to generate separate js files for nest.js project.
13) Add ormconfig.json and example for connecting to db for db:diagram and migrations.

# Commands

ng g m pages/users --routing

ng g c pages/users --change-detection=OnPush --inline-style --inline-template --skip-tests

ng g c pages/users/user-list --change-detection=OnPush

ng g c pages/users/create-edit-user --change-detection=OnPush

ng g c pages/users/user --change-detection=OnPush
