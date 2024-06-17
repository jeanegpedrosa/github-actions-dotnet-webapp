// Importe a biblioteca "jsdom" para simular um ambiente de navegador
const { JSDOM } = require('jsdom');

// Carregue o conteúdo da página HTML para testar
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>text-center</title>
  </head>
  <body>
    <h1 id="title">Welcome</h1>
    <button id="button">Click Me</button>
  </body>
</html>
`;

// Crie um ambiente de documento usando o jsdom
const { window } = new JSDOM(html);
const { document } = window;

// Teste para verificar se o título da página é "text-center"
test('Page title should be "text-center"', () => {
  expect(document.title).toBe('text-center');
});

// Teste para verificar se o elemento <h1> possui o texto correto
test('Heading should display "Welcome"', () => {
  const heading = document.getElementById('title');
  expect(heading.textContent).toBe('Welcome');
});
