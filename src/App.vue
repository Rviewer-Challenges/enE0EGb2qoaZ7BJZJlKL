<template>
  <div id="app">
    <div class="container">
      <div class="row d-flex d-column mx-auto">
        <div class="col col-sm-9 col-md-6 col-lg-4 mx-auto fc-2">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background: #58409C !important;
  min-height: 100vh;
}
#app {
  font-family: CynGamer, Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
