# Leafcutter theming guide

## Beginning a new theme

### Creating a one-off theme

If you're just making a one-off theme for a single site, you can start by creating a folder inside your site's `themes` directory, named whatever you'd like your theme to be called.

If you'd like to make your theme in a way that allows it to be distributed via Composer, you can follow the next step instead. If not, skip directly to "The `theme.yaml` file"

### Creating a Composer theme

Navigate to where you would like to start your new project, and run a command like `composer create-project leafcutter/theme-template my-theme-name --remove-vcs` where `my-theme-name` is what you'd like your theme to be called.

#### The `composer.json` file

Edit the `name`, `description`, `license`, and `authors` fields as you see fit. `type` must remain `leafcutter-theme` for sites using the theme to have it automatically registered.

## The `theme.yaml` file

`theme.yaml` holds all the configuration for your theme, mainly which CSS and JS files should be loaded by it, and what optional packages it provides -- if any. The `theme.yaml` in this repository includes basic instructions that cover the bare minimum use cases.

## Theme assets

You can organize the JS, CSS, and other linked files of your theme however you see fit. Just make sure to use relative URLs whenever referencing anything in CSS, and Leafcutter will automatically resolve them for you and assemble everything so that it works at runtime.

Referencing linked files from JS isn't currently possible, but it is on the horizon as a possibility. There are some structural decisions that need to be made about how exactly that will work.
