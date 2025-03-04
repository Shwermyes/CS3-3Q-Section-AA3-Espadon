function PopulationGrowth(){
	   
    let initialpopulation = parseFloat(prompt('Enter the initial population '));
    let rateofgrowth = parseFloat(prompt('Enter the rate of growth: '));
    let timeinhours = parseFloat(prompt('Enter the time in hours: '));
                  
    let final = Math.round(initialpopulation*Math.pow(Math.E, (rateofgrowth*timeinhours)));
                     
    let Location = prompt('Enter the region or location of the monster: ');
    let nameofmonster = prompt('Enter the name of the monster: ');
    
    let nameandlocation = Location.concat(" ", nameofmonster).toUpperCase();
                     
     document.getElementById("result").innerHTML = "After " + timeinhours + " hours, the population of monster " + nameandlocation  + "  increased to " + final;

}