import { connect } from 'mongoose';

export const connectToDB = async () => {
    console.log('Connecting to MongoDB 🚀...');
    try {
        await connect(process.env.MONGO_URI);
        console.log('MongoDB connected 🍀');
    } catch (error) {
        console.log('Error connecting to MongoDB: ❌', error);
    }
};