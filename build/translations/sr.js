(function(d){	const l = d['sr'] = d['sr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 of %1","Block quote":"Цитат",Bold:"Подебљано","Bulleted List":"Листа са тачкама",Cancel:"Одустани","Cannot upload file:":"Постављање фајла је неуспешно:","Choose heading":"Одреди стил",Column:"Колона","Could not insert image at the current position.":"Немогуће је додати слику на ово место.","Could not obtain resized image URL.":"УРЛ слика промењених димензија није доступна.","Decrease indent":"Смањи увлачење","Delete column":"Бриши колону","Delete row":"Бриши ред",Downloadable:"Могуће преузимање","Dropdown toolbar":"Падајућа трака са алаткама","Edit block":"Блок уређивач","Edit link":"Исправи линк","Editor toolbar":"Уређивач трака са алаткама","Header column":"Колона за заглавље","Header row":"Ред за заглавлје",Heading:"Стилови","Heading 1":"Наслов 1","Heading 2":"Наслов 2","Heading 3":"Наслов 3","Heading 4":"Наслов 4","Heading 5":"Наслов 5","Heading 6":"Наслов 6","image widget":"модул са сликом","Increase indent":"Повећај увлачење","Insert column left":"Додај колону лево","Insert column right":"Додај колону десно","Insert image or file":"Додај слику или фајл","Insert row above":"Додај ред изнад","Insert row below":"Додај ред испод","Insert table":"Додај табелу","Inserting image failed":"Додавање слике је неуспешно",Italic:"Курзив",Link:"Линк","Link URL":"УРЛ линк","Merge cell down":"Спој ћелије на доле","Merge cell left":"Cпој ћелије на лево","Merge cell right":"Спој ћелије на десно","Merge cell up":"Спој ћелије на горе","Merge cells":"Спој ћелије",Next:"Следећи","Numbered List":"Листа са бројевима","Open in a new tab":"Отвори у новој картици","Open link in new tab":"Отвори линк у новом прозору",Paragraph:"Пасус",Previous:"Претходни",Redo:"Поново","Rich Text Editor, %0":"Проширени уређивач текста, %0",Row:"Ред",Save:"Сачувај","Select column":"","Select row":"","Selecting resized image failed":"Одабир слике промењених дименшија није успешно","Show more items":"Прикажи још ставки","Split cell horizontally":"Дели ћелије водоравно","Split cell vertically":"Дели ћелије усправно","Table toolbar":"Табела трака са алаткама","This link has no URL":"Линк не садржи УРЛ",Undo:"Повлачење",Unlink:"Отклони линк","Upload in progress":"Постављање у току","Widget toolbar":"Widget traka sa alatkama"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));