import React from 'react';
import { WeaponList } from './WeaponList';
import { ShieldList } from './ShieldList';
import { ItemList } from './ItemList';




export const Character = (props) => {
    const { character, deleteCharacter, updateCharacterName } = props;

    
    


    return (
        <div className='card bg-secondary text-center p-0 m-3 border-light border-5'>
            
            
            <div className='card-body'>
                <h1>{character.name}</h1><br></br>
                
                <form>
                <h4>Add a new name</h4>
                <input
                    type='text'
                    placeholder='Character name'
                    
                    />
                <button className='btn btn-dark m-2 border border-light' type='submit' onClick={(e) => updateCharacterName(character.id)}>Change Character Name</button>
                </form><br></br>
                <h5><i>" {character.description} "</i></h5><br></br>

                <img src={character.image} alt="character"></img><br></br><br></br>

                <ul>
                    <h3>Stats: </h3>
                    {Object.entries(character.stats).map(([k, v]) => (
                        <li key={k}>{k} : {v}</li>
                    )
                    )}
                </ul><br></br>

                <button className='btn btn-danger m-2 border border-dark' type='submit' onClick={(e) => deleteCharacter(character.id)}>Roll New Class</button><br></br><br></br>
                {/* <WeaponList /><br></br>
                <ShieldList /><br></br>
                <div className='border border-light rounded-lg p-2'>
                <ItemList /><br></br>
                </div> */}

                 {/* Accordion code */}       
                <div className='accordion' id='itemsAccordion'>
                    <div className='card bg-secondary border-light rounded m-1'>
                        <div className='card-header' id='headingOne'>
                            <h2 className='mb-0'>
                                <button className='btn btn-link text-decoration-none text-dark font-weight-bold' type='button' data-toggle='collapse' data-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
                                <h3 className='font-weight-bold'>Weapon</h3>
                                </button>
                            </h2>
                        </div>

                        <div id='collapseOne' className='collapse show' aria-labelledby='headingOne' data-parent='#itemsAccordion'>
                            <div className='card-body'>
                                <WeaponList /><br></br>
                            </div>

                        </div>
                    </div><br></br>
                    <div class="card bg-secondary border-light rounded m-1">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed text-decoration-none text-dark font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <h3>Shield</h3>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#itemsAccordion">
                            <div class="card-body">
                            <ShieldList /><br></br>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-secondary border-light rounded m-1">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed text-decoration-none text-dark font-weight-bold" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <h3>Items</h3>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#itemsAccordion">
                            <div class="card-body">
                            <ItemList /><br></br>
                            </div>
                        </div>
                    </div>

                    
                    
                </div>
            </div>

        </div>
    )


}

