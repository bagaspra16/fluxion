/**
 * Fluxion Authentication System
 * Handles user registration, login, logout with localStorage
 */

// Authentication Class
class FluxionAuth {
    constructor() {
        this.currentUser = this.getCurrentUser();
        this.init();
    }

    init() {
        // Update UI based on auth state
        this.updateHeaderUI();

        // Listen for storage events (logout from other tabs)
        window.addEventListener('storage', (e) => {
            if (e.key === 'fluxion_user') {
                this.currentUser = this.getCurrentUser();
                this.updateHeaderUI();
            }
        });
    }

    // Get current logged in user from localStorage
    getCurrentUser() {
        const userStr = localStorage.getItem('fluxion_user');
        return userStr ? JSON.parse(userStr) : null;
    }

    // Register new user
    register(userData) {
        // Get existing users
        const users = this.getAllUsers();

        // Check if email or username already exists
        const emailExists = users.find(u => u.email === userData.email);
        const usernameExists = users.find(u => u.username === userData.username);

        if (emailExists) {
            return { success: false, message: 'Email already registered' };
        }

        if (usernameExists) {
            return { success: false, message: 'Username already taken' };
        }

        // Add new user
        const newUser = {
            id: Date.now(),
            fullName: userData.fullName,
            email: userData.email,
            username: userData.username,
            password: userData.password, // In production, this should be hashed
            dob: userData.dob,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        localStorage.setItem('fluxion_users', JSON.stringify(users));

        // Auto login after registration
        this.login(userData.email, userData.password);

        return { success: true, message: 'Registration successful!' };
    }

    // Login user
    login(emailOrUsername, password) {
        const users = this.getAllUsers();

        const user = users.find(u =>
            (u.email === emailOrUsername || u.username === emailOrUsername) &&
            u.password === password
        );

        if (!user) {
            return { success: false, message: 'Invalid email/username or password' };
        }

        // Save current user (without password)
        const { password: _, ...userWithoutPassword } = user;
        localStorage.setItem('fluxion_user', JSON.stringify(userWithoutPassword));
        this.currentUser = userWithoutPassword;

        // Update UI
        this.updateHeaderUI();

        return { success: true, message: 'Login successful!', user: userWithoutPassword };
    }

    // Logout user
    logout() {
        localStorage.removeItem('fluxion_user');
        this.currentUser = null;
        this.updateHeaderUI();

        // Redirect to home if in frameset
        try {
            if (window.parent && window.parent.frames && window.parent.frames.content) {
                window.parent.frames.content.location.href = 'home.html';
            }
        } catch (e) {
            // Ignore if not in frameset
        }
    }

    // Get all users from localStorage
    getAllUsers() {
        const usersStr = localStorage.getItem('fluxion_users');
        return usersStr ? JSON.parse(usersStr) : [];
    }

    // Check if user is logged in
    isLoggedIn() {
        return this.currentUser !== null;
    }

    // Update header UI based on auth state
    updateHeaderUI() {
        // Try to update header in frameset
        try {
            if (window.parent && window.parent.frames && window.parent.frames.header && window.parent.frames.header.updateAuthUI) {
                window.parent.frames.header.updateAuthUI(this.currentUser);
            }
        } catch (e) {
            // Not in frameset, ignore
            console.log('Not in frameset, skipping header update');
        }
    }
}

// Initialize auth system only once
if (!window.FluxionAuth) {
    const auth = new FluxionAuth();
    window.FluxionAuth = auth;
}
