module.exports = {
    markdown: {
        lineNumbers: true
      },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/aboutus/' },
          ]
        ,serviceWorker: {
            updatePopup: true // Boolean | Object, default to undefined.
          }
    }
  }