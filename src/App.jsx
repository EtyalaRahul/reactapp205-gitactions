import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <a className="navbar-brand fw-bold text-primary" href="#">CI/CD & DevOps</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Modules</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another Action</a></li>
                  <li><a className="dropdown-item" href="#">More</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Welcome Section */}
      <div className="container text-center my-5 py-5 bg-white shadow rounded">
        <h1 className="display-4 fw-bold text-success mb-3">🚀 Welcome to CI/CD & Cloud DevOps Class</h1>
        <p className="lead text-secondary">Master continuous integration, deployment, and cloud technologies with real-world projects and tools like GitHub Actions, Jenkins, Docker, and AWS.</p>
        <p className="mt-3">This is a simple homepage deployed on GitHub Pages using <strong>Vite + React</strong>. Stay tuned for more updates and hands-on sessions!</p>
      </div>

      {/* Footer */}
      <footer className="mt-auto bg-dark text-white text-center py-3 shadow-lg">
        <div>© 2025 CI/CD & Cloud DevOps Class. Built with ❤️ using React & Bootstrap.</div>
      </footer>
    </div>
  );
}

export default App;
