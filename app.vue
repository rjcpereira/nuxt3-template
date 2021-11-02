<template>
  <div>
    <top-bar/>
    <main>
      <nuxt-child/>
    </main>
  </div>
</template>

<script>
import '@/styles/reset.scss'

import state, { title } from '@/state'

export default {
  head() {
    return {
      title
    };
  },
  data: () => ({
    state,
    delay: null,
    bypass: null
  }),
  methods: {
    close() {
      this.state.menu = false;
    }
  }
}
</script>