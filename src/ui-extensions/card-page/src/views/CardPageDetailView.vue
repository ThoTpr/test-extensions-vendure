<template>
  <div class="card-popup-container p-button-sm">
    <div class="card-header">
      <div class="top">
        <h2>Card {{ cardDetails.details.number }}</h2>
        <div class="buttons-group">
          <Button @click="" :textContent="'Activer'" class="button success" />
          <Button @click="" :textContent="'Opposer'" class="button error" />
          <Button @click="" :textContent="'Opposer et créditer'" class="button warning" />
        </div>
      </div>
      <div class="bottom">
        <Button 
        class="history-button button link"
        @click="showHistory" :textContent="'Voir l\'historique'" />
        </div>
      </div>
    <div class="card-detail-container">
      <div class="card-detail-sections">
        <CardDetailSection :section-title="'Détails de la carte'" :sectionDetails="cardDetails"/>
        <CardDetailSection :section-title="'Détails d\'activation '" :sectionDetails="activationDetails"/>
        <CardDetailSection :section-title="'Détails d\'opposition'" :sectionDetails="oppositionDetails"/>
        <CardDetailSection :section-title="'Détails technique'" :sectionDetails="technicalDetails"/>
      </div>
    </div>
    </div>
  </template>

<script setup lang="ts">
import CardDetailSection from '@/components/card-detail/CardDetailSection.vue';
import Button from 'primevue/button'

const props = defineProps({
  selectedCardData: {
    type: Object,
    required: true,
  },
  cardDetails: {
    type: Object,
    required: true,
  },
  activationDetails: {
    type: Object,
    required: true,
  },
  oppositionDetails: {
    type: Object,
    required: true,
  },
  technicalDetails: {
    type: Object,
    required: true,
  }
})

const emit = defineEmits(['click:showHistory'])

const showHistory = () => {
  emit('click:showHistory')
}

</script>

<style scoped lang="scss">
@import "../assets/_variables.scss";
@import "../assets/_base.scss";

.card-popup-container {
  color: $color-text;
  .card-header {
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;

      h2 {
        margin: 0;
        margin-right: 10rem;
      }
      
      .buttons-group {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .button {
          margin-right: 1rem;
        }
      }
    }

    .bottom {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .history-button {
        margin-right: 1rem;
      }
    }
  }
}

</style>