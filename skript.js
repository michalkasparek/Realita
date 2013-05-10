var douvozovek = new Array("pravicová vláda", "pravicové vlády", "pravicové vládě", "pravicovou vládu", "pravicovou vládou", "hospodářský růst", "hospodářského růstu", "hospodářskému růstu", "hospodářském růstu", "hospodářským růstem", "ekonomický růst", "ekonomického růstu", "ekonomickému růstu", "ekonomickém růstu", "ekonomickým růstem", "práce", "práci", "prací", "krize", "krizi", "krizí", "úspěch", "úspěchu", "úspěchem", "úspěšný", "úspěšná", "úspěšní", "úspěšných", "peníze", "peněz", "penězům", "penězích", "penězmi", "předražené", "předraženou", "předražený", "předraženými", "zdarma", "zadarmo", "nezaměstnaný", "nezaměstnaní", "nezaměstnaná", "nezaměstnané", "reformy", "reforem", "reformám", "reformách", "reformami", "škrty", "škrtů", "škrtům", "škrtech", "prosperita", "prosperity", "prosperitě", "prosperitou", "Pravicová vláda", "Pravicové vlády", "Pravicové vládě", "Pravicovou vládu", "Pravicovou vládou", "Hospodářský růst", "Hospodářského růstu", "Hospodářskému růstu", "Hospodářským růstem", "Ekonomický růst", "Ekonomického růstu", "Ekonomickému růstu", "Ekonomickým růstem", "Práce", "Práci", "Prací", "Krize", "Krizi", "Krizí", "Úspěch", "Úspěchu", "Úspěchem", "Úspěšný", "Úspěšná", "Úspěšní", "Úspěšných", "Peníze", "Peněz", "Penězům", "Penězích", "Penězmi", "Předražené", "Předraženou", "Předražený", "Předraženými", "Zdarma", "Zadarmo", "Nezaměstnaní", "Nezaměstnaný", "Nezaměstnaná", "Nezaměstnané", "Reforma", "reforma", "reformou", "reformu", "reformě", "Reformou", "Reformu", "Reformě", "Reformy", "Reforem", "Reformám", "Reformách", "Reformami", "Škrty", "Škrtů", "Škrtům", "Škrtech", "Expert", "Experta", "Expertovi", "Expertem", "expert", "experta", "expertovi", "expertem", "experti", "Experti");
var content = document.body.innerHTML;


for (var j = 0; j < douvozovek.length; j++)
{
content = content.replace(douvozovek[j], "„" + douvozovek[j] + "“");
}

content = content.replace(new RegExp("Česká republika", "g"), "Česká „republika“");
content = content.replace(new RegExp("České republiky", "g"), "České „republiky“");
content = content.replace(new RegExp("České republice", "g"), "České „republice“");
content = content.replace(new RegExp("Česká republiko", "g"), "Česká „republiko“");
content = content.replace(new RegExp("Českou republikou", "g"), "Českou „republikou“");
content = content.replace(new RegExp("evropský prezident", "g"), "evropský „prezident“");
content = content.replace(new RegExp("evropského prezidenta", "g"), "evropského „prezidenta“");
content = content.replace(new RegExp("evropský prezidente", "g"), "evropský „prezidente“");
content = content.replace(new RegExp("evropském prezidentovi", "g"), "evropským „prezidentovi“");
content = content.replace(new RegExp("evropským prezidentem", "g"), "evropským „prezidentem“");

document.body.innerHTML = content;

