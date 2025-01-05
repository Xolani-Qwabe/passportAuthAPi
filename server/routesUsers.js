app.post('/api/users', (req, res) => {
    try {
        const {
            name,
            email,
            password, // Required for authentication
            age,
            location,
            userType, // Field to specify user type: artist, investor, supplier, admin
            genrePreference, // Optional for artists and investors
            artistType, // Optional for artists
            servicesOffered, // Optional for suppliers
        } = req.body;

        // Validate required fields for signup
        if (!name || !email || !password || !userType || !location) {
            return res.status(400).send({
                message: 'Please provide all required fields: name, email, password, location, and userType.',
            });
        }

        // Validate userType
        const validUserTypes = ['artist', 'investor', 'supplier', 'admin'];
        if (!validUserTypes.includes(userType)) {
            return res.status(400).send({ message: 'Invalid userType. Valid options are artist, investor, supplier, or admin.' });
        }

        // Check if email is already registered
        const emailExists = client_users.some(user => user.email === email);
        if (emailExists) {
            return res.status(409).send({ message: 'Email is already registered.' });
        }

        // Hash the password (using bcrypt for security)
        const bcrypt = require('bcrypt');
        const hashedPassword = bcrypt.hashSync(password, 10);

        // Prepare the base user object
        const newUser = {
            id: client_users.length + 1,
            name,
            email,
            password: hashedPassword,
            age: userType === 'artist' ? age : null, // Age is mainly relevant for artists
            location,
            userType,
            joinedDate: new Date().toISOString(),
        };

        // Add role-specific fields
        if (userType === 'artist') {
            Object.assign(newUser, {
                genrePreference: genrePreference || null,
                artistType: artistType || null,
                profileComplete: false, // Indicates if artist completed their profile
                submittedTracks: [], // Tracks submitted by the artist
                nftEligibleTracks: [], // Tracks approved for NFT minting
            });
        } else if (userType === 'investor') {
            Object.assign(newUser, {
                genrePreference: genrePreference || null, // Investors may have genre preferences
                investments: [], // NFTs purchased by the investor
            });
        } else if (userType === 'supplier') {
            Object.assign(newUser, {
                servicesOffered: servicesOffered || [], // List of services provided (e.g., marketing, production)
                jobsCompleted: [], // Jobs completed for artists or platform
            });
        } else if (userType === 'admin') {
            Object.assign(newUser, {
                permissions: ['manageUsers', 'reviewTracks', 'approveNFTs'], // Example admin permissions
            });
        }

        // Add the new user to the database
        client_users.push(newUser);

        // Respond with success
        res.status(201).send({
            message: 'User created successfully.',
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                userType: newUser.userType,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'An error occurred while creating the user.' });
    }
});
