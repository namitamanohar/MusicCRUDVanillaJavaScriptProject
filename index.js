//create an array of 6 objects for the the topSongs for a particular artist including name and playCount as keys for the object set this to a variable called topSongs








//variables
//get the element with the class flex-container and set it to the variable mainDiv

//get the input element with class nameInput

//get the input element with class ageInput and set it to the variable playCountInpu

//get the button element with id addSong and set it to the variable createButton

//get the button element with id updateSong and set it to the variable updateButton

//create a variable called updateSongIndex (leave it empty)

//Functions
//Reading/rendering the data (cRud)
//create a function called renderData

  //set the mainDiv's property of innerHTML to an empty string
  
  //loop over the topSongs array; using the for loop syntax with three statements; instead of i use the variable songIndex
  //https://www.w3schools.com/js/js_loop_for.asp
  
    //create a div eelment and set it to the variable songListItem
    
    //set the className property of the variable songListItem to "song-card"
    
    //set the innerHTML property of the songListItem to the card code in gitHub
    
    
    
    
    
    
    //append the songListItem to the mainDiv
    
  
  //end of renderData function 

//create a function called createData
  
    //set the property value of the variable nameInput to a variable called name
    
    //set the property value of the variable playCount to a variable called playCount
    
    //create a newSong variable and set it ot he object {name, playCount}
    
    //uisng the array method that allows you to add to an array; add newSong to the topSongs array defined at the very beginning of your program 
    //use this resource https://www.w3schools.com/js/js_array_methods.asp 
    
    //set the value property of the variable nameInput to an empty string
    
    //set the value property of the variable playCountInput to an empty string
    
    //re-render the data to the DOM by calling the renderData function
    
  
  //end of createData function
  //add an eventListener to the variable createButton listening for the createData function
  


  //delete logic (cruD)
  //get the delete buttons using querySelectorAll and starts with className deleteButton and set it to the variable deleteButtons
  
  //for loop through the delete buttons using a for of loop
  //https://www.w3schools.com/js/js_loop_forof.asp
  
    //add eventListener to each button
    
      //take the variable btn's property className and split at the value "deleteButton--" and set it to the variable buttonId
      
      //remove one element at the current index which is buttonId[1] using the splice method
      
      //re-render the updated data to the DOM by calling the renderData function
      
    
  


  //update logic
  //get the update buttons using querySelectorAll and starts with className updateButton and set it to the variable updateButtons
  //https://stackoverflow.com/questions/36396497/get-all-items-that-start-with-class-name
  
  //for loop through the update buttons using a for of loop
  //https://www.w3schools.com/js/js_loop_forof.asp
  
    //add eventListener to each button
    
      //switch submit to updateSubmit button by doing the following
      //to the varialbe updateButton remove the classList "hidden"
      //https://www.w3schools.com/howto/howto_js_remove_class.asp
      
      //to the variable createButton add the classList "hidden"
      //https://www.w3schools.com/howto/howto_js_add_class.asp
      
      //take the variable btn's property className and split at the value "updateButton--" and set it to the variable updateSongIndex
      
      //access the array element that you are trying to update by using the value represented by updateSongIndex[1] and set this to a variable called songInfo
      
      //set the value property of the nameInput variable to the the name property on the songInfo object
      
      //set the value property of the playCountInput variable to the the playCount property on the songInfo object
      
    
  

//call the renderData function

//create a function called updateSong

  //create an object variable called updatedSong and set the respective properties to the values from the nameInput and playCountInput variable
  
  //remove the one song to update which is at index updateSongIndex[1] by using the splice method and insert the updatedSong variable
  //https://www.w3schools.com/js/js_array_methods.asp

  //set value property of nameInput to an empty string
  
  //set the value property of playCountInput to an empty string
  
  //to the variable updateButton add the classList "hidden"
  //https://www.w3schools.com/howto/howto_js_add_class.asp

  //to the varialbe createButton remove the classList "hidden"
  //https://www.w3schools.com/howto/howto_js_remove_class.asp
  
  //re-render the updated data to the DOM by calling the renderData function
  

//add an eventListener to the updateButton listening for the updateSong function


