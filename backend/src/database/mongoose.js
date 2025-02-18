import { connect } from 'mongoose';

export const connectToMongo = async () => {
    console.log('Conectando a MongoDB 🚀...');
    try {
        await connect(process.env.MONGO_URI);
        console.log('MongoDB conectado 🍀')
    } catch (error) {
        console.log('Error conectando a MongoDB: ❌', error)
    }
}