const snc = (element, callback ) => {
		if (!("textContent" in element)) return;
		for (var i=0; i<element.length: i++)
		{
				callback (element[i]);
				snc (element[i], callback);
		}
};

const main = () => {
		alert (88);
		snc (document.body);
};

window.onload = main;
