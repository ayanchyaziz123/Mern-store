const Product = require('../models/product');
const mongoose = require('mongoose');
const Review = require('../models/review');
const Category = require('../models/category');



exports.imageUpload = async (req, res, next) => {
    try {
        const { product_id } = req.body;
        const file = req.file.filename;
        var id = mongoose.Types.ObjectId(product_id);
        const filter = { _id: id };
        const update = { image: file };
        let product = await Product.findOneAndUpdate(filter, update, {
            new: true
        });
        return res.status(200).json({
            image: file,
        })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            detail: "serevr error"
        });
    }
}

exports.createReview = async (req, res, next) => {
    try {
        const { rating, comment } = req.body;
        const productId = mongoose.Types.ObjectId(req.params.id);
        const userId = req.userId;
        const review = new Review({
            product: productId,
            user: userId,
            rating: rating,
            comment: comment
        });
        await review.save();
        await Product.findOneAndUpdate({ _id: productId }, {
            $push: {
                "review": review
            }
        });
        console.log("success");
        // save and redirect...
        const rev = await Review.find({ product: productId }).populate('user');
        return res.status(200).json({
            "review": rev
        });

    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            detail: "serevr error"
        });
    }
}




exports.offerProduct = async (req, res, next) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            "products": products,
            "message": "success",
        });
    }
    catch (error) {
        res.status(400).json({
            detail: "serevr error"
        });
    }
}

exports.deleteProduct = async (req, res, next) => {
    console.log("Delete product");
    try {
        const id = req.params.id;
        await Product.findByIdAndRemove(id);
        return res.status(200).json(
            {
                "message": "Deleted",
            });
    }
    catch (error) {
        res.status(400).json({
            detail: "serevr error"
        });
    }
}



exports.createProduct = async (req, res, next) => {
    console.log("hello");
    try {
        const newProduct = new Product({
            name: 'Sample Category',
            description: 'Samle Description',
            price: 0,
            countInStock: 0,
            tax_percentage: 0
        });
        const saveProduct = await newProduct.save();
        return res.status(200).json({
            product: saveProduct,
        })

    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            detail: "serevr error"
        });
    }
}

exports.getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(_id = req.params.id).populate('review').populate('category');
        const reviews = await Review.find({ product: product._id }).populate('user');
        const categories = await Category.find();
        return res.status(200).json({
            product: product,
            reviews: reviews,
            categories: categories
        })
    }
    catch (error) {
        console.log(error)
        res.status(400).json({
            detail: "serevr error. Could not retrive the data!!!"
        });
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        const { name, price, countInStock, tax_percentage, description, catId } = req.body;
        const pro = {
            category: catId,
            name: name,
            description: description,
            price: price,
            countInStock: countInStock,
            tax_percentage: tax_percentage
        }
        var id = mongoose.Types.ObjectId(req.params.id)
        const filter = { _id: id }
        let updateProduct = await Product.findOneAndUpdate(filter, pro, {
            new: true
        });
        return res.status(200).json({
            "product": updateProduct,
        })

    }
    catch (error) {
        console.log(error)
        res.status(400).send("An error occured");
    }
}








exports.getProducts = async (req, res, next) => {
    let k = req.query.keyword;
    let p = req.query.page;
    const categories = await Category.find();
    console.log(categories);
    try {
        if (k == undefined && p == undefined) {
            const page = 1;
            const limit = 5;
            const total = await Product.countDocuments();
            const pages = Math.ceil(total / limit);
            const startIndex = (page - 1) * limit;
            const products = await Product.find().sort({ 'update_at': -1 }).limit(limit).skip(startIndex).populate('review');
            return res.status(200).json(
                {
                    success: true,
                    count: products.length,
                    products,
                    categories,
                    pages,
                    page
                }
            )
        }
        else if (k + 10 == 10) {

            const page = req.query.page;
            const limit = 5;
            const total = await Product.countDocuments();
            const pages = Math.ceil(total / limit);
            const startIndex = (page - 1) * limit;
            const products = await Product.find().sort({ 'update_at': -1 }).limit(limit).skip(startIndex).populate('review').exec();
            return res.status(200).json(
                {
                    success: true,
                    count: products.length,
                    products,
                    categories,
                    pages,
                    page
                }
            )
        }
        else {
            const page = req.query.page;
            const limit = 5;
            const startIndex = (page - 1) * limit
            let query = String(k);
            const p = await Product.find(
                {
                    "$or": [
                        { name: { $regex: query } },
                    ]
                }
            )
            const pages = Math.ceil(p.length / limit)
            const products = await Product.find(
                {
                    "$or": [
                        { name: { $regex: query } },
                    ]
                }
            ).sort({ 'update_at': -1 }).limit(limit).skip(startIndex).populate('review').exec();
            return res.status(200).json(
                {
                    success: true,
                    count: products.length,
                    products,
                    categories,
                    pages,
                    page
                }
            )

        }
    }
    catch (error) {
        console.log("error", error);
        res.status(500).json({
            detail: "server could not load the data in proper time!"
        });

    }
}
