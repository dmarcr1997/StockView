import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim:true
        },
        country: {
            type: String,
            required: true,
            trim:true
        },
        currency: {
            type: String,
            required: true,
            trim:true
        },
        exchange: {
            type: String,
            required: true,
            trim:true
        },
        description: {
            type: String,
            required: true,
            trim:true
        },
        ipo: {
            type: String,
            required: true,
            trim:true
        },
        isin: {
            type: String,
            trim:true
        },
        marketCapitalization: {
            type: Number,
            required: true,
            trim:true
        },
        shareOutstanding: {
            type: Number,
            required: true,
            trim:true
        },
        logo: {
            type: String,
            required: true,
            trim:true
        },
        ticker: {
            type: String,
            required: true,
            trim:true
        }
    }, {timestamps: true}
)

export const Stock = mongoose.model('stock', stockSchema)