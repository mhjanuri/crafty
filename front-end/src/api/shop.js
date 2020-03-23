/**
 * Mocking client-server processing
 */
import _products from './data.json'
import Axios from 'axios'

// console.log(_products);
const TIMEOUT = 100

export default {
    getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
