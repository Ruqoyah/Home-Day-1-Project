var school = function(name, localGovt, state) {
	// Private members
   var _facilities = {
      library: 'Library',
      hall: 'Auditorium'
   }

   var that = {};
   that.name = name;
   that.localGovt = localGovt || '';
   that.state = state || '';

   that.displayLocation = function() {
      console.log ('Name: '+ that.name +'\n'+'Local Government: ' + 
         that.localGovt+'\n'+'State : ' + that.state);
   }

   that.displayFacilities = function() {
      console.log('School facilities include ' + _facilities.library + ', ' +
         _facilities.hall + ' among others.');
   }


   that.returnFacilities = function() {
      return _facilities;
   }

   return that;
}


var university = function(name, localGovt, state, nameOfStreet) {
	// Private members
   var _programmes = {
      undergrad: 'Undergraduate',
      postgrad: 'Postgraduate'
   }

   var that = school(name, localGovt, state);
   that.nameOfStreet = nameOfStreet || '';
   that.headOfInstitution = 'Vice Chancellor';

     // Polymorphism
   that.displayLocation = function() {
      console.log ('Name: '+ that.name +'\n'+'Local Government: ' + 
         that.localGovt+'\n'+'State : ' + that.state + '\n' + 'Street ' + that.nameOfStreet);
   }

   that.displayProgrammes = function() {
      console.log('The type of programmes offered by ' + that.name + ' are ' + _programmes.undergrad 
         + ' and ' + _programmes.postgrad + ' programmes');
   }

   that.returnProgrammes = function() {
      return _programmes;
   }

   return that;
}
