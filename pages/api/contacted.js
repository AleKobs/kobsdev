import clientPromise from "../../lib/mongodb";
export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = await client.db('test');
        const collection = await db.collection('businesses');
        const result = await collection.find({exported: true}).sort({ _id: -1 }).limit(300);
        
        let  jsonData = await result.toArray()
  
      return res.status(200).json(jsonData)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error })
    }
  }