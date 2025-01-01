# Bootstrap-Learning
 Learning Bootstrap

1. Bootstrap is a free front-end framework for faster and easier web development
2. Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugins
3. Bootstrap also gives you the ability to easily create responsive designs

1. Containers are used to pad the content inside of them, and there are two container classes available:
* The (width=device-width) part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

* The (initial-scale=1) part sets the initial zoom level when the page is first loaded by the browser.

The (.container class) provides a responsive fixed width container
The (.container-fluid) class provides a full width container, spanning the entire width of the viewport

## lesson 2
You can also use the .container-sm|md|lg|xl classes to determine when the container should be responsive.

The max-width of the container will change on different screen sizes/viewports:

so if you are using small container will work on small and bigger sizes large will work on large and larger sizes and the rest work likewise

1. 
.col- (extra small devices - screen width less than 576px)
.col-sm- (small devices - screen width equal to or greater than 576px)
.col-md- (medium devices - screen width equal to or greater than 768px)
.col-lg- (large devices - screen width equal to or greater than 992px)
.col-xl- (xlarge devices - screen width equal to or greater than 1200px)
.col-xxl- (xxlarge devices - screen width equal to or greater than 1400px)

* First example: create a row (<div class="row">). Then, add the desired number of columns (tags with appropriate .col-*-* classes). The first star (*) represents the responsiveness: sm, md, lg, xl or xxl, while the second star represents a number, which should add up to 12 for each row.

* Second example: instead of adding a number to each col, let bootstrap handle the layout, to create equal width columns: two "col" elements = 50% width to each col, while three cols = 33.33% width to each col. Four cols = 25% width, etc. You can also use .col-sm|md|lg|xl|xxl to make the columns responsive.

Below we have collected some examples of basic Bootstrap 5 grid layouts.

## Lesson 3
Bootstrap 5 uses a default font-size of 1rem (16px by default), and its line-height is 1.5.

In addition, all <p> elements have margin-top: 0 and margin-bottom: 1rem (16px by default).

* You can also use .h1 to .h6 classes on other elements to make them behave as headings if you want:

* Display headings are used to stand out more than normal headings (larger font-size and lighter font-weight), and there are six classes to choose from: .display-1 to .display-6:

* small and class of small will make text smaller for secondary heading

* Bootstrap 5 will style <mark> and .mark with a yellow background color and some padding:

* text-start,text-center,text-align : is used to align text left, center and right;

## Lesson 4

* the classes for text colors are: .text-muted, .text-primary, .text-success, .text-info, .text-warning, .text-danger, text-secondary, .text-white, .text-dark, .text-body (default body color/often black) and .text-light:

* the classes for background are text-bg-success,text-bg-info,bg-danger,bg-dark.

## Lesson 5 
* tables

* class table-striped adds zebra stripes to a table
* class table-bordered adds borders on all row and col for table
* class table-hover adds hover effect on tables
* class table-dark adds a black background to the table(Making it look like it is in dark mode)
* you can also add hover class or striped on a table -dark class (it is realy nice)
* table-borderless removes border in the table
* table-color gives the table row a color eg table-info 
* the .table-sm class makes the table smaller by cutting cell padding in half:
* the .table-responsive class adds a scrollbar to the table when needed (when it is too big horizontally):
you can also decide at which screen size u need the scroll ba eg table-responsive-md etc.

## Lesson 6
* images

* class rounded adds rounded corners to a picture 
* rounded-circle shapes picture to a circle
* img-thumbnail shapes the image to a thumbnail (bordered)

#### Aligning Images
* Float-start floats the image to the left
* float-right floats the image to the right 
### Centering Images 
* mx-auto d-block first mx-auto for the margin and the d-block to change the display type from inline to block 
#### continue
* the .img-fluid class applies max-width: 100%; and height: auto; to the image: it is also good for respopnsive-img

## Lesson 7 
* Alerts
* alerts provides an easy way to create predefined alert messages:
* Alerts are created with the .alert class, followed by one of the contextual classes .alert-success, .alert-info, .alert-warning, .alert-danger.
* by giving class of alert-link to any links inside the alert box to create "matching colored links":
* you can choose to give alerts a closing feature by adding class of alert-dismissiable then the button should have btn-close and the data-bs-dimiss="alert";
* animated alerts add th class of fade and show to alert and it creates an animated feature whether it fades and shows