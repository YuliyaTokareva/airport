<h1>Kyiv airport</h1>

<h2><a href="http://localhost:8080/departure?date=03-02-2021" rel="nofollow">Site link</a></h2>

<h3>Design:</h3>
<img src="https://gromcode.s3.eu-central-1.amazonaws.com/front-end/redux/lesson7/hw1/flights-list.png" >

<h3>Functional:</h3>
<ul>
<li>
Given the current martial law in Ukraine, there are no flights currently, so if you select dates after February 24th, there will be no flights, but if you select earlier flights, everything should work correctly.</li>
<li>
On the main screen, there is an input field for searching for flights by flight number, and two buttons - "Departures" and "Arrivals".</li>

<li>Implement the following functionality - displaying a list of flights by type (departures/arrivals), by a given date and searching for flights by number. By default, we show flights for the current day with the "Departures" option selected.</li>

<li>Since there are no flights now, the API will not return anything for the current date, and instead of a list of flights, in this case, you need to display the text "No flights". When choosing a date from the calendar, when flights were flying - you need to already display a list of flights.</li>

<li>When you click on the "Arrivals" button, you need to display all the rice that arrive at the airport. The list should be displayed below the buttons (as in a real application). In this case, the "Arrivals" button must be highlighted as selected</li>

<li>When you click back on the "Departures" button, you need to display all the rice for today that depart from the airport. In this case, the "Departures" button must be highlighted as selected</li>

<li>The date to search for flights can be selected through the calendar or the yesterday/today/tomorrow panel (similarly to the original site). After selecting the date, the list of flights should be redrawn. We show the selected date in the URL as on the original site, while if you change the date in the URL and refresh the page, flights for this date should also be redrawn.</li>

<li>If you enter the flight number (in the <code>B2848</code> format) in the input field and click on the "Search" button, then you need to display this one flight under the buttons if such a flight departs/arrives to/from the airport today. Searching for a flight among departures or arrivals depends on the active button (if "Departures" is selected, we search for a flight among departures, if "Arrivals" is selected, we search among arrivals). That is, we have three conditions for finding a flight - the date selected by the user, the Departures / Arrivals type and the entered flight number. If the flight is not found, display the text <code>No flights</code> instead of a list.</li>

<li>We take flight data from the real API of the specified airport - <code>https://api.iev.aero/api/flights/11-01-2022</code>, where <code>11-01-2022</code> > - the date we are interested in. This API is public and has only one endpoint - search for flights by date. It returns a huge sheet of JSON, this is exactly what happens often in real projects, and from this response you will need to get the necessary information to display on the UI</li>

<li>The state of the application (selected list (arrivals / departures) or selected flight) should be saved when the page is reloaded. Use a routing (<code>react-router-dom</code>) to store the necessary data in the page URL (departures/arrivals, displayed date, searched flight). The name of the query params can be anything, but remember that the naming should be understandable. Who forgot - the right parameters are the part of the URL that comes after the question mark, we considered this in the 3rd lesson on the REST API</li>

<li>The text from the search field should also be stored in the query params</li>

<li>Use hooks to work with <a href="https://reacttraining.com/react-router/web/api/Hooks/useparams">route parameters</a> and <a href="https://reacttraining.com /react-router/web/api/Hooks/uselocation">query params</a></li>

<li>Application state should be stored in <code>redux</code></li>

<li>Use React hooks where needed. No class components</li>

</ul>

<h3>The tech stack is:</h3>
<ul>
<li><a href="https://en.wikipedia.org/wiki/HTML5" rel="nofollow">HTML5</a></li>
<li><a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" rel="nofollow">CSS3</a></li>
<li><a href="https://en.wikipedia.org/wiki/CSS_Flexible_Box_Layout" rel="nofollow">Flexbox</a></li>
<li><a href="https://sass-lang.com/" rel="nofollow">Sass (Scss)</a></li>
<li><a href="https://en.bem.info/methodology/" rel="nofollow">BEM methodology</a></li>
<li><a href="https://reactjs.org/" rel="nofollow">React</a></li>
<li><a href="https://reactjs.org/docs/hooks-intro.html" rel="nofollow">React Hoocks</a></li>
<li><a href="https://www.npmjs.com/package/react-datepicker" rel="nofollow">react-datepicker</a></li>
<li><a href="https://en.wikipedia.org/wiki/Redux_(JavaScript_library)" rel="nofollow">Redux</a></li>
<li><a href="https://eslint.org/" rel="nofollow">ESLint</a></li>
<li><a href="https://webpack.js.org/" rel="nofollow">Webpack</a></li>
<li><a href="https://babeljs.io/" rel="nofollow">Babel</a></li>
<li><a href="https://momentjs.com/" rel="nofollow">moments</a></li>

</ul>

<h3>Author</h3>
<ul>
<li>Tokareva Yuliya</li>
</ul>
