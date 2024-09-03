function readSportSkillShare() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();

 let cell = setupCell("Dashboard","B5")
let sheet = setupSheet("Sport SkillShare")
 
 var results = stmt.executeQuery('select distinct `nickname` as "Facebook Name",  skillshare_climbing_sport_seconding_outside as "Sport Seconding Outside",  skillshare_climbing_sport_lead_climbing as "Sport Lead Climbing",  skillshare_climbing_sport_stripping_route as "Cleaning Anchor",  skillshare_climbing_sport_setting_up_top_rope as "Setting Up Top Rope",  skillshare_climbing_sport_multipitch_anchors as "Multipitch Anchors",  skillshare_climbing_sport_abseiling_multipitch_routes as "Abseiling Multipitch Routes", `admin-weekend-requests-notes` "Requests and notes", pd.order_id from wp_member_db db LEFT JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id JOIN wp_member_db_skillshare sks on db.id = sks.id where product_id=' + cell + ' AND status in ("wc-processing", "wc-onhold", "wc-on-hold") AND cc_attendance="pending" order by `skillshare_climbing_sport_lead_climbing` desc,`skillshare_climbing_sport_stripping_route` desc,`skillshare_climbing_sport_setting_up_top_rope` Desc, skillshare_climbing_sport_seconding_outside desc');
setTextFormat(sheet,"B2:V","No","#a9a9a9")

appendToSheet(sheet, results);


results.close();
stmt.close();

} 