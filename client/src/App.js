function App() {
  return (
    <div className="min-h-screen bg-offwhite flex flex-col items-center justify-center">
      <header className="w-full py-6 bg-primary text-offwhite text-3xl font-bold text-center rounded-b-3xl shadow-xl">
        Vitamine
      </header>
      <main className="flex-1 w-full max-w-xl px-4 py-8">
        {/* Next: Quiz goes here */}
        <div className="text-primary text-xl mt-8 text-center">
          Welcome to Vitamine! <br />
          Your personalized supplement journey starts here.
        </div>
      </main>
    </div>
  );
}

export default App;
