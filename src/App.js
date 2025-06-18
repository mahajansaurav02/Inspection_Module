import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'
import './i18n/i18n.js'
import FerfarDetailsPage from './views/inspection-module/ferfarNondvahi/ferfarSections/FerfarDetailsPage'
import ViewOtherFerfarList from './views/inspection-module/ferfarNondvahi/ferfarSections/otherFerfar/ViewOtherFerfarList'
import ViewReEntryFerfarList from './views/inspection-module/ferfarNondvahi/ferfarSections/reEntryFerfar/ViewReEntryFerfarList'
import ViewRejectedFerfarList from './views/inspection-module/ferfarNondvahi/ferfarSections/rejectedFerfar/ViewRejectedFerfarList'
import ViewsSection155FerfarList from './views/inspection-module/ferfarNondvahi/ferfarSections/section155Ferfar/ViewsSection155FerfarList'
import TrutiArjTooltip from './views/inspection-module/e-hakka-kamkaj-tapasani/truti-arj-tapasani/TrutiArjTooltip'
import TrutiArjList from './views/inspection-module/e-hakka-kamkaj-tapasani/truti-arj-tapasani/TrutiArjList'
import TalathiApplicationList from './views/inspection-module/e-hakka-kamkaj-tapasani/talathi-arj-tapasani/TalathiApplicationList'
import ApplicationDetailPage from './views/inspection-module/e-hakka-kamkaj-tapasani/ApplicationDetailPage'
import OdcAhvalTapasani from './views/inspection-module/ODC-ahval-tapasani/OdcAhvalTapasani'
// import OrderFerfar from '.'
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"> </div>{' '}
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const OrderFerfar = React.lazy(() => import('./views/inspection-module/ferfarNondvahi/ferfarSections/orderFerfar/OrderFerfar'))
const Section155Ferfar = React.lazy(() => import('./views/inspection-module/ferfarNondvahi/ferfarSections/section155Ferfar/Section155Ferfar'))
const ReEntryFerfar = React.lazy(() => import('./views/inspection-module/ferfarNondvahi/ferfarSections/reEntryFerfar/ReEntryFerfar'))
const OtherFerfar = React.lazy(() => import('./views/inspection-module/ferfarNondvahi/ferfarSections/otherFerfar/OtherFerfar'))
const RejectedFerfar = React.lazy(() => import('./views/inspection-module/ferfarNondvahi/ferfarSections/rejectedFerfar/RejectedFerfar'))

const ViewOrderFerfarLIst = React.lazy(() => import('./views/inspection-module/ferfarNondvahi/ferfarSections/orderFerfar/ViewOrderFerfarLIst'))
const EHakkTooltips = React.lazy(() => import('./views/inspection-module/e-hakka-kamkaj-tapasani/eHakkTooltips'))
class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />{' '}
            <Route exact path="/register" name="Register Page" element={<Register />} />{' '}
            <Route exact path="/404" name="Page 404" element={<Page404 />} />{' '}
            <Route exact path="/500" name="Page 500" element={<Page500 />} />{' '}
            <Route path="*" name="Home" element={<DefaultLayout />} />{' '}
            {/* ferfar-Nondvahi-routes */}
<Route exact path="/ferfarNondvahi/order-ferfar" name="order-ferfar" element={<OrderFerfar />} />
<Route exact path="/ferfarNondvahi/other-ferfar" name="other-ferfarsaurav" element={<OtherFerfar />} />
<Route exact path="/ferfarNondvahi/reentry-ferfar" name="reentry-ferfar" element={<ReEntryFerfar />} />
<Route exact path="/ferfarNondvahi/rejected-ferfar" name="rejected-ferfar" element={<RejectedFerfar />} />
<Route exact path="/ferfarNondvahi/section-155" name="section-155" element={<Section155Ferfar />} />
        <Route exact path="/ferfar-details/:id" element={<FerfarDetailsPage />} />


 {/* view-ferfar-routs */}
<Route exact path="/ferfarNondvahi/order-ferfar/view" name="order-ferfar-view" element={<ViewOrderFerfarLIst/>} />
<Route exact path="/ferfarNondvahi/other-ferfar/view" name="other-ferfar-view" element={<ViewOtherFerfarList/>} />
<Route exact path="/ferfarNondvahi/reentry-ferfar/view" name="reEntry-ferfar-view" element={<ViewReEntryFerfarList/>} />
<Route exact path="/ferfarNondvahi/rejected-ferfar/view" name="rejected-ferfar-view" element={<ViewRejectedFerfarList/>} />
<Route exact path="/ferfarNondvahi/section155-ferfar/view" name="section155-ferfar-view" element={<ViewsSection155FerfarList/>} />


            {/* E-hakk-Tapasani=routes */}
<Route exact path="/e-hakka-kamkaj-tapasani/info/:id"  name="e-hakka-tapasani-tooltip" element={<EHakkTooltips/>} />
<Route exact path="/e-hakka-kamkaj-tapasani/info-truti-arj"  name="e-hakka-tapasani-tooltip-truti" element={<TrutiArjTooltip/>} />

<Route exact path="/e-hakka-kamkaj-tapasani/truti-applications"  name="e-hakka-tapasani-tooltip-truti" element={<TrutiArjList/>} />
<Route exact path="/e-hakka-kamkaj-tapasani/talathi-applications"  name="e-hakka-tapasani-tooltip-talathi" element={<TalathiApplicationList/>} />
<Route exact path="/truti-applications-details/:id"  name="e-hakka-tapasani-tooltip-truti" element={<ApplicationDetailPage/>} />

        {/* <Route exact path="/ferfar-details/:id" element={<FerfarDetailsPage />} /> */}


                    {/* odc अहवाल तपासणी  */}

<Route exact path="/inspection-module/ODC-ahval-tapasani/OdcAhvalTapasani"  name="OdcAhvalTapasani" element={<OdcAhvalTapasani/>} />

          </Routes>{' '}
        </Suspense>{' '}
      </HashRouter>
    )
  }
}

export default App
