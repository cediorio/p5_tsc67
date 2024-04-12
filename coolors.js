const coolors = [{
	"name": "Silver Lake Blue",
	"hex": "6290c3",
	"rgb": [98, 144, 195],
	"cmyk": [50, 26, 0, 24],
	"hsb": [212, 50, 76],
	"hsl": [212, 45, 57],
	"lab": [58, -1, -31]
}, {
	"name": "Mint green",
	"hex": "c2e7da",
	"rgb": [194, 231, 218],
	"cmyk": [16, 0, 6, 9],
	"hsb": [159, 16, 91],
	"hsl": [159, 44, 83],
	"lab": [89, -15, 2]
}, {
	"name": "Honeydew",
	"hex": "f1ffe7",
	"rgb": [241, 255, 231],
	"cmyk": [5, 0, 9, 0],
	"hsb": [95, 9, 100],
	"hsl": [95, 100, 95],
	"lab": [98, -9, 10]
}, {
	"name": "Space cadet",
	"hex": "1a1b41",
	"rgb": [26, 27, 65],
	"cmyk": [60, 58, 0, 75],
	"hsb": [238, 60, 25],
	"hsl": [238, 43, 18],
	"lab": [12, 13, -24]
}, {
	"name": "Golden brown",
	"hex": "8b6220",
	"rgb": [139, 98, 32],
	"cmyk": [0, 29, 77, 45],
	"hsb": [37, 77, 55],
	"hsl": [37, 63, 34],
	"lab": [45, 10, 42]
}]

const get_coolor = (name)=> {
	return '#' + coolors.find((e)=> e.name === name).hex;
} 

const get_coolors = ()=> {
	return coolors.map((e)=> '#'+e.hex);
}
