const model = require ('./model')

exports. getAllEntry=async(Request,Response)=>{
    const newdata = await model.find()
    Response.status(200).json({
        result:true,
        totalEntry:model.length +1,
        data: newdata

    })
}
exports.createEntry=async(req, res)=>{
    const newdata = await model.create(res, req)
    res.status(201).json(newdata)
}
exports.getSingleEntry=async(req, res)=>{
    const newdata = await model.findById(req. params.id)
    res.status(200).json(newdata)
}
exports.updateSingleEntry=async(req, res)=>{
    const newdata = await model.findByIdAndUpdate(req.params.id, req.body)
    res.status(201).json(newdata)
}
exports.deleteSingleEntry=async(req, res)=>{
    const newdata = await model.findByIdAndDelete(req.params.id, req.body)
    res.status(200).json("delete was successful")
}