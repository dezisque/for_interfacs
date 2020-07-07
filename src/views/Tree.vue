<template>
  <div>
    <ul class="tree">
      <li><TreeFolder :folder="data"></TreeFolder></li>
    </ul>
  </div>
</template>

<script>
import TreeFolder from "@/components/TreeFolder";
export default {
  name: "Tree",
  components: {
    TreeFolder,
  },
  props: ["data"],
  beforeRouteLeave(to, from, next) {
    this.$emit("updateData", this.data);
    next();
  },
};
</script>

<style>
li {
  list-style: none;
}
</style>
