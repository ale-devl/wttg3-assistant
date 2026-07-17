
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
	"Bizzare Propagation":  {id:100, times:":30 - :44"},
	"Blackhat Post":        {id:101,sub:["submit"], times:":00 - :29"},
	"Blushing Brides":      {id:103,sub:["join","samples"]},
	"Building A Future":     {id:106,sub:["invest"], times:":15 - :29"},
	"Cavity Lease":         {id:108,sub:["submit"]},
	"Chevron":             {id:110, times:":30 - :59"},
	"Crisis Calls":         {id:111,sub:["account","resetpassword"]},
	"Crystal Guild":        {id:114,sub:["welcome"], times:":30 - :44"},
	"Doctor Murder":        {id:116},
	"Dont Waste It":         {id:117,sub:["holdit","no","yes"]},
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
	"Lab Monkey":           {id:147,sub:["catalog","error","sign-in"], times:":30 - :59"},
	"LostTapes":           {id:151,sub:["page2","purchase"]},
	"MamaBruguglio":       {id:154, times:":00 - :29"},
	"Mors N More Market":     {id:155,sub:["menu","order","ordersent"], times:":00 - :14"},
	"Oneless":             {id:159},
	"Order Of Nine":         {id:160,sub:["join"], times:":00 - :14"},
	"Overnight Success":    {id:162,sub:["purchase"], times:":15 - :29"},
	"Prohibited Stockpile": {id:164,sub:["nocontent"]},
	"Red Handed":           {id:166,sub:["login","post1","post2","post4","post6"], times:":00 - :29"},
	"Red Triangle":         {id:172},
	"Ring Ring":            {id:173,sub:["answer"]},
	"Shelter":             {id:175,sub:["donate","events"], times:":30 - :44"},
	"Symphoros Chosen":     {id:178,sub:["live","sendlinks"]},
	"Synapse Decay":        {id:181,sub:["getmoney","myfriends","occasionally","succulentmeal"]},
	"Tango Down":           {id:186,sub:["hire","payment","results"]},
	"Thanks For Visting!":    {id:190,sub:["bar","connected","creepy","fakemain","jolly","plug","portal","sleeptalk","slide2","smile","ulike","vision"]},
	"The Bomb Maker":        {id:203},
	"The Grey":             {id:204,sub:["centrum","deddd","inanis","interius","latus"], times:":30 - :59"},
	"The Hall":             {id:210, times:":45 - :59"},
	"The Hole":             {id:211},
	"The Light Within":      {id:212,sub:["saved"]},
	"The Loogaroo":         {id:214,sub:["locations"]},
	"The Prey":             {id:216, times:":00 - :14"},
	"Time Sharing":         {id:217,sub:["packages","watch"]},
	"TRACK06":             {id:220},
	"ViaMarisRoute":       {id:221,sub:["order","secondpage","thirdpage"], times:":00 - :29"},
	"VoluVision":          {id:225,sub:["purchase","testimonials"]},
	"World Wide Workers":    {id:228,sub:["about","submit"]},
	"You There?":            {id:231, times:":30 - :44"}
};
var tips = [
		"Remember to check in the source code",
		"Dont forget to hover your mouse over entire sites",
		"Remember to practice your hacking skills",
		"The game includes a lot of dead websites that will never be open",
		"If possible, you should save up for key cue",
		"Remember to grab the flashlight",
		"Dont forget the Breather",
		"Say hi to Lucas for me",
		"The Noir are not good at hugs",
		"HAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH",
		"Dont look behind you",
		"Dont worry about the noises behind you, they mean nothing... probably",
		"Error 418 I am a teapot",
		"Have you heard of WTTG2+",
		"You can use this tool to save and organize your keys",
		"Motion Sensors can be used to catch a killer off guard",
		"Dont let Noir catch you off guard",
		"Tick Tock",
		"MERRAMUN",
		"Watch out for the cars"
	];

//==========================================================================Variable Data
var data = {
	"general":{
		"click":new Audio('Assets/general_mouseclick.mp3'),
		"beep":new Audio('Assets/general_motionsensoralert.mp3'),
		"ding":new Audio('Assets/general_positivebeep.mp3')},
	"note":{
		"keys":full_array(8,"????????????"),
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
	"load":{
		"index":0,
		"state":0},
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
	}
}

function wiki_demo() {//Forces update of wiki data
	click();
	data.wiki.sites[data.wiki.current] = { "Bizzare Propagation": [ [ 0, 0, 0, 0 ] ], "Blushing Brides": [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ], "FindLove": [ [ 0, 0, 0, 0 ] ], "Forever Friend": [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ], "Forsaken Gifts": [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ] };
	wiki_update();
}

function wiki_update(m) {//Updates the currently displayed data, also handles current page
	data.wiki.editor = 0;

	if (m != undefined) {
		click();
		data.wiki.current = ((data.wiki.current + m + 2) % 3) + 1;
		document.getElementById("wiki_title").innerHTML = data.wiki.names[data.wiki.current - 1];
		wiki_updatekeys();
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
		var a,b,c,d,e,f,g,h,i;
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
		for (h = 0; g > h; h++) {
			//console.log(n,i,i[h])
			a = t.insertRow(-1);
			b = a.insertCell(0);
			c = a.insertCell(1);
			d = a.insertCell(2);
			b.innerHTML = (h != 0) ? (((h + 1 == g) ? '⠀└─ ':'⠀├─ ') + e.sub[h - 1]):n;
			c.innerHTML = (h != 0) ? ('<i class="child">⠀Subpage</i>'):((e.times == undefined) ? 'Always Available':e.times);
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
	var lkeys = content.match(/[1-8] - [\w]{12}/g);
	if (lkeys !== null) {lkeys.forEach(function (a) {data.note.keys[a.slice(0,1) - 1] = a.slice(4,16);});}
	document.getElementById("note_keyoutput").innerHTML = `<b>Key Data</b><br>${data.note.keys.join("").substr(0,48)}<br>${data.note.keys.join("").substr(48,48)}`;
	if (data.note.keys.indexOf("????????????") == -1) {document.getElementById("note_keyoutput").innerHTML = `<b>Master Key</b><br><span class="select-all">${data.note.keys.join("")}</span>`;}
	if (data.popup.notes.active == 1) {
		data.popup.notes.reference.document.getElementById("content").innerHTML = content;
	}
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
	document.getElementById("dom_color").innerHTML = `body {color:hsl(${localStorage.getItem('color0')},100%,50%)} .simplebar-scrollbar::before {background-color:hsl(${localStorage.getItem('color0')},100%,50%)} .child {color:hsl(${localStorage.getItem('color0')},100%,30%)} .secondary {color:hsl(${localStorage.getItem('color1')},100%,50%)} .disabled {color:hsl(${localStorage.getItem('color1')},100%,20%)}`;
}

//=============================
//=============================Other
//=============================
function tipupdate() {//Updates the displayed tip
	document.getElementById("tips").innerHTML = '[Tip] ' + tips[Math.floor(Math.random() * tips.length)];
}
setInterval(tipupdate,10000);

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
		document.getElementById("setting_colorprimary").value = localStorage.getItem('color0');
		document.getElementById("setting_colorsecondary").value = localStorage.getItem('color1');
		document.getElementById("dom_color").innerHTML = `:root {--primary-color:${localStorage.getItem('color0')};--secondary-color:${localStorage.getItem('color1')}}`;

		//Prepare and display website load messages
		document.getElementById("load_welcome").style.display = "block";
		setTimeout(()=>{load_handle(2)},500);

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
		document.getElementById("load_message").innerText = "[Startup Error] " + e;
		console.error("[Startup Error] " + e);
	}
}

function load_handle(a,i) {
	var popups = ["remember","remember"], type = popups[i];
	switch (a) {
		case 0:
			document.getElementById("toggle_" + type).innerText = (data.load.state ^= 1) ? "☑":"☐";
			break;
		case 1:
			localStorage.setItem(type, data.load.state);
			data.load.state = 0;
			data.load.index++;
		case 2:
			document.getElementById("load_message").style.display = "block";
			popups.forEach((v,i)=>{
				if (data.load.index <= i && (+localStorage.getItem(v) || a == 1)) {
					a = 0;
					data.load.index++;
					document.getElementById("load_" + v)?.remove();
				};
				if (data.load.index >= popups.length) {
					document.getElementById("load_cover").remove();
				};
			});
	};
}

function reset() {//Reset all run data in the assistant
	data = {...data,...{
		"wiki":{...data.wiki,...{
			"sites":[null,{},{},{}],
			"keys":[null,0,0,0],
			"total":[null,2,3,3]}},
		"note":{...data.note,...{
			"keys":full_array(9,"????????????")}}
		}
	};
}

function click() {//Plays the click sound
	data.general.click.currentTime = 0;
	data.general.click.play();
}