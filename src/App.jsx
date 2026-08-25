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

const routes = { '/': Home, '/engines': Engines, '/demo': Demo, '/developers': Developers, '/academy': Academy, '/doctrine': Doctrine, '/partners': Partners, '/about': About, '/early-access': EarlyAccess };
function path() { const raw = window.location.hash.replace(/^#/, '') || window.location.pathname; return routes[raw] ? raw : '/'; }
export default function App() { const [route, setRoute] = useState(path()); useEffect(() => { const onChange=()=>setRoute(path()); window.addEventListener('hashchange', onChange); return ()=>window.removeEventListener('hashchange', onChange); }, []); const Page=routes[route] || Home; return <SiteLayout route={route}><Page navigate={(to)=>{window.location.hash=to; window.scrollTo(0,0)}} /></SiteLayout>; }
