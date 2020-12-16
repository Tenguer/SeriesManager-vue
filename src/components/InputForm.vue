<template>
  <div class="field">
    <label class="label">{{ inputValue.label.text }}</label>
    <p class="control">
      <input
        :type="inputValue.input.type"
        class="input"
        v-model="newSerie[inputValue.label.value]"
      />
    </p>
    <!-- <p class="error" v-if="error.type === false">
      {{ inputValue.error.text }}
    </p> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'InputForm',
  props: {
    inputValue: {
      type: Object,
      required: true
    },
    newSerie: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState('manager', ['error'])
  }
}
</script>

<style></style>
