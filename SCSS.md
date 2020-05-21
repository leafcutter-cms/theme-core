# SCSS Reference

Leafcutter supports on-the-fly compiling of SCSS into CSS, including some additional extra features and variables that are made available to integrate with the CMS better.

## Variables

There are also a great many variables available in SCSS. Using variables is *highly* encouraged, as it will make extending your theme easier for you, and customizing it easier for everyone else.

### sizing

* `margin`: standard margin
* `padding`: standard padding
* `font-size`: base font size (default 1rem)
* `font-scaler`: amount to scale font sizes by (default 1.2)
* `heading-font-scaler`: amount to scale header sizes by (default 1.2)
* `heading-scale`: amount larger than body the smallest heading is (default 1.2)
* `line-height`: default line height
* `line-height-loose`: a looser line height
* `line-height-tight`: a tighter line height

### colors

* `color-primary`: The primary accent color
* `color-secondary`: The secondary accent color
* `color-success`: Color of success feedback cues
* `color-danger`: Color of danger/error feedback cues
* `color-warning`: Color of warning feedback cues
* `color-info`: Color of info feedback cues

### link colors

* `color-a`
* `color-a-visited`
* `color-a-focus`
* `color-a-hover`
* `color-a-active`
* `color-dark-a`
* `color-dark-a-visited`
* `color-dark-a-focus`
* `color-dark-a-hover`
* `color-dark-a-active`

### light mode

* `text-normal`: text color
* `text-accent`: accented text color
* `text-muted`: muted text color
* `bg-normal`: background color
* `bg-accent`: accented background color
* `bg-muted`: muted background color

### dark mode

* `text-dark-normal`: text color
* `text-dark-accent`: accented text color
* `text-dark-muted`: muted text color
* `bg-dark-normal`: background color
* `bg-dark-accent`: accented background color
* `bg-dark-muted`: muted background color

### overlay colors/opacity

* `bg-overlay`: overlay color
* `bg-overlay-opacity`: overlay opacity (defaults to whatever bg-overlay-dark is)
* `bg-overlay-opacity-muted`: muted overlay opacity
* `bg-overlay-dark`: explicitly dark overlay color
* `bg-overlay-light`: explicitly light overlay color

### shadows and rounded corners

* `border-radius`: normal border radius
* `border-radius-accent`: accentuated border radius
* `box-shadow`: normal box shadow
* `box-shadow-inset`: inset box shadow

## Mixins

Importing the following paths will give access to many very useful SCSS mixins for setting the foreground/background and box sizing of your theme styles.

Using the built-in mixins is *highly* encouraged to allow multiple themes and theme packages to operate smoothly together and respect any variable adjustments that have been made by
site owners.

### `@import "@/~themes/leafcutter-libraries/mixins/colors.scss";`

Wherever applicable, the following mixins all respect whether their parent container has `.colors-dark` or `.colors-light`

* `high-contrast-fg($bg)`: sets the foreground to either black or white, to contrast with the given $bg color.
* `uncolored-links`: eliminates link coloring, but makes them bold

#### Text color

* `text-normal`: default text color
* `text-accent`: accented text color
* `text-muted`: muted text color
* `text-primary`: text colored to match the primary color
* `text-secondary`: text colored to match the secondary color
* `text-success`: text colored to match the success color
* `text-danger`: text colored to match the danger color
* `text-warning`: text colored to match the warning color
* `text-info`: text colored to match the info color

#### Background color (also sets fg as needed)

* `bg-normal`: default bg/fg color
* `bg-accent`: accented bg/fg color
* `bg-muted`: muted bg/fg color
* `bg-primary`: bg colored to match the primary color, fg set to either black or white for maximum contrast
* `bg-secondary`: bg colored to match the secondary color, fg set to either black or white for maximum contrast
* `bg-success`: bg colored to match the success color, fg set to either black or white for maximum contrast
* `bg-danger`: bg colored to match the danger color, fg set to either black or white for maximum contrast
* `bg-warning`: bg colored to match the warning color, fg set to either black or white for maximum contrast
* `bg-info`: bg colored to match the info color, fg set to either black or white for maximum contrast
* `bg-overlay`: an overlay background, no fg color set
* `bg-overlay-muted`: a less intense overlay background, no fg color set

#### Link colors

* `a-link`
* `a-visited`
* `a-focus`
* `a-hover`
* `a-active`

### `@import "@/~themes/leafcutter-libraries/mixins/sizing.scss";`

Contains mixins for controlling margin/padding in a way that respects site configuration.

#### Margins/padding

* `margin`: applies the site margin on all sides
* `margin-[l|r|t|b|x|y]`: applies the site margin to the left/right, top/bottom, or x/y axis
* `margin-block`: applies Y margins, except top/bottom to first/last children, respectively
* `padding`: applies the site padding on all sides
* `padding-[l|r|t|b|x|y]`: applies the site padding to the left/right, top/bottom, or x/y axis
* `margin-sm`: applies the small site margin on all sides
* `margin-[l|r|t|b|x|y]-sm`: applies the small site margin to the left/right, top/bottom, or x/y axis
* `margin-block-sm`: applies Y margins, except top/bottom to first/last children, respectively
* `padding-sm`: applies the small site padding on all sides
* `padding-[l|r|t|b|x|y]-sm`: applies the small site padding to the left/right, top/bottom, or x/y axis
* `margin-lg`: applies the large site margin on all sides
* `margin-[l|r|t|b|x|y]-lg`: applies the large site margin to the left/right, top/bottom, or x/y axis
* `margin-block-lg`: applies Y margins, except top/bottom to first/last children, respectively
* `padding-lg`: applies the large site padding on all sides
* `padding-[l|r|t|b|x|y]-lg`: applies the large site padding to the left/right, top/bottom, or x/y axis

#### Font sizes

* `font-size-[xs|sm|md|lg|xl]`: applies an absolute font size
* `font-size-smaller`: applies a relative font size scale of one step
* `font-size-larger`: applies a relative font size scale of one step
* `font-size-xsmaller`: applies a relative font size scale of two steps
* `font-size-xlarger`: applies a relative font size scale of two steps
* `font-size-h[1-6]`: applies a font size equivalent to a header
