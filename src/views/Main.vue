<template>
  <div>
    <TreeFolder :folder="data" type="list"></TreeFolder>
  </div>
</template>

<script>
import TreeFolder from "@/components/TreeFolder";
export default {
  name: "Main",
  props: ["data"],
  components: { TreeFolder },
};
</script>

<style scoped></style>
