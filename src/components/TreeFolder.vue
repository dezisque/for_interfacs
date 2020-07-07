<template>
  <div>
    <li class="tree-item" v-if="type !== 'list'"> <!-- передаю type, чтобы использвать один и тот же компонент для рандеринга списка и дерева -->
      <input type="checkbox" v-model="folder.selected" />
      {{ folder.name }}
      <ul v-if="folder.children && folder.children">
        <TreeFolder
          v-for="(child, index) in folder.children"
          :key="index"
          :folder="child"
        ></TreeFolder>
      </ul>
    </li>
    <p v-else-if="folder.selected"> <!-- иначе - обычный список -->
      <input type="checkbox" v-model="folder.selected" />
      {{ folder.name }}
      <TreeFolder
        v-for="(child, index) in folder.children"
        :type="type"
        :key="index"
        :folder="child"
      ></TreeFolder>
    </p>
  </div>
</template>

<script>
export default {
  name: "TreeFolder",
  props: ["folder", "type"],
};
</script>

<style scoped></style>
