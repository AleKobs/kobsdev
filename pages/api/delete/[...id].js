import clientPromise from "../../../lib/mongodb";
import { ObjectId } from "mongodb";
// import clientPromise from "../../../lib/mongodb";
export default async (req, res) => {
    const {id} = req.query;
    console.log('ID',id);
    
    try {
        const client = await clientPromise;
        const db = await client.db('test');
        const collection = await db.collection('businesses');
        const result = await collection.findOne();


        collection.updateOne({_id : ObjectId(id[0])}, {
          $set: {
            exported: true,
            createdAt: "$$NOW"
          }
        })


      return res.status(200).json({result})
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error })
    }
  }