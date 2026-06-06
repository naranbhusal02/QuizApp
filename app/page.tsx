import Quiz from "@/components/quiz";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex flex-1 container mx-auto px-4 py-8">
        <Quiz />
      </div>
      <footer className="py-3 text-center text-sm text-gray-500 border-t">
        <p>
          &copy; {new Date().getFullYear()} -Quiz App | Developed by{" "}
          <a
            href="https://github.com/naranbhusal02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Narayan Bhusal
          </a>
        </p>
      </footer>
    </main>
  );
}
