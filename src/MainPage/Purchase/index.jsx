import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import AddPurchase from './AddPurchase';
import PurchaseList from './PurchaseList';
import ImportPurchase from './ImportPurchase';
import EditPurchase from './EditPurchase';

const PurchaseRoute = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/pruchaselist-purchase`} />
        <Route path={`${match.url}/purchaselist-purchase`} component={PurchaseList} />
        <Route path={`${match.url}/addpurchase-purchase`} component={AddPurchase} />
        <Route path={`${match.url}/importpurchase-purchase`} component={ImportPurchase} />
        <Route path={`${match.url}/editpurchase-purchase`} component={EditPurchase} />


    </Switch>
)

export default PurchaseRoute;