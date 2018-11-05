import Data from './data.model';

export async function dataAdd(req, res) {
    try {
      const data = await Data.insertMany(req.body);
      return res.status(201).json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  export async function dataList(req, res) {
    try {
      const data = await Data.find();
      return res.status(201).json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  }

  export async function singleData(req, res) {
    try {
      const data = await Data.findOne({id: req.params.id});
      console.log("id________"+req.params.id);
      return res.status(201).json(data);
    } catch (e) {
      return res.status(500).json(e);
    }
  }