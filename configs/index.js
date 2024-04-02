const configs = {
    port: process.env.PORT || 3000,
    mongoURI: process.env.MONGODB_URI ||'mongodb+srv://gloria:uwineza@cluster0.uzfqd3v.mongodb.net/Contacts',
    secret: process.env.SECRET ||'mysecret'
}

export default configs;