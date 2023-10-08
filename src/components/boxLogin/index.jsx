const BoxLogin = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
  const [authenticated, setAuthenticated] = useState(false);

  const validUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const { username, password } = formData;

    const isValidUser = validUsers.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      // Autentikasi berhasil
      setAuthenticated(true);
      alert('Autentikasi berhasil!');
    } else {
      // Autentikasi gagal
      alert('Autentikasi gagal. Periksa kembali username dan password Anda.');
    }
  };

  const handleLogout = () => {
    // Logout pengguna
    setAuthenticated(false);
    setFormData({ username: '', password: '' });
  };

  return (
    <div>
      <h1>Aplikasi Autentikasi</h1>
      {authenticated ? (
        <div>
          <p>Selamat datang, {formData.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
     
};

export default BoxLogin;
