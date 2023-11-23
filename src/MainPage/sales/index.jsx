import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Saleslist from './saleslist'
import Addsales from './addsales'
import Editsales from './editsales'
import Saledetails from './saledetails'
import SalesReturnList from '../Return/SalesReturnList'
import AddSalesReturn from '../Return/AddSalesReturn'







const SalesIndex = ({ match}) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/generalsettings`} />
        <Route path={`${match.url}/saleslist`} component={Saleslist} />                                                                                                                                                                                        
        <Route path={`${match.url}/add-sales`} component={Addsales} />                                                                                                                                                                                        
        <Route path={`${match.url}/edit-sales`} component={Editsales} />                                                                                                                                                                                        
        <Route path={`${match.url}/sales-details`} component={Saledetails} />     
        <Route path={`${match.url}/salesreturnlist-return`} component={SalesReturnList} />
        <Route path={`${match.url}/addsalesreturn-return`} component={AddSalesReturn} />                                                                                                                                                                                                                                                                                                                                                                   
                                                                                           
                                                                                                  
        
    </Switch>
)

export default SalesIndex