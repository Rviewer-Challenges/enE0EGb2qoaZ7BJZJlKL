module.exports = {
    publicPath: '/MemoryGame/',

    pwa: {
      name: 'MemoryGame',
      themeColor: '#58409C',
      msTileColor: '#58409C',
      manifestOptions: {
        background_color: '#58409C'
      }
    },

    chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Memory Game";
              return args;
          })
  }
}