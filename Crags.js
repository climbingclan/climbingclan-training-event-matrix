function readCragsData() {
  var conn = Jdbc.getConnection(url, username, password);
  var stmt = conn.createStatement();


  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getSheetByName('Dashboard');
  var cell = sheet.getRange('B5').getValues();

  var results = stmt.executeQuery('select distinct  pd.cc_volunteer AS "Selected Roles", `first_name` "Name",`nickname` "FB Name",`admin-first-timer-outdoor` "New to outdoors?",`admin-first-timer-training` "New to training?",`climbing-discipline-preference` "Sp or Tr?", `skills-belaying` "Belaying Skills", `skills-trad-climbing` "Trad Skills", `skills-sport-climbing` "Sport Skills", gear_bringing_rack "Rack",gear_bringing_rope "Rope",`transport-need-lift` "Need lift", `transport-leaving-location` "Location",`admin-training-requests-notes` "Requests and notes", pd.order_id "Order ID" from wp_member_db db LEFT JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id JOIN wp_member_db_gear gr on pd.user_id = gr.id JOIN wp_member_db_skills sk on pd.user_id = sk.id where product_id=' + cell + ' AND status in ("wc-processing", "wc-onhold", "wc-on-hold") AND cc_attendance="pending" order by FIELD(`cc_outdoor_location`,"none","", "bamford_edge", "harpurhill",  "wilton1", "wilton2", "wilton3", "wilton4", "cadshaw", "windgather") Asc,`cc_outdoor_location`, pd.`cc_volunteer` desc, gear_bringing_rack Desc, skills_belaying_lead Desc, `skills-trad-climbing` Asc,`skills-sport-climbing` Asc, `climbing-indoors-toproping-grades` Desc');
  //console.log(results);
  var metaData = results.getMetaData();
  var numCols = metaData.getColumnCount();
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getSheetByName('Event');
  sheet.clearContents();
  sheet.clearFormats();
 setColoursFormat(sheet,"A1:A1000","wind","#ffcccb")
  setColoursFormat(sheet,"A1:A1000","hobson","#D1FF19")
 setColoursFormat(sheet,"a1:a1000","wilton","#ADD8E6")
  //setColoursFormat(sheet, "E2:E1000","","#D1FF19")


 setColoursFormat(sheet,"G1:G1000","learner-lead-belayer","#D1FF19")
 setColoursFormat(sheet,"G1:G1000","lead-belayer","#5CFF5C")
 setColoursFormat(sheet,"G1:G1000","top","#ADD8E6")
 setColoursFormat(sheet,"G1:G1000","No-belaying","#ffcccb")
 setTextFormat(sheet,"E2:L1000","No","#a9a9a9")
  setTextFormat(sheet,"a2:a1000","none","#a9a9a9")

 setColoursFormat(sheet, "B2:B1000","","#e0ffff")
  setColoursFormat(sheet,"L1:L1000","Yes","#ffcccb")
setColoursFormat(sheet,"H1:H1000","lead trad","#5CFF5C")
setColoursFormat(sheet,"H1:H1000","top rope trad","#5CFF5C")
setColoursFormat(sheet,"H1:H1000","seconding","#FFFF8A")
setColoursFormat(sheet,"H1:H1000","learning","#D1FF19")
setColoursFormat(sheet,"I1:I1000","Lead Outdoors","#90ee90")
setColoursFormat(sheet,"I1:I1000","Lead Indoors","#D1FF19")
setColoursFormat(sheet,"I1:I1000","Strip but no","#D1FF19")


 setColoursFormat(sheet,"F1:F1000","Trad but happy to","#8A8AFF")
 setColoursFormat(sheet,"F1:F1000","Sport but happy to","#D7A1F9")
 setColoursFormat(sheet,"F1:F1000","Trad","#2E2EFF")
 setColoursFormat(sheet,"F1:F1000","Sport","#B24BF3")

setColoursFormat(sheet,"N2:N1000","","#FFFF8A")







  var arr = [];
  for (var col = 0; col < numCols; col++) {
    arr.push(metaData.getColumnLabel(col + 1));
  }
  sheet.appendRow(arr);
  while (results.next()) {
    arr = [];
    for (var col = 0; col < numCols; col++) {
      arr.push(results.getString(col + 1));
    }
    sheet.appendRow(arr);
  }

  //var range = SpreadsheetApp.getActive().getRange("Crags!B2:B999");
  //range.insertCheckboxes();

  results.close();
  stmt.close();
  sheet.autoResizeColumns(1, numCols + 1);
sheet.setColumnWidth(13, 150);
sheet.setColumnWidth(14, 250);
sheet.setColumnWidth(9, 130);
setWrapped(sheet,"n2:n1000");
sheet.setColumnWidth(3, 110);

sheet.setColumnWidth(4, 130);
sheet.setColumnWidth(6, 130);
sheet.setColumnWidth(7, 110);




}


//ScriptApp.newTrigger('readData')
//.timeBased()
//.everyMinutes(30)
//.create();
