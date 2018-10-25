 <template>
    <div>
      <flocking />
    <div>

  <v-container fluid>
    <v-layout row>
      <v-flex>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Flocking behavior</div>
          </v-card-title>
          <v-card-text>is the behavior organisms exhibit certain behaviors when traveling in groups. This phenomenon, also to seen in fish, birds and insects.</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
          <v-flex xs12 sm12 md6 >
            <v-card>
              <v-card-media
                src='https://i.kinja-img.com/gawker-media/image/upload/s--usj3b0wY--/c_fit,fl_progressive,q_80,w_636/ve69bswtlq7vqih5qrb1.gif'
                height="300px"
              />
            </v-card>
          </v-flex>
          <v-flex  xs12 sm12 md6 >
            <v-card>
              <v-card-text>is the behavior organisms exhibit certain behaviors when traveling in groups. This phenomenon, also to seen in fish, birds and insects.</v-card-text>
            </v-card>
          </v-flex>
        </v-card>
    </v-layout>

    <v-layout row>
      <v-flex>
        <v-divider />
        <v-card>
          <v-card-title>
              <h2>3 Main Rules</h2>
          </v-card-title>
          <v-card-text>
            is the behavior organisms exhibit certain behaviors when traveling in groups. This phenomenon, also to seen in fish, birds and insects.
          </v-card-text>
          <v-card-text>
            <ul>
              <li> Alignment: steer towards the average heading of local flockmates </li>
              <li> Separation: steer to avoid crowding local flockmates </li>
              <li> Cohesion: steer to move toward the average position of local flockmates </li>
            </ul>
          </v-card-text>
        </v-card>
        
      </v-flex>
    </v-layout>
  </v-container>

      </div>
    </div>
</template>
<script>
 /* eslint-disable */
 // http://www.red3d.com/cwr/boids/
 // https://gamedevelopment.tutsplus.com/tutorials/3-simple-rules-of-flocking-behaviors-alignment-cohesion-and-separation--gamedev-3444
import Flocking from '../components/graphic/Flocking.vue'
export default {
  components: {Flocking},
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
