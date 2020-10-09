<template>
  <v-form v-model="valid">
    <v-container>
      <v-card>
        <h1 align="center">
          Login Wine
        </h1>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-text-field
              v-model="name"
              :rules="rules"
              hide-details="auto"
              label="name"
              required
              filled
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="lastname"
              :rules="rules"
              hide-details="auto"
              label="lastname"
              required
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="manu"
              :rules="rules"
              hide-details="auto"
              label="E-mail"
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6">
            <v-text-field
              v-model="Password"
              :rules="rules"
              hide-details="auto"
              label="Password"
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="success"
                dark
                v-bind="attrs"
                v-on="on"
                @click="validate"
              >
                Commit
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline">
                Successfully login.Have fun choosing Wine.
              </v-card-title>
              <v-divider />
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  ยืนยัน
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
        <br>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      math: '2',
      name: '',
      lastname: '',
      Email: '',
      Password: '',
      rules: [
        value => !!value || 'Required.'
      ],
      checkin: new Date().toISOString().substr(0, 10),
      checkout: new Date().toISOString().substr(0, 10),
      menu: false,
      items: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10'
      ],
      dialog: false
    }
  },
  computed: {
    ...mapGetters(['data'])
  },
  methods: {
    validate () {
      const name = this.name
      const Brand = this.Brand
      const typewine = this.typewine
      const Price = this.Price
      const Alcohol = this.Alcohol
      const Contry = this.Contry
      const Palate = this.Palate
      const Sold = this.Sold4
      this.$store.commit('input', {
        name,
        Brand,
        typewine,
        Price,
        Alcohol,
        Contry,
        Palate,
        Sold
      })
    }
  }
}
</script>

<style>
.theme--dark.v-application {
  background-image: url("https://blog.jordanwinery.com/wp-content/uploads/2017/06/2016-12-7-Steak-and-Wine-Pairing-Advice-Cabernet-Sauvignon-Beef-Pairing-Valette-Blog-Size-9304.jpg");
  background-attachment: fixed;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.v-card{
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 18px;
  background-color: beige;
}
</style>
