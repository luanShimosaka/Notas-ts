import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost', { dbName: 'blog' });

export default mongoose;
