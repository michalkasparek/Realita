(function (document) {

	var douvozovek = ["pravicová vláda", "pravicové vlády", "pravicové vládě", "pravicovou vládu", "pravicovou vládou", "hospodářský růst", "hospodářského růstu", "hospodářskému růstu", "hospodářském růstu", "hospodářským růstem", "ekonomický růst", "ekonomického růstu", "ekonomickému růstu", "ekonomickém růstu", "ekonomickým růstem", "práce", "práci", "prací", "krize", "krizi", "krizí", "úspěch", "úspěchu", "úspěchem", "úspěšný", "úspěšná", "úspěšní", "úspěšných", "peníze", "peněz", "penězům", "penězích", "penězmi", "předražené", "předraženou", "předražený", "předraženými", "zdarma", "zadarmo", "nezaměstnaný", "nezaměstnaní", "nezaměstnaná", "nezaměstnané", "recese", "recesi", "recesím", "reformy", "reforem", "reformám", "reformách", "reformami", "škrty", "škrtů", "škrtům", "škrtech", "prosperita", "prosperity", "prosperitě", "prosperitou", "Pravicová vláda", "Pravicové vlády", "Pravicové vládě", "Pravicovou vládu", "Pravicovou vládou", "Hospodářský růst", "Hospodářského růstu", "Hospodářskému růstu", "Hospodářským růstem", "Ekonomický růst", "Ekonomického růstu", "Ekonomickému růstu", "Ekonomickým růstem", "Práce", "Práci", "Prací", "Krize", "Krizi", "Krizí", "Úspěch", "Úspěchu", "Úspěchem", "Úspěšný", "Úspěšná", "Úspěšní", "Úspěšných", "Peníze", "Peněz", "Penězům", "Penězích", "Penězmi", "Předražené", "Předraženou", "Předražený", "Předraženými", "Zdarma", "Zadarmo", "Nezaměstnaní", "Nezaměstnaný", "Nezaměstnaná", "Nezaměstnané", "Reforma", "reforma", "reformou", "reformu", "reformě", "Reformou", "Reformu", "Reformě", "Reformy", "Reforem", "Reformám", "Reformách", "Reformami", "Škrty", "Škrtů", "Škrtům", "Škrtech", "Expert", "Experta", "Expertovi", "Expertem", "expert", "experta", "expertovi", "expertem", "experti", "Experti"];

	var replacements = {};

	for (var i = 0, l = douvozovek.length; i < l; i++) {
		replacements[douvozovek[i]] = "„" + douvozovek[i] + "“";
	}

	replacements["Česká republika"] = "Česká „republika“";
	replacements["České republiky"] = "České „republiky“";
	replacements["České republice"] = "České „republice“";
	replacements["Česká republiko"] = "Česká „republiko“";
	replacements["Českou republikou"] = "Českou „republikou“";
	replacements["evropský prezident"] = "evropský „prezident“";
	replacements["evropského prezidenta"] = "evropského „prezidenta“";
	replacements["evropský prezidente"] = "evropský „prezidente“";
	replacements["evropském prezidentovi"] = "evropským „prezidentovi“";
	replacements["evropským prezidentem"] = "evropským „prezidentem“";

	document.body.innerHTML = document.body.innerHTML.replace(/(\w+)/g, function (s, key) {
		/*
		if (replacements[key]) {
			console.log(s, "->", replacements[key]);
		}
		*/
		return replacements[key] || s;
	});

}(document));