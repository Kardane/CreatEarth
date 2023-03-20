// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.information', event => {
  event.add('wildbackport:echo_shard', ['이 수수께끼의 보석은 자수정과 연관이 있어 보입니다.', '하지만 어떻게 이런 모습이 되었을까요? 마치 안에 영혼이 갇혀있는 것 같습니다.'])
})