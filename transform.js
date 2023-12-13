// transform.js
export default function transformer(file, api) {
  const j = api.jscodeshift;
  return j(file.source)
    .find(j.CallExpression, {
      callee: { type: 'Identifier', name: 'require' },
    })
    .replaceWith(p => {
      return j.importDeclaration(
        [j.importDefaultSpecifier(j.identifier(p.value.arguments[0].value))],
        j.literal(p.value.arguments[0].value)
      );
    })
    .toSource();
};