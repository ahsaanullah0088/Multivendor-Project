const ErrorHandler = require('../utils/ErrorHandler'); // Make sure you're importing the class

router.post('/create-user', upload.single("avatar"), async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userEmail = await User.findOne({ email });

        if (userEmail) {
            return next(new ErrorHandler(400, "Email already exists"));  // Add 'new' here
        }

        const filename = req.file.filename;
        const fileUrl = path.join(filename);

        const user = {
            name,
            email,
            password,
            avatar: fileUrl,
        };

        console.log(user);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });
    } catch (error) {
        next(error);
    }
});
