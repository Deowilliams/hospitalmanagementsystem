const Patient = require('../models/Patient');

exports.getProfile = async (req, res) => {
    try {
        const patient = await Patient.findById(req.user._id).select('-password');
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
        res.json(patient);
    } catch (error) {
        console.error('Error fetching patient profile:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
