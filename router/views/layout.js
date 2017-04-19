export default props => `
  <html>
    <head>
      <title>${props.title}</title>
    </head>
    <body>
      <div id="root">${props.content || ''}</div>
    </body>
  </html>
`
