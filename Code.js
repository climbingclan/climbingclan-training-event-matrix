const scriptProperties = PropertiesService.getScriptProperties();

const server = scriptProperties.getProperty('cred_server');
const port = parseInt(scriptProperties.getProperty('cred_port'), 10);
const dbName = scriptProperties.getProperty('cred_dbName');
const username = scriptProperties.getProperty('cred_username');
const password = scriptProperties.getProperty('cred_password');
const url = `jdbc:mysql://${server}:${port}/${dbName}`;
const apidomain = scriptProperties.getProperty('cred_apidomain');
const apiusername = scriptProperties.getProperty('cred_apiusername');
const apipassword = scriptProperties.getProperty('cred_apipassword');


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
