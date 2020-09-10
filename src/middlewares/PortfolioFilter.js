const upload = require("../helpers/upload/portfolio");
const {response} = require("../helpers/response");
const ImageFilter = upload.single('app_image')
module.exports = (req, res, next) => {
    try {
        ImageFilter(req, res, (err) => {
            if(err){
                console.log(err)
                return response(res, false, `${err.message} max 4 mb`, 400);
            }
            next()
        })
    } catch (error) {
        console.log(error)
    }
}