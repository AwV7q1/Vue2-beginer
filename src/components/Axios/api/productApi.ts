import axiosClient from '@/config/axiosClient'

const productApi = {
    getAll() {
        const url = "/items"
        return axiosClient.get(url);
    },

    getDetail(id: number) {
        const url = `/items/${id}`
        return axiosClient.get(url)
    },

    updateProduct(id: number, payload: any) {
        const url = `/update/${id}`
        return axiosClient.put(url, payload)
    },

    deleteProduct(id: number) {
        const url = `/delete/${id}`
        return axiosClient.delete(url)
    },

    createProduct(payload: any) {
        const url = `/create`
        return axiosClient.post(url, payload)
    }

}

export default productApi
