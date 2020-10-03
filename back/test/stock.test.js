import { Stock } from '../resources/stocks/stock.model.js';
import request from 'supertest';
import pkg from 'chai';
import { app } from '../server.js';
const { expect } = pkg;

describe("Stock exists", () => {
    beforeEach(() => {
        Stock.deleteMany({});
    })
    it("Stock can be created", () => { 
        it("With a name, country, currency, exchange, ipo, isin, marketCap, shareOut, logo, and a ticker", () =>{
            let newStock = new Stock({
                name: 'stock',
                country: 'USA',
                currency: 'USD',
                exchange: 'NASDAQ/NMS (GLOBAL MARKET)',
                description: 'Description',
                ipo: "1980-12-12",
                isin: "",
                marketCapitalization: 1415993,
                shareOutstanding: 4375.47998046875,
                logo: 'logo',
                ticker: 'AAPL'
            });
            expect(newStock.name).to.equal("stock")
            expect(newStock.country).to.equal("USA")
            expect(newStock.currency).to.equal("USD")
            expect(newStock.exchange).to.equal("NASDAQ/NMS (GLOBAL MARKET)")
            expect(newStock.description).to.equal("Description")
            expect(newStock.ipo).to.equal("1980-12-12")
            expect(newStock.isin).to.equal("")
            expect(newStock.marketCapitalization).to.equal(1415993)
            expect(newStock.shareOutstanding).to.equal(4375.47998046875)
            expect(newStock.logo).to.equal('logo')
            expect(newStock.ticker).to.equal('AAPL')
        })
    
    })
})


describe("GET /stocks", () => {
    it("returns all stocks", () => {
        const stocks = [
            {
                name: 'stock',
                country: 'USA',
                currency: 'USD',
                exchange: 'NASDAQ/NMS (GLOBAL MARKET)',
                description: 'Description',
                ipo: "1980-12-12",
                isin: "",
                marketCapitalization: 1415993,
                shareOutstanding: 4375.47998046875,
                logo: 'logo',
                ticker: 'AAPL'
            },
            {
                name: 'stock2',
                country: 'USA',
                currency: 'USD',
                exchange: 'NASDAQ/NMS (GLOBAL MARKET)',
                description: 'Description',
                ipo: "1980-12-13",
                isin: "",
                marketCapitalization: 1415994,
                shareOutstanding: 4375.47998046876,
                logo: 'logo',
                ticker: 'AAPA'
            }
        ];
        Stock.insertMany(stocks);
        const res = request(app).get('/stocks').then(res => {
            expect(res.status).to.equal(200);
        }).catch(e => console.log(e.message))
    })
})


describe("GET /stocks/:id", () => {
    it("gets a single stock", () => {
        const res = request(app).get('/stocks/5f788dad5c3a17342425626a').then(res => {
            expect(res.status).to.equal(200);
        }).catch(e => console.log(e.message))
    })
})


