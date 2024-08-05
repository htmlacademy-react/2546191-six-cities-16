
export function getShortFromat(date:string):string {
  return date.slice(0,10);
}

export function getTextFromat(date:string):string {
  return new Date(date).toLocaleString('en-US', { month: 'long',year: 'numeric'});
}
