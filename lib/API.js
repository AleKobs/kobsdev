import clientPromise from "./mongodb";


export const getAllData = async () => {
    const mongoClient = await clientPromise;
    console.log(mongoClient);
}