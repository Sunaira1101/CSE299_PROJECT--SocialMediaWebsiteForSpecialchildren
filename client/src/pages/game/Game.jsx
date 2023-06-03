import "./game.css"
import React, { useState } from 'react'

const Game = () => {
    const [gamecards] = useState([
        {
            title: 'Parachute Games',
            pic: 'https://o.remove.bg/downloads/b09e6bbe-18f4-43e2-b182-fc7a93132651/41Tn14acXdL._SL250_-removebg-preview.png',
            text: 'Specially designed parachutes can be bought in different sizes to play parachute games. Reinforced handles around the edge of the parachute make it easier for participants with poor grip or hand control to hold on to. Try these games with the children standing in a circle holding the parachute by the outside edges: 1. Making waves - An adult directs the children to make small or large waves by moving their arms up and down.  Slow to start then faster and then slow.  Introduce a story about the sea or the wind on a stormy night. 2.Rolling the ball - An adult places a ball on the parachute.  The children move the parachute up and down to stop the ball falling through the centre hole.  Vary it with different sized balls.'
        },
        {
            title: 'Trust Game',
            pic: 'https://o.remove.bg/downloads/cebe0afa-e251-4e28-a41c-202bd09e3993/The-trust-fall-tests-how-much-confidence-friends-have-in-each-other-removebg-preview.png',
            text: 'Each child works with a partner.  One child is blindfolded.  The other child gently leads them and gives verbal instructions to avoid obstacles. Leading child then swaps over with the "blind" child. In this inclusive activity, children with partners take turns being blindfolded, relying on their partner guidance to navigate obstacles. The role reversal helps develop empathy and communication skills. They can also explore the role of a guide dog, deepening their understanding of support animals and promoting empathy towards visually impaired individuals.'
        },
        {
            title: 'Feed the Woozle',
            pic: 'https://o.remove.bg/downloads/6de3fd75-0492-4498-a696-09b71410f9fc/51N0e8UideL._SL250_-removebg-preview.png',
            text: 'Feed The Woozle is a cooperative game where children have to work together to get 12 silly snacks into the Woozle’s mouth.  It also promotes fine and gross motor skills. The game can be played at 3 different levels.  It has won 4 awards in the USA. Peaceable Kingdom the company who created Feed the Woozle also offer other cooperative board games.'
        }
        
    ])
  
  
  
  
  return (
    <div className="game">
      <section className="gsec">
        <div className="gamecontainer">
            <h1 className="gamename">Games For Your Child</h1>
            <button className="addgame">Add Games</button>
            <div className="gamecards">
                {
                    gamecards.map((gcard, i) => (

                        <div key={i} className="gamecard">
                            <h3 className="gamecardname">{gcard.title}</h3>
                            <img className="gpiccard" src={gcard.pic} alt="" />
                            <span className="gameptext">{gcard.text}</span>
                            {/* <button className="gamecardbtn">Explore</button> */}
                        </div>

                    ))
                }
                
            </div>

        </div>
      </section>
    </div>
  )
}

export default Game
