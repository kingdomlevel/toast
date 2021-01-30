const mongoose = require('mongoose');

const { String, Number, Boolean } = mongoose.Schema.Types;

const tuneSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    difficulty: {
        type: Number,
        required: true
    },
    isThemeTune: {
        type: Boolean,
        required: true
    }
});

export default mongoose.models.Tunes || mongoose.model("Tunes", tuneSchema);