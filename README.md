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

* Bootstrap 5 will style (mark) and .mark with a yellow background color and some padding:

* text-start,text-center,text-align : is used to align text left, center and right;

## Lesson 4

* the classes for text colors are: .text-muted, .text-primary, .text-success, .text-info, .text-warning, .text-danger, text-secondary, .text-white, .text-dark, .text-body (default body color/often black) and .text-light:

* the classes for background are text-bg-success,text-bg-info,bg-danger,bg-dark.

## Lesson 5 
#### tables

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
#### images

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
#### Alerts
* alerts provides an easy way to create predefined alert messages:
* Alerts are created with the .alert class, followed by one of the contextual classes .alert-success, .alert-info, .alert-warning, .alert-danger.
* by giving class of alert-link to any links inside the alert box to create "matching colored links":
* you can choose to give alerts a closing feature by adding class of alert-dismissiable then the button should have btn-close and the data-bs-dimiss="alert";
* animated alerts add th class of fade and show to alert and it creates an animated feature whether it fades and shows

## Lesson 8
#### Buttons
* The button classes can be used on a, button, or  input elements:
* there is also button outline by using btn-outline-secondary eg
* button sizes
* by adding btn-lg or btn-sm you can edit buttons sizes
* To create a block level button that spans the entire width of the parent element, use the .d-grid "helper" class on the parent element and btn-block on the btn class there are easy to edit
* if there are many block display buttons you can control them using the class gap
* active and disabeled buttons : active makes it looks like a button is pressed while disableled makes button unclickable;
* spinner btn: they spine adding d spinner feature to btn
### continue
#### button-group
* by using a div element with class of btn-group then with a normal button classes the  btn  get a group effect
* then for controlling the sizes of the group  you can use btn-group-sm and btn-group-lg 
* then can also appear vertical by using a class called btn-group-vertical 
* button are inline elements so if you use more than one btn-group class the btn-group will appear side by side 
* Nesting btn groups and dropdowns 
* by adding dropdown classes we can create dropdown features th classes include dropdown-toggle, dropdown-menu, dropdown-item.

## Lesson 9 
#### Badges 
* are used to add additional information to any content 
* we can add color to them with the bg- classes after writing class of badge you write (bg-primary)
* the badges can also bve round by using the class of rounded-pill
* badge can be used iniside a btn by putting the badge class inside a span in the button

### CAUTION 
Since we do not have any page to link it to, and we do not want to get a "404" message, we put # as the link. In real life it should of course been a real URL to the "Search" page.

## Lesson 10
#### Progress bars
* a progress bar helps with how far a user is in a process
* to create a default progress bar you use the class of progress and progress bar (both are classes are in a div) and it should have the atrribute of width eg width="60%"
* note: 1rem = 16px ;
* to change the height of the progress bar you use the style atrribute and the property of height eg style="height: 20px;"
* text can be written iniside the progress bar to show the process
* Use the .progress-bar-striped class to add stripes to the progress bars:
* progress bar can also bae animated using the class of progress-bar-animated (make sure not to et the classes mixed)
* multiple progress bars it means it can be also stacked by giving class of progress and and the children div should have class progress-bar (the main div have class of progress while the children should have class of progress-bar )

## Lesson 11
#### spinner
* to create a spinner/loader use the spinner-border class
* to color use color class text-info 
* use the spinner-grow if you want the spinner to grow instead of spin 
* adjust spinner size by using spinner-grow-lg or spinner-border-sm
* spinner can be used in buttons which we done before when we treated buttons (by adding the class of btn btn-color and you put a span inside the button give it a class of spinner-border or spinner-grow [write text in the button before the span])
* spinner-border is the one that goes in circles while spinner-grow is the one that fades in and out

## Lesson 12
#### Pagination
* pagination is used when you are making a website with webpages(or more than one)
* to creat pagination add pagination class to the ul and add page-item to the li and add page-link to the (a) tag
* active class helps to highlight the current page in the page-item class
* disabled state helps with disabled pages making them unclickable (use the class disabled [not attrinute] to make the pagination unclickable)
* pagination size can be adjusted using the class of pagination-lg or pagination-sm in ul 
* pagination alignment we can use utility classes to change the alignment of the pagination

### continue 
* BREADCRUMBS
* breadcrumbs helps to indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.

## Lesson 13
#### List Groups
* The most basic list group is an unordered list with list items:
* you need class of list-group(ul) and list-group-item(li)
* class of active highlight the current item
* list group with linked items : To create a list group with linked items, use (div) instead of (ul) and (a) instead of (li). Optionally, add the .list-group-item-action class if you want a grey background color on hover;
* by adding class of disabled to the list-group-item you can you disable it (class="list-group-item disabled")
* list-group-flush : by adding list-group-flush to the class of list-group (it removes some borders and rounded corners);
* list-group-numbered: to create list items with numbers in them (list-group-numbered is added to the class list-group);
* list-group-horizontal: helps to display list-groups horizontally;  
* contextual class(colors): by using list-group-items-primary or list-group-items-success;
* Link items with Contextual Classes
* list with badges Combine .badge classes with utility/helper classes to add badges inside the list group: