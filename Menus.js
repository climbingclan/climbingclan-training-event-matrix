function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Mark an Attendance')

      .addItem('Mark Cancelled', 'markCancelled')
      .addItem('Mark Late Bail', 'markLateBail')
      .addItem('Mark No Show', 'markNoShow')
      .addSeparator()
      .addItem('Mark Duplicate', 'markDuplicate')
      .addSeparator()
//      .addItem('Mark Attended', 'markAttended')
          .addItem('Mark ALL Attended', 'markAttendedAndCloseEvent')
          .addItem('Mark Clan Cancelled', 'markClanCancelled')


      .addToUi();

   // create menu for dispatch  functions
  ui.createMenu('Assign a Role')

      .addItem('Training Organiser', 'assignTrainingOrganiser')
      .addItem('Skill Sharer', 'assignSkillSharer')
      .addItem('Training Reporter', 'assignTrainingReporter')
     // .addSeparator()
      .addItem('Cake Supplier', 'assignCakeSupplier')
      //.addItem('Group Creator', 'assignGroupCreator')
      //.addItem('Week Director', 'assignTripDirector')
      .addSeparator()

//      .addSeparator()
//      .addItem('SundayPromo1', 'assignSundayPromo1')
//      .addItem('SundayPromo2', 'assignSundayPromo2')
      .addItem('MondayPromo1', 'assignMondayPromo1')
      .addItem('MondayPromo2', 'assignMondayPromo2')
      .addSeparator()


      .addItem('Unassign Role', 'markVolunteerClear')

      .addToUi();   

      


/*
  ui.createMenu('Send to Crag ')
      .addItem('Wilton 3', 'sendWilton3')
      .addItem('Castle Cadshaw Rocks', 'sendCadshaw')
      .addItem('Wilton 1', 'sendWilton1')
      .addItem('Wilton 2', 'sendWilton2')
      .addItem('Wilton 4', 'sendWilton4')
      .addItem('Egerton Quarry', 'sendEgerton')
      .addItem('Anglezarke Quarry', 'sendAnglezarke')
      .addItem('Denham Hill Quarry', 'sendDenham')
      .addSeparator()
      .addItem('Pule Hill Rocks', 'sendPuleHill')
      .addItem('Heptonstall Rocks', 'sendHeptonstall')
      .addItem('Hobson Moor Quarry', 'sendHobsonMoor')
      .addSeparator()
      .addItem('Windgather', 'sendWindgather')
      .addItem('Castle Naze', 'sendCastleNaze')
      .addSeparator()
      .addItem('Horsethief Quarry', 'sendHorsethief')
      .addItem('Harpur Hill Quarry', 'sendkHarpurHill')
      .addItem('Horseshoe Quarry', 'sendHorseshoe')
      .addSeparator()
      .addItem('Stanage Popular', 'sendStanagePopular')
      .addItem('Froggatt Edge', 'sendFroggatt')
      .addItem('Bamford Edge', 'sendBamford')
      .addItem('The Roaches', 'sendRoaches')
      .addSeparator()
      .addItem('Finalise ALL Assignments', 'finaliseCragLocations')


      .addToUi();   
*/
  ui.createMenu('Refresh Matrix')
      .addItem('Refresh All', 'readData')
      .addSeparator()
      .addItem('Refresh Crags', 'readCragsData')
      .addItem('Refresh Volunteering', 'Volunteerdata')
      .addSeparator()
      .addItem('Refresh Transport', 'readLifts')
      .addItem('Refresh Gear', 'readGear')
      .addItem('Refresh Grades', 'readGrades')
      .addSeparator()
      .addItem('Refresh Event Listing', 'readEvents')

      .addToUi();   

}