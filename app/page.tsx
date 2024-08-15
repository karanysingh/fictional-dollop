import { CustomersView } from "@/partials/CustomersView";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        This here is the heading
      </div>
      <div>
        <CustomersView />
      </div>
    </main>
  );
}
