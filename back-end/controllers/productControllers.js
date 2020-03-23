const { db } = require('./../connections');
const parseIntToBool = (response) => {
    return !!+response
}

module.exports={
    getProducts: (req, res) => {
        let sql = `SELECT * FROM products` 
        db.query(sql, (err, result)=>{
            if (err) return res.status(500).send(err)
            result.forEach((element,index) => {
                result[index].new = parseIntToBool(result[index].new);
                result[index].sale = parseIntToBool(result[index].sale);
                result[index].pictures = JSON.parse(result[index].pictures);
                result[index].colors = JSON.parse(result[index].colors);
                result[index].size = JSON.parse(result[index].size);
                result[index].tags = JSON.parse(result[index].tags);
                result[index].variants = JSON.parse(result[index].variants);
            });
            return res.status(200).send(result);            
        })
    }
    
}