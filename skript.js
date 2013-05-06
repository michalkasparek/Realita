var douvozovek = new Array("pravicová vláda", "pravicové vlády", "pravicové vládě", "pravicovou vládu", "pravicovou vládou", "hospodářský růst", "hospodářského růstu", "hospodářskému růstu", "hospodářském růstu", "hospodářským růstem", "ekonomický růst", "ekonomického růstu", "ekonomickému růstu", "ekonomickém růstu", "ekonomickým růstem", "práce", "práci", "prací", "krize", "krizi", "krizí", "úspěch", "úspěchu", "úspěchem", "peníze", "peněz", "penězům", "penězích", "penězmi", "předražené", "předraženou", "předražený", "předraženými", "zdarma", "zadarmo", "produktivita", "produktivity", "produktivitě", "produktivitou", "nezaměstnaný", "nezaměstnaní", "nezaměstnaná", "nezaměstnané", "reformy", "reforem", "reformám", "reformách", "reformami", "škrty", "škrtů", "škrtům", "škrtech", "prosperita", "prosperity", "prosperitě", "prosperitou", "Pravicová vláda", "Pravicové vlády", "Pravicové vládě", "Pravicovou vládu", "Pravicovou vládou", "Hospodářský růst", "Hospodářského růstu", "Hospodářskému růstu", "Hospodářském růstu", "Hospodářským růstem", "Ekonomický růst", "Ekonomického růstu", "Ekonomickému růstu", "Ekonomickém růstu", "Ekonomickým růstem", "Práce", "Práci", "Prací", "Prize", "Krizi", "Krizí", "Úspěch", "Úspěchu", "Úspěchem", "Peníze", "Peněz", "Penězům", "Penězích", "Penězmi", "Předražené", "Předraženou", "Předražený", "Předraženými", "Zdarma", "Zadarmo", "Produktivita", "Produktivity", "Produktivitě", "Produktivitou", "Nezaměstnaní", "Nezaměstnaný", "Nezaměstnaná", "Nezaměstnané", "Reformy", "Reforem", "Reformám", "Reformách", "Reformami", "Škrty", "Škrtů", "Škrtům", "Škrtech", "Prosperita", "prosperity", "Prosperitě", "Prosperitou");

for (var j = 0; j < douvozovek.length; j++)
{
document.body.innerHTML = document.body.innerHTML.replace(douvozovek[j], "„" + douvozovek[j] + "“");
}

document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Česká republika", "g"), "Česká „republika“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("České republiky", "g"), "České „republiky“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("České republice", "g"), "České „republice“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Česká republiko", "g"), "Česká „republiko“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("Českou republikou", "g"), "Českou „republikou“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("evropský prezident", "g"), "evropský „prezident“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("evropského prezidenta", "g"), "evropského „prezidenta“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("evropský prezidente", "g"), "evropský „prezidente“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("evropském prezidentovi", "g"), "evropským „prezidentovi“");
document.body.innerHTML = document.body.innerHTML.replace(new RegExp("evropským prezidentem", "g"), "evropským „prezidentem“");