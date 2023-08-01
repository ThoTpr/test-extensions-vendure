<template>
  <Dialog :visible="showHistory" 
  header="Historique de la carte"
  @update:visible="toggleHistory" 
  modal 
  :dismissable-mask="true" 
  :style="{ width: '50vw' }" >
      <CardHistorySection :history="history"/>
  </Dialog>
  <OverlayPanel v-if="selectedCardId" ref="op">
    <CardPageDetailView @click:show-history="toggleHistory" :showHistory="showHistory" :selected-card-data="selectedCardData" :card-details="cardDetails" :opposition-details="oppositionDetails" :technical-details="technicalDetails" :activation-details="activationDetails" />
  </OverlayPanel>
  <CardsList v-if:loading="!loading" :customerId="slug" :cards="cards" :cardsListParams="cardsListParams" :loading="loading" @update:sortParams="updateSortParams" 
    @update:numberOfRows="setNumberOfRows"
    @udpate:pageNumber="updatePage"
    @select:card="setSelectedCardId"
    :currentPageReportTemplate="getPageReportTemplate()"/>
</template>

<script setup lang="ts">
import CardsList from '@/components/cards-list/CardsList.vue';
import { GiftCardService } from './service/gift-card.service';
import { getActivatedRoute } from '@vendure/ui-devkit';
import { ref, onBeforeMount, reactive, onMounted, watch } from 'vue';
import CardPageDetailView from './CardPageDetailView.vue';
import OverlayPanel from 'primevue/overlaypanel'
import Dialog from 'primevue/dialog';
import { formatDate } from '@/common/utils/formatDate';
import { formatAmount } from '@/common/utils/formatAmount';
import type { GiftCardDetail } from '@/common/types/gift-card-detail';
import CardHistorySection from '@/components/card-detail/CardHistorySection.vue';
import type { GiftCardHistory } from '@/common/types/gift-card-history';
 
const slug = ref();
const getSlug = () => getActivatedRoute().then((route) => route.params.slug)
const cards = ref<any[]>([])
const loading = ref(true)
const selectedCardId = ref<number>(0)
const cardsListParams = reactive({
  totalItems: 0,
  currentPage: 0,
  numberOfRows: 5
})
const cardsSortParams = reactive<{ [x: string]: string; }[]>([])
const cardsFiltersParams = {
  customerId: slug.value,
  status: null,
}
const op = ref<any>(null)
const showHistory = ref<boolean>(false)

const selectedCardData = reactive({details: {
} as any, history: {} as any})
const cardDetails = reactive({details: {} as any})
const activationDetails = reactive({details: {} as any})
const oppositionDetails = reactive({details: {} as any})
const technicalDetails = reactive({details: {} as any})

const history = ref<GiftCardHistory[]>([])


onBeforeMount(async () => {
  slug.value = await getSlug()
})

onMounted(() => {
  getPaginatedCards(cardsListParams, cardsSortParams, cardsFiltersParams)
})

watch([cardsListParams, cardsSortParams], () => {
  getPaginatedCards(cardsListParams, cardsSortParams)
})

watch([selectedCardId], () => {
  getCardWithDetails()
})

const updateSortParams = (value: any) => {
  cardsSortParams.length = 0
  value.multiSortMeta.map((sort: any) => {
    cardsSortParams.push({[sort.field]: sort.order === 1 ? 'ASC' : 'DESC'
  })})
} 

const updatePage = (value: any) => {
  cardsListParams.currentPage = value.page;
  cardsListParams.numberOfRows = value.rows;
}

const getCardWithDetails = async () => {
  selectedCardData.details = await GiftCardService.getGiftCardById(selectedCardId.value).then((data:any) => formatCardDetailData(data))
  cardDetails.details = {
    number: selectedCardData.details.id,
    type: selectedCardData.details.type,
    status: selectedCardData.details.status,
    buyerId: selectedCardData.details.buyerId,
    remainingAmount: selectedCardData.details.remainingAmount,
  }

  activationDetails.details = {
    plannedActivationDate: selectedCardData.details.plannedActivationDate,
    activatedAt: selectedCardData.details.activatedAt,
    initialAmount: selectedCardData.details.initialAmount,
  }

  oppositionDetails.details = {
    opposedAt: selectedCardData.details.opposedAt,
    amountAtOpposition: selectedCardData.details.amountAtOpposition,
  }

  technicalDetails.details = {
    createdAt: selectedCardData.details.createdAt,
    updatedAt: selectedCardData.details.updatedAt,
    lastTestSync: selectedCardData.details.lastTestSync,
  }
}

const getPaginatedCards = async (cardsListParams: any, cardsSortParams?: any, cardsFiltersParams?: any) => {
  GiftCardService.getCardListData(cardsListParams, cardsSortParams, await getSlug()).then((data) => {
    cards.value = data.items
    cardsListParams.totalItems = data.totalItems, 
    cardsListParams.currentPage = data.currentPage,
    loading.value = false
  })
}

const getPageReportTemplate = () => {
  return `${cardsListParams.currentPage * cardsListParams.numberOfRows + 1} - ${(cardsListParams.currentPage * cardsListParams.numberOfRows + cardsListParams.numberOfRows) <= cardsListParams.totalItems ? cardsListParams.currentPage * cardsListParams.numberOfRows + cardsListParams.numberOfRows : cardsListParams.totalItems} sur ${cardsListParams.totalItems}`
}

const setNumberOfRows = (value: number) => {
  cardsListParams.numberOfRows = value
}


const setSelectedCardId = (event: any) => {
  selectedCardId.value = event.data.id
  toggle(event.originalEvent)
}

const toggle = (event: PointerEvent) => {
  op.value.toggle(event)
}

const toggleHistory = async () => { 
  history.value = await GiftCardService.getCardHistory(selectedCardId.value)
  showHistory.value = !showHistory.value;
}


//TODO: refacto
const formatCardDetailData = (cardDetailData: GiftCardDetail) => ({
    ...cardDetailData,
    expirationDate: formatDate(cardDetailData.expirationDate),
    opposedAt: formatDate(cardDetailData.opposedAt as Date),
    createdAt: formatDate(cardDetailData.createdAt),
    updatedAt: formatDate(cardDetailData.updatedAt),
    activatedAt: formatDate(cardDetailData.activationDate),
    lastTestSync: formatDate(cardDetailData.lastTestSync),
    plannedActivationDate: formatDate(cardDetailData.plannedActivationDate),
    initialAmount: formatAmount(cardDetailData.initialAmount),
    remainingAmount: formatAmount(cardDetailData.cardBalance),
    amountAtOpposition: formatAmount(cardDetailData.amountAtOpposition)
  })

</script>

<style scoped>
</style>