import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './Routes/Routes';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';
import { Fragment } from 'react';
function App() {
    return (
        <Routes>
            {publicRoutes.map((route, index) => {
                console.log(route.layout);
                let Layout = DefaultLayout;
                if (route.layout) {
                    Layout = route.layout;
                } else if (route.layout === null) {
                    Layout = Fragment;
                }
                const Page = route.component;
                return (
                    <Route
                        path={route.path}
                        key={index}
                        element={
                            <Layout>
                                <Page />
                            </Layout>
                        }
                    ></Route>
                );
            })}
        </Routes>
    );
}

export default App;
