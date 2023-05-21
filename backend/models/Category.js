const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    parentcategory: {
        required: true,
        type: Number,
        default: 0
    },
    categoryname: {
        required: true,
        type: String
    },
    enabled: {
        required: true,
        type: Boolean,
        default: false
    },
    inmenu: {
        required: true,
        type: Boolean,
        default: false
    }
});

const categoryModel = mongoose.model("categories", categorySchema);

module.exports = { categoryModel };