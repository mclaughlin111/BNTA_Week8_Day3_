const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

// print All
ScranAdvisor.prototype.print = function(){
    console.log(this.restaurants);
   
};

// count number of restaurants
ScranAdvisor.prototype.count = function(){
    return this.restaurants.length;
}

// find by name 
ScranAdvisor.prototype.findByName = function(name){
    let searchName = name.toLowerCase();
    for (let index = 0; index < this.restaurants.length; index++) {
            if (this.restaurants[index].name.toLowerCase() === searchName){

                return (this.restaurants[index]); //return breaks loop here
            }
    }
   
}




// Return name of all restaurants
ScranAdvisor.prototype.returnAllName = function(){
    let allNames = [];
    for (let index = 0; index < this.restaurants.length; index++) {
        allNames[index] = this.restaurants[index].name;
    }
return allNames;
}

// Return restaurants by location town
ScranAdvisor.prototype.returnByLocation = function(location){
    
    let allNamesByLocation = [];
    for (let index = 0; index < this.restaurants.length; index++) {
        if (this.restaurants[index].location.town === location){allNamesByLocation[index] = this.restaurants[index]}
    }

return allNamesByLocation;
}


// Method to find by name with for each
ScranAdvisor.prototype.findByNameEach = function(searchName){
    findName = function(restaurant){
        return restaurant.name === searchName;
    }
    this.restaurants.find;
}

module.exports = ScranAdvisor;