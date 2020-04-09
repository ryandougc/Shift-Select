//Set all checkboxes to blank
$(':checkbox').prop('checked', false)

//Reset the checkValArray to empty
let checkValArray = []

//Set the lastChecked box to null
var lastChecked = null

//Assign variables for checkboxes
var $chkboxes = $('.checkRow')
var $masterCheck = $("input[name='checkboxMaster']")

//When any check box is clicked
$chkboxes.click(function(e) {
    //Reset the student array to be blank
    checkValArray = []

    //Set the last checkbox checked if it didnt exist before
    if (!lastChecked) {
        lastChecked = this
    }

    //If the shift button is held while clicking a box
    if (e.shiftKey) {
        var start = $chkboxes.index(this)
        var end = $chkboxes.index(lastChecked)

        var selectedChecks = $chkboxes.slice(Math.min(start,end), Math.max(start,end)+ 1)
        selectedChecks.prop('checked', lastChecked.checked)
    }

    //Assign a variable to find if any checkboxes are unchecked
    var checkBoxStatus = false

    $chkboxes.each(function() {
        //Highlight any rows that are checked
        if($(this).is(':checked')){
            $(this).parents('tr')
            .addClass("table-primary")
        }else {
            $(this).parents('tr')
            .removeClass("table-primary")
        }

        //Add all values to the array that are selected
        if($(this).is(':checked')) {
            checkValArray.push($(this).val())

            //Make sure the multi-select functions are showing
            $('.multiSelectTools').show()
        }

        //If a checkbox is unselected, add a count to the checkCount variable
        if(!$(this).is(':checked')){
            checkBoxStatus = true
        } 
    })

    //If checkCount > 0, not all check boxes are selected, set the master checkbox to false
    if(checkBoxStatus){
        $masterCheck.prop('checked', false)
    }else {
        $masterCheck.prop('checked', true)
    }

    //When the checkValArray is emtpy, hide the multi-select functions
    if (checkValArray.length == 0){
        $('.multiSelectTools').hide()
    }

    //Set the last checked button to 
    lastChecked = this
});

//When the master checkbox is selected:
$masterCheck.click(function(){
    //Reset the student array to be blank
    checkValArray = []

    //Set all checkboxes state to the same as the master checkbox
    $(':checkbox').prop('checked', $masterCheck.is(':checked'))

    //If the master checkbox is checked
    if($(this).is(':checked')){
        $chkboxes.each(function() {
            //Add all values to the array
            if($(this).is(':checked')) {
                checkValArray.push($(this).val())

                //Make sure the multi-select functions are showing
                $('.multiSelectTools').show()
            }
        })

        //When the checkValArray is emtpy, hide the multi-select functions
        if (checkValArray.length == 0){
            $('.multiSelectTools').hide()
        }

    } else {
        //Reset the array
        checkValArray = []
        
        //Hide the multi-select functions
        $('.multiSelectTools').hide()
    }
    $chkboxes.each(function() {
        //Highlight any rows that are checked
        if($(this).is(':checked')){
            $(this).parents('tr')
            .addClass("table-primary")
        }else {
            $(this).parents('tr')
            .removeClass("table-primary")
        }
    })
});
