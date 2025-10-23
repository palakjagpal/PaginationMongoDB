import PaginationModel  from "../models/myModel.js";

export const seedUsers = async(req,res) => {
    try{
        const users = []
        for(let i=1; i<=50; i++){
            users.push({
                name : `MyUser${i}`,
                email : `MyUser${i}@gmail.com`,
                age : 10+(i%10)
            })
        }
        await PaginationModel.insertMany(users)
        res.status(201).json({message : "Users added successfully !"})
    }catch(error){
        res.status(500).json({error : error.message})
    }
}

export const getPaginatedUsers = async(req,res) =>{
    try{
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const skip_n = (page -1)*limit
        const users = await PaginationModel.find().skip(skip_n).limit(limit)
        const total = await PaginationModel.countDocuments()
        res.status(200).json({
            totalUsers: total,
            totalPages: Math.ceil(total/limit),
            currentPage: page,
            users
        })
    }catch(error){
        res.status(500).json({message : error.message})
    }
}