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
* by giving a horizontal list group class of list group action it expands the inidividual group item to have the width of the broswer (kind of like shifting form inline to inline-block display) [also makes it hoverable].


## Lesson 14
#### Cards
* A card in Bootstrap 5 is a bordered box with some padding around its content. It includes options for headers, footers, content, colors, etc.
* a card consist of different class the basics are card, card-header, card-body, card-footer
* card header class adds a heading and the card footer adds a footer
* by adding bg-primary you can give a card a color of blue
* card-title helps to add titles to the card header
* The card-text class is used to remove bottom margins for a p element if it is the last child (or the only one) inside card-body.
* card link class helps to add a blue color to a link and a hover function
* image can be added to card usin the class card-img-top or card-img-bottom (if you are using card-img-top then the img class [that is card-img-top or card-img-bottom] should be before or after card-body)
* card-img-overlay turns an image into a card background and we use the class card-img-overlay to add text on top of the image (kind of power clipping[graphics design stuff]).

## Lesson 15 
#### Dropdowns
* A dropdown menu is a toggleable menu that allows the user to choose one value from a predefined list
* The dropdown class indicates a dropdown menu
* To open the dropdown menu, use a button or a link with a class of dropdown-toggle and the data-bs-toggle="dropdown" attribute
* Add the .dropdown-menu class to a container element, like div or ul, to actually build the dropdown menu. Then add the dropdown-item class to each element (links or buttons) inside the dropdown menu.
* you can use class of divider in the elements hr (you can write it closing tag [optional])
* disable and active class: active helps Highlight a specific dropdown item with the .active class (adds a blue background color) and disable class helps disable an item in the dropdown menu, use the .disabled class (gets a light-grey text color and a "no-parking-sign" icon on hover)
* You can also create a "dropend" or "dropstart" menu, by adding the .dropend or .dropstart class to the dropdown element. Note that the arrow is added automatically:
* you can make dropdown right or left aligned by using dropdown-menu-end or dropdown-menu-start
* If you want the dropdown menu to expand upwards instead of downwards, change the div element with class="dropdown" to "dropup":
* The .dropdown-item-text class is used to add plain text to a dropdown item, or used on links for default link styling.

## Lesson 16 
#### Collapsible
* Collapsibles are useful when you want to hide and show large amount of content
* The collapse class indicates a collapsible element a div in our example this is the content that will be shown or hidden with a click of a button.
* To control (show/hide) the collapsible content, add the data-bs-toggle="collapse" attribute to an a or a button element. Then add the data-bs-target="#demo" attribute to connect the button with the collapsible content (div id="demo")

Note: For a elements, you can use the href attribute instead of the data-bs-target attribute:
* by adding class of show beside the collapse class you can make the collapsible text show on default

#### Accordion
* An accordion in Bootstrap is a UI component used to display content in a collapsible and expandable manner. It organizes information into sections or panels, where only one section (or sometimes multiple, depending on configuration) can be expanded at a time.
* Note: Use the data-bs-parent attribute to make sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.


## Lesson 17 
#### Navs
* to create a simple horizontal menu add the nav class to a ul element folowed by nav-item for each li and add the nav-link for each anchor tag
* by adding the class of justify-content-center and justify-content-end to a nav it can align the nav to be the x axis so the (justify(center, right);)
* by adding class of flex-coloumn you can align nav vertically
#### Nav with Tabs
* Turn the nav menu into navigation tabs with the .nav-tabs class. Add the .active class to the active/current link. If you want the tabs to be togglable, see the last example on this page.
#### Pills 
* Turn the nav menu into navigation pills with the .nav-pills class. If you want the pills to be togglable
* Justify the tabs/pills with the class of nav-justified class (equal width):
* nav can have dropdowns so can pills too 
* make the tabs toggleable, add the data-toggle="tab" attribute to each link for pills you add data-toggle="pill". Then add a .tab-pane class with a unique ID for every tab and wrap them inside a <div> element with class .tab-content.
* If you want the tabs to fade in and out when clicking on them, add the .fade class to .tab-pane:

## Lesson 18 
#### Navbars
* A navigation bar is a navigation header that is placed at the top or bottom of the page.
* The navbar-expand-xxl|xl|lg|md|sm class determines when the navbar should stack vertically (on xxlarge, extra large, large, medium or small screens).
* To add links inside the navbar, use either an ul element (or a div) with class="navbar-nav". Then add li elements with a .nav-item class followed by an a element with a .nav-link class:
* by removing the navbar-expand class you make the navbar show as vertical aligned
*  You can also remove the .navbar-expand-md class to always hide navbar links and display the toggler button
* navbar with dropdown 
* by using class of m-0 removes margin eg my-0 or mx-0 or mb-0 etc
* the fixed-top class give the navbar a fixed position a the top and the fixed-bottom gives a fixed position to the bottom
* forms can also be added to the nav to make it have search bar like seo 
* collapsible and dropdowns can be added to nav we just need to add the respective class for the collapsible or dropdowns

## Lesson 19 
#### Carousel
* carousel is a slideshow for cycling through elements 
* carousel class is used to carousel 
* carousel-indicators :adds indicator to the carousel   
* carousel-inner : adds slides to the carousel 
* carousel-item : specifies the content of each slide
* carousel-control-prev : Adds a left (previous) button to the carousel, which allows the user to go back between the slides
* carousel-control-next :Adds a right (next) button to the carousel, which allows the user to go forward between the slides
* carousel-control-prev-icon : Used together with .carousel-control-prev to create a "previous" button
* carousel-control-next-icon : Used together with .carousel-control-next to create a "forward" button
* slide : Adds a CSS transition and animation effect when sliding from one item to the next. Remove this class if you do not want this effect
* caption can be added to the carousel usingg the class carousel-item(the img is in the carousel-item while the caption or text is in the carousel-caption which is in the carousel item ) then the inner div should have class of carousel-caption (in cases i dont understand)
.carousel-item img .carousel-caption{

}

## Lesson 20
#### Modals
* The Modal component is a dialog box/popup window that is displayed on top of the current page:
* Use the .fade class to add a fading transaction effect when opening and closing the modal:
* The .modal-header class is used to define the style for the header of the modal.  
* the class of modal is used to create a modal container
* modal-dialog specifies the modal's content area 
* modal-content wraps the content inside the modal (header, body, footer)
* modal-header, modal-body, modal-footer this are sections inside the modal for structuring the header the body and footer
* data-bs-toogle="modal" and data-bs-target="#exampleModal" : these attributes are used to trigger the modal when the button is clicked
* modal can be cutomized using classes for sizing modal-lg and modal-sm
* by class of modal-dialog and modal-xl  you make the modal bigger you can add the class of modal-sm to make it small
* modal-fullscreen gives the modal a display of the fillwidth of the broswer by adding class of (lg-down) to modal-fullscreen or modal-fullscreen-lg-down it will give the modal the display of fullwidth from large (lg) size downward while upward will be a normal modal 

## Lesson 21
#### Tooltips
* the tooltip component is small pop-up box that appears when the user moves the mouse pointer over an element
* to create a tooltip, add the attribute of data-bs-toggle="tooltip" attribute to an element.
* tooltips should be initialized with javaScript to work 
* attribute of data-bs-placement helps with the placement of the tooltip whether it is top,right,left or bottom eg data-bs-placement="right"
* for adding text in the tooltip you can use the attribute of title=""

## Lesson 22 
#### Popovers
* Popover component is similar to tooltips
* it is a type of pop-up that appears when the user clicks on an element. The difference is that the popover can contain much more content.
* like tooltips it should be initialized with javaScript to work 
* it need attribute like data-bs-toggle, title, data-bs-content
* but this time the title is used for the title of the popover 
` NOTE:" 'a,' unlike tooltips which are hovered on to see the text you must click the popovers in order for the text to show 'b,'tooltips can be used for icons`
* you must touch the tooltips for it show and it can be removed the same way (that is by clicking it again)
* if you want place the popover you need the following att(attributes) data-bs-toggle, data-bs-placement,title, 
* data-bs-placement for popovers (i think it is a little tricky write the title attr last it should work with the placement [should be easy])
`NOTE: always add #(hashtag ) in the href to prevent spinner / loader issues on click (you get right 👌)`
* closing popovers can be activited using attr data-bs-trigger="focus"
* hoverable popovers can activitated using attr data-bs-trigger="hover"

## Lesson 23
#### Toasts
* The toast component is like an alert box that is only shown for a couple of seconds when something happens (i.e. when the user clicks on a button, submits a form, etc.)
* To create a toast, use the .toast class, and add a .toast-header and a .toast-body inside of it.
` Note: Toasts are hidden by default. Use the .show class if you want to display it. To close it, use a <button> element and add data-bs-dismiss="toast":`

## Lesson 24
#### ScrollSpy
* Scrollspy is used to automatically update links in a navigation list based on scroll position.
* add data-bs-spy="scroll" to the element that should be used as the scrollable area (often this is the <body> element).

Then add the data-bs-target attribute with a value of the id or the class name of the navigation bar (.navbar). This is to make sure that the navbar is connected with the scrollable area.

Note that scrollable elements must match the ID of the links inside the navbar's list items (div id="section1" matches a href="#section1").

The optional data-bs-offset attribute specifies the number of pixels to offset from top when calculating the position of scroll. This is useful when you feel that the links inside the navbar changes the active state too soon or too early when jumping to the scrollable elements. Default is 10 pixels.

## Lesson 25
#### Dark Mode
* By default the bootstrap layout is in light mode or have a light bacground color
* to change the page to dark mode you simply add data-bs-theme="dark" to the html tag
* this applies to to other tags or element too, to change them to dark mode you add the attr of data-bs-theme="dark"

## lesson 26 
#### Offcanvas
* they are similar to modals hidden by default but shown when clicked on the difference is that they are often used in sidenav 
* offcanvas creates the the sidebar
* offcanvas-start gives the sidebar a position of start or left and gives it a default width of 400px
* offcanvas-title helps with the line height and proper margins to align the text with the button that has the btn-close class
* offcanvas-body this is where the main content of the sidenav is being written
* A trigger is needed to open the sidebar (or show) we need a button or a tag which will have a data-bs-target of anything as long as it is matching (i used #sidenav in the attr data-bs-target while i use sidenav in the offcanvas which is the container or main class for the offcanvas)
* the example i use wa with a button but if i where to use an a tag i would have used href="#sidenav"
* by adding text-bg-dark to the offcanvas you can make it dark (dark mode kind of stuff but no quite)
* by adding btn-close-white class to btn-close class you make the button white it goes well with a dark sidebar

## Lesson 27
#### Utilities / helper class
###### Border
* they help with to quickly style tags without using css code 
* note that bootsrap have nice utility classes too (new development though from bootstrap 4 and 5)
* border it is used to add borders to a tag or remove border
* by adding border-top or border-bottom you can give a tag a border of only bottom or top
* by adding border-1 to border-5 to border class you can increase the width of the border
* by adding border-primary to border you can make the border be blue colored 
* by adding rounded you can make the border have a round look you have classes liked rounded, rounded-bottom, rounded-3 etc 
some help with the border of one place while some help with the border all around and their is also rounded-circle

###### Float and Clearfix
* we can float an element to the right with the .float-end class or to the left with .float-start, and clear floats with the .clearfix class
* floats  can also be responsive we can float an element to the left or to the right depending on screen width, with the responsive float classes (.float-*-start|end - where * is sm (>=576px), md (>=768px), lg (>=992px), xl (>=1200px) or xxl (>=1400px))
* the float none class will make the element not to float or remove the float property

##### Alignment
* we can center an element using mx-auto class (it adds margin to left and right [that is the mx-auto])
* or we can use text-center which i recommend 
* we can use text-start and text-end to align left or right they are also responsive
* by putting sm, md, lg, xl and etc we can make them have responsive alignment or alignment that wont show in a specific screen size
* there are also different utilities available in bootstrap that works for texts such as the ones for text transform, font size and text decoration
* for text transform we have text-uppercase, text-lowercase, text-capitalize
* for font size we have fs-1, fs-2, and fs-3 till fs-6 etc fs-1 being the biggest to fs-6 being the smallest
* for text decoration we have text-decoration-underline,  text-decoration-line-through etc

##### Width 
* in order to use the the width utilities you write class of w-25, w-50, w-75, w-100 which give them width set by the framework

##### Height
* just like width to add height you use class of h-25, h-50, h-75 and h-100 
* there is lso h-auto, mh-100
* the classes of height and width are pretty self explanatory the-25 classs is the smallest to the-100 class

##### Spacing
* involves ready made margin and padding utility classes
* for margin you use m and padding you use p
* then adding t to both of them means margin top or padding top
* b is for bottom 
* s is start (that is left)
* e is for end (that is right)
* then writing only m or p sets a padding or margin everywhere or on all four sides (you must add numbers eg m-2)
* so m-1 to m-5 gives margin four sides while m-0 removes the margin
* there are also negative classes for margin and padding
* there also responsive margins and padding by adding the write screen sizr class eg mt-lg-5

#### Shadow
* for box shadow
* shadow-none class removes shadow
* shadow-sm class gives a small shadow
* shadow gives a default shadow
* shadow-lg class gives a big shadow
* it is responsive 