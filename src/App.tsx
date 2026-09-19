function App() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white">
      <div className="text-2xl font-bold text-red-600">
        upGrad
      </div>

      <div className="flex items-center gap-8">
        <a href="#">Upskilling Courses</a>
        <a href="#">Study Abroad</a>
        <a href="#">Professional Certifications</a>
        <a href="#">Learn Offline</a>
        <a href="#">School of Tech</a>
        <a href="#">More</a>

        <button className="px-5 py-2 text-red-600 border border-red-600 rounded">
          SIGN UP
        </button>
      </div>
    </nav>
  );
}

export default App;