import {RedirectProps} from "react-router";
import {RouteProps} from "react-router-dom";
import {GalleryPage} from "../pages/GalleryPage.tsx";
import {AccountPage} from "../pages/AccountPage.tsx";
import {SandboxPage} from "../pages/SandboxPage.tsx";

type RouteConfig = ({ type: 'route' } & RouteProps) | ({ type: 'redirect' } & RedirectProps)

export const routes: RouteConfig[] = [
    {type: 'redirect', path: '/', to: '/gallery'},
    {type: 'route', path: '/gallery', component: GalleryPage},
    {type: 'route', path: '/account', component: AccountPage},
    {type: 'route', path: '/sandbox', component: SandboxPage},
    // <Route path="/post/:id" component={UserDetailPage}/>
] as const;