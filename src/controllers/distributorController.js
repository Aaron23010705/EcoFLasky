
//array de funciones del CRUD
const ditributorController = {};
import distributorModel from "../models/Distributor.js";

//S E L E C T
ditributorController.getDistributors = async (req, res) => {
    const distributor = await distributorModel.find();
    res.json(distributor)
}

// I N S E R T
ditributorController.insertDistributors = async (req, res) => {
    //campos que se van a solicitar en el nuevo esquema creado
    const {name, service, locals, affiliationDate} = req.body;
    //datos con los que se va a llenar el esquema que creamos
    const newDistributor = new distributorModel({name, service, locals, affiliationDate});
    await newDistributor.save();
    res.json({message: "Distributor saved"});
}

// U P D A T E 
ditributorController.updateDsitributors = async (req, res) => {
    const  {name, service, locals, affiliationDate} = req.body;
    const updateDsitributors = await distributorModel.findByIdAndUpdate(
        req.params.id, {name, service, locals, affiliationDate}, {new : true}
    );
    res.json({message: "Distributor updated"});
}

// D E L E T E
ditributorController.deleteDistributor = async (req, res) => {
    await distributorModel.findByIdAndDelete(req.params.id);
    res.json({message: "Dsitributor deleted"});

}

export default ditributorController;