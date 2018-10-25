 <template>
    <div>
      <beehive />
    <div>

  <v-container fluid>
    <v-layout row>
      <v-flex>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Honeycomb</div>
          </v-card-title>
          <v-card-text>is the behavior organisms exhibit certain behaviors when traveling in groups. This phenomenon, also to seen in fish, birds and insects.</v-card-text>

          <v-card-media
            src='https://upload.wikimedia.org/wikipedia/commons/b/bc/Honeycomb-Process.png'
            height="300px"
          />
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex>
        <v-card>
          <v-card-title>
            <div class="headline">Convex Regular Polygons</div>
          </v-card-title>
          <v-card-media
            src='https://maxwelldemon.files.wordpress.com/2016/11/polyhedra.jpg?w=600&h=367'
            height="300px"
          />
          <v-card-text>Six equilateral triangles, four squares or three regular hexagons at a vertex, yielding the three regular tessellations.</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex>
        <v-divider />
        <v-card>
          <v-card-title>
              <h2>Hexagonal</h2>
          </v-card-title>
          <v-card-media
            src='https://user-images.githubusercontent.com/5538753/45207306-410f8f00-b2ba-11e8-88e6-aaa89b1f7054.png'
            height="300px"
          />
          <v-card-text>
            <ul>
              <li> Hexagonal structures are very strong. Honeycombs are usually constructed vertically (eg, up a wall) and so they must ve able to stand up firmly </li>
              <li>  the shared walls of each cell ensure that the downward physical stresses on the structure are spread evenly throughout </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-divider />
        <v-card>
          <v-card-title>
              <h2>Hexagonal</h2>
          </v-card-title>
          <v-card-media
            src='https://user-images.githubusercontent.com/5538753/45207306-410f8f00-b2ba-11e8-88e6-aaa89b1f7054.png'
            height="300px"
          />
          <v-card-text>
            <ul>
              <li> Hexagonal structures are very strong. Honeycombs are usually constructed vertically (eg, up a wall) and so they must ve able to stand up firmly </li>
              <li>  the shared walls of each cell ensure that the downward physical stresses on the structure are spread evenly throughout </li>
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

 //https://www.youtube.com/watch?v=cEIdeElMHhU
 // https://calculate.org.au/wp-content/uploads/sites/15/2016/02/Honeycombs-Hexagonal-Geometry-Answers.pdf
import Beehive from '../components/graphic/Beehive.vue'
export default {
  components: {Beehive},
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
