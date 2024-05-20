import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { LandingPage } from "@/pages/landing";

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<LandingPage />
		</QueryClientProvider>
	);
};

export default App;
