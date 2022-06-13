import React from 'react';

function Home() {

    return (
        <div className="container">
            
            <div className='card bg-dark border border-light'>
                <img src='https://wallpaper.dog/large/20541648.jpg' className='card-img-top' alt='eldenrings'></img><br></br>
                <div className='card-body bg-dark'>
                    <h1 className='card-title text-center text-danger'>Welcome to the Elden Ring team creator app</h1>
                    <h2 className='card-title text-center text-danger'>How to Use: </h2><br></br><br></br>
                    <ul className='card-text'>
                        <li className='card-text text-warning h4 font-weight-bold'>A team of 3 different character classes will randomly be chosen for you on the characters page.</li>
                        <li className='card-text text-warning h4 font-weight-bold'>Each Character can be Re-rolled into a new class by selecting the 'Roll New Class" button</li>
                        <li className='card-text text-warning h4 font-weight-bold'>Change the character name into your unique choice with the character name input field</li>
                        <li className='card-text text-warning h4 font-weight-bold'>Each Character comes equipped with a random weapon, random shield, and 3 random items</li>
                        <li className='card-text text-warning h4 font-weight-bold'>Re-Roll until you find your perfect trio to fight the darkness of the Lands Between! </li>
                    </ul><br></br>
                    
                </div>
            </div><br></br><br></br>
            <h6 className='text-light text-left'>&copy; Derin DeNio 2022</h6>
        </div>
    )

    }
export default Home;