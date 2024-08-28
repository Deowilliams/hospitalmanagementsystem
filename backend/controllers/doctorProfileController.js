const Doctor = require('../models/Doctor');

exports.getProfile = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.user._id).select('-password');
        if (!doctor) {
            return res.status(404).json({ message: 'Doctor not found' });
        }
        res.json(doctor);
    } catch (error) {
        console.error('Error fetching doctor profile:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
