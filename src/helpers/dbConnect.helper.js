import {connect} from 'mongoose';

const dbConnect = async (link) => {
    try {
        await connect(link);
        console.log('MongoDB database connected');
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect;