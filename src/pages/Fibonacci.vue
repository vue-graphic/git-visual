 <template>
    <div>
      <fibonacci />
    <div>

    <v-container fluid>
      <v-layout row>
        <v-flex>
          <v-card>
            <v-card-title primary-title>
              <div class="headline">Fibonacci Number</div>
            </v-card-title>
            <v-card-text> is a series of numbers where a number is found by adding up the two numbers before it. Starting with 0 and 1, the sequence goes 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so forth.</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>


      <v-layout row wrap>
          <v-flex xs12 sm12 md6 >
            <v-card>
              <v-card-media
                src='https://i.pinimg.com/originals/32/d7/47/32d747bea24f4756dc4c5ffe61b36efd.jpg'
                height="300px"
              />
            </v-card>
          </v-flex>
          <v-flex  xs12 sm12 md6 >
            <v-card>
              <v-card-text>The spiral curve of the Nautilus sea shell follows the pattern of a spiral drawn in a Fibonacci rectangle.</v-card-text>
            </v-card>
          </v-flex>
        </v-card>
      </v-layout>

    </v-container>

      </div>
    </div>
</template>
<script>
 /* eslint-disable */
import Fibonacci from '../components/graphic/Fibonacci.vue'
export default {
  components: {Fibonacci},
  mounted() {
  },
  data: function(){
    return {}
  },
  computed: {
  },
  methods: {
  }
}
</script>
<style>


</style>
