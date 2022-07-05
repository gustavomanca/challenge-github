import { Route, Routes } from 'react-router-dom'

import routes from './routes'

function Routing() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Routes>
  )
}

export default Routing
