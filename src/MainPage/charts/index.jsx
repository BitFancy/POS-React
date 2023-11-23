import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Apexcharts from "./apexcharts";
import ChartJs from "./chartjs";
import Morrischart from "./morrischart";
import Flotchart from "./flotcharts";

const ChartIndex = ({ match }) => (
  <Switch refresh={true}>    
    <Redirect exact from={`${match.url}/`} to={`${match.url}/chart-apex`} />    
    <Route path={`${match.url}/chart-apex`} component={Apexcharts} />
    <Route path={`${match.url}/chart-js`} component={ChartJs} />
    <Route path={`${match.url}/chart-morris`} component={Morrischart} />
    <Route path={`${match.url}/chart-flot`} component={Flotchart} />    
  </Switch>
);

export default ChartIndex;
