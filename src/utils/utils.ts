export function getRatingWidth(rating: number) {
  return `${(rating / 5) * 100}%`;
}


export function upFirstSign(word: string) {
  if (!word) {
    return word;
  }
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
}


export function getBedroomString(count: number) {
  return `${count} Bedroom ${count > 1 ? 's' : ''}`;
}

export function getAdultString(count: number) {
  return `Max ${count} adult ${count > 1 ? 's' : ''}`;
}
