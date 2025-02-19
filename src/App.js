import {Routes, Route} from "react-router-dom"
import Container from "@mui/material/Container";
import {useDispatch, useSelector} from "react-redux";
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { fecthAuthMe, selectIsAuth } from "./redux/slices/auth";
import React from 'react'
function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  React.useEffect(()=>{
    dispatch(fecthAuthMe())
  }, [])
  return (
    <>
      <Header />
      <Container maxWidth="lg">
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/posts/:id" element={<FullPost />}/>
                <Route path="/add-post" element={<AddPost />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Registration />}/>
            </Routes>
      </Container>
    </>
  );
}

export default App;
