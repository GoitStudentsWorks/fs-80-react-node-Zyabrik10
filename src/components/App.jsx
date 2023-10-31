import { lazy } from 'react';
// import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { PrivateRoute } from '../hooks/PrivateRoute';
import { RestrictedRoute } from '../hooks/RestrictedRoute';
// import { refreshUser } from '../redux/auth/operations';
import { useAuth } from '../hooks';

import { Layout } from '../layout/layout';
import { Signin, Signup, Start } from 'pages';
// import { StartPages } from 'layout/StartPages/StartPages';

const HomePage = lazy(() => import('../pages/home/Home'));
const DrinksPage = lazy(() => import('../pages/drinks/Drinks'));
const AddDrinkPage = lazy(() => import('../pages/add-drink/AddDrinks'));
const MyDrinksPage = lazy(() => import('../pages/my-drinks/MyDrinks'));
const FavoritesPage = lazy(() => import('../pages/favorites/Favorites'));
const SingleDrinkPage = lazy(() => import('../pages/my-drinks/my-drink/Drink'));

export const App = () => {
  // const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isAuth = false

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return isRefreshing ? (
    <p>Loading...</p>
  ) : (
    <Routes>
      <Route
        path="/"
        element={<PrivateRoute redirectTo="/welcome" component={<Layout />} />}
      >
        <Route
          path="/home"
          element={
            <PrivateRoute redirectTo="/welcome" component={<HomePage />} />
          }
        />
        <Route
          path="/drinks"
          element={
            <PrivateRoute redirectTo="/welcome" component={<DrinksPage />} />
          }
        />
        <Route
          path="/add"
          element={
            <PrivateRoute redirectTo="/welcome" component={<AddDrinkPage />} />
          }
        />
        <Route
          path="/my"
          element={
            <PrivateRoute redirectTo="/welcome" component={<MyDrinksPage />} />
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute redirectTo="/welcome" component={<FavoritesPage />} />
          }
        />
        <Route
          path="/drink/:drinkId"
          element={
            <PrivateRoute
              redirectTo="/welcome"
              component={<SingleDrinkPage />}
            />
          }
        />
      </Route>

      <Route path="/welcome" element={<Start />} />
      <Route
        path="/signup"
        element={<RestrictedRoute redirectTo="/home" component={<Signup />} />}
      />
      <Route
        path="/signin"
        element={<RestrictedRoute redirectTo="/home" component={<Signin />} />}
      />
    </Routes>

  );
};

// Rabotaet
      // <Routes>
      //   <Route path='/' element={<Layout/>}>
      //     <Route index  path="/home" element={<HomePage/>} />
      //   </Route>
      // </Routes>
      // <Routes>
      //   <Route path="/welcome" element={<StartPages />}>
      //     <Route index element={ <StartPage/>} />
      //     <Route
      //       path="/welcome/signup"
      //       element={
      //         <RestrictedRoute redirectTo="/home" component={<SignupPage />} />
      //       }
      //     />
      //     <Route
      //       path="/welcome/signin"
      //       element={
      //         <RestrictedRoute redirectTo="/home" component={<SigninPage />} />
      //       }
      //     />
      //   </Route>
      // </Routes>
