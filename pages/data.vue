<template>
  <v-container>
    <CollectionText />
  </v-container>
</template>

<script>
import CollectionText from '~/plugins/firebaseConfig.js'
import 'firebase/app'
export default {
  data () {
    return {
      // eslint-disable-next-line no-undef
      CollectionText
    }
  }
}
</script>

<style></style>
