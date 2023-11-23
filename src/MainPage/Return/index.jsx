import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import SalesReturnList from './SalesReturnList'
import AddSalesReturn from './AddSalesReturn'
import EditSalesReturn from './EditSalesReturn'
import PurchaseReturnList from './PurchaseReturnList'
import AddPurchaseReturn from './AddPurchaseReturn'
import EditPurchaseReturn from './EditPurchaseReturn.jsx'

const ReturnIndex =({ match }) =>(
    <Switch>
         <Redirect exact from={`${match.url}/`} to={`${match.url}/salesreturnlist-return`} />
        <Route path={`${match.url}/salesreturnlist-return`} component={SalesReturnList} />
        <Route path={`${match.url}/addsalesreturn-return`} component={AddSalesReturn} />
        <Route path={`${match.url}/editsalesreturn-return`} component={EditSalesReturn} />
        <Route path={`${match.url}/purchasereturnlist-return`} component={PurchaseReturnList} />
        <Route path={`${match.url}/addpurchasereturn-return`} component={AddPurchaseReturn} />
        <Route path={`${match.url}/editpurchasereturn-return`} component={EditPurchaseReturn} />


    </Switch>
)

export default ReturnIndex