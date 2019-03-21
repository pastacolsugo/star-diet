if (process.argv.length == 3 && process.argv[2] == 'help') {
	console.log("Calcola la gravita' sulla superficie di un qualunque oggetto.\n");
	console.log("Uso:\n\t> \033[1mnode calculate-surface-g.js help\033[0m\n\t\tStampa questo messaggio d'aiuto.");
	console.log("\n\t> \033[1mnode calculate-surface-g.js M R [no-g]\033[0m");
	console.log("\t\tCalcola la gravita' di un corpo con massa \033[1mM\033[0m kg a una distanza di \033[1mR\033[0m metri.");
	console.log("\t\tIl parametro opzionale \"no-g\" stampa il risultato in metri/secondo^2.");
	console.log("\nInserire i parametri senza unita' di misura.");
	console.log("Per numeri grandi si puo' usare la notazione scientifica, tipo: 3.14e2 = 314");
}

if (process.argv.length == 4 || process.argv.length == 5) {
	var mass = Number(process.argv[2]);
	var radius = Number(process.argv[3]);

	console.log("mass = " + mass + "kg");
	console.log("radius = " + radius + "m");

	const G = 6.62e-11;
	const gUnit = 9.81;

	var gravity = (G * mass) / (radius * radius);

	if (process.argv.length == 5 && process.argv[4] == "no-g") {
		console.log("\033[1msurface gravity\033[0m: " + gravity + " ms^-2");
	} else {
		var g = (gravity / gUnit).toPrecision(4);

		console.log("\033[1msurface gravity\033[0m: " + g + " g");
	}
}