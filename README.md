# Leafcutter core themes

## Installation

This package is meant to be installed via Composer, and is already installed by default if you're using the suggested site-template repository. If you're rolling your own site, it can be installed with `composer require leafcutter/theme-core`

## What's in it

This package contains several Leafcutter theme packages, none of which are actually activated by default. It is intended to provide consistent and updateable core third-party libraries, and a variety of useful base themes that can be used as starting points for building more complete/advanced themes.

### Library packages

#### `library/fontawesome`

Provides just the CSS and font files of Font Awesome Free. None of Font Awesome's Javascript is included in this package.

#### `library/jquery`

Provides just a minified production-ready copy of jQuery.

#### `library/jquery-ui`

Provides jQuery UI's Javascript and modified CSS that integrates the jQuery UI CSS libraries with Leafcutter's theming system.

##### Customizing with `library/jquery-ui-theme`

This package is loaded automatically as a requirement of `library/jquery-ui`, but kept in its own package to ease customization. If you would like to override the built-in jQuery UI theme, you can do so by providing this package in your own theme bundle.

#### `library/vue`

Provides just a minified production-ready copy of Vue.js

### Base themes

The following base themes are intended to provide useful jumping-off points to create your own themes. Add them to the `requires` portion of your own theme to load them as part of it.

#### `core/basic`

Provides config-dependent colors, typography, and helper classes for formatting the colors, spacing, and backgrounds of elements. This is the lightest-weight base theme, and does very little beyond some basic typography.
