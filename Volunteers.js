function Volunteerdata() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();

// Volunteering Report
//
 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Dashboard');
  var cell = sheet.getRange('B5').getValues();


 var spreadsheet = SpreadsheetApp.getActive();
 var sheet = spreadsheet.getSheetByName('Volunteering');
 sheet.clearContents();
  sheet.clearFormats();




// start of volunteering function
function volunteering(querystring, title,flip)
{
sheet.appendRow([title]);
//var tobold = sheet.getRange(getLastRow());
let row = sheet.getLastRow();
//console.log(row);
sheet.getRange(row, 1, 2, 25).setFontWeight("bold");
if (flip==="volunteers") {
/*
 var results = stmt.executeQuery('select `cc_outdoor_location` "Assigned Location",`first_name` "First Name",`nickname` "Facebook Name",pd.cc_volunteer "Selected Roles",volunteer_training_preevent_facebook_promo "FB promo", volunteer_training_event_coordinator "Crg Coord", volunteer_training_event_reporter "Training Rprtr", volunteer_training_lift_sharing "Lifts", volunteer_training_cake_buyer "Cake buyer",volunteer_training_event_assistant "Event assistant",volunteer_training_skill_sharer "Skill Sharer",scores_volunteer_score_cached "Receptiveness",scores_volunteer_reliability_score_cached "Vol Reliability",stats_attendance_training_attended_cached "Attended training events",  `admin-training-requests-notes` "Requests and notes", pd.order_id from wp_member_db db JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id join wp_member_db_volunteering vl on pd.user_id = vl.id where product_id=' + cell + ' AND status in ("wc-processing", "wc-onhold", "wc-on-hold") AND  `admin-first-timer-question`="no" AND (`admin-can-you-help-training`<>"" OR pd.cc_volunteer<>"none")  order by `cc_outdoor_location`, FIELD(pd.cc_volunteer,"none",  "outdoor_cragcoordinator1", "outdoor_assistantcragcoordinator1", "outdoor_postpromo1", "mondaypromo1", "mondaypromo2", "outdoor_messagelord") asc, CAST(db.scores_volunteer_score_cached AS UNSIGNED INTEGER) asc,pd.cc_volunteer desc,volunteer_outdoor_preevent_facebook_promo,volunteer_outdoor_crag_coordinator,volunteer_outdoor_event_reporter, CAST(db.scores_volunteer_score_cached AS UNSIGNED INTEGER) asc'); 
  //console.log(results);

  }
else if (flip==="non-volunteers"){
 var results = stmt.executeQuery('select `cc_outdoor_location` "Assigned Location",`first_name` "First Name",`nickname` "Facebook Name",pd.cc_volunteer "Selected Roles",volunteer_outdoor_preevent_facebook_promo "FB promo", volunteer_outdoor_crag_coordinator "Crg Coord", volunteer_outdoor_event_reporter "Crg Rprtr", volunteer_outdoor_group_maker "Grp Mkr", volunteer_outdoor_message_lord "Mssngr Groups",volunteer_outdoor_event_director "Event Dir",scores_volunteer_score_cached "Receptiveness",stats_attendance_outdoor_thursday_attended_cached "Attended",  `admin-outdoors-requests-notes` "Requests and notes", pd.order_id from wp_member_db db JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id join wp_member_db_volunteering vl on pd.user_id = vl.id  where product_id=' + cell + ' AND status in ("wc-processing", "wc-onhold", "wc-on-hold") AND  `admin-first-timer-question`="No" AND (`admin-can-you-help-outdoors`="" OR `admin-can-you-help-training` is null ) AND pd.cc_volunteer="none" AND scores_volunteer_score_cached<>"" AND CAST(stats_attendance_outdoor_thursday_attended_cached AS UNSIGNED INTEGER)>="1"  order by pd.cc_volunteer asc, CAST(db.scores_volunteer_score_cached AS UNSIGNED INTEGER) asc,CAST(db.stats_attendance_outdoor_thursday_attended_cached AS UNSIGNED INTEGER) desc') 
}

*/

 var results = stmt.executeQuery('select `cc_outdoor_location` "Assigned Location",`first_name` "First Name",`nickname` "Facebook Name",pd.cc_volunteer "Selected Roles",volunteer_training_preevent_facebook_promo "FB promo", volunteer_training_event_coordinator "Event Coord", volunteer_training_event_reporter "Training Rprtr", volunteer_training_cake_buyer "Cake Buyer", volunteer_training_event_assistant "Event Assistant",volunteer_training_skill_sharer "Skill Sharer",scores_volunteer_score_cached "Receptiveness",stats_attendance_outdoor_thursday_attended_cached "Attended Thursdays",  `admin-training-requests-notes` "Requests and notes", pd.order_id, `admin-can-you-help-training` from wp_member_db db JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id join wp_member_db_volunteering vl on pd.user_id = vl.id where product_id=' + cell + ' AND status in ("wc-processing", "wc-onhold", "wc-on-hold") AND (`admin-can-you-help-training`<>"" OR pd.cc_volunteer<>"none" OR `admin-can-you-help-training` IS NOT NULL)  order by `cc_outdoor_location`, FIELD(pd.cc_volunteer,"none",  "outdoor_cragcoordinator1", "outdoor_assistantcragcoordinator1", "outdoor_postpromo1", "mondaypromo1", "mondaypromo2", "outdoor_messagelord") asc, CAST(db.scores_volunteer_score_cached AS UNSIGNED INTEGER) asc,pd.cc_volunteer desc,volunteer_outdoor_preevent_facebook_promo,volunteer_outdoor_crag_coordinator,volunteer_outdoor_event_reporter, CAST(db.scores_volunteer_score_cached AS UNSIGNED INTEGER) asc'); 
  //console.log(results);

  }
else if (flip==="non-volunteers"){
 var results = stmt.executeQuery('select `cc_outdoor_location` "Assigned Location",`first_name` "First Name",`nickname` "Facebook Name",pd.cc_volunteer "Selected Roles",volunteer_training_preevent_facebook_promo "FB promo", volunteer_training_event_coordinator "Event Coord", volunteer_training_event_reporter "Training Rprtr", volunteer_training_cake_buyer "Cake Buyer", volunteer_training_event_assistant "Event Assistant",volunteer_training_skill_sharer "Skill Sharer",scores_volunteer_score_cached "Receptiveness",stats_attendance_outdoor_thursday_attended_cached "Attended Thursdays",  `admin-training-requests-notes` "Requests and notes", pd.order_id, `admin-can-you-help-training` from wp_member_db db JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id join wp_member_db_volunteering vl on pd.user_id = vl.id  where product_id=' + cell + ' AND status in ("wc-processing", "wc-onhold", "wc-on-hold") AND  `admin-first-timer-question`="No" AND (`admin-can-you-help-training`="" OR `admin-can-you-help-training` is null ) AND pd.cc_volunteer="none" order by pd.cc_volunteer asc, CAST(db.scores_volunteer_score_cached AS UNSIGNED INTEGER) asc,CAST(db.stats_attendance_outdoor_thursday_attended_cached AS UNSIGNED INTEGER) desc') 
}



 var metaData=results.getMetaData();
  var numCols = metaData.getColumnCount();
 var arr=[];
  for (var col = 0; col < numCols; col++) {
   arr.push(metaData.getColumnLabel(col + 1));
 }
 // https://stackoverflow.com/questions/10585029/parse-an-html-string-with-js 
  sheet.appendRow(arr);
 while (results.next()) {
 arr=[];
 for (var col = 0; col < numCols; col++) {
   arr.push(results.getString(col + 1));
 }
 sheet.appendRow(arr);
 }
sheet.autoResizeColumns(1, numCols+1);



} //end of volunteering

// full options
//help online beforehand,help at sign-in,help around announcements and cake time,do announcements,help online afterwards,be event director for the evening

volunteering("beforehand", "Volunteers","volunteers");
volunteering("beforehand", "People who haven't volunteered or been assigned","non-volunteers");

setColoursFormat(sheet, "D3:D1000","none","#DAF7A6 ")
setColoursFormat(sheet, "D3:C1000","Selected","#FFFFFF")
setColoursFormat(sheet, "D3:D1000","","#e0ffff")
 setTextFormat(sheet,"E2:M1000","No","#a9a9a9")
sheet.setColumnWidth(3, 160);
sheet.setColumnWidth(1, 150);
setWrapped(sheet,"m2:m1000");

sheet.setColumnWidth(13, 300);

} 

