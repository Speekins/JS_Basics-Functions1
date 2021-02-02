/*Similar to the previous exercise, now write a 
function that extracts the region code from a locale.*/


extractRegion = (string) => {
  console.log(string.split('.')[0].split('_')[1]);
}

extractRegion('en_US.UTF-8');
extractRegion('en_GB.UTF-8');
extractRegion('ko_KR.UTF-16'); 