import  mongoose from 'mongoose';
export const dbconnection = async () => {

    try {
        await mongoose.connect('mongodb+srv://testventas:2021MinTic@velalejandro.ut9yi.mongodb.net/graphql29');
        console.log('base de datos conectada')
    } catch (error) {
        console.log(error);
    }

}
