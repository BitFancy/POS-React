import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import CountryList from './CountryList'
import EditCountry from './EditCountry'
import EditState from './EditState'
import NewCountry from './NewCountry'
import NewState from './NewState'
import StateList from './StateList'

const PlacesIndex =({ match }) =>(
    <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/newcountry-places`} />
        <Route path={`${match.url}/newcountry-places`} component={NewCountry} />   
        <Route path={`${match.url}/countrylist-places`} component={CountryList} />       
        <Route path={`${match.url}/editcountry-places`} component={EditCountry} />       
        <Route path={`${match.url}/newstate-places`} component={NewState} />       
        <Route path={`${match.url}/statelist-places`} component={StateList} />       
        <Route path={`${match.url}/editstate-places`} component={EditState} />       

   </Switch>
)

export default PlacesIndex