import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";

export function App() {
  return (
    <div className="max-w-full mx-6 py-5 flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  );
}
