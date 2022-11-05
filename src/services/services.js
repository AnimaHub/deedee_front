import apiZiggy from "./ApiZiggy"

export default {
    getIEs() {
        return apiZiggy.get('/ie')
            },
    getCampus() {
        return apiZiggy.get('/campus')
    },
    getPrograms() {
        return apiZiggy.get('/programs')
    },
    async postProfessor(object){
        apiZiggy.post('/contato_docente/add', object)
    },
    async getProfessors() {
        return apiZiggy.get('/contato_docente')
            .then((response) => {
                return response.data.productId
            })
            .catch((err) => console.log(err))
    },

    getProfessor(id) {
        return apiZiggy.get('/contato_docente/' + id)
    },
    getResume(id) {
        return apiZiggy.get('/professors/curriculo/' + id)
    }

}

