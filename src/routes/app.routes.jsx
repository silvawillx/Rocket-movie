import { Routes, Route, Navigate } from 'react-router-dom'

import { MovieDetails } from '../pages/MovieDetails'
import { CreateMovie } from '../pages/CreateMovie'
import { Profile } from '../pages/Profile'
import { Home } from '../pages/Home'

export function AppRoutes(){
    const user = localStorage.getItem("@rocketmovies:user")
    
    return(
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
            <Route path="/newmovie" element={<CreateMovie></CreateMovie>}></Route>
            <Route path="/moviedetails/:id" element={<MovieDetails></MovieDetails>}></Route>

            { !user && <Route path="*" element={<Navigate to="/"></Navigate>} ></Route> } 
        </Routes>
    )
}
