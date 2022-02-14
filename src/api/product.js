
import axios from 'axios'
const deleteProductById = async (props) => {
    try {
        const { product_id, getProducts, churroAlerSuccessDelete } = props;
        console.log(product_id);
        axios
            .delete(`api/v1/products/${product_id}`)
            .then(res => {
                getProducts() && getProducts()
                churroAlerSuccessDelete() && churroAlerSuccessDelete()
            })
            .catch(error => {
                console.log('Error: ', error)
            });
    } catch (error) {

    }

}

export {
    deleteProductById
}