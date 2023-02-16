export function getPath(parent: string, subPath: string, name: string, extension: string) {
  return `src/${parent}${subPath}{{pascalCase name}}/${name}${extension}`;
}

export function getPathFunc(parent = 'components', subPath = '/') {
  return (extension: string, name = '{{pascalCase name}}') => getPath(parent, subPath, name, extension);
}
