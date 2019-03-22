const gravity = {
	earth: '1',
	mars: '0.37',
	moon: '0.16',
	venus: '0.9',
	mercury: '0.38',
	sun: '27.77',
	jupiter: '2.52',
	saturn: '1.065',
	pluto: '0.063',
	uranus: '0.886',
	neptune: '1.14',
	neutronStar: '1.2e11'
};

for (let planet in gravity) {
	console.log(planet + ' ' + gravity[planet]);
}