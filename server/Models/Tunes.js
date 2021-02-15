const mongoose = require('mongoose');

const { String, Number, Boolean } = mongoose.Schema.Types;

const tuneSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: false
    },
    difficulty: {
        type: Number,
        required: true
    },
    isThemeTune: {
        type: Boolean,
        required: false
    }
});

export default mongoose.models.Tunes || mongoose.model("Tunes", tuneSchema);