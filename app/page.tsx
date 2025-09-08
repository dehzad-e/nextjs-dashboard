import { AppAreaChart } from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChar";
import { AppPieChart } from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <h2 className="text-xl">Total Revenue</h2>
        <p className="text-sm text-gray-400">
          Showing total visitors for the last 6 months{" "}
        </p>
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <CardList title="Popular Content" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <h2 className="text-xl">Browser Usage</h2>
        <p className="text-sm text-gray-400">January - June 2024 </p>
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg ">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <h2 className="text-xl">Area Chart - Legend</h2>
        <p className="text-sm text-gray-400">
          Showing total visitors for the last 6 months
        </p>
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg"><TodoList /></div>
    </div>
  );
}
