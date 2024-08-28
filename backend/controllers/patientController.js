const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Patient = require('../models/Patient');

// Register a new patient
exports.register = async (req, res) => {
    const { email, password, name, height, bloodGroup, gender, age, problem, contact, address } = req.body;

    try {
        // Check if patient already exists
        const existingPatient = await Patient.findOne({ email });
        if (existingPatient) {
            return res.status(400).json({ message: 'Patient already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new patient
        const newPatient = new Patient({
            email,
            password: hashedPassword,
            name,
            height,
            bloodGroup,
            gender,
            age,
            problem,
            contact,
            address
        });

        // Save the patient to the database
        await newPatient.save();
        res.status(201).json({ message: 'Patient registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Log in a patient
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the patient by email
        const patient = await Patient.findOne({ email });
        if (!patient) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, patient.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate a token
        const token = jwt.sign({ id: patient._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get the profile of the logged-in patient
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

// Get all patients (for admin use or data analysis)
exports.getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find().select('name age problem');
        res.json(patients);
    } catch (error) {
        console.error('Error fetching patients:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


