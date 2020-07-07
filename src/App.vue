<template>
  <div id="app">
    <nav>
      <router-link to="/">Main</router-link>
      <router-link to="/tree">Tree</router-link>
    </nav>
    <router-view :data="data" @updateData="updateData"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      data: {
        name: "root",
        selected: true,
        children: [
          {
            name: "item1",
            selected: true,
            children: [
              {
                name: "item3",
                selected: true,
                children: [],
              },
            ],
          },
          {
            name: "item2",
            selected: true,
            children: [],
          },
        ],
      },
    };
  },
  methods: {
    updateData(data) {
      this.data = data;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav a {
  padding: 20px;
}
</style>
