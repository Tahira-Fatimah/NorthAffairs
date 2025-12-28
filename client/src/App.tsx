import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout/Layout";
import Home from "@/pages/Home";
import Calendar from "@/pages/Calendar";
import Contact from "@/pages/Contact";
import TripDetails from "@/pages/TripDetails";
import NotFound from "@/pages/not-found";
import Destination from "@/pages/Destination";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/contact" component={Contact} />
        <Route path="/trip/:id" component={TripDetails} />
        <Route path="/destination/:id" component={Destination} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
