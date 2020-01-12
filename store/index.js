import axios from 'axios';

export const state = () => ({
    students: [],
    states: [],
    institutions: [],
    departments: [],
    student: []
});

export const getters = {
    allStudents: (state) => state.students,
    allStates: (state) => state.states,
    allInstitutions: (state) => state.institutions,
    allDepartments: (state) => state.departments,
    aStudent: (state) => state.student
};

export const actions = {
    async fetchStudents({ commit }) {
        const response = await axios.get('https://school-management-app-api.herokuapp.com/api/students');
            commit('getStudents', response.data.data);
    },
    async fetchStates({ commit }){
        const response = await axios.get('https://school-management-app-api.herokuapp.com/api/states');
        commit('getStates', response.data.data)
    },
    async fetchInstitutions({ commit }){
        const response = await axios.get('https://school-management-app-api.herokuapp.com/api/institutions');
        commit('getInstitutions', response.data.data)
    },
    async fetchDepartments({ commit }){
        const response = await axios.get('https://school-management-app-api.herokuapp.com/api/departments');
        commit('getDepartments', response.data.data)
    },
    async addStudent({commit}, payload) {
        const response = await axios.post(
        'https://school-management-app-api.herokuapp.com/api/students', payload.student )
        this.$toast.success('Student Added Successfully')
        payload.clearForm()
        commit('newStudent', response.data.data)
    },
    async viewStudent({commit}, id) {
        const response = await axios.get(`https://school-management-app-api.herokuapp.com/api/students/${id}`)
        commit('viewAStudent', response.data.data)
    }
};
 
export const mutations = {
    getStudents: (state, students) => (state.students = students),
    getStates: (state, states) => (state.states = states),
    getDepartments: (state, departments) => (state.departments = departments),
    getInstitutions: (state, institutions) => (state.institutions = institutions),
    newStudent: (state, addTheStudent) => state.students.unshift(addTheStudent),
    viewAStudent: (state, student) => (state.student = student)
};

