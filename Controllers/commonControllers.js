

module.exports.getItem = (req,res,model) => {
    return model.find ({}).then (profile => res.send (profile)).catch(error => res.send(error))
}

