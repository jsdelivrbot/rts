// ### running the game ###

var game = new Game('container');
game.addNode('node0', new Node(0, 0, new Map(), 1));
game.addNode('node2', new Node(5, 0, new Map(), 2));
game.addNode('node1', new Node(10, 20, new Map([
	['a', 0],
	['b', Math.PI/6],
	['c', 1],
]), 10));
game.addConnection(0, 'node0', 'node1', 10000, 0.3);
game.addConnection(2, 'node1', 'node0', 10000, 0.3);
game.addConnection(1, 'node1', 'node2', 10000, 1);
game.canvas.draw();


setInterval(
	() => {
		game.updateMovements(0, Date.now(), [
			{width: Math.random() / 5, color: rgb2str(HSVtoRGB(Math.random(), 1, 1))},
			{width: Math.random() / 5, color: rgb2str(HSVtoRGB(Math.random(), 1, 1))},
		]);
		game.updateUnits('node1', [
			{amount: Math.random() * 2, color: rgb2str(HSVtoRGB(Math.random(), 1, 1))},
			{amount: Math.random() * 2, color: rgb2str(HSVtoRGB(Math.random(), 1, 1))},
			{amount: Math.random() * 2, color: rgb2str(HSVtoRGB(Math.random(), 1, 1))},
			{amount: Math.random() * 2, color: rgb2str(HSVtoRGB(Math.random(), 1, 1))},
			{amount: Math.random() * 2, color: rgb2str(HSVtoRGB(Math.random(), 1, 1))},
		]);
	},
	4000,
);
