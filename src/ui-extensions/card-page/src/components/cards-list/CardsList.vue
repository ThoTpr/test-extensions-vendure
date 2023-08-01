
<template>
  <DataTable :value="props.cards" 
  selection-mode="single" 
  sortMode="multiple"
  tableStyle="min-width: 50rem" 
  :globalFilterFields="['id', 'carrierId', 'expirationDate', 'initialAmount', 'remainingAmount', 'status']"
  @sort="(value: any) => $emit('update:sortParams', value)"
  @update:rows="(value: any) => $emit('update:numberOfRows', value)"
  @page="(value: any) => $emit('udpate:pageNumber', value)"
  @row-click="(value: any) => $emit('select:card', value)"
  :rows="props.cardsListParams.numberOfRows" 
  :rowsPerPageOptions="[5, 10, 15, 20, 50]" 
  :loading="props.loading"
  :totalRecords="props.cardsListParams.totalItems"
  :currentPage="props.cardsListParams.currentPage"
  :currentPageReportTemplate="props.currentPageReportTemplate"
  :page="props.cardsListParams.currentPage"
  dataKey="id"
  lazy
  paginator 
  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink JumpToPageDropdown"
  >
    <template #empty> Aucune carte n'a été trouvée pour ce client. </template>
    <template #loading> Loading customers data. Please wait. </template>
    <Column field="id" header="Numéro" sortable></Column>
    <Column field="buyerId" header="Acheteur" sortable></Column>
    <Column field="carrierId" header="Porteur" sortable></Column>
    <Column field="expirationDate" header="Date d'expiration" dataType="date" sortable>
      <template #body="{ data }">
        {{ formatDate(data.expirationDate) }}
      </template>
    </Column>
    <Column field="initialAmount" header="Montant initial" sortable>
      <template #body="{ data }">
        {{ formatAmount(data.initialAmount) }}
      </template>
    </Column>
    <Column field="remainingAmount" header="Montant restant" sortable>
      <template #body="{ data }">
        {{ formatAmount(data.remainingAmount) }}
      </template>
    </Column>
    <Column field="status" header="Statut" sortable>
      <template #body="{ data }">
        {{ data.status ?? "N/A" }}
      </template>
    </Column>
  </DataTable>
</template>


<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { formatDate } from '@/common/utils/formatDate';
import { formatAmount } from '@/common/utils/formatAmount';
const props = defineProps({
  customerId: {
    type: String,
    required: false,
  },
  cards: {
    type: Array<any>,
    required: true,
  },
  cardsListParams: {
    type: Object,
    required: true,
  },
  loading: {
    type: Boolean,
    required: true,
  },
  currentPageReportTemplate: {
    type: String,
    required: true,
  }
})

defineEmits(['update:sortParams', 'update:numberOfRows', 'udpate:pageNumber', 'select:card'])


const goToDetailPage = (selectedCard: any) => {
  console.log(selectedCard.data)
}

</script>


<style scoped></style>@/common/utils/formatDate