import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <h1>Main Content Area</h1>
        <p>This is where your tickets or dashboard content will appear.</p>
      </div>
    </div>
  );
}

export default App;
