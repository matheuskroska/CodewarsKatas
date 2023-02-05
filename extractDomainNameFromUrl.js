function domainName(url) {
  const domainRegex = /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\/\n]+)/im;
  const domainMatch = url.match(domainRegex);
  return domainMatch ? domainMatch[1].split(".")[0] : null;
}
