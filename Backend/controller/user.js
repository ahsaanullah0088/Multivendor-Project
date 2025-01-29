const express = require("express"); 
const path = require("path");
const fs = require("fs"); // Import fs for file deletion
const bcrypt = require("bcryptjs");  // For password hashing
const router = express.Router();
const { upload } = require("../multer");
const User = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        console.log("Checking email in DB:", email);

        // Check if the email already exists
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            console.log("User already exists:", email);

            // Delete uploaded file if it exists
            if (req.file) {
                const filePath = `uploads/${req.file.filename}`;
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                    console.log("Deleted file:", filePath);
                }
            }

            return next(new ErrorHandler(400, "Email already exists"));
        }

        // Ensure file is uploaded
        if (!req.file) {
            return next(new ErrorHandler(400, "File upload failed"));
        }

        const filename = req.file.filename;
        const fileUrl = `/uploads/${filename}`;  

        console.log("Uploaded file details:", req.file);

        // Hash password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,  
            avatar: {
                public_id: filename,
                url: fileUrl,  
            },
        });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user,
        });

    } catch (error) {
        next(error);
    }
});

module.exports = router;
