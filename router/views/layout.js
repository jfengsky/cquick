export default props => `
  <html>
    <head>
      <title>${props.title}</title>
    </head>
    <body>
      <div id="root">${props.content || ''}</div>
      <script src="/static/vendor.js"></script>
      <script src="/static/bundle.js"></script>
      <script>
        window.__INITSTATE__ = {}
      </script>
    </body>
  </html>
`
