import React from "react";

export const Projects = () => {
    const dates ={
        holidayDate: 'March 2022',
        sudokuDate : 'February 2020'
    }
    return(
        <div>
        <h2>Holiday App -Android mobile application - {dates.holidayDate}</h2>

        <p>
            Sample android app using modern native development toolkits.<br></br>
            Utilizes Jetpack Compose, Retrofit, ViewModel and LiveData libraries. Uses MVVM
            architecture (Model-View-ViewModel).<br></br>
            Fetches holiday data from a free api, and displays on screen.
        </p>

        <h2>Sudoku - {dates.sudokuDate}</h2>
        
            <p>
            Demonstrates file processing.<br></br>
            Enter a sudoku puzzle character that is displayed in a two-dimensional array.<br></br>
            Language used: C++
            </p>
        <hr></hr>
        </div>
    )
}

export default Projects