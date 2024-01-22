import axios from "axios";
import {GetAllProductsModel} from "../models/responses/GetAllProductsModel";
import {ProductModel} from "../models/responses/ProductModel";
import axiosInstance from "../utils/axiosInterceptors";

class ProductService {
	getAll() {
		return axiosInstance.get<GetAllProductsModel>("https://dummyjson.com/products");
	}

	getById(id: number) {
		return axiosInstance.get<ProductModel>("https://dummyjson.com/products/" + id);
	}
}

export default ProductService;
