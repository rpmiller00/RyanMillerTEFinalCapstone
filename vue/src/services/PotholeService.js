import axios from 'axios';

export default {

  addPothole(pothole) {
    return axios.post('/reportPothole', pothole);
  },
  getPotholeList() {
    return axios.get('/getAllPotholes');
  },
  getDeletedPotholeList(){
    return axios.get('/getAllDeletedPotholes');
  },
  updatePothole(pothole) {
    return axios.put('/updatePothole/', pothole);
  },
  deletePothole(potholeId) {
    return axios.delete(`/deletePothole/${potholeId}`);
  }

}
