describe('Airport', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });

  describe('land', function(){
    it('a plane is allowed to land at the airport', function(){
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
    it('says a plane has landed', function(){
      expect(airport.land(plane)).toEqual('A plane has landed');
    });

    it('throws an error when airport at capacity', function(){
      var i = 0
      for (i; i < airport.capacity(); i++ ){
      airport.land(plane);
      }
      expect( function(){airport.land(plane)}).toThrowError(Error, 'The airport is full');
    });
  });


  describe('take_off', function(){
    it('a plane is allowed to take off', function(){
      airport.land(plane);
      var length = airport.planes.length
      airport.take_off();
      expect(airport.planes.length).toEqual(length - 1);
    });
  });





















  });
