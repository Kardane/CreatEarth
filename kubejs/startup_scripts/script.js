// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	event.create('example_item',"basic")
	event.create('recovery_compass',"basic").displayName('메아리 나침판').unstackable().rarity("rare")
	event.create('warden_heart',"basic").displayName('워든의 심장').unstackable().rarity("rare").tooltip('§3영혼들의 울부짖음이 들리는 단단한 심장이다...')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent('block.modification', event => {
	event.modify('wildbackport:sculk', block => {
	  block.material(`stone`)
	})
})