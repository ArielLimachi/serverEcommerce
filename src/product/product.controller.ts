import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param} from '@nestjs/common';
import { CreateProductDTO } from "./dto/product.dto"
import { Product } from './interfaces/product.interface';
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post()
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: "Product created...",
            product: product
        });
    }

    @Get()
    async getProducts() {        
        return await this.productService.getProducts();
    }

    @Get(":productID")
    async getProduct(@Param("productID")productID: string) {        
        return await this.productService.getProduct(productID);
    }

    @Delete(":productID")
    async deleteProduct(@Res() res,@Param("productID") productID: string){
        const deletedProduct = await this.productService.deleteProduct(productID);
        return res.status(HttpStatus.OK).json({
            message: `product with id: ${productID} , deleted`,
            deletedUser: deletedProduct
        });
    }

    @Put(":productID")
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Param("productID") productID: string){
        const updatedProduct = await this.productService.updateProduct(productID, createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: `product with id: ${productID} , updated`,
            updatedProduct
        });
    }
}