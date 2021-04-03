import Header from "./components/header.component";
import Counter from "./components/counter.component";
import TotalCounter from "./components/total-counter.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <div className="App bg-gray-50">
      <div className="container mx-auto overflow-hidden">

        <Header />

        <main className="flex flex-row justify-center">
          <div>
            <TotalCounter />
            <Counter date={new Date().setHours(0,0,0,0)} />
            <Counter date={new Date(Date.now() - 864e5 + 1)} />
            <Counter date={new Date(Date.now() - 864e5 * 2)} />
            <Counter date={new Date(Date.now() - 864e5 * 3)} />
            <Counter date={new Date(Date.now() - 864e5 * 4)} />
            <Counter date={new Date(Date.now() - 864e5 * 5)} />
            <Counter date={new Date(Date.now() - 864e5 * 6)} />
            <Counter date={new Date(Date.now() - 864e5 * 7)} />
          </div>
        </main>

        <Footer />

      </div>
    </div>
  );
}

export default App;
