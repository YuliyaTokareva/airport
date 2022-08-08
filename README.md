Calendar

<h2><a href="https://silly-flan-513e71.netlify.app/" rel="nofollow">Site link</a></h2>

<h3>Design:</h3>
<img src="https://gromcode.s3.eu-central-1.amazonaws.com/courses/front-end/lessons/react/calendar-project/design.png" >
<img src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/javascript/lesson26/hw1/delete-event.png" >
<h3>Functional:</h3>
<ul>
<li>By default, the main screen is available in the calendar - the week is divided into days, and the days are divided into hours</li>
<li>
When scrolling, the header (days of the week) should stay in place</li>
<li>The number of the current day should be highlighted</li>
<img src="https://gromcode.s3.eu-central-1.amazonaws.com/courses/front-end/lessons/react/calendar-project/design.png" >
<li>User can switch between weeks using left-right icons</li>
<li>The 'Today' button switches to the current week</li>
<li>The text next to the buttons indicates which month the displayed week is in. If the transition to a new month falls on the displayed week, then the text will be as follows: Mar - Apr</li>
<li>The user can add an event to the calendar by clicking (+) on the left side of the screen. After that, in the pop-up, you can select the event settings - title, description (optional field to fill in), exact date (you can select from the pop-up calendar), start time and end time</li>
<li>We believe that events always start and end on the same day.</li>
<li>After adding an event, the selected time slot is painted over. The filled area displays the title, start and end time (as in the screenshot)</li>
<li>An event can be deleted by clicking on it in the calendar</li>
<li>The red line should show the current time in today. The position of the line should be updated every minute if the user has not reloaded the page</li>
<img src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/javascript/lesson26/hw1/delete-event.png" >
<li>When clicking (+) on the left side of the screen, the default start and end of the event in pop-uo are filled based on the current date</li>
<li>The user can add an event to the calendar by clicking on the desired area of ​​the day. For example, when clicking on a cell on December 3, 14:00-15:00, a pop-up opens with filled fields based on the date of the cell</li>

</ul>
<h3>Form validation</h3>
<ul>
<li>Title is required. Submit button disabled</li>
<li>Start time less than end time and not equal</ul>
</ul>

<h3>For production</h3>
<ul>
<li>Production version must be in folder dist</li>
</ul>
<code>npm run build
</code>
<h3>Author</h3>
<ul>
<li>Tokareva Yuliya</li>
</ul>
