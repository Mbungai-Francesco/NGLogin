const User = require('../models/User');

exports.createUser = async (req, res) => {
  try {
    // Destructure required fields from request body
    const { username, email, password } = req.body;
    
    // Validate required fields
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email, and password are required' });
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }
    
    // Create new user
    const user = new User({
      username,
      email,
      password, // Assuming password hashing is handled in the User model's pre-save hook
    });
    
    // Save user to database
    await user.save();
    
    // Return created user (typically without password)
    const userResponse = user.toObject();
    delete userResponse.password;
    
    res.status(201).json(userResponse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate id parameter
    if (!id) {
      return res.status(400).json({ 
        success: false,
        error: 'ID parameter is required' 
      });
    }
    
    // Find user by id but exclude password
    const user = await User.findById(id).select('-password');
    
    // Check if user exists
    if (!user) {
      return res.status(404).json({ 
        success: false,
        error: 'User not found' 
      });
    }
    
    // Return user
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ 
      success: false,
      error: 'Server error while fetching user' 
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    // Find all users but exclude password field
    const users = await User.find().select('-password');
    
    // Return users with 200 status
    res.status(200).json({
      success: true,
      count: users.length,
      data: users
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ 
      success: false,
      error: 'Server error while fetching users' 
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    // Validate id parameter
    if (!id) {
      return res.status(400).json({ 
        success: false,
        error: 'ID parameter is required' 
      });
    }
    
    // Prevent password update through this endpoint for security
    if (updates.password) {
      delete updates.password;
    }
    
    // Find and update the user
    const user = await User.findByIdAndUpdate(
      id, 
      updates, 
      { new: true, runValidators: true }
    ).select('-password');
    
    // Check if user exists
    if (!user) {
      return res.status(404).json({ 
        success: false,
        error: 'User not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ 
      success: false,
      error: 'Server error while updating user' 
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate id parameter
    if (!id) {
      return res.status(400).json({ 
        success: false,
        error: 'ID parameter is required' 
      });
    }
    
    // Find and delete the user
    const user = await User.findByIdAndDelete(id);
    
    // Check if user exists
    if (!user) {
      return res.status(404).json({ 
        success: false,
        error: 'User not found' 
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ 
      success: false,
      error: 'Server error while deleting user' 
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    // Destructure credentials from request body
    const { email, password } = req.body;
    
    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email and password are required'
      });
    }
    
    // Find user by email
    const user = await User.findOne({ email });
    
    // Check if user exists
    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }
    
    // Check if password matches (assuming you have a method in your User model to check this)
    const isMatch = await user.matchPassword(password);
    
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }
    
    // User authenticated successfully
    // You would typically generate a JWT token here
    
    // Return user without password
    const userResponse = user.toObject();
    delete userResponse.password;
    
    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: userResponse
      // You would include your token here: token: generatedToken
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error during login'
    });
  }
};