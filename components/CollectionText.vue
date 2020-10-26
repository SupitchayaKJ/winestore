<template>
  <div>
    <v-card
      v-for="(item, key) in textList"
      :key="key"
      class="pa-2"
      outlined
      tile
    >
      <v-row>
        <v-col>
          {{ item.Name }}
        </v-col>
        <v-col>
          {{ item.price }}
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { db } from '~/plugins/firebaseConfig.js'

export default {
  data () {
    return {
      textList: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      db.collection('MyText')
        .orderBy('timestamp')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.textList = data
        })
    }
  }
}
</script>

<style></style>
