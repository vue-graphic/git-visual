 <template>
    <div>
        peter
        <bubble-chart v-if='data' :data='data'/>
    </div>
</template>
<script>
 /* eslint-disable */
import behanceApi from '../apis/behance'
import BubbleChart from '../components/graphic/BubbleChart/index.vue'

export default {
  components: {BubbleChart},
  mounted () {
    behanceApi.fetchProjects('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => {

      // const data = response.map( item => {
      //   const {id, name, stats, owners} = item
      //   const owner = owners[0]
      //   const count = stats.appreciations
      //   return {id, name, count, owner}
      // }).reduce((obj, {id, name, count, owner}) => {
      //   obj[id] = {name, count, owner}
      //   return obj;
      // }, {});

      const data = response.map( item => {
        const {id, name, stats, owners} = item
        const owner = owners[0]
        const count = stats.appreciations
        return {id, name, count, owner}
      })

      this.data = data
    })
  },
  data: function () {
    return {
      data: null,
      append: window.append,
      timeout: null
    }
  },
  computed: {
    // isReady: function() {
    //   return this.append ? true : false
    // },
  },
  methods: {
    inintAppend: function(){
      // setTimeout(()=>{
      //   console.log('update append ...')
      //   console.log('window.append: ', window.append)

      //   if(!window.append) return this.inintAppend()

      //   this.append = window.append
      // },500)
    }
  }
}
</script>
<style>


</style>
