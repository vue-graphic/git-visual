 <template>
    <div>
      <voronoi />
    <div>

  <v-container fluid>
    <v-layout row>
      <v-flex>
        <v-card>
          <v-card-title primary-title>
            <div class="headline">Voronoi Diagram</div>
          </v-card-title>
          <v-card-text>Voronoi diagram is a way of dividing space into a number of regions.</v-card-text>

          <v-card-media
            src='http://i282.photobucket.com/albums/kk273/BruceDSTaylor/Voronoi/voronigiraffe.jpg'
            height="300px"
          />
          <v-card-text> Each cell in the diagram encloses a particular site, and the surface of the cell contains all the points on the pl ane that are closer to that site than to any other.</v-card-text>
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
 // http://forum.woodenboat.com/showthread.php?112363-Voronoi-Diagrams-in-Nature
//  http://spring-of-mathematics.tumblr.com/post/85519358219/the-beauty-of-voronoi-diagram-in-nature-how
import Voronoi from '../components/graphic/Voronoi.vue'
export default {
  components: {Voronoi},
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
