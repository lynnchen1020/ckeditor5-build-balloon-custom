(function(d){	const l = d['lt'] = d['lt'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"","Block quote":"Citata",Bold:"Paryškintas","Bulleted List":"Sąrašas",Cancel:"Atšaukti","Cannot upload file:":"Negalima įkelti failo:","Choose heading":"Pasirinkite antraštę",Column:"Stulpelis","Could not insert image at the current position.":"Nepavyko įterpti vaizdo į dabartinę vietą.","Could not obtain resized image URL.":"Nepavyko gauti pakeisto dydžio paveiksliuko URL.","Decrease indent":"Sumažinti atitraukimą","Delete column":"Ištrinti stulpelį","Delete row":"Ištrinti eilutę",Downloadable:"","Dropdown toolbar":"","Edit block":"Redaguoti bloką","Edit link":"Keisti nuorodą","Editor toolbar":"","Header column":"Antraštės stulpelis","Header row":"Antraštės eilutė",Heading:"Antraštė","Heading 1":"Antraštė 1","Heading 2":"Antraštė 2","Heading 3":"Antraštė 3","Heading 4":"Antraštė 4","Heading 5":"Antraštė 5","Heading 6":"Antraštė 6","image widget":"vaizdų valdiklis","Increase indent":"Padidinti atitraukimą","Insert column left":"Įterpti stulpelį kairėje","Insert column right":"Įterpti stulpelį dešinėje","Insert image or file":"Įterpti vaizdą ar failą","Insert row above":"Įterpti eilutę aukščiau","Insert row below":"Įterpti eilutę žemiau","Insert table":"Įterpti lentelę","Inserting image failed":"Nepavyko įterpti vaizdo",Italic:"Kursyvas",Link:"Pridėti nuorodą","Link URL":"Nuorodos URL","Merge cell down":"Prijungti langelį apačioje","Merge cell left":"Prijungti langelį kairėje","Merge cell right":"Prijungti langelį dešinėje","Merge cell up":"Prijungti langelį viršuje","Merge cells":"Sujungti langelius",Next:"","Numbered List":"Numeruotas rąrašas","Open in a new tab":"","Open link in new tab":"Atidaryti nuorodą naujame skirtuke",Paragraph:"Paragrafas",Previous:"",Redo:"Pirmyn","Rich Text Editor, %0":"Raiškiojo teksto redaktorius, %0",Row:"Eilutė",Save:"Išsaugoti","Select column":"","Select row":"","Selecting resized image failed":"Nepavyko pasirinkti pakeisto vaizdo","Show more items":"","Split cell horizontally":"Padalinti langelį horizontaliai","Split cell vertically":"Padalinti langelį vertikaliai","Table toolbar":"","This link has no URL":"Ši nuorda neturi URL",Undo:"Atgal",Unlink:"Pašalinti nuorodą","Upload in progress":"Įkelima"}	);l.getPluralForm=function(n){return (n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));