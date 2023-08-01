<template>
  <table class="history-table">
    <tbody>
      <tr class="column-titles" rowspan="2">
        <th class="title">Action</th>
        <th class="title">Date</th>
        <th class="title">Montant</th>
        <th class="title">Localisation</th>
      </tr>
      <tr v-for="item in props.history">
        <td class="data">{{ item.event || '-' }}</td>
        <td class="data">{{ formatDate(item.date, "DMYHm") || '-' }}</td>
        <td class="data">{{ formatAmount(item.amount) || '-' }}</td>
        <td class="data">{{ item.location? item.location: null || '-' }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { formatAmount } from '@/common/utils/formatAmount';
import { formatDate } from '@/common/utils/formatDate';
const props = defineProps(['history'])
</script>

<style scoped>

.history-table {
  width: 100%;
  .column-titles {
    .title {
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    .data {
      text-align: left;
      padding: 8px;
      border-bottom: 1px solid #ddd;
      overflow-wrap: break-word;
    }
  }
}

</style>