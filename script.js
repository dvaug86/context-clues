$(document).ready(function(){
  
  var friends = ['Mike', 'JA', 'Collin', 'Cam', 'Matt'];
  var locations = ['bathroom', 'master bedroom', 'kitchen', 'shower', 'garage', 'pantry', 'closet', 'guest bedroom', 'hall', 'woods'];
  var weapons = ['pickle','pillow','feather','lightbulb','knife','gun','antlers','mind','dragon','mouse','rope','air','water','smoke','crowbar','hammer','lamp','glass shard','fire','poison','shotgun','magic','pen','paperclip','drill'];



 //set up the accusations
  for(var i = 1; i<101; i++){
    $("body").append((`<h3 id="${i}">Accusation ${i}: </h3>`));
  }
  
 var friend_accusation = accusations();
  function accusations(){
     $('h3').click(function(e) {
        var f_Index = Math.floor(Math.random() * friends.length); 
        var l_Index = Math.floor(Math.random() * locations.length);
        var w_Index = Math.floor(Math.random() * weapons.length);
        
        alert(`Accusation ${e.target.id}: I accuses ${friends[f_Index]}, with the ${weapons[w_Index]} in the ${locations[l_Index]}!`);
   })
 

  
 }
})
 