
/*
		The Welcome To The Game 3 Assistant is built to help players of WTTG3
		Copyright (C) 2026 OtrexDev. Original by Fierce Thunder

		This program is free software: you can redistribute it and/or modify
		it under the terms of the GNU General Public License as published by
		the Free Software Foundation, either version 3 of the License, or
		(at your option) any later version.

		This program is distributed in the hope that it will be useful,
		but WITHOUT ANY WARRANTY; without even the implied warranty of
		MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
		GNU General Public License for more details.

		You should have received a copy of the GNU General Public License
		along with this program.  If not, see <https://www.gnu.org/licenses/>.  */

//==========================================================================Static Data
var wikidata = {
	"Bizarre Propagation":  {id:100, times:":30 - :44"},
	"Blackhat Post":        {id:101,sub:["submit"], times:":00 - :29", forceHack: [0, "87%"]},
	"Blushing Brides":      {id:103,sub:["join","samples"]},
	"Building A Future":     {id:106,sub:["invest"], times:":15 - :29"},
	"Cavity Lease":         {id:108,sub:["submit"]},
	"Chevron":             {id:110, times:":30 - :59"},
	"Crisis Calls":         {id:111,sub:["account","resetpassword"]},
	"Crystal Guild":        {id:114,sub:["welcome"], times:":30 - :44"},
	"Doctor Murder":        {id:116, forceHack: [0, "40%"]},
	"Dont Waste It":         {id:117,sub:["holdit","no","yes"], forceHack: [2, "40%"]},
	"Doughy":              {id:121},
	"Drug Tickets":         {id:122,sub:["checkout","error"], times:":00 - :29"},
	"Eat My Shit":                 {id:125,sub:["faq","questions","secret"], times:":15 - :29"},
	"Encrave":             {id:129,sub:["evident","gateopen"]},
	"finalStanding":       {id:132, times:":30 - :59"},
	"FindLove":            {id:133, times:":00 - :14"},
	"Forever Friend":       {id:134,sub:["order"]},
	"Forsaken Gifts":       {id:136,sub:["gifts","order"], times:":00 - :14"},
	"I Am Here":             {id:139, times:":30 - :44"},
	"Jakobs Sink":          {id:140},
	"Keep Sake":            {id:141,sub:["contact","thesearch"], times:":30 - :44"},
	"Kill For Me":           {id:144,sub:["instructions","targets"], times:":00 - :29"},
	"Lab Monkey":           {id:147,sub:["catalog","error","sign-in"], times:":30 - :59", forceHack: [2, "87%"]},
	"LostTapes":           {id:151,sub:["page2","purchase"], forceHack: [1, "40%"]},
	"MamaBruguglio":       {id:154, times:":00 - :29"},
	"Mors N More Market":     {id:155,sub:["menu","order","ordersent"], times:":00 - :14"},
	"Oneless":             {id:159},
	"Order Of Nine":         {id:160,sub:["join"], times:":00 - :14", forceHack: [1, "87%"]},
	"Overnight Success":    {id:162,sub:["purchase"], times:":15 - :29"},
	"Prohibited Stockpile": {id:164,sub:["nocontent"]},
	"Red Handed":           {id:166,sub:["login","post1","post2","post4","post6"], times:":00 - :29"},
	"Red Triangle":         {id:172},
	"Ring Ring":            {id:173,sub:["answer"]},
	"Shelter":             {id:175,sub:["donate","events"], times:":30 - :44"},
	"Symphoros Chosen":     {id:178,sub:["live","sendlinks"]},
	"Synapse Decay":        {id:181,sub:["getmoney","myfriends","occasionally","succulentmeal"]},
	"Tango Down":           {id:186,sub:["hire","payment","results"], forceHack: [2, "87%"]},
	"Thanks For Visiting!":    {id:190,sub:["bar","connected","creepy","fakemain","jolly","plug","portal","sleeptalk","slide2","smile","ulike","vision"]},
	"The Bomb Maker":        {id:203},
	"The Grey":             {id:204,sub:["centrum","inanis","interius","latus"], times:":30 - :59"},
	"The Hall":             {id:210, times:":45 - :59"},
	"The Hole":             {id:211},
	"The Light Within":      {id:212,sub:["saved"]},
	"The Loogaroo":         {id:214,sub:["locations"]},
	"The Prey":             {id:216, times:":00 - :14", forceHack: [0, "40%"]},
	"Time Sharing":         {id:217,sub:["packages","watch"]},
	"TRACK06":             {id:220},
	"ViaMarisRoute":       {id:221,sub:["order","secondpage","thirdpage"], times:":00 - :29"},
	"VoluVision":          {id:225,sub:["purchase","testimonials"]},
	"World Wide Workers":    {id:228,sub:["about","submit"]},
	"You There?":            {id:231, times:":30 - :44", forceHack: [0, "87%"]}
};
//==========================================================================Variable Data
var data = {
	"general":{
		"click":new Audio('Assets/general_mouseclick.mp3'),
		"beep":new Audio('Assets/general_motionsensoralert.mp3'),
		"ding":new Audio('Assets/general_positivebeep.mp3')},
	"note":{
		"keys":full_array(8,"????"),
		"content":""},
	"info":{
		"current":0},
	"wiki":{
		"names": ["Codex of Silence", "Toxic Delights", "The Red Mirror"],
		"current":1,
		"editor":0,
		"template":{},
		"sites":[null,{},{},{}],
		"keys":[null,0,0,0],
		"total":[null,2,3,3]},
	"popup":{
		"wifi":{"active":0,"reference":undefined},
		"notes":{"active":0,"reference":undefined}}
};

//==========================================================================Functions

function full_array(i,v) {var a = [];for (;i > 0;i--) {a.push(v);};return JSON.parse(JSON.stringify(a));}

//=============================
//=============================Wiki Functions
//=============================
function wiki_input() {//Updates wiki data from import field
	var r = document.getElementById("wiki_data");
	var c = r.value;
	r.value = "";
	if (c.length == 1) {return;}
	var d = {};
	var s = [...new Set(
		(c.match(/(?=^)[\w' \u2019]+[!?]?(?= -)/gm) || [])
			.map(function(n){return n.replace(/['\u2019]/g,"");})
	)];
	if (s.length != 0) {
		s.forEach(function(n){
			var i = wikidata[n];
			if (i == undefined) {
				d[n] = [];
			} else {
				d[n] = full_array((i.sub?.length ?? 0) + 1,[0,0,0,0]);
			}
		});
		data.wiki.sites[data.wiki.current] = d;
		data.wiki.keys[data.wiki.current] = 0;
		wiki_update();
		save_state();
	}
}

function wiki_update(m) {//Updates the currently displayed data, also handles current page
	data.wiki.editor = 0;

	if (m != undefined) {
		click();
		data.wiki.current = ((data.wiki.current + m + 2) % 3) + 1;
		document.getElementById("wiki_title").innerHTML = data.wiki.names[data.wiki.current - 1];
		wiki_updatekeys();
		save_state();
	}

	var s = Object.keys(data.wiki.sites[data.wiki.current]).sort(function(a,b){return a.localeCompare(b,undefined,{sensitivity:'base'});});
	var t = document.getElementById("wiki_list");
	wiki_erase();
	if (s.length == 0) {
		t.insertRow(-1).innerHTML = `<br><br><br><br>It's quite empty in here...<br><br>Why not add some sites?`;
	} else {
		s.forEach(function(n){
			wiki_appendsite(t,n);
		});
	}

	function wiki_appendsite(t,n) {//Take a website name and display the associated data
		var a,b,c,d,e,f,g,h,i, forceHackData;
		e = wikidata[n];
		i = data.wiki.sites[data.wiki.current][n];
		if (e == undefined) {
			a = t.insertRow(-1);
			b = a.insertCell(0);
			c = a.insertCell(1);
			d = a.insertCell(2);
			b.innerHTML = n;
			c.innerHTML = `<i class="secondary">Dead Site</i>`;
			d.innerHTML = `<div class="wiki_notewrapper"><button class="disabled"><i class="icon-mouse-pointer"></i></button> <button class="disabled"><i class="icon-search"></i></button><button class="disabled"><i class="icon-search-plus"></i></button><button class="disabled"><i class="icon-key"></i></button><button class="disabled"><i class="icon-chain"></i></button></div>`;
			return;
		}
		f = e.id;
		g = (e.sub?.length ?? 0) + 1;
		forceHackData = e.forceHack;
		//console.log(forceHackData);
		for (h = 0; g > h; h++) {
			//console.log(h, n,i,i[h])
			a = t.insertRow(-1);
			b = a.insertCell(0);
			c = a.insertCell(1);
			d = a.insertCell(2);
			b.innerHTML = (h != 0) ? (((h + 1 == g) ? '⠀└─ ':'⠀├─ ') + e.sub[h - 1]):n;
			c.innerHTML = (h != 0) ? ('<i class="child">⠀Subpage</i>'):((e.times == undefined) ? 'Always Available':e.times);
			if(forceHackData != undefined){
				if(forceHackData[0] == h){
					b.classList.add("force_hack_site");
					b.innerHTML += ` (${forceHackData[1]} FH)`
				}
			}
			d.innerHTML = `<div class="wiki_notewrapper"><button onclick="wiki_previewupdate(${f + h})"><i class="icon-mouse-pointer"></i></button> <button class="${(i[h][0]) ? "":"secondary"}" onclick="wiki_notetoggle(this,'${n}',${h},0)"><i class="icon-search"></i></button><button class="${(i[h][1]) ? "":"secondary"}" onclick="wiki_notetoggle(this,'${n}',${h},1)"><i class="icon-search-plus"></i></button><button class="${(i[h][2]) ? "":"secondary"}" onclick="wiki_notetoggle(this,'${n}',${h},2)"><i class="icon-key"></i></button><button class="${(i[h][3]) ? "":"secondary"}" onclick="wiki_notetoggle(this,'${n}',${h},3)"><i class="icon-chain"></i></button></div>`;
		}
	}
}

function wiki_editor() {//Replaces currently displayed data with website editor
	if (data.wiki.editor == 1) {wiki_update();return;}
	data.wiki.editor = 1;

	var t = document.getElementById("wiki_list");
	var r = Object.keys(wikidata);
	var w = Object.keys(data.wiki.sites[data.wiki.current]);
	var o = {};
	wiki_erase();
	r.forEach(function(n){if (o[n] == undefined) {o[n] = 0;};o[n] += 2;});
	w.forEach(function(n){if (o[n] == undefined) {o[n] = 0;};o[n] += 1;});
	data.wiki.template = o;
	var l = Object.keys(o).sort(function(a,b){return a.localeCompare(b,undefined,{sensitivity:'base'});});
	l.forEach(function(n){
		var a = t.insertRow(-1);
		var b = a.insertCell(0);
		var c = a.insertCell(1);
		var d = a.insertCell(2);
		a.id = `editor_${n}`;
		b.innerHTML = n;
		c.innerHTML = (o[n] == 1) ? '<i class="secondary">Dead Site</i>':'Working Site';
		d.innerHTML = `<div class="wiki_editorwrapper"><button onclick="wiki_editortoggle(this,'${n}')" class="monospaced ${(o[n] == 1) ? "secondary":""}">${(o[n] == 1) ? "! Delete Site":((o[n] == 2) ? "+ Append Site":"- Remove Site")}</button></div>`;
	});
	//3 Real + Enabled  (Remove)
	//2 Real + Disabled (Append)
	//1 Fake + Enabled  (Delete)
	//console.log(JSON.stringify(l))
}

function wiki_editortoggle(e,n) {//Toggle or remove necessary websites
	var current = data.wiki.current;
	switch (data.wiki.template[n]) {
		case 3:
			data.wiki.template[n] = 2;
			data.wiki.sites[current][n].forEach(function(s){
				if (s[2] == 1) {data.wiki.keys[current] -= 1;}
			});
			wiki_updatekeys();
			delete data.wiki.sites[current][n];
			e.innerText = "+ Append Site";
		break;
		case 2:
			data.wiki.template[n] = 3;
			data.wiki.sites[current][n] = full_array((wikidata[n].sub?.length ?? 0) + 1,[0,0,0,0]);
			e.innerText = "- Remove Site";
		break;
		case 1:
			document.getElementById(`editor_${n}`).remove();
			delete data.wiki.sites[current][n];
		break;
	}
	//console.log(data.wiki.template,n,data.wiki.template[n])
	save_state();
}

function wiki_erase() {//Removes all content from the wiki table
	var r = document.getElementById("wiki_list");
	for (var y = r.rows.length - 1; y > 0; y--) {r.deleteRow(-1);}
}

function wiki_notetoggle(e,n,i,b) {//Toggle color of note taking buttons
	click();
	if (b == 2) {data.wiki.keys[data.wiki.current] += (e.classList.contains("secondary")) ? 1:-1;wiki_updatekeys();}
	data.wiki.sites[data.wiki.current][n][i][b] ^= 1;
	//console.log(data.wiki.sites[data.wiki.current][n][i][b])
	e.classList.toggle("secondary");
	save_state();
}

function wiki_updatekeys() {//Updates the remaining keys count
	document.getElementById("wiki_keys").innerHTML = '<b>Keys remaining: ' + Math.max((data.wiki.total[data.wiki.current] - data.wiki.keys[data.wiki.current]),0) + '</b>';
}

window.addEventListener("message",(event)=>{ //Close the clickpoints popup when a close event is received
	if (event.data == "close") {
		wiki_previewupdate(-1);
	}
})

function wiki_previewupdate(i) {//Updates and displays the key clickpoints popup
	click();
	var preview_wrapper = document.getElementById("preview_wrapper");
	if (i == -1) {
		preview_wrapper.style["pointer-events"] = "none";
		preview_wrapper.style["opacity"] = 0;
		document.body.classList.remove("noscroll");
		return;
	}
	document.getElementById("preview").src = 'Clickpoint Guides/' + i + '.html';
	preview_wrapper.style["pointer-events"] = "auto";
	preview_wrapper.style["opacity"] = 1;
	document.body.classList.add("noscroll");
}

//=============================
//=============================Note Functions
//=============================
function note_input() {//Attempts to find and save keys within the note block's data
	var content = document.getElementById("note_input").value;
	data.note.content = content;
	var lkeys = content.match(/[1-8] - \w{4}(?= |\r?\n|$)/g);
	if (lkeys !== null) {lkeys.forEach(function (a) {data.note.keys[a.slice(0,1) - 1] = a.slice(4,16);});}
	document.getElementById("note_keyoutput").innerHTML = `<b>Key Data</b><br>${data.note.keys.join("").substr(0,48)}<br>${data.note.keys.join("").substr(48,48)}`;
	if (data.note.keys.indexOf("????") == -1) {document.getElementById("note_keyoutput").innerHTML = `<b>Master Key</b><br><span class="select-all">${data.note.keys.join("")}</span>`;}
	if (data.popup.notes.active == 1) {
		data.popup.notes.reference.document.getElementById("content").innerHTML = content;
	}
	save_state();
}

//=============================
//=============================Info Block Functions
//=============================
function info_update(i) {//Change info page
	click();
	document.getElementById(`info_guide${data.info.current}`).style.display = "none";
	document.getElementById(`info_guide${i}`).style.display = "block";
	data.info.current = i;
}

function setcolor(i,c) {//Updates the site color configuration in memory
	localStorage.setItem(`color${i}`,c);
	document.getElementById("dom_color").innerHTML = `:root {--primary-color:${localStorage.getItem('color0')};--secondary-color:${localStorage.getItem('color1')};--forcehack-color:${localStorage.getItem('color2')}}`;
}

//=============================
//=============================Other
//=============================
function setup() {//Prepares website lists and appearance
	try {
		//Generate info block buttons
		document.querySelectorAll("#info_data > div").forEach(function (element,index) {
			element.id = `info_guide${index}`;
			var attributes = element.attributes;
			if (attributes.getNamedItem("title") == null) {return;}
			var button = document.createElement("button");
			document.getElementById("info_list").appendChild(button);
			button.innerHTML = "<i class='" + attributes.getNamedItem("icon").value + "'></i> " + attributes.getNamedItem("title").value;
			button.addEventListener("click",function(){info_update(index)});
		});

		//Prepare and define website colors
		if (localStorage.getItem('color0') == undefined) {localStorage.setItem('color0',120);}
		if (localStorage.getItem('color1') == undefined) {localStorage.setItem('color1',0);}
		if (localStorage.getItem('color2') == undefined) {localStorage.setItem('color2',190);}
		document.getElementById("setting_colorprimary").value = localStorage.getItem('color0');
		document.getElementById("setting_colorsecondary").value = localStorage.getItem('color1');
		document.getElementById("setting_colorforcehack").value = localStorage.getItem('color2');
		document.getElementById("dom_color").innerHTML = `:root {--primary-color:${localStorage.getItem('color0')};--secondary-color:${localStorage.getItem('color1')};--forcehack-color:${localStorage.getItem('color2')}}`;

		//Restore the latest playthrough data
		if (load_state()) {refresh_ui();}

		//Query the current github commit and add it to site version
		var x = new XMLHttpRequest();
		x.onreadystatechange = function() {
			if (x.readyState == 4 && x.status == 200) {
				var d = JSON.parse(x.responseText);
				document.getElementById("version").innerHTML += `<i>.${d[0].sha.slice(0,7)}</i>`;
			}
		};
		x.open("GET","https://api.github.com/repos/otrexdev/wttg3-assistant/commits?per_page=1",true);
		x.send();
	} catch(e) {
		console.error("[Startup Error] " + e);
	}
}

function click() {//Plays the click sound
	data.general.click.currentTime = 0;
	data.general.click.play();
}

//----------------------------------
//-------- SAVING FUNCTIONS --------
//----------------------------------

const SAVE_KEY = "wttg3_savedata";

function save_state() {//Automatically saves all playthrough data to localStorage
	var snapshot = {
		"version":1,
		"wiki":{
			"current":data.wiki.current,
			"sites":data.wiki.sites,
			"keys":data.wiki.keys,
			"total":data.wiki.total},
		"note":{
			"keys":data.note.keys,
			"content":data.note.content}
	};
	localStorage.setItem(SAVE_KEY,JSON.stringify(snapshot));
}

function load_state() {//restores wiki, note, wifi and tenant data from localStorage. returns true on success
	var raw = localStorage.getItem(SAVE_KEY);
	if (!raw) {return false;}
	try {
		var s = JSON.parse(raw);
		var validWiki = s.wiki && [1,2,3].includes(s.wiki.current) &&
			Array.isArray(s.wiki.sites) && s.wiki.sites.length == 4 &&
			Array.isArray(s.wiki.keys) && s.wiki.keys.length == 4 &&
			Array.isArray(s.wiki.total) && s.wiki.total.length == 4;
		var validNote = s.note && Array.isArray(s.note.keys) && s.note.keys.length == 8 && typeof s.note.content == "string";
		if (s.version !== 1 || !validWiki || !validNote) {return false;}
		data.wiki.current = s.wiki.current;
		data.wiki.sites = s.wiki.sites;
		data.wiki.keys = s.wiki.keys;
		data.wiki.total = s.wiki.total;
		data.note.keys = s.note.keys;
		data.note.content = s.note.content;
		return true;
	} catch(e) {
		console.error("Failed to load saved data",e);
		return false;
	}
}

function reset_playthrough() {//Clears playthrough data while preserving preferences
	click();
	if (!confirm("Start a new playthrough? All wiki progress and notes will be cleared.")) {return;}
	localStorage.removeItem(SAVE_KEY);
	data.wiki.current = 1;
	data.wiki.sites = [null,{},{},{}];
	data.wiki.keys = [null,0,0,0];
	data.wiki.total = [null,2,3,3];
	data.note.keys = full_array(8,"????");
	data.note.content = "";
	refresh_ui();
}

function refresh_ui() {//repaints all DOM elements to reflect the current `data` state
	document.getElementById("wiki_title").innerHTML = data.wiki.names[data.wiki.current - 1];
	wiki_updatekeys();
	wiki_update();

	document.getElementById("note_input").value = data.note.content;
	note_input();
}
