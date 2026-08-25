import React, { useEffect, useState } from 'react';
import { SiteLayout } from './layouts/SiteLayout';
import Home from './pages/index';
import Engines from './pages/engines';
import Demo from './pages/demo';
import Developers from './pages/developers';
import Academy from './pages/academy';
import Doctrine from './pages/doctrine';
import Partners from './pages/partners';
import About from './pages/about';
import EarlyAccess from './pages/early-access';
import { EngineDetail } from './engines/EngineDetail';
import Ledger from './pages/ledger';
import Audit from './pages/audit';
import Console from './portal/Console';

const routes = { '/': Home, '/engines': Engines, '/demo': Demo, '/developers': Developers, '/console': Console, '/ledger': Ledger, '/audit': Audit, '/academy': Academy, '/doctrine': Doctrine, '/partners': Partners, '/about': About, '/early-access': EarlyAccess };
function path() { const raw = window.location.hash.replace(/^#/, '') || window.location.pathname; return routes[raw] || /^\/engines\/(conscio|misalignment|v12|doctrine|ata|gateway)$/.test(raw) ? raw : '/'; }
export default function App() { const [route, setRoute] = useState(path()); useEffect(() => { const onChange=()=>setRoute(path()); window.addEventListener('hashchange', onChange); return ()=>window.removeEventListener('hashchange', onChange); }, []); const engineMatch = route.match(/^\/engines\/(conscio|misalignment|v12|doctrine|ata|gateway)$/); const Page=engineMatch ? () => <EngineDetail name={engineMatch[1]} /> : routes[route] || Home; return <SiteLayout route={route}><Page navigate={(to)=>{window.location.hash=to; window.scrollTo(0,0)}} /></SiteLayout>; }
