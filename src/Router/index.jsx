import Dashboard from "../MainPage/Dashboard";
import Activities from "../MainPage/Activities";
import Product from "../MainPage/Product/index";
import Sales from "../MainPage/sales";
import Profile from "../MainPage/Profile/index";
import Purchase from "../MainPage/Purchase/index";
import Expense from "../MainPage/Expense/index";
import Quotation from "../MainPage/Quotation/index";
import Transfer from "../MainPage/Transfer/index";
import Return from "../MainPage/Return/index";
import People from "../MainPage/People/index";
import Places from "../MainPage/Places/index";
import Components from "../MainPage/Components/index";
import Elements from "../MainPage/elements";
import Charts from "../MainPage/charts";
import Icons from "../MainPage/icons";
import Forms from "../MainPage/forms";
import Tables from "../MainPage/tables";
import Application from "../MainPage/application";
import Report from "../MainPage/report";
import Users from "../MainPage/users";
import Settings from "../MainPage/settings";
import BlankPage from "../MainPage/BlankPage";
import HomeThree from "../MainPage/Home/home3";
import HomeFoure from "../MainPage/Home/home4";
import HomeTwo from "../MainPage/Home/home2";
import IndexOne from "../MainPage/Home/home1";

export default [
  {
    path: "dashboard",
    component: Dashboard,
  },
  {
    path: "activities",
    component: Activities,
  },
  {
    path: "product",
    component: Product,
  },
  {
    path: "profile",
    component: Profile,
  },
  {
    path: "purchase",
    component: Purchase,
  },
  {
    path: "expense",
    component: Expense,
  },
  {
    path: "quotation",
    component: Quotation,
  },
  {
    path: "transfer",
    component: Transfer,
  },
  {
    path: "return",
    component: Return,
  },
  {
    path: "people",
    component: People,
  },
  {
    path: "places",
    component: Places,
  },
  {
    path: "components",
    component: Components,
  },
  {
    path: "blankpage",
    component: BlankPage,
  },
  {
    path: "elements",
    component: Elements,
  },
  {
    path: "charts",
    component: Charts,
  },
  {
    path: "icons",
    component: Icons,
  },
  {
    path: "forms",
    component: Forms,
  },
  {
    path: "table",
    component: Tables,
  },
  {
    path: "application",
    component: Application,
  },
  {
    path: "report",
    component: Report,
  },
  {
    path: "users",
    component: Users,
  },
  {
    path: "settings",
    component: Settings,
  },
  {
    path: "Sales",
    component: Sales,
  },
  {
    path: "index-three",
    component: HomeThree,
  },
  {
    path: "index-four",
    component: HomeFoure,
  },
  {
    path: "index-two",
    component: HomeTwo,
  },
  {
    path: "index-one",
    component: IndexOne,
  },
];
