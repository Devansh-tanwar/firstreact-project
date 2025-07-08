import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";



import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
// import { useState } from "react";
// import PostListProvider from "./store/post-list-store"


function App(){
  const [home,sethome ]= useState("Home");
  return ( 
    <>
    <PostListProvider>
    <Header/>
   
    <Sidebar
    home={home}
    sethome={sethome}/>
     {home === "Home" && <PostList></PostList>}
         {home!=="Home" &&
           <CreatePost></CreatePost>}
          
    
    <Footer/>
    </PostListProvider>
    </>
  );

}
export default App;