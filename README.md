# Shift-Select
A jquery plugin that allows you to shift click multiple checkboxes in table rows to easily select many rows at once

After searching for a solution to do this, I got inspired while looking at a stackexcahnge post and decided to write my own plugin for this. 

This is the post that I was inspired by: https://stackoverflow.com/questions/659508/how-can-i-shift-select-multiple-checkboxes-like-gmail

Credit for the initial logic behind the shift clicking goes to user BC. on stack exchange.

### Usage

Reuirements: You must be using JQuery 3.4.1 or later. Has not been tested with older versions yet.

Download and include the file on your page: <br/>
`<script src="/js/checkboxMultiSelect.js"></script>`

Assign your checkboxes with the class "checkRow": <br/>
`<input type="checkbox" id="id_chk#" class="checkRow" value="#" />`

All values of selected checkboxes will be stored in an array called "checkValArray". To retrieve this updated array when a checkbox is selected or deselected, use jQuery's change() function: <br/>
`$(':checkbox').change(function() { console.log(checkValArray) })`
