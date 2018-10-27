 /* eslint-disable */
import {BEHANCE_HOST} from './config'
import axios from 'axios'

const fetchProjects = (options = {}) => {
  const {page, field, country = 'tw'} = options
  const params = { page, field, country}
  return axios.get(`${BEHANCE_HOST}/v2/projects?api_key=${BEHANCE_KEY}`, {params})
    .then(res => res.data.projects)
}

export default {fetchProjects}