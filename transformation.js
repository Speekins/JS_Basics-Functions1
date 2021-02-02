//Use JavaScript's string methods on the string 'Captain Ruby' to produce the string 'Captain JavaScript'.

let superhero = 'Captain Ruby';

transform = (name) => {
  return name.slice(0, 8) + " " + 'Javascript';
}

console.log(transform(superhero));