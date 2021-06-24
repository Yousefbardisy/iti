const mongoose = require('mongoose');
const url = "mongodb+srv://MNasser1:Mongo@1234@cluster0.qcgdx.mongodb.net/MEARN?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
