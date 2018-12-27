function shout(str) {
  return toUpperCase(str)
}

function whisper(str) {
  return toLowerCase(str)
}

function logShout(str) {
  console.log(toUpperCase(str))
}

function logWhisper(str) {
  console.log(toLowerCase(str))
}

function sayHiToGrandma(str) {
  if (str==toLowerCase(str)) return "I cqn't hear you!"
  if (str==toUpperCase(str)) return "YES INDEED!"
  if (str=="I love you, Grandma.") return "I love you, too."
}