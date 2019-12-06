<template>
    <div>
     <b-modal 
     id="modal-1" 
     title="Add Students"
     ref="modal"
     ok-title="Save"
     @ok="handleOk">
        <div class="container">            
            <div>
                <div class="jumbotron mt-5 bg-gradient-success rounded border py-3">
                    
                    <p class="lead text-center">Kindly provide information for the input boxes below</p>
                    <form 
                        ref="form"
                        @submit.stop.prevent="handleAddStudent"
                    >
                        <div class="form-row">
                            <div class="col-6">
                                <label for="">First Name</label>
                                <input type="text" class="form-control" v-model="student.first_name" placeholder="First name">
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label for="inputState">Gender</label>
                                    <select class="form-control" v-model="student.gender">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-6">
                                <label for="">Last Name</label>
                                <input type="text" class="form-control" v-model="student.last_name" placeholder="Last name">
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label >Marital Status</label>
                                    <select v-model="student.marital_status" class="form-control">
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-6">
                                <label>Email </label>
                                <input type="text" 
                                :class="{'form-control':true, 'is-invalid' : !validEmail(email) && emailBlured}"
                                @blur="emailBlured = true"
                                 v-model="student.email" 
                                 placeholder="email">
                                 <div class="invalid-feedback">A valid email is required</div>
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label>State</label>
                                    <select v-model="student.state" class="form-control">
                                        <option v-for="state in allStates" :key="state.id">{{state.name}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-6">
                                <label for="">Phone Number </label>
                                <input type="number" class="form-control" v-model="student.phone" placeholder="Phone Number">
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label>Institution</label>
                                    <select v-model="student.institution" class="form-control">
                                        <option v-for="institution in allInstitutions" :key="institution.id">{{institution.name}}</option>                                        
                                    </select>
                                </div>
                            </div>
                        </div>
                         <div class="form-row">
                            <div class="col-6">
                                <label for="">Date of Birth</label>
                                <input type="date" v-model="student.dob" placeholder="DD/MM/YYYY" class="form-control">
                            </div>
                            <div class="col-6">
                                <div class="form-group">
                                    <label>Department</label>
                                    <select v-model="student.department" class="form-control">
                                        <option v-for="department in allDepartments" :key="department.id">{{department.name}}</option>                                        
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>

                    
                </div>
            </div>
      </div>
     </b-modal>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

export default {
    name: "add",
    data() {
        return {
              student: {
                   email: "",
                    first_name: "",
                    last_name: "",
                    gender: "",
                    marital_status: "",
                    phone: "",
                    dob: "",
                    state: "",
                    institution: "",
                    department: ""
              },
                emailBlured : false,
                valid : false, 
        }
    },
    methods: {
        ...mapActions({
            fetchStates: 'fetchStates', 
            fetchDepartments: 'fetchDepartments', 
            fetchInstitutions: 'fetchInstitutions', 
            addStudent: 'addStudent'
            }),
             validate (){
                this.emailBlured = true;
                if( this.validEmail(this.student.email)){
                    this.valid = true;
                }
            },
            validEmail () {
                var re = /(.+)@(.+){2,}\.(.+){2,}/;
                return re.test((this.student.email).toLowerCase());
            },
            handleAddStudent(){
                 this.validate();     
                if(this.valid){
                //form submission
                this.addStudent({
                    student: this.student,
                    clearForm: () => {
                        Object.keys(this.student).forEach((field) => {
                            this.student[field] = ''
                        })
                      }
                    })
                this.$nextTick(() => {
                    this.$refs.modal.hide()
                })
                }
            },
             handleOk(bvModalEvt) {
                bvModalEvt.preventDefault()
                this.handleAddStudent()
            },
        },
      
    computed: 
        mapGetters(["allStates", "allDepartments", "allInstitutions"])
    ,
    created() {
        this.fetchStates();
        this.fetchDepartments();
        this.fetchInstitutions();
    }
}
</script>