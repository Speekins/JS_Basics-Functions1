/*Building on your solutions from the previous exercises, write a function localGreet 
that takes a locale as input, and returns a greeting. The locale allows us to greet people from 
different countries differently also when they share the language.*/

/*extractLanguage = (string) => {
  return string.split('.')[0].split('_')[1];
}
extractLanguage('en_US.UTF-8');
extractLanguage('en_AU.UTF-16');
extractLanguage('fr_FR.UTF-2');
extractLanguage('en_GA.UTF-1');
extractLanguage('ja_JA.UTF-18');
extractLanguage('de_DE.UTF-5');
extractLanguage('cgg_CGG.UTF-15');


localGreet = (saying) => {
  switch (saying) {
    case 'US': return 'Howdy';
    case 'FR': return 'Bonjour';
    case 'GA': return 'Top of the morning';
    case 'JA': return 'Konnichiwa';
    case 'AU': return `G'day`;
    case 'DE': return 'Guten Tag';
    case 'CGG': return 'Ni Hao';
  }
};

console.log(localGreet(extractLanguage('ja_JA.UTF-18')))*/

extractRegion = (string) => {
  console.log(string.split('.')[0].split('_')[1]);
}

function localGreet(locale) {
  let region = extractRegion(locale);

  switch (region) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    default: return 'Greetings';
  }
}

localGreet('en_US.UTF-8');
localGreet('en_GB.UTF-8');
localGreet('en_AU.UTF-8'); 