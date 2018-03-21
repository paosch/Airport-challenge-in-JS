function Airport(){
  this.planes = []
  this.DEFAULT_CAPACITY = 20
};

function Plane(){

};

Airport.prototype.land = function(plane){
  if(this.planes.length >= this.DEFAULT_CAPACITY){
  throw Error('The airport is full');
}
  this.planes.push(plane);
  return 'A plane has landed'
};

Airport.prototype.take_off = function(){
  this.planes.pop(); // or splice(0, 1)
  return 'A plane has taken off'
};

Airport.prototype.capacity = function(){
  return this.DEFAULT_CAPACITY;
};
