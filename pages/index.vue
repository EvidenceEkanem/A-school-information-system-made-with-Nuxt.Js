<template>
    <div>
      <Add />
      <Navbar />
    <div class="container mb-5">
    <b-button @click="$bvModal.show('modal-1')"  class="btn btn-success float-right">
      <i class="fas fa-user-plus"></i>
            Add Student
    </b-button>

      <h3 class="text-left">List of Students</h3>
      <h5 class="text-left">We have a total of <span class="badge badge-dark">{{ allStudents.length }}</span> students</h5>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-3" v-for="student in allStudents" :key="student._id">
          <div class="card text-center">
            <div class="card-header bg-white">
              <span class="float-left text-primary ">{{ student.first_name }} {{ student.last_name }}</span>
              <span class="float-right text-muted">
                <i class="fas fa-chevron-down"></i>
              </span>
            </div>
            <div class="card-body">
              <p class="card-text text-justify">is from {{ student.state}} and is studying <b>{{ student.department}}</b> at the <b>{{ student.institution}}</b></p>
            </div>
            <div class="card-footer text-primary">
              <nuxt-link :to="'/view/'+student._id" class="view">
                <i class="fas fa-eye"></i>
                <span class="ml-3">View</span>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from '../components/Navbar.vue'
import Add from '../components/Add.vue'


export default {
  components: {
    Navbar,
    Add
  },
   data() {
        return {
            editStudent: false,
        }
    },
  methods: {
    ...mapActions(['fetchStudents'])
  },
  computed: 
    mapGetters(["allStudents"])
  ,
  created() {
    this.fetchStudents()
  }
}
</script>
