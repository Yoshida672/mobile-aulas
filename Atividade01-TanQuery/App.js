import Main from './src/App';
import QueryClientProvider from './src/QueryClientProvider'

export default function App() {
  return (
   <QueryClientProvider>
    <Main/>
   </QueryClientProvider>
  );
}
