const loginForm = document.getElementById('loginForm');
        const errorMessage = document.getElementById('errorMessage');

        // Mock user database (replace with real API calls in production)
        const users = [
            { username: 'admin', password: 'admin123' },
            { username: 'user1', password: 'password123' }
        ];

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Basic validation
            if (!username || !password) {
                showError('Please fill in all fields');
                return;
            }

            // Authentication check
            const user = users.find(u => u.username === username && u.password === password);
            
            if (user) {
                // Successful login
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', username);
                redirectToDashboard();
            } else {
                showError('Invalid username or password');
            }
        });

        function showError(message) {
            errorMessage.textContent = message;
            errorMessage.style.display = 'block';
            setTimeout(() => {
                errorMessage.style.display = 'none';
            }, 3000);
        }

        function redirectToDashboard() {
            window.location.href = 'dashboard.html'; // Replace with your dashboard page
        }

        // Check if already logged in
        if (localStorage.getItem('isLoggedIn')) {
            redirectToDashboard();
        }
