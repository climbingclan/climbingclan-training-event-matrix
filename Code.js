var server = '18.168.242.164';
var port = 3306;
var dbName = 'bitnami_wordpress';
var username = 'gsheets';
var password = 'eyai4yohF4uX8eeP7phoob';
var url = 'jdbc:mysql://'+server+':'+port+'/'+dbName;


   function setColoursFormat(sheet,cellrange,search, colour) { 
  // Adds a conditional format rule to a sheet that causes all cells in range A1:B3 to turn red
  // if they contain a number between 1 and 10.

  let range = sheet.getRange(cellrange);
  var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextContains(search)
    .setBackground(colour)
   // .setTextStyle(0, 5, bold)
    .setRanges([range])
    .build()
  var rules = sheet.getConditionalFormatRules();
  rules.push(rule);
  sheet.setConditionalFormatRules(rules);
  }

    function setWrapped(sheet,cellrange) { 
  var cellrange = sheet.getRange(cellrange);
  cellrange.setWrap(true);
    }

    function setTextFormat(sheet,cellrange,search, colour) { 
  // Adds a conditional format rule to a sheet that causes all cells in range A1:B3 to turn red
  // if they contain a number between 1 and 10.

  let range = sheet.getRange(cellrange);
  var rule = SpreadsheetApp.newConditionalFormatRule()
    .whenTextContains(search)
  //  .setBackground(colour)
    .setFontColor(colour)
    .setRanges([range])
    .build()
  var rules = sheet.getConditionalFormatRules();
  rules.push(rule);
  sheet.setConditionalFormatRules(rules);
  }

function readData() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();


readCragsData();
Volunteerdata();
readTransport();
readGear();
 readTradSkills();
 readSportSkills();
 readSportSkillShare();
 readTradSkillShare();
readGrades();

stmt.close();

} 