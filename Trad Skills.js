function readTradSkills() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();

let cell = setupCell("Dashboard","B5")
let sheet = setupSheet("Trad Skills")
 
 var results = stmt.executeQuery('select distinct  `nickname` AS "Facebook Name",`skills_belaying_top_rope` AS "TR Bly",skills_belaying_lead "Lead Bly",skills_trad_leading "Lead Trad",skills_trad_multipitch_anchors "Multipitch Trad", skills_trad_toprope "Trad Toprope",skills_belaying_halfropes "twin belay",skills_trad_abseiling "Abseiling for trad", skills_trad_retrievable_abseils "Retrvl abseils", skills_trad_prussiking "Trad ascending", skills_trad_belay_escape "Trad Escape",skills_trad_hauling "Hauling",skills_trad_moving_together "Moving Together",`climbing-trad-grades` "Trad Grades",`climbing-indoors-toproping-grades` "Indoor TR",`climbing-indoors-leading-grades` "Indoor Lead", pd.order_id "Order ID" from wp_member_db db LEFT JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id JOIN wp_member_db_skills sk on pd.user_id = sk.id where product_id=' + cell + ' AND status in ("wc-processing", "wc-onhold", "wc-on-hold") AND cc_attendance="pending" order by `skills_trad_leading` desc,skills_trad_multipitch_anchors desc,`skills_belaying_lead`  desc, `climbing-trad-grades` asc,`climbing-indoors-toproping-grades` desc,  `order_created` Desc');
setTextFormat(sheet,"B2:V","No","#a9a9a9")

appendToSheet(sheet, results);

results.close();
stmt.close();

} 