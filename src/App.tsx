import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AnalyticsListener } from './components/AnalyticsListener'
import { LocaleProvider } from './i18n/LocaleContext'
import { Home } from './pages/Home'
import { PreLaunch } from './pages/PreLaunch'

export default function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <AnalyticsListener />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/en" element={<Navigate to="/" replace />} />
          <Route path="/es" element={<Home />} />
          <Route path="/pt" element={<Home />} />
          <Route path="/prelancamento" element={<PreLaunch />} />
          <Route path="/pre-launch" element={<PreLaunch />} />
          <Route path="/prelanzamiento" element={<PreLaunch />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </LocaleProvider>
    </BrowserRouter>
  )
}
