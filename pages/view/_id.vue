<template>
<div>
    <Navbar />
    <div class="container" >
        <div class="row">
            <div class="col-6">
                <h3 class="h3">
                    View Details: {{students.first_name}} {{students.last_name}}
                    <button 
                    class="btn btn-warning"
                    v-if="!editStudent"
                    @click="editAStudent()">
                        Edit
                        <i class="fas fa-edit"></i>
                    </button>

                </h3>
            </div>
            
            <div class="col-6">
                <div class="d-flex justify-content-end">
                <button 
                class="btn btn-primary"
                v-if="editStudent"
                @click="editAStudent()">
                    Return
                </button>
                    <nuxt-link v-if="!editStudent" :to="'/'" class="btn btn-primary mr-2">
                        <i class="fas fa-bars"></i>
                        List Students
                    </nuxt-link>
                </div>
            </div>
            
        </div>
        <div class="row">
            <div class="col-6">
                <b-table-simple>
                    <b-tbody v-if="!editStudent">
                        <b-tr>
                            <b-th scope="col">First Name</b-th>
                            <b-td scope="col" >{{ students.first_name }}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-th scope="col">Last Name</b-th>
                            <b-td scope="col">{{ students.last_name }}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-th scope="col">Gender</b-th>
                            <b-td scope="col">{{ students.gender }}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-th scope="col">Date of Birth</b-th>
                            <b-td scope="col">{{ students.dob }}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-th scope="col">Email</b-th>
                            <b-td scope="col">{{ students.email }}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-th scope="col">Phone Number</b-th>
                            <b-td scope="col">{{ students.phone }}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-th scope="col">State</b-th>
                            <b-td scope="col">{{ students.state }}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-th scope="col">Marital Status</b-th>
                            <b-td scope="col">{{ students.marital_status }}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-th scope="col">Institution</b-th>
                            <b-td scope="col">{{ students.institution }}</b-td>
                        </b-tr>
                        <b-tr>
                            <b-th scope="col">Department</b-th>
                            <b-td scope="col">{{ students.department }}</b-td>
                        </b-tr>
                        
                        <b-tr>
                            <b-th></b-th>
                            <b-td>
                                <div class="d-flex justify-content-end">
                                    <button @click.prevent="deleteStudent(students._id)" class="btn btn-danger">
                                        <i class="fas fa-trash-alt"></i>
                                        Delete
                                    </button>
                                </div>
                            </b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>

                <form @submit.prevent="updateStudent" v-if="editStudent">
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label font-weight-bold">First Name</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" v-model="student.first_name">                                    
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label font-weight-bold">Last Name</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" v-model="student.last_name">                                                                        
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label font-weight-bold">Gender</label>
                                <div class="col-sm-9">
                                     <select class="form-control" v-model="student.gender">
                                        <option value="Male" selected="student.gender == Male">Male</option>
                                        <option value="Female" selected="student.gender == Female">Female</option>
                                    </select>                                                                       
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label font-weight-bold">Date of Birth</label>
                                <div class="col-sm-9">
                                    <input type="date" class="form-control" v-model="student.dob">                                                                                                         
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label font-weight-bold">Email</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control" v-model="student.email">                                                                                                                                           
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label font-weight-bold">Phone Number</label>
                                <div class="col-sm-9">
                                    <input type="number" class="form-control" v-model="student.phone">                                                                                                                                                                              
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label font-weight-bold">State</label>
                                <div class="col-sm-9">
                                    <select v-model="student.state" class="form-control">
                                        <option v-for="state in allStates" :key="state.id" :value="state.name">{{ state.name }}</option>                                        
                                    </select>                                                                                                                                                                             
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label font-weight-bold">Marital Status</label>
                                <div class="col-sm-9">
                                    <select v-model="student.marital_status" class="form-control">
                                            <option selected="student.marital_status == Single" value="Single">Single</option>
                                            <option selected="student.marital_status == Married" value="Married">Married</option>
                                    </select>                                                                                                                                                                            
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label font-weight-bold">Institution</label>
                                <div class="col-sm-9">
                                    <select v-model="student.institution" class="form-control">
                                        <option v-for="institution in allInstitutions" 
                                        :key="institution.id" 
                                        :value="institution.name"
                                        >{{ institution.name }}</option>                                                                                
                                    </select>                                                                                                                                                                            
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <label class="col-sm-3 col-form-label font-weight-bold">Department</label>
                                <div class="col-sm-9">
                                     <select v-model="student.department" class="form-control">
                                        <option v-for="department in allDepartments" 
                                        :key="department.id" 
                                        :value="department.name"
                                        >{{department.name}}</option>                                        
                                    </select>                                                                                                                                                                        
                                </div>
                            </div>
                            <hr>
                            <div class="form-group row">
                                <div class="col-sm-3"></div>
                                <div class="col-sm-9">
                                    <div class="d-flex justify-content-end">
                                        <button class="btn btn-primary">
                                            <i class="fa fa-save"></i>
                                            Save and Update
                                        </button>
                                    </div>                                                                                                                                                                       
                                </div>
                            </div>
                  </form>
                
            </div>
            <div class="col-6"></div>
        </div>
    </div>
</div>
</template>

<script>
    import Navbar from '../../components/Navbar.vue';
    import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'app',
    components: {
        Navbar
    },
    data() {
        return {
            students: [],
            editStudent: false,
            student: []
        }
    },
    methods: {
        edit() { 
            this.$axios.get(`https://school-management-app-api.herokuapp.com/api/student/${this.$route.params.id}`)
            .then(response => {
                this.student = response.data.data;
            })
        },
        updateStudent() {
          this.$axios.put(`https://school-management-app-api.herokuapp.com/api/student/${this.$route.params.id}`, this.student)
            .then(response => {
                this.students = response.data.data
                })
            .then(
                this.$toast.success('Student Updated Successfully')
            )
            .then(this.editStudent = false)
        },
        viewStudent(id) {
            this.$axios.get(`https://school-management-app-api.herokuapp.com/api/student/${id}`)
            .then(response => {
                this.students = response.data.data;
            })
        },
        deleteStudent(id){
                this.$axios.delete(`https://school-management-app-api.herokuapp.com/api/student/${id}`)
                .then(() => {
                    this.$router.push({name: 'index'})
                    this.$toast.success('Student Deleted Successfully')
                    })
        },
        editAStudent(){
            this.editStudent = !this.editStudent
        },
        ...mapActions({
            fetchStates: 'fetchStates', 
            fetchDepartments: 'fetchDepartments', 
            fetchInstitutions: 'fetchInstitutions'
            }),
    },
    computed: {
        ...mapGetters(["allStates", "allDepartments", "allInstitutions"])
    },
    async created() {
        this.viewStudent(this.$route.params.id);
        this.edit();
        this.fetchStates();
        this.fetchDepartments();
        this.fetchInstitutions();
    }
}

</script>