
const scrape = require('aliexpress-product-scraper');

module.exports = {
    getCode: (req,res) => {
        console.log(req.params)
        scrape(req.params.product).then(info =>
        {
            console.log(info)
            const data = {
                title: info.title,
                images: info.images,
                rating: info.ratings.totalStar,
                quantity: info.totalAvailableQuantity,
                price: info.originalPrice.max,
                variants: info.variants,
                review: info.feedback
            }
            console.log(data)
            res.send({data})
        });
    }
}
