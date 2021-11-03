import { Suspense, lazy } from "react"
import { CoffeeLoading } from "react-loadingg"

const Dashboard = lazy(() => import("containers/Dashboard"))

const App = () => (
  <Suspense fallback={<CoffeeLoading />}>
    <Dashboard />
  </Suspense>
)

export default App
