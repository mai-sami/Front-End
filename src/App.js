import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import HeaderStd from './Header/HeaderStd'
import Home from './student/Home'
import AppBare from './Header_home/AppBare'
import Login from './Login'
import ProfileStd from './Profiles/ProfileStd'
import HeaderTeac from './Header/HeaderTeac'
import HeaderManger from './Header/HeaderManger'
import HeaderParent from './Header/HeaderParent'
import AppBareParent from './Header_home/AppBareParent'
import MarkStd from './student/MarkStd'
import InsertStd from './manger/InsertStd'
import MarksManger from './manger/MarksManger'
import MainTeacher from './teacher/MainTeacher'
import AdvTeacher from './Ads/AdvTeacher'
import AdvManger from './Ads/AdvManger'
import InsertAdv from './Ads/InsertAdv'
import InsertAdvManger from "./Ads/InsertAdvMa+nger";
import AdvStd from './Ads/AdvStd'
import InsertSchool from './manger/InsertSchool'

import './App.css';
import SubjectsCalass from './teacher/SubjectsCalass'
import InsertTeac
  from './manger/InsertTeac'
import Material from './Materials/Material'
import HomWTeacher from './Materials/HomWTeacher'

import ProfileManger from './Profiles/ProfileManger'
import ProfileTeacher from './Profiles/ProfileTeacher'
import InnClass from './manger/InnClass'
import ProfileParent from './parent/ProfileParent'

import MaterialHrader from './Materials/MaterialHrader'
import Nav from "./components/nav/Nav";
import ChatBody from "./components/chatBody/ChatBody";
import Parts from './Parts'
import AppBareMan from './Header_home/AppBareMan'
import AppBareStd from './Header_home/AppBareStd'
import InsertHomeWork from './teacher/InsertHomeWork'
import Class from "./manger/Class";
import MainStd from './student/MainStd'
import TeacherManger from './manger/TeacherManger'
import Book from './manger/Book'

import Activity from './student/Activity'
import Classroom from './manger/Classroom'
import InsertActivity from './teacher/InsertActivity'
import InsertMaterials from './teacher/InsertMaterials'
import ActivityWork from './student/ActivityWork'
import Index from './Chating/Index'

 
function App() {
 
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/manger">
            <HeaderManger />
            <AppBareMan />
            <AdvManger />
          </Route>
          <Route path="/profiles_manger">
            <HeaderManger />
            <AppBareMan />
            <ProfileManger />
          </Route>
          <Route path="/teachers">
            <HeaderManger />
            <AppBareMan />
            <TeacherManger />
          </Route>
          <Route path="/chat">
            <HeaderStd />
            <AppBareStd />
               <div className="all__Chats  ">
                <Index />
               </div>
 
          </Route>
          <Route path="/insert">
            <HeaderManger />
            <AppBareMan />
          </Route>
          <Route path="/Class">
            <HeaderManger />
            <AppBareMan />
            <Class />
          </Route>
          <Route path="/marks_manger">
            <HeaderManger />
            <AppBareMan />
            <MarksManger />
          </Route>
          <Route path="/book">
            <HeaderManger />
            <AppBareMan />
            <Book />
          </Route>
          <Route path="/add_adv">
            <HeaderManger />
            <AppBareMan />
            <InsertAdvManger />
          </Route>
          <Route path="/Exams">
            <HeaderManger />
            <AppBareMan />
            <HomWTeacher />
          </Route>
          <Route path="/classroom">
            <HeaderManger />
            <AppBareMan />
            <Classroom />

          </Route>
          <Route path="/in_class">
            <HeaderManger />
            <AppBareMan />
            <InnClass />
          </Route>
          <Route path="/insert_std">
            <HeaderManger />
            <AppBareMan />
            <InsertStd />
          </Route>



          <Route path="/insert_teac">
            <HeaderManger />
            <AppBareMan />
            <InsertTeac />
          </Route>



          <Route path="/subject">
            <HeaderTeac />
            <AppBare />
            <SubjectsCalass />
            <AdvTeacher />
          </Route>
          <Route path="/Material">
            <HeaderTeac />
            <MaterialHrader />
            <Material />
          </Route>
          <Route path="/part">
            <HeaderTeac />
            <AppBare />
            <Parts />
          </Route>



          <Route exact path="/InsertMaterials">
            <HeaderTeac />
            < AppBare />
            <InsertMaterials />
          </Route>
          <Route exact path="/InsertActivity">
            <HeaderTeac />
            < AppBare />
            <InsertActivity />
          </Route>


          <Route path="/profile_Parent">
            <HeaderParent />
            <AppBareParent />
            <ProfileParent />
          </Route>
          <Route path="/parent">
            <HeaderParent />
            <AppBareParent />
          </Route>



          <Route path="/Exams_std">
            <HeaderStd />
            <AppBareStd />
          </Route>
          <Route path="/ActivityWork">
            <HeaderStd />
            <AppBareStd />
            <ActivityWork />
          </Route>

          <Route path="/profile">
            <HeaderStd />
            <AppBareStd />
            <ProfileStd />
          </Route>

          <Route path="/teacher">
            <HeaderTeac />
            < AppBare />
            <div className="app_teacher">
              <MainTeacher />
              <AdvTeacher />
            </div>
          </Route>
          <Route path="/Exam">
            <HeaderTeac />
            <AppBare />
          </Route>
          <Route path="/Profile_teacher">
            <HeaderTeac />
            <AppBare />
            <ProfileTeacher />
          </Route>

          <Route path="/add_advs">
            <HeaderTeac />
            <MaterialHrader />
            <InsertAdv />
          </Route>
          <Route path="/socail_teacher">
            <HeaderTeac />
            <MaterialHrader />
            <InsertHomeWork />

          </Route>

          <Route path="/task">
            <HeaderTeac />
            <MaterialHrader />
          </Route>
          <Route path="/mark_teacher">
            <HeaderTeac />
            <AppBare />
          </Route>

          <Route path="/Material_teac">
            <HeaderTeac />
            <AppBare />
            <SubjectsCalass />
          </Route>
          <Route path="/Exams_std_table">
            <HeaderStd />
            <AppBareStd />

          </Route>
          <Route path="/Social">
            <HeaderStd />
            <AppBareStd />
          </Route>
          <Route path="/homeWork_std">
            <HeaderStd />
            <AppBareStd />



          </Route>
          <Route path="/activity">
            <HeaderStd />
            <AppBareStd />
            <Activity />

          </Route>
          <Route path="/marks_std">
            <HeaderStd />
            <AppBareStd />
            <MarkStd />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/student">
            <HeaderStd />
            <AppBareStd />
            <Home />
            <AdvStd />
          </Route>
          <Route exact path="/Material_std">
            <HeaderStd />
            <AppBareStd />
            <MainStd />
          </Route>

          <Route exact path="/">
            <InsertSchool />
          </Route>
        </Switch>
      </div>
    </Router>



  );
}

export default App;
