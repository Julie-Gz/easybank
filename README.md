## Challenge
easybank landing page

### Screentshot



### Links
- Solution URL: https://github.com/Julie-Gz/easybank.git
- Live Site URL: https://julie-gz.github.io/easybank/

### My process
I started with a mobile approach. 
It was hard getting the images in the articles section to look like the ones in the design because of the different sizes. At first I set a fixed height in pixels but they didn't look right, the images looked compressed.

I decided to set the width and height and use object-fit
to make the images look better. 

For the hero section I used grid layout to separate the text from the image and then added the background image using css background-image property and the mobile mockup in the html document. I decided to use this approach after struggling with setting up both images in the html document and positioning them using the position property in css. Using this approach also solved an issue I had with aligning the text in the hero section.

The text in the services and article sections were aligned using flexbox. The services and articles sections were designed using flexbox, however for the articles I used grid to make sure the images and the text were spaced properly. At first I tried using flexbox and the positioning the images using position absolute but that didn't work smoothly and a lot of times the text would go under the images, so setting a fixed space for each using grid was a great solution for that problem.

For JavaScript I wanted the navigation section to change depending on the screen size and so I created a function that would change the navigation design depending on the size and called the function so that when the user opens the page the function executes immediately and adjusts the navigation bar according to the size, but then I noticed that the design would remain the same even if the user for some reason changed the size of the screen, to fix that I added an event listener that would listen for a resize event and make changes to the navigation according to that. 

There are a few things that I would like to improve in this design. First is the layout, while it works well for the screen sizes mentioned in the challenge, the design didn't work well for some screens like Nest Hub and Nest Hub Max, as well as the ipad air and ipad mini, and even  though I set the overflow-x property to hidden there is still some overflow in the page design, so I need to fix the design for medium screens. Second, is JavaScript code, while it does the job I've read that resize impacts the performance of the page as it is constantly being fired, it works fine here but it wouldn't be the solution for larger projects

### Built with

-HTML5
-CSS
-Flexbox
-CSS Grid
-Mobile-first approach
-Vanilla JavaScript


## Author
- Frontend Mentor - [@Julie-Gz](https://www.frontendmentor.io/profile/Julie-Gz)
