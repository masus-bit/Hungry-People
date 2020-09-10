import React, { Fragment } from "react";
import { MainPage } from "../main-page/main-page.jsx";
import { PageHeader } from "../header/header.jsx";
import { Switch, Route } from "react-router-dom";
import Menu from "../menu-page/menu-page.jsx";
import {Booking} from '../book-table/book-table.jsx'
export const App = () => {
  return (
    <Fragment>
      <PageHeader />
      <Switch>
          <Route path="/" exact component={()=><MainPage />}/>
        <Route path="/menu" exact component={()=><Menu/>}/>
        <Route path="/booking" exact component={()=><Booking />}/>
      </Switch>
      </Fragment>
  );
};
