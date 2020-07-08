# LU-KA

[![Netlify Status](https://api.netlify.com/api/v1/badges/5be67b50-0e63-42f6-ab64-b26a8cc75cd2/deploy-status)](https://app.netlify.com/sites/jolly-almeida-65c236/deploys)

Personal portfolio of Luka Salević a.k.a [Sensanaty](https://github.com/Sensanaty).

Built on Vue, bootstrapped by `vue-cli 3`, hosted on Netlify.

## Technical Details

The project is built with Vue, with the initial setup done via `@vue/cli`.

It uses ESLint with the AirBNB config + Prettier for linting purposes with pre-commit hooks to reformat.

On the stylesheet side of things, the project utilizes SCSS, compiled and bundled via `node-sass`. It also has [normalize.css](https://necolas.github.io/normalize.css/) to flatten out default stylings.

On the Vue side of things, the project additionally utilizes `vue-router` for page routing and in tandem uses `vue-meta` for page metadata such as titles, descriptions and so on. Naturally, Vue also includes webpack.

### Directory & File Layouts

Optimized, production-ready files are built, bundled and placed in the `dist/` directory, however this is ignored by `git` by default.

The `public/` directory holds all assets that, for whatever reason, aren't included in the usual webpack build process.

All source code lives under the `src/` directory, which is laid out like this:

- `assets/` is where all the project assets, such as markdown files, images and other files of a similar nature live
- `router/` holds the configuration file for `vue-router`
- `components/` is where all Vue componenets are held
- `styles/` is where all the page CSS & SCSS lives
- `views/` is where the Vue Router page templates live

## Contribution & Development

Run `yarn install` to install all project dependencies. Once the dependencies are installed, there's two options to view the project locally:

- Run `yarn serve` to run a webserver at port `8080` (by default)

or

- Run `vue ui` in the project's parent directory to launch the Vue GUI client, and Import the project in the UI and run the `serve` task.

Regardless of option, by default this will launch the project at `localhost:8080` and will feature module hotswaps and live reloads.

While Netlify is configured to automatically handle production deployments, if for any reason it needs to be done manually, either go with the GUI route again, or run `yarn build`, which will compile, bundle and minify everything under `src/` into the `dist/` folder, though this is ignored by Git
