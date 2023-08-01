<template>
<h2></h2>
  <table>
    <tbody>
      <th colspan="2">{{ sectionTitle }}</th>
      <tr v-for="item in Object.entries(sectionDetails.details)" >
        <td>{{ item[0] }}</td>
        <td>{{ item[1] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">

const props = defineProps({
  sectionTitle: {
    type: String,
    required: true
  },
  sectionDetails: {
    type: Object,
    required: true
  }
})

</script>

<style scoped>

table {
  border-collapse: collapse;
  width: 100%;
}

th {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
}

td {
  text-align: left;
  padding: 8px;
  border-bottom: 1px solid #ddd;
  overflow-wrap: break-word;
}

/* td first-child border right */
td:first-child {
  border-right: 1px solid #ddd;
  width: 30%;
}

</style>